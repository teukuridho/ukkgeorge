<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

    public $table = 'ulasanbuku';
    protected $primaryKey = 'UlasanId';

    protected $guarded = [];

    public function user() {
        return $this->belongsTo(User::class, 'UserId', 'UserId');
    }
}