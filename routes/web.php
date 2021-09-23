<?php

use App\Http\Controllers\AdminPageController;
use App\Http\Controllers\ErrorPageController;
use App\Http\Controllers\FaqPageController;
use App\Http\Controllers\FileUploadController;
use App\Http\Controllers\GameController;
use App\Http\Controllers\GiftController;
use App\Http\Controllers\HomePageController;
use App\Http\Controllers\mailController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UloginController;
use App\Http\Controllers\UserGameController;
use App\Http\Controllers\UserPageController;
use App\Http\Controllers\UserTaskController;
use App\Http\Controllers\WinnerController;
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

Route::get('/faq', [FaqPageController::class, 'index']);

Route::get('/games', [GameController::class, 'index']);
Route::post('/game/create', [GameController::class, 'create']);
Route::post('/game/store', [GameController::class, 'store']);
Route::post('/game/update', [GameController::class, 'update']);
Route::delete('/game/{id}', [GameController::class, 'destroy']);

Route::group(['middleware' => ['auth']], function () {
    Route::post('/update-votes', [AdminPageController::class, 'update']);
    Route::delete('/admin-panel/destroy/{id}', [AdminPageController::class, 'destroy']);

    Route::post('/file-upload', [FileUploadController::class, 'store']);

    Route::get('/gifts', [GiftController::class, 'index']);
    Route::post('/gift/create', [GiftController::class, 'store']);
    Route::post('/gift/update', [GiftController::class, 'update']);
    Route::delete('/gift/{id}', [GiftController::class, 'destroy']);

    Route::get('/tasks', [TaskController::class, 'index']);
    Route::post('/task/create', [TaskController::class, 'store']);
    Route::post('/task/update', [TaskController::class, 'update']);
    Route::delete('/task/{id}', [TaskController::class, 'destroy']);

    Route::get('/users_games', [UserGameController::class, 'index']);
    Route::post('/user_game/create', [UserGameController::class, 'store']);
    Route::post('/user_game/update', [UserGameController::class, 'update']);
    Route::delete('/user_game/{id}', [UserGameController::class, 'destroy']);

    Route::get('/winners', [WinnerController::class, 'index']);
    Route::get('/winner/{id}', [WinnerController::class, 'show']);
    Route::post('/winner/create', [WinnerController::class, 'store']);
    Route::post('/winner/update', [WinnerController::class, 'update']);
    Route::delete('/winner/{id}', [WinnerController::class, 'destroy']);

    Route::get('/users-tasks', [UserTaskController::class, 'index']);
    Route::get('/user-task/{id}', [UserTaskController::class, 'show']);
    Route::post('/user-task/create', [UserTaskController::class, 'store']);
    Route::post('/user-task/update', [UserTaskController::class, 'update']);
    Route::delete('/user-task/{id}', [UserTaskController::class, 'destroy']);

    Route::get('/send', [mailController::class, 'sendEmail']);
    Route::post('/send-key', [mailController::class, 'sendKey']);

    Route::post('ulogin', [UloginController::class, 'login']);
});

// Error Page
Route::fallback([ErrorPageController::class, 'index']);
