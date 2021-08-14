<?php

namespace App\Http\Controllers;

use App\Models\UserPage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserPageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $user = Auth::user();
        return Inertia::render('UserPage', [
            'user' => $user
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\UserPage  $userPage
     * @return \Illuminate\Http\Response
     */
    public function show(UserPage $userPage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\UserPage  $userPage
     * @return \Illuminate\Http\Response
     */
    public function edit(UserPage $userPage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\UserPage  $userPage
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UserPage $userPage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\UserPage  $userPage
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserPage $userPage)
    {
        //
    }
}
