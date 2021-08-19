<?php

use App\Http\Controllers\AdminPageController;
use App\Http\Controllers\ErrorPageController;
use App\Http\Controllers\FileUploadController;
use App\Http\Controllers\GameController;
use App\Http\Controllers\HomePageController;
use App\Http\Controllers\UserPageController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*Route::get('/', function () {
    return view('welcome');
});*/

Route::get('/', [HomePageController::class, 'index'])->name('home-page');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/admin-panel', [AdminPageController::class, 'index'])->name('admin-panel');
Route::get('/user-panel', [UserPageController::class, 'index'])->name('user-panel');

Route::get('/games', [GameController::class, 'index']);
Route::post('/game/create', [GameController::class, 'create']);
Route::post('/game/store', [GameController::class, 'store']);
Route::post('/game/update', [GameController::class, 'update']);
Route::delete('/game/{id}', [GameController::class, 'destroy']);

Route::group(['middleware' => ['auth']], function () {
    Route::delete('/admin-panel/destroy/{id}', [AdminPageController::class, 'destroy']);

    Route::post('/file-upload', [FileUploadController::class, 'store']);
});
// Error Page
Route::fallback([ErrorPageController::class, 'index']);
