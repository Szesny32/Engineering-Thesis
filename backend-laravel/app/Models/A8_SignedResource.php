<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class A8_SignedResource extends Model
{
    use HasFactory;
    protected $fillable = [
        'resource',
        'signature',
        'public_key_id',  
    ];
}
