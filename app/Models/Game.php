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
        return $this->belongsToMany(User::class, 'user_games', 'user_id', 'id');
    }

    public function gifts()
    {
        return $this->hasMany(Gift::class);
    }

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }
}
