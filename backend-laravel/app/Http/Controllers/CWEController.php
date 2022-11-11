<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\CWE;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class CWEController extends Controller
{
    public function index()
    {
        return CWE::all();
    }


    public function cwe22(Request $request)
    {
        $filename = $request->filename;
        if($filename=="user-manual")
             return response()->download(storage_path('public-data/user-manual.txt'));
        elseif($filename=="../etc/passwd")
             return response()->download(storage_path('public-data/../etc/passwd.txt'));

    }

    public function cwe89(Request $request){
        $fields = $request->validate([
            'login'=> 'required|string',
            'password' => 'required|string',
        ]);
        
        $user = User::whereRaw("name='".$fields['login']."'")
        ->whereRaw("password='".$fields['password']."'")
   ;
        
        return $user->first();

    }
}
