<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_games', 'game_id', 'user_id');
    }

    public function gifts()
    {
        return $this->hasMany(Gift::class);
    }

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

    public function winners()
    {
        return $this->belongsToMany(User::class, 'winners', 'game_id', 'user_id');
    }
}
