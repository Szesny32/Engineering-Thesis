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
        Schema::create('a9__exception_logs', function (Blueprint $table) {
            $table->id();
            $table->string('ip');
            $table->string('action');
            $table->string('parameters');
            $table->string('exception_type');
            $table->string('description');
            $table->text('stack_trace');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('a9__exception_logs');
    }
};
