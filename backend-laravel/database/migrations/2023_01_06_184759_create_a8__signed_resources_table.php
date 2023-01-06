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
        Schema::create('a8__signed_resources', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('keys_id');
            $table->foreign('keys_id')->references('id')->on('a8__keys');
            $table->text('resource');
            $table->text('signature');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('a8__signed_resources');
    }
};
