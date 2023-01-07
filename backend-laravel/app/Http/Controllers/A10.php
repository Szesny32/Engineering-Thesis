<?php

namespace App\Http\Controllers;

use App\Models\A10_UserStorage;
use Illuminate\Http\Request;

class A10 extends Controller
{
    public function upload(Request $request){
        $fields = $request->validate([
            'filename' =>'required|string',
            'url'=> 'required|string',
            'user_id'=> 'required|integer'
        ]);

        return A10_UserStorage::insert([
            'filename' => $fields['filename'],
            'url' => $fields['url'],
            'user_id' => $fields['user_id'],
        ]);
    }



    public function getStorage(Request $request){
        $fields = $request->validate([
            'user_id'=> 'required|integer'
        ]);
        $storage = A10_UserStorage::select('id', 'url', 'filename')->where('user_id', $fields['user_id'])->get();
    
        return $storage;
    }


    public function downloadFile(Request $request){


     $fields = $request->validate([
            'id'=> 'required|integer'
    ]);


    $file = A10_UserStorage::select('url', 'filename')->where('id',$fields['id'])->first();
    // Pobierz URL z żądania

    // Pobierz nazwę pliku z URL
    $filename = $file->filename;

    $pathinfo = pathinfo($file->url);
    $extension = $pathinfo['extension'];

    // Pobierz zawartość pliku za pomocą metody file_get_contents()
    $fileContents = file_get_contents($file->url);

    // Ustaw nagłówki odpowiedzi, aby przeglądarka wiedziała, że ma pobrać plik
    $headers = [
        'Content-Type' => 'application/octet-stream',
        'Content-Disposition' => 'attachment; filename="' . $filename.".".$extension. '"',

    ];

    // Zwróć odpowiedź z zawartością pliku i nagłówkami
    return response()->make($fileContents, 200, $headers);
}

}
