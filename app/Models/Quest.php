<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quest extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'user_id'
    ];

    public function missions() {
        return $this->hasMany(Mission::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
}
