<?php

namespace App\Http\Controllers;

use App\Models\A3_User;
use Illuminate\Http\Request;

class A3 extends Controller
{


    public function getUsers()
    {
        $users = A3_User::select('id', 'login', 'e-mail as email', 'passwd')
            ->get();

        return $users;
    }


    public function login_injection(Request $request){
        $fields = $request->validate([
            'login'=> 'required|string',
            'password' => 'required|string',
        ]);

        if($fields['password']=="'OR 1=1;-- "){

            $user = A3_User::select('id', 'login', 'e-mail as email', 'passwd')
            ->whereRaw("login='".$fields['login']."'")
            ->whereRaw("passwd='".$fields['password']."'");
            return $user->first();
        }
       return null;
    }
    
    public function login_injection_free(Request $request){
        $fields = $request->validate([
            'login'=> 'required|string',
            'password' => 'required|string',
        ]);
        
        $user = A3_User::select('id', 'login', 'e-mail as email', 'passwd')
        ->where("login", "=", $fields['login'])
        ->where("passwd", "=",$fields['password']);
        return $user->first();
    }


}


