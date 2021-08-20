<?php

namespace App\Http\Controllers;

use App\Http\Resources\GameResource;
use App\Models\Game;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class GameController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        try {
            /*$games = Game::orderBy('endDate', 'desc')
                ->where('isSponsored', '!=', '1')
                ->get();*/
            $games = GameResource::collection(
                Game::with('users')
                    ->with('gifts')
                    ->orderBy('status')
                    ->orderBy('endDate', 'desc')
                    ->where('isSponsored', '!=', '1')
                    ->get());
            $response['message'] = 'All games';
            $response['success'] = true;
            $response['models'] = $games;
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }
        return response()->json($response);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function create()
    {
        try {
            $response['message'] = "Game created";
            $response['success'] = false;
            $response['model'] = Game::create([
                'name' => 'new Game'
//                'status' => 'На модерации',
            ]);
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }

        return response()->json($response);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        try {
            $game = Game::create($request->all());
            $response['message'] = 'Game created';
            $response['success'] = true;
            $response['model'] = $game;
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }
        return response()->json($response);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Game $game
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        try {
            $game = new GameResource(Game::with('users')->findOrFail($id));
            $response['message'] = 'Find Game';
            $response['success'] = true;
            $response['model'] = $game;
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }
        return response()->json($response);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\Game $game
     * @return \Illuminate\Http\Response
     */
    public function edit(Game $game)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Game $game
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request)
    {
        try {
            $game = Game::find($request['id']);
            $game->update($request->all());
            $games = GameResource::collection(
                Game::with('users')
                    ->with('gifts')
                    ->orderBy('status')
                    ->orderBy('endDate', 'desc')
                    ->where('isSponsored', '!=', '1')
                    ->get());
            $response['message'] = 'Game updated';
            $response['success'] = true;
            $response['model'] = $game;
            $response['models'] = $games;
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }
        return response()->json($response);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Game $game
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        try {
            $game = Game::find($id);
            $game->delete();
            $response['message'] = 'Game deleted';
            $response['success'] = true;
            $response['id'] = $id;
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }

        return response()->json($response);
    }
}
