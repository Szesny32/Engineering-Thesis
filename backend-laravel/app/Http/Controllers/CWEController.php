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

    public function cwe89_problem(Request $request){
        $fields = $request->validate([
            'login'=> 'required|string',
            'password' => 'required|string',
        ]);
        
        if($fields['password']=="'OR 1=1;-- "){
            $user = User::whereRaw("name='".$fields['login']."'")
            ->whereRaw("password='".$fields['password']."'");
            
            return $user->first();
        }
       return ['Bad Request'];
    }
    public function cwe89_solution(Request $request){
        $fields = $request->validate([
            'login'=> 'required|string',
            'password' => 'required|string',
        ]);
        
        $user = User::where("name", "=", $fields['login'])
        ->where("password", "=",$fields['password']);
            
        return $user->first();
        
    }


    public function cwe331(Request $request){
        $fields = $request->validate([
            'userID' => 'required|numeric',
        ]);
        srand($fields['userID']);
        return [rand()];
        
    }

    public function cwe331_2(){
        session()->regenerate();
        return [session()->getId()];
        
    }

  


}
