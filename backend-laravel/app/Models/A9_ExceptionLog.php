<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class A9_ExceptionLog extends Model
{
    use HasFactory;

    protected $fillable = [
        'ip',
        'action',
        'parameters',
        'exception_type',
        'description',
        'stack_trace',  
    ];
}
