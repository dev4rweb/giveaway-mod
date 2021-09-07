<?php

namespace App\Http\Controllers;

use App\Mail\adaptiveEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class mailController extends Controller
{
    public function send()
    {
        try {
            Mail::send(['text' => 'mail'], ['name', 'Name from'], function ($message) {
                $message
                    ->to('dev4rweb@gmail.com', 'To my email')
                    ->subject('Test email subject')
                    ->from('my@gmail.com', 'text from');
            });
            $response['message'] = 'Email Send';
            $response['success'] = true;
        }catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['add'] = 'Email Doesnt send';
            $response['success'] = false;
        }

        return response()->json($response);
    }

    public function sendEmail()
    {
        try {
            Mail::send(new adaptiveEmail('dev4rweb@gmail.com'));
            $response['message'] = 'Email Send';
            $response['success'] = true;
        }catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['add'] = 'Email Doesnt send';
            $response['success'] = false;
        }

        return response()->json($response);
    }

    public function email()
    {
        return view('aEmail');
    }

    public function sendKey(Request $request){
        try {
//            $emailTo = 'dev4rweb@gmail.com';
            $emailTo = $request['email'];
            $data = $request->all();
            Mail::send(new adaptiveEmail($emailTo, $data));
            $response['message'] = 'Email Send';
            $response['success'] = true;
        }catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['add'] = 'Email Doesnt send';
            $response['success'] = false;
        }

        return response()->json($response);
    }
}
