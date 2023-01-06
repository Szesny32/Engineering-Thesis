<?php

use App\Http\Controllers\A1;
use App\Http\Controllers\A2;
use App\Http\Controllers\A3;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CWEController;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/dictionary', [Controller::class, 'dictionary']);

Route::get('/vulnerabilities', [Controller::class, 'index']);
Route::post('/A1-changePasswd_vuln', [A1::class, 'changePasswd_vuln']);
Route::post('/A1-changePasswd', [A1::class, 'changePasswd']);
Route::post('/A1-getUser', [A1::class, 'getUser']);
Route::post('/A1-getUsers', [A1::class, 'getUsers']);
Route::post('/A1-resfreshSession', [A1::class, 'resfreshSession']);
Route::post('/A1-expireSession', [A1::class, 'expireSession']);
Route::post('/A2-getUsers', [A2::class, 'getUsers']);
Route::post('/A2-logIn', [A2::class, 'logIn']);
Route::post('/A2-dictionary', [A2::class, 'getDictionary']);
Route::post('/A3-injection', [A3::class, 'login_injection']);
Route::post('/A3-injection-free', [A3::class, 'login_injection_free']);
Route::post('/A3-getUsers', [A3::class, 'getUsers']);



Route::post('/register', [AuthController::class, 'register']);
Route::get('/cwe-list', [CWEController::class, 'index']);
Route::get('cwe22',[CWEController::class, 'cwe22']);
Route::get('cwe89_problem',[CWEController::class, 'cwe89_problem']);
Route::get('cwe89_solution',[CWEController::class, 'cwe89_solution']);
Route::get('cwe331',[CWEController::class, 'cwe331']);
Route::get('cwe331_2',[CWEController::class, 'cwe331_2']);
Route::get('cwe_209',[CWEController::class, 'cwe_209']);
Route::get('cwe614',[CWEController::class,'CWE614']);
Route::get('test',[CWEController::class,'test']);
//TES
Route::get('/users', [AuthController::class, 'test_index']);
Route::get('/xxx', [CWEController::class, 'xxx']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
