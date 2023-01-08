<?php

namespace App\Http\Controllers;
use App\Http\Controllers\A9;
use App\Models\A10_UserStorage;
use App\Models\A9_ExceptionLog;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;

class A10 extends Controller 
{
    public function upload(Request $request){
        try {
        $fields = $request->validate([
            'filename' =>'required|string',
            'url'=> 'required|string',
            'user_id'=> 'required|integer'
        ]);
        } catch (ValidationException $e) {
            return response()->json(A9::validationLog($e, $request, "A10::upload"), 400);
        }

        if ($fields['url'] !='C:/Users/Szesny/Desktop/etc/passwd.txt') 
            return response()->json(A9::auditLog($request, "A10::upload", "illegal move","user tried something else"), 400);

        $filename = $fields['filename'];
        $pathinfo = pathinfo($filename);

        if (!array_key_exists('extension', $pathinfo)) 
            return response()->json(A9::auditLog($request, "A10::upload", "Unsupported file extension","array_key_exists('extension', \$pathinfo) is false"), 400);
     
        $extension = $pathinfo['extension'];
        if ($extension != 'jpg' && $extension != 'png' && $extension != 'txt') {
            return response()->json(A9::auditLog($request, "A10::upload", "Unsupported file extension","(\$extension != 'jpg' && \$extension != 'png' && \$extension != 'txt') "), 400);
        }

         A10_UserStorage::insert([
            'filename' => $fields['filename'],
            'url' => $fields['url'],
            'user_id' => $fields['user_id'],
        ]);

        return response()->json(A9::auditLog($request, "A10::upload", "success","successfully uploaded data"), 200);
    }





    public function upload_secure(Request $request){
        try{
            $fields = $request->validate([
                'filename' =>'required|string',
                'url'=> 'required|url',
                'user_id'=> 'required|integer'
            ]);
        } catch (ValidationException $e) {
             return response()->json(A9::validationLog($e, $request, "A10::upload_secure"), 400);
        }

  
        $filename = $fields['filename'];
        $pathinfo = pathinfo($filename);

        if (!array_key_exists('extension', $pathinfo)) 
            return response()->json(A9::auditLog($request, "A10::upload", "Unsupported file extension","array_key_exists('extension', \$pathinfo) is false"), 400);
     
        $extension = $pathinfo['extension'];
        if ($extension != 'jpg' && $extension != 'png' && $extension != 'txt') {
            return response()->json(A9::auditLog($request, "A10::upload", "Unsupported file extension","(\$extension != 'jpg' && \$extension != 'png' && \$extension != 'txt') "), 400);
        }

        A10_UserStorage::insert([
            'filename' => $fields['filename'],
            'url' => $fields['url'],
            'user_id' => $fields['user_id'],
        ]);

        return response()->json(A9::auditLog($request, "A10::upload_secure", "success","successfully uploaded data"), 200);
    }





    public function getStorage(Request $request){
        try{
            $fields = $request->validate([
                'user_id'=> 'required|integer'
            ]);
        } catch (ValidationException $e) {
            return response()->json(A9::validationLog($e, $request, "A10::getStorage"), 400);
        }

        A9::auditLog($request, "A10::getStorage", "success","user access to the drive ");
        return A10_UserStorage::select('id', 'url', 'filename')->where('user_id', $fields['user_id'])->get();
    }





    public function downloadFile(Request $request){

        try{
            $fields = $request->validate([
                    'id'=> 'required|integer'
            ]);
        } catch (ValidationException $e) {
            return response()->json(A9::validationLog($e, $request, "A10::downloadFile"), 400);
        }

        $file = A10_UserStorage::select('url', 'filename')->where('id',$fields['id'])->first();
        $filename = $file->filename;
        $fileContents = file_get_contents($file->url);
        
        A9::auditLog($request, "A10::downloadFile", "success","successfully downloaded data");
        
        return response()->json([
            'fileName' => $filename,
            'fileContents' => base64_encode($fileContents),
        ]);
    }
}
