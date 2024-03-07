<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookCollection extends Model
{
    use HasFactory;

    public $table = 'koleksipribadi';
    protected $primaryKey = 'KoleksiId';
    protected $guarded = [];

    public function book() {
        return $this->belongsTo(Buku::class, 'BukuId', 'BukuId');
    }
}
