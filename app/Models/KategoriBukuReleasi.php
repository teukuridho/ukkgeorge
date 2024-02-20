<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KategoriBukuReleasi extends Model
{
    use HasFactory;

    public $table = "kategoribuku_releasi";
    protected $primaryKey = "KategoriBukuId";
}
