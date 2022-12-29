<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class A1_User extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'login',
        'e-mail',
        'passwd'
    ];
}
