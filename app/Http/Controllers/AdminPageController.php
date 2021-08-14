<?php

namespace App\Http\Controllers;

use App\Models\AdminPage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminPageController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $user = Auth::user();

        return Inertia::render('AdminPage', [
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
     * @param  \App\Models\AdminPage  $adminPage
     * @return \Illuminate\Http\Response
     */
    public function show(AdminPage $adminPage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\AdminPage  $adminPage
     * @return \Illuminate\Http\Response
     */
    public function edit(AdminPage $adminPage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\AdminPage  $adminPage
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, AdminPage $adminPage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\AdminPage  $adminPage
     * @return \Illuminate\Http\Response
     */
    public function destroy(AdminPage $adminPage)
    {
        //
    }
}
