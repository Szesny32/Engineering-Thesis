<?php

namespace App\Http\Controllers;

use App\Models\A8_Keys;
use App\Models\A8_SignedResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;

class A8 extends Controller
{
    public function getKeys(){
        $keys = A8_Keys::select('public_key', 'private_key')
        ->get();
        return $keys;
    }

    public function generateNewKeyPair(){
        $options = [
            "private_key_bits" => 2048,
            "private_key_type" => OPENSSL_KEYTYPE_RSA,
        ];
        $privateKey = openssl_pkey_new($options);
        
        //tłumaczenie klucza prywatnego na tekst
        openssl_pkey_export($privateKey, $privateKeyString);
        
        $details = openssl_pkey_get_details($privateKey);
        $publicKey = $details["key"];


        A8_Keys::insert([
            'public_key' => $publicKey,
            'private_key' => $privateKeyString
        ]);
    }

    public function sign(Request $request){
        $fields = $request->validate([
            'resource'=> 'required|string',
            'key_id'=> 'required|integer'
        ]);
        //return mb_check_encoding($fields['resource'], 'UTF-8');

        $key = A8_Keys::where("id",$fields['key_id'])->first();
        if($key == null)
            return ["message"=>"Key not found"];   



        openssl_sign( $fields['resource'], $signature, $key['private_key']);

        if ($signature === false) {
            $error = error_get_last();
            return $error['message'];
        }

        A8_SignedResource::insert([
            'keys_id' =>  $key['id'],
            'resource' => $fields['resource'],
            'sign' => $signature
        ]);

        return $key['public_key'];

    }


}
