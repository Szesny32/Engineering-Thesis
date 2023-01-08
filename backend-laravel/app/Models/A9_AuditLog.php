<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class A9_AuditLog extends Model
{
    use HasFactory;

    protected $fillable = [
        'ip',
        'action',
        'parameters',
        'event_type',
        'description',
    ];
}
