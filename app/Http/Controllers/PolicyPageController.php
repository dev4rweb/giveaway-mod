<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PolicyPageController extends Controller
{


    public function index()
    {
        return Inertia::render('PolicyPage');
    }
}
