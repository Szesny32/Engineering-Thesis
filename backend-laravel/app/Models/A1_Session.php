<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class A1_Session extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'sessid',
        'expire_at'
    ];

}
