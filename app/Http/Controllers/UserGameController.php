<?php

namespace App\Http\Controllers;

use App\Models\UserGame;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserGameController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        try {
            $usersGames = UserGame::all();
            $response['message'] = 'All usersGames';
            $response['success'] = true;
            $response['models'] = $usersGames;
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }
        return response()->json($response);
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
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        try {
            $userGame = UserGame::where('user_id', '=', $request['user_id'])
                ->where('game_id', '=', $request['game_id'])
                ->first();
            if ($userGame) {
                $request['id'] = $userGame['id'];
                $userGame->update($request->all());
                $response['message'] = 'UserGame found and updated';
            } else {
                $userGame = UserGame::create($request->all());
                $response['message'] = 'User game created';
            }
            $response['success'] = true;
            $response['model'] = $userGame;
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }
        return response()->json($response);
    }

    /**
     * Display the specified resource.
     *
     * @param $id
     * @return JsonResponse
     */
    public function show($id)
    {
        try {
            $userGame = UserGame::findOrFail($id);
            $response['message'] = 'Find userGame model';
            $response['success'] = true;
            $response['model'] = $userGame;
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }
        return response()->json($response);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\UserGame $userGame
     * @return \Illuminate\Http\Response
     */
    public function edit(UserGame $userGame)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return JsonResponse
     */
    public function update(Request $request)
    {
        try {
            $userGame = UserGame::findOrFail($request['id']);
            $userGame->update($request->all());
            $response['message'] = 'User game updated';
            $response['success'] = true;
            $response['model'] = $userGame;
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }
        return response()->json($response);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $id
     * @return JsonResponse
     */
    public function destroy($id)
    {
        try {
            $userGame = UserGame::findOrFail($id);
            $userGame->delete();
            $response['message'] = 'User Game deleted';
            $response['success'] = true;
            $response['id'] = $id;
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }
        return response()->json($response);
    }
}
