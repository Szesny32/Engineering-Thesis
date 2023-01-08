<?php

namespace App\Http\Controllers;

use App\Models\A9_AuditLog;
use App\Models\A9_ExceptionLog;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class A9 extends Controller
{
 

    public function getExceptionLogs(){

        return A9_ExceptionLog::orderBy('created_at', 'desc')->get();

    }

    public function getAuditionLogs(){

        return A9_AuditLog::orderBy('created_at', 'desc')->get();

    }

    public static function validationLog(ValidationException $e, Request $request, string $action){
            $messagesAsString = A9::parseErrorsToString($e->errors());
            $params = A9::parseArrayToString($request->all());
            A9_ExceptionLog::insert([
                'ip' => $request->ip(),
                'action' => $action,
                'parameters' => $params,
                'exception_type' => get_class($e),
                'description' => $messagesAsString,
                'stack_trace' => $e->getTraceAsString(),
                "created_at" => Carbon::now()->setTimezone('Europe/Warsaw')->toDateTimeString(), 
                "updated_at" => Carbon::now()->setTimezone('Europe/Warsaw')->toDateTimeString() 
            ]);
            return [
                'message' =>$e->getMessage(),
                'errors' => $e->errors()
            ];
        }
      


        public static function exceptionLog(Exception $e, Request $request, string $action, string $messagesAsString){
            $params = A9::parseArrayToString($request->all());
            A9_ExceptionLog::insert([
                'ip' => $request->ip(),
                'action' => $action,
                'parameters' => $params,
                'exception_type' => get_class($e),
                'description' => $messagesAsString,
                'stack_trace' => $e->getTraceAsString(),
                "created_at" => Carbon::now()->setTimezone('Europe/Warsaw')->toDateTimeString(), 
                "updated_at" => Carbon::now()->setTimezone('Europe/Warsaw')->toDateTimeString() 
            ]);
            return [
                'message' =>$e->getMessage()
            ];
        }


        public static function auditLog(Request $request, string $action, string $event_type, string $description){
            $params = A9::parseArrayToString($request->all());
            A9_AuditLog::insert([
                'ip' => $request->ip(),
                'action' => $action,
                'parameters' => $params,
                'event_type' => $event_type,
                'description' => $description,
                "created_at" => Carbon::now()->setTimezone('Europe/Warsaw')->toDateTimeString(), 
                "updated_at" => Carbon::now()->setTimezone('Europe/Warsaw')->toDateTimeString() 
            ]);
            return [
                'message'=> $event_type,
            ];
        }
      



        public static function parseArrayToString(Array $array){
            $arrayAsString = "";
            foreach ($array as $key => $value) {
                    $arrayAsString.='"'.$key.'": "'.$value.'"'. PHP_EOL;
            }
            return substr($arrayAsString, 0, -1);
          }
        



        public static function parseErrorsToString(Array $errors){
          $errorsAsString = "";
          foreach ($errors as $key => $value) {
              foreach ($value as $message) {
                  $errorsAsString.=$message;
              }
              $errorsAsString.=" ";
              
          }
          return substr($errorsAsString, 0, -1);
        }
      


}
