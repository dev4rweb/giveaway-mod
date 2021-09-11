<?php

namespace App\Http\Controllers;

use App\Models\SocialUlogin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UloginController extends Controller
{
    public function login(Request $request)
    {
        // Get information about user.
        $data = file_get_contents('http://ulogin.ru/token.php?token=' . $request->get('token') .
            '&host=' . $_SERVER['HTTP_HOST']);
        $userSocial = json_decode($data, true);
        $user = Auth::user();
        $userSocial['user_id'] = $user->id;
        SocialUlogin::updateOrCreate($userSocial);
//        return response()->json($userSocial);
        return redirect('/user-panel');
    }
}
