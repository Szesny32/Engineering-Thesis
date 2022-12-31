<?php

namespace App\Http\Controllers;

use App\Models\A1_Session;
use App\Models\A1_User;
use App\Models\A2_Password_Dictionary;
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




    public function dictionary(){

        $input = file_get_contents('C:\Users\Szesny\Desktop\Praca inżynierska\Engineering-Thesis\frontend-angular\src\assets\txt\commonPasswd.txt');
        $passwords = explode("\n", $input);
        $passwords = array_map('trim', $passwords);

        // Create an array to store the data for each pair
        $data = [];
        
        // Create a SHA-256 hash for each password
        foreach ($passwords as $password) {
           
          $hash = hash('sha256', $password);
          $data[] = [
            'passwd' => $password,
            'hash' => $hash,
          ];
          //return $data;
        }
        A2_Password_Dictionary::insert($data);
    }

    // // Load the strings from the input file
    // $input = file_get_contents('C:\Users\Szesny\Desktop\Praca inżynierska\Engineering-Thesis\frontend-angular\src\assets\txt\commonPasswd.txt');
    
    // // Split the input into an array of strings
    // $strings = explode("\n", $input);
    
    // // Create an array to store the hashes
    // $hashes = [];
    
    // // Create a SHA-256 hash for each string
    // foreach ($strings as $string) {
    //   $hashes[] = hash('sha256', $string);
    // }
    
    // // Concatenate the hashes into a single string
    // $output = implode("\n", $hashes);
    
    // // Write the output to the output file
    // file_put_contents('C:\Users\Szesny\Desktop\Praca inżynierska\Engineering-Thesis\frontend-angular\src\assets\txt\commonPasswd2.txt', $output);
    




}
