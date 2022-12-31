<?php

namespace App\Http\Controllers;

use App\Models\A2_Password_Dictionary;
use App\Models\A2_User;
use Illuminate\Http\Request;

class A2 extends Controller
{
    
    public function getUsers(Request $request)
    {
        $fields = $request->validate([
            'encryption_type' => 'required|integer',
        ]);

        $user = A2_User::select('id', 'login', 'e-mail as email', 'passwd', 'salt')
            ->where('encryption_type',$fields['encryption_type'])
            ->get();

        return $user;
    }

    public function logIn(Request $request)
    {

        $fields = $request->validate([
            'login' => 'required|string',
            'passwd' => 'required|string',
            'encryption_type' => 'required|integer',
        ]);

       
        if($fields ['encryption_type'] == 0){
            $password = $fields ['passwd'];

        } elseif($fields ['encryption_type'] == 1){
            $password = base64_encode($fields ['passwd']);

        } elseif($fields ['encryption_type'] == 2){
            $password = hash('sha256', $fields ['passwd']);
        } else{

            $salt = A2_User::select('salt')->where('login', $fields['login'])->first();
            $password = hash('sha256', $fields ['passwd'].$salt['salt']);
        }

        $user = A2_User::where('login', $fields['login'])
        ->where('passwd', $password)
        ->first();

        if($user!=null)
            return ["message" => 'Welcome '.$user['login']];
        else
            return ["message" => 'Incorrect'];
    }


    public function getDictionary(){
        return A2_Password_Dictionary::select('passwd', 'hash')->get();
    }
}