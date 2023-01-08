<?php

namespace App\Http\Controllers;
use App\Http\Controllers\A9;
use App\Models\A1_Session;
use App\Models\A1_User;
use App\Models\Vulnerability;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Validation\ValidationException;

class A1 extends BaseController
{
    public function changePasswd_vuln(Request $request)
    {
        try {
            $fields = $request->validate([
                'id' => 'required|integer',
                'passwd' => 'required|string',
                'passwd_confirm' => 'required|string',
            ]);
        } catch (ValidationException $e) {
            return response()->json(A9::validationLog($e, $request, "A1::changePasswd_vuln"), 400);
        }


        if ($fields['passwd'] != $fields['passwd_confirm'])
            return response()->json(A9::auditLog($request, "A1::changePasswd_vuln", "Passwords are not the same",""), 200);

        $user = A1_User::where('id', $fields['id'])
            ->where('passwd', $fields['passwd'])->first();

        if ($user != null)
            return response()->json(A9::auditLog($request, "A1::changePasswd_vuln", "Password is the same as the previous one",""), 200);

        $user = A1_User::where('id', $fields['id'])
            ->update(['passwd' => $fields['passwd']]);

        if ($user == null)
            return response()->json(A9::auditLog($request, "A1::changePasswd_vuln", "User not found","There is no user with this id"), 200);
        
        return response()->json(A9::auditLog($request, "A1::changePasswd_vuln", "success",'Password for user id = ' . $fields['id'] . ' was successfully changed.'), 200);
    }


    public function changePasswd(Request $request)
    {
        try{
            $fields = $request->validate([
                'id' => 'required|integer',
                'sessid' => 'required|string|min:64|max:64',
                'passwd' => 'required|string',
                'passwd_confirm' => 'required|string',
            ]);
        } catch (ValidationException $e) {
            return response()->json(A9::validationLog($e, $request, "A1::changePasswd"), 400);
        }

        $currentTimestamp = Carbon::now()->setTimezone('Europe/Warsaw')->toDateTimeString();
        $authorization = A1_Session::where('sessid', $fields['sessid'])
            ->where('user_id', $fields['id'])
            ->where('expire_at', '>', $currentTimestamp)
            ->first();

        if ($authorization == null) {
            return response()->json(A9::auditLog($request, "A1::changePasswd", "Authorization not granted","User has no privileges or his session has expired"), 200);
        } else {

            if ($fields['passwd'] != $fields['passwd_confirm'])
                return response()->json(A9::auditLog($request, "A1::changePasswd", "Passwords are not the same",""), 200);

            $user = A1_User::where('id', $fields['id'])
                ->where('passwd', $fields['passwd'])->first();
            if ($user != null)
            return response()->json(A9::auditLog($request, "A1::changePasswd", "Password is the same as the previous one",""), 200);

            $user = A1_User::where('id', $fields['id'])
                ->update(['passwd' => $fields['passwd']]);
            if ($user == null)
                return response()->json(A9::auditLog($request, "A1::changePasswd", "User not found","There is no user with this id"), 200);

            return response()->json(A9::auditLog($request, "A1::changePasswd", "success",'Password for user id = ' . $fields['id'] . ' was successfully changed.'), 200);
        }
    }

    public function getUser(Request $request)
    {
        try{
            $fields = $request->validate([
                'id' => 'required|integer',
            ]);
        } catch (ValidationException $e) {
            return response()->json(A9::validationLog($e, $request, "A1::getUser"), 400);
        }
        $user = A1_User::select('a1__users.id', 'login', 'e-mail as email', 'sessid', 'expire_at')
            ->join('a1__sessions', 'a1__users.id', '=', 'a1__sessions.user_id')
            ->where('a1__users.id', $fields['id'])
            ->first();
        return $user;
    }


    public function getUsers()
    {
        $user = A1_User::select('id', 'login', 'e-mail as email', 'passwd')->get();
        return $user;
    }

    public function resfreshSession(Request $request)
    {
        try{
            $fields = $request->validate([
                'id' => 'required|integer',
            ]);
        } catch (ValidationException $e) {
            return response()->json(A9::validationLog($e, $request, "A1::resfreshSession"), 400);
        }

        $currentTimestamp = Carbon::now()->addMinutes(15)->setTimezone('Europe/Warsaw')->toDateTimeString();
        A1_Session::where('id', 1)
            ->update(['expire_at' => $currentTimestamp]);
        
            A9::auditLog($request, "A1::resfreshSession", "success",'Session has been refreshed');
        
            $user = A1_User::select('a1__users.id', 'login', 'e-mail as email', 'sessid', 'expire_at')
            ->join('a1__sessions', 'a1__users.id', '=', 'a1__sessions.user_id')
            ->where('a1__users.id', $fields['id'])
            ->first();
        return $user;
    }

    public function expireSession(Request $request)
    {
        try{
            $fields = $request->validate([
                'id' => 'required|integer',
            ]);
        } catch (ValidationException $e) {
            return response()->json(A9::validationLog($e, $request, "A1::expireSession"), 400);
        }

        $currentTimestamp = Carbon::now()->subMinutes(5)->setTimezone('Europe/Warsaw')->toDateTimeString();
        A1_Session::where('id', 1)
            ->update(['expire_at' => $currentTimestamp]);

        A9::auditLog($request, "A1::expireSession", "success",'Session has been exhausted');

        $user = A1_User::select('a1__users.id', 'login', 'e-mail as email', 'sessid', 'expire_at')
            ->join('a1__sessions', 'a1__users.id', '=', 'a1__sessions.user_id')
            ->where('a1__users.id', $fields['id'])
            ->first();
        return $user;
    }
}
