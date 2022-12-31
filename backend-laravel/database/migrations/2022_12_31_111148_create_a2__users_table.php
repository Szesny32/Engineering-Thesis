<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('a2__users', function (Blueprint $table) {
            $table->id();
            $table->string('login')->unique();
            $table->string('e-mail')->unique();
            $table->string('salt')->nullable();
            $table->string('passwd');
            $table->unsignedBigInteger('encryption_type');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('a2__users');
    }
};
