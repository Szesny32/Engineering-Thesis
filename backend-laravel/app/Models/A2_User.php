<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class A2_User extends Model
{
    use HasFactory;
    protected $fillable = [
        'login',
        'e-mail',
        'passwd',
        'salt',
        'encryption_type'
    ];
}
