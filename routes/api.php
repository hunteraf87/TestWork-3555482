<?php

use App\Http\Controllers\API\CountriesController;
use App\Http\Controllers\UsersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::apiResource('countries', CountriesController::class);
Route::apiResource('users', UsersController::class);

