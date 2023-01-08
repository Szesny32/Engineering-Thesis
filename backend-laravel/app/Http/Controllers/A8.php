<?php

namespace App\Http\Controllers;
use App\Http\Controllers\A9;
use App\Models\A8_Keys;
use App\Models\A8_SignedResource;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Validation\ValidationException;

class A8 extends Controller
{
    public function getKeys(){
        $keys = A8_Keys::get();
        return $keys;
    }

    public function generateNewKeyPair(Request $request){
        try{
            $options = [
                "private_key_bits" => 2048,
                "private_key_type" => OPENSSL_KEYTYPE_RSA,
            ];
            $privateKey = openssl_pkey_new($options);
            
            openssl_pkey_export($privateKey, $privateKeyString);
            $details = openssl_pkey_get_details($privateKey);
            $publicKey = $details["key"];
        } catch (Exception $e){
            return response()->json(A9::exceptionLog($e, $request,"A8::generateNewKeyPair", "Error during key generation"), 400);
        }

        A8_Keys::insert([
            'public_key' => $publicKey,
            'private_key' => $privateKeyString
        ]);

        return response()->json(A9::auditLog($request, "A8::generateNewKeyPair", "success","A new key has been generated"), 200);
    }

    public function sign(Request $request){
        
        try{
            $fields = $request->validate([
                'resource'=> 'required|string',
                'key_id'=> 'required|integer'
            ]);
        } catch (ValidationException $e) {
            return response()->json(A9::validationLog($e, $request, "A8::sign"), 400);
        }

        //return mb_check_encoding($fields['resource'], 'UTF-8');
        $key = A8_Keys::where("id",$fields['key_id'])->first();
        if($key == null)
            return response()->json(A9::auditLog($request, "A8::sign", "key not found","no key with id = ".$fields['key_id']." found"), 200);

        openssl_sign( $fields['resource'], $signature, $key['private_key']);
        
        A8_SignedResource::insert([
            'keys_id' =>  $key['id'],
            'resource' => $fields['resource'],
            'signature' => base64_encode($signature)
        ]);

        A9::auditLog($request, "A8::sign", "success","signature generated");
        return [
            'resource' => $fields['resource'],
            'public_key'=> $key['public_key'], 
            'signature'=> base64_encode($signature)
        ];

    }

    public function checkSignature(Request $request){
        try{
            $fields = $request->validate([
                'resource'=> 'required|string',
                'signature'=> 'required|string',
                'public_key'=> 'required|string'
            ]);
        } catch (ValidationException $e) {
            return response()->json(A9::validationLog($e, $request, "A8::checkSignature"), 400);
        }

        $signature = base64_decode($fields['signature']);
        if( openssl_verify($fields['resource'], $signature, $fields['public_key'])){
            A9::auditLog($request, "A8::checkSignature", "success","The signature is correct");
            return [ 'signatureIsValid' => true];
        } else{
            A9::auditLog($request, "A8::checkSignature", "signature is not valid","");
            return [ 'signatureIsValid' => false];
        }
    }
}
