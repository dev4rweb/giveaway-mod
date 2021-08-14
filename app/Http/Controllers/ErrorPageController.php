<?php

namespace App\Http\Controllers;

use App\Models\ErrorPage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ErrorPageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('ErrorPage');
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
     * @param  \App\Models\ErrorPage  $errorPage
     * @return \Illuminate\Http\Response
     */
    public function show(ErrorPage $errorPage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ErrorPage  $errorPage
     * @return \Illuminate\Http\Response
     */
    public function edit(ErrorPage $errorPage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ErrorPage  $errorPage
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ErrorPage $errorPage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ErrorPage  $errorPage
     * @return \Illuminate\Http\Response
     */
    public function destroy(ErrorPage $errorPage)
    {
        //
    }
}
