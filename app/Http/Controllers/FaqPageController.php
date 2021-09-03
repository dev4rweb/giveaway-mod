<?php

namespace App\Http\Controllers;

use App\Models\FaqPage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FaqPageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $faqPage = FaqPage::all();
        return Inertia::render('FAQPage', [
            'faqPage' => $faqPage
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
     * @param  \App\Models\FaqPage  $faqPage
     * @return \Illuminate\Http\Response
     */
    public function show(FaqPage $faqPage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\FaqPage  $faqPage
     * @return \Illuminate\Http\Response
     */
    public function edit(FaqPage $faqPage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\FaqPage  $faqPage
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, FaqPage $faqPage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\FaqPage  $faqPage
     * @return \Illuminate\Http\Response
     */
    public function destroy(FaqPage $faqPage)
    {
        //
    }
}
