<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CWEController;
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

Route::post('/register', [AuthController::class, 'register']);
Route::get('/cwe-list', [CWEController::class, 'index']);
Route::get('cwe22',[CWEController::class, 'cwe22']);
Route::get('cwe89_problem',[CWEController::class, 'cwe89_problem']);
Route::get('cwe89_solution',[CWEController::class, 'cwe89_solution']);
Route::get('cwe331',[CWEController::class, 'cwe331']);
Route::get('cwe331_2',[CWEController::class, 'cwe331_2']);

//TES
Route::get('/users', [AuthController::class, 'test_index']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
