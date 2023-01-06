<?php

namespace App\Http\Controllers;

use App\Models\A1_User;
use Illuminate\Http\Request;

class A3 extends Controller
{
    public function login_injection(Request $request){
        $fields = $request->validate([
            'login'=> 'required|string',
            'password' => 'required|string',
        ]);
        
        if($fields['password']=="'OR 1=1;-- "){
            $user = A1_User::whereRaw("name='".$fields['login']."'")
            ->whereRaw("password='".$fields['password']."'");
            
            return $user->first();
        }
       return ['Bad Request'];
    }


    
    public function login_injection_free(Request $request){
        $fields = $request->validate([
            'login'=> 'required|string',
            'password' => 'required|string',
        ]);
        
        $user = A1_User::where("name", "=", $fields['login'])
        ->where("password", "=",$fields['password']);
            
        return $user->first();
        
    }
}
