<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CWE extends Model
{
    use HasFactory;
    protected $table = 'cwes';
    protected $primary_key = 'id';
    public $incrementing = false;
    protected $fillable = [
        'name',
        'description',
    ];
}
