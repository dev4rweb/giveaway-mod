<?php

namespace App\Http\Controllers;

use App\Models\CategoryTask;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryTaskController extends Controller
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

    public function index()
    {
        return Inertia::render('AdminPanel/AdminTasksPage');
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
     * @param  \App\Models\CategoryTask  $categoryTask
     * @return \Illuminate\Http\Response
     */
    public function show(CategoryTask $categoryTask)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CategoryTask  $categoryTask
     * @return \Illuminate\Http\Response
     */
    public function edit(CategoryTask $categoryTask)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CategoryTask  $categoryTask
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CategoryTask $categoryTask)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CategoryTask  $categoryTask
     * @return \Illuminate\Http\Response
     */
    public function destroy(CategoryTask $categoryTask)
    {
        //
    }
}
