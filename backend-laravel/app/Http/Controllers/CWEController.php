<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\CWE;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use \Illuminate\Database\QueryException;
Use Exception;
use Illuminate\Http\Response;

class CWEController extends Controller
{
    public function index()
    {
        return CWE::orderBy('id')->get();
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

    public function cwe_209(){
        $host = "127.0.0.1";
        $user = "root";
        $password = "BCtJ?TkF8gRCxQsY";
        $db = "database";

        //$driver = new \mysqli_driver();
        //$driver->report_mode = MYSQLI_REPORT_STRICT | MYSQLI_REPORT_ERROR;
        mysqli_report(MYSQLI_REPORT_STRICT | MYSQLI_REPORT_ALL);
        try {
            $connection = @new \mysqli($host, $user, $password, $db);
        }
        catch (\Exception $e) {
            $log = $e->getTrace()[0];
            $error =    
                    "Fatal error: Uncaught_sql_exception: ".$e->getMessage()
                    ." in ".$log['file'].":".$log['line']
                    ." Stack trace: #0 ".$log['file']."(".$log['line']."): "
                    .$log['class'].$log['type'].$log['function']
                    ."('".$log['args'][0]."', '".$log['args'][1]."', '".$log['args'][2]."', '".$log['args'][3]."')";
            return [$error];
        }

        return [0];
    }

    public function CWE614(){
        $minutes = 1;
        $response = new Response('Set Cookie');
        $response->withCookie(cookie('name', 'MyValue', $minutes));
        return $response;


        /*The Secure flag is used to declare that the cookie may only be transmitted using a secure connection (SSL/HTTPS).
         If this cookie is set, the browser will never send the cookie if the connection is HTTP.
    */
    
    }

public function test(Request $request){

    $fields = $request->validate([
        'username' => 'required|string',
    ]);
        $username = $fields['username'];

    return '<div class="header"> Welcome, ' . $username . '</div>';
}





}
