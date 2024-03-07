<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('koleksipribadi', function (Blueprint $table) {
            $table->id('KoleksiId');
            $table->foreignId('UserId');
            $table->foreignId('BukuId');
            $table->foreign('UserId')->references('UserId')->on('user');
            $table->foreign('BukuId')->references('BukuId')->on('buku');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('koleksipribadi');
    }
};
