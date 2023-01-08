<?php

namespace App\Http\Controllers;
use App\Http\Controllers\A9;
use App\Models\A2_Password_Dictionary;
use App\Models\A2_User;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class A2 extends Controller
{
    
    public function getUsers(Request $request)
    {
        try{
            $fields = $request->validate([
                'encryption_type' => 'required|integer',
            ]);
        } catch (ValidationException $e) {
            return response()->json(A9::validationLog($e, $request, "A2::getUsers"), 400);
        }

        $user = A2_User::select('id', 'login', 'e-mail as email', 'passwd', 'salt')
            ->where('encryption_type',$fields['encryption_type'])
            ->get();

        return $user;
    }

    public function logIn(Request $request)
    {
        try{
            $fields = $request->validate([
                'login' => 'required|string',
                'passwd' => 'required|string',
                'encryption_type' => 'required|integer',
            ]);
        } catch (ValidationException $e) {
                    return response()->json(A9::validationLog($e, $request, "A2::logIn"), 400);
                }
       
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
            return response()->json(A9::auditLog($request, "A2::logIn", "success","successful login"), 200);
        else
            return response()->json(A9::auditLog($request, "A2::logIn", "failed login attempt","user not authenticated"), 200);
    }


    public function getDictionary(){
        return A2_Password_Dictionary::select('passwd', 'hash')->get();
    }
}