<?php

namespace App\Http\Controllers;

use App\Models\AdminPage;
use App\Models\Game;
use App\Models\User;
use App\Models\UserGame;
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
        $allUsers = User::with('games')
            ->with('winners')
            ->where('isAdmin', '!=', 1)
            ->get();
        $allGames = Game::with('users')
            ->with('gifts')
            ->with('tasks')
            ->with('winners')
            ->orderBy('status')
            ->orderBy('endDate')
            ->where('isSponsored', '=', false)
            ->get();

        return Inertia::render('AdminPage', [
            'currentUser' => $user,
            'allUsers' => $allUsers,
            'allGames' => $allGames,
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
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\AdminPage $adminPage
     * @return \Illuminate\Http\Response
     */
    public function show(AdminPage $adminPage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\AdminPage $adminPage
     * @return \Illuminate\Http\Response
     */
    public function edit(AdminPage $adminPage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request)
    {
        try {
            $user = User::findOrFail($request['id']);
            $user->update($request->all());
            $response['message'] = 'User updated';
            $response['success'] = true;
            $response['model'] = $user;
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }
        return response()->json($response);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\AdminPage $adminPage
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($userId)
    {
        try {
            $user = User::find($userId);
            $user->delete();
            $response['message'] = 'User was deleted';
            $response['success'] = true;
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }

        return response()->json($response);
    }
}
