<?php

namespace App\Http\Controllers;

use App\Models\A1_Session;
use App\Models\A1_User;
use App\Models\Vulnerability;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Carbon\Carbon;

class Controller extends BaseController
{

    public function index()
    {
        return Vulnerability::orderBy('id')->get();
    }


    //A1
    public function changePasswd_vuln(Request $request){
        
        $fields = $request->validate([
            'id' => 'required|integer',
            'passwd' => 'required|string',
            'passwd_confirm' => 'required|string',
        ]);

        if($fields['passwd'] != $fields['passwd_confirm'])
            return ["message" => 'Set passwords are not the same!'];

        $user = A1_User::where('id', $fields['id'])
        ->where('passwd', $fields['passwd'])->first();

        if($user != null)
            return ["message" => 'Please set another password!'];


        $user = A1_User::where('id', $fields['id'])
            ->update(['passwd' => $fields['passwd']]);
        if($user == null)
            return ["message" => 'User not found!'];
        
        return ["message" => 'Password for user id = '.$fields['id'].' was successfully changed.'];
          
    }
    

    public function changePasswd(Request $request){

        $fields = $request->validate([
            'id' => 'required|integer',
            'sessid' => 'required|string',
            'passwd' => 'required|string',
            'passwd_confirm' => 'required|string',
        ]);

    
        $currentTimestamp = Carbon::now()->setTimezone('Europe/Warsaw')->toDateTimeString();
        $authorization = A1_Session::where('sessid', $fields['sessid'])
            ->where('user_id',$fields['id'])
            ->whereDate('expire_at','>', $currentTimestamp)
            ->first();


            $data = A1_Session::select('expire_at')->where('sessid', $fields['sessid'])
            ->where('user_id',$fields['id'])
            ->first();

         if($authorization == null){
            return ["message" => 'You do not have permissions or your session has expired!'];

         } else{

            //Passwords are not the same
            if($fields['passwd'] != $fields['passwd_confirm'])
                return ["message" => 'Set passwords are not the same!'];

            //Attempt to change the password to the same
            $user = A1_User::where('id', $fields['id'])
            ->where('passwd', $fields['passwd'])->first();
            if($user != null)
                return ["message" => 'Please set another password!'];
       
            //There is no such user ?????????
            $user = A1_User::where('id', $fields['id'])
                ->update(['passwd' => $fields['passwd']]);
            if($user == null)
                return ["message" => 'User not found!'];
            
            //Successful   
            return ["message" => 'Password for user id = '.$fields['id'].' was successfully changed.'];

         }
         
            




          


    }


    public function getUser(){
        $user = A1_User::select('login', 'e-mail as email', 'sessid')
        ->join('a1__sessions', 'a1__users.id', '=', 'a1__sessions.user_id')
        ->where('a1__users.id', 1)
        ->first();

        return $user;
    }


}
