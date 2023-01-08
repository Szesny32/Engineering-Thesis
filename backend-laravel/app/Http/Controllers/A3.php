<?php

namespace App\Http\Controllers;
use App\Http\Controllers\A9;
use App\Models\A3_User;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class A3 extends Controller
{


    public function getUsers()
    {
        $users = A3_User::select('id', 'login', 'e-mail as email', 'passwd')->get();
        return $users;
    }

    public function login_injection(Request $request){
        try{
            $fields = $request->validate([
                'login'=> 'required|string',
                'password' => 'required|string',
            ]);
        } catch (ValidationException $e) {
            return response()->json(A9::validationLog($e, $request, "A3::login_injection"), 400);
        }

        if($fields['password']!="'OR 1=1;-- "){
            A9::auditLog($request, "A3::login_injection", "illegal move","user tried something else");
            return null;
        }
        
        $user = A3_User::select('id', 'login', 'e-mail as email', 'passwd')
        ->whereRaw("login='".$fields['login']."'")
        ->whereRaw("passwd='".$fields['password']."'")->first();
        if($user)
            A9::auditLog($request, "A3::login_injection", "success","successful login");
        else
            A9::auditLog($request, "A3::login_injection", "failed login attempt","user not authenticated");
        return $user;
    }
    
    public function login_injection_free(Request $request){
        try{
            $fields = $request->validate([
                'login'=> 'required|string',
                'password' => 'required|string',
            ]);
        } catch (ValidationException $e) {
            return response()->json(A9::validationLog($e, $request, "A3::login_injection_free"), 400);
        }

        $user = A3_User::select('id', 'login', 'e-mail as email', 'passwd')
        ->where("login", "=", $fields['login'])
        ->where("passwd", "=",$fields['password'])->first();
        if($user)
            A9::auditLog($request, "A3::login_injection_free", "success","successful login");
        else
            A9::auditLog($request, "A3::login_injection_free", "failed login attempt","user not authenticated");
        return $user;
    }
}


