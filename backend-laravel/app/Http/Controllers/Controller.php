<?php

namespace App\Http\Controllers;

use App\Models\Vulnerability;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{

    public function index()
    {
        return Vulnerability::orderBy('id')->get();
    }
}
