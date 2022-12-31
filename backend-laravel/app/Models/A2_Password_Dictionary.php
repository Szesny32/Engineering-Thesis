<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class A2_Password_Dictionary extends Model
{
    use HasFactory;
    protected $fillable = [
        'passwd',
        'hash',
    ];
}

