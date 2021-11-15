<?php

namespace App\Http\Controllers;

use App\Models\Game;
use App\Models\HomePage;
use App\Models\User;
use App\Models\UserGame;
use App\Models\UserTask;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomePageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $games = Game::orderBy('endDate')
            ->where('isSponsored', '=', false)
            ->with('tasks')
            ->with('winners')
            ->with('users')
            ->with('tasks')
            ->where('status', '=', 0)
            ->get();
        $user = Auth::user();
        $userTasks = null;
        $userGames = null;
        if ($user) {
            $user = User::where('id', '=', $user->id)
                ->with('games')
                ->with('tasks')
                ->with('winners')
                ->with('socialUlogins')
                ->with('googleUserData')
                ->first();
            $userTasks = UserTask::where('user_id', '=', $user->id)->get();
            $userGames = UserGame::where('user_id', '=', $user->id)->get();
        }
        $sponsorGames = Game::where('isSponsored', '=', true)->get();
        return Inertia::render('HomePage', [
            'homePage' => HomePage::all(),
//            'user' => Auth::user(),
            'user' => $user,
            'games' => $games,
            'sponsorGames' => $sponsorGames,
            'userTasks' => $userTasks,
            'userGames' => $userGames
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
     * @param  \App\Models\HomePage  $homePage
     * @return \Illuminate\Http\Response
     */
    public function show(HomePage $homePage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\HomePage  $homePage
     * @return \Illuminate\Http\Response
     */
    public function edit(HomePage $homePage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\HomePage  $homePage
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, HomePage $homePage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\HomePage  $homePage
     * @return \Illuminate\Http\Response
     */
    public function destroy(HomePage $homePage)
    {
        //
    }
}
