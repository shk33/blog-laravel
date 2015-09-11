<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return redirect('/blog');
});

Route::get('blog', 'BlogController@index');
Route::get('blog/{slug}', 'BlogController@showPost');

// Admin area
get('admin', function () {
  return redirect('/admin/post');
});
$router->group([
  'namespace' => 'Admin',
  'middleware' => 'auth',
], function () {
  // Posts
  resource('admin/post', 'PostController');
  // Tags
  resource('admin/tag', 'TagController', ['except' => 'show']);
  // Uploads
  get('admin/upload', 'UploadController@index');
  // Uploads Files
  post('admin/upload/file', 'UploadController@uploadFile');
  delete('admin/upload/file', 'UploadController@deleteFile');
  // Uploas folders
  post('admin/upload/folder', 'UploadController@createFolder');
  delete('admin/upload/folder', 'UploadController@deleteFolder');
});

// Logging in and out
get('/auth/login', 'Auth\AuthController@getLogin');
post('/auth/login', 'Auth\AuthController@postLogin');
get('/auth/logout', 'Auth\AuthController@getLogout');