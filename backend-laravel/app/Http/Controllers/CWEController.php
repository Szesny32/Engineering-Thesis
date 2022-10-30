<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CWE;

class CWEController extends Controller
{
    public function index(){
        return CWE::all();
    }


    public function cwe22(Request $request){
        $filename = $request->filename;
        if($filename=="user-manual.txt")
            return response()->download(storage_path('public-data/user-manual.txt'));
        elseif($filename=="../secret.txt")
            return response()->download(storage_path('public-data/../secret.txt'));

    }
}