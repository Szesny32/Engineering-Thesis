<?php

namespace App\Http\Controllers;

use App\Models\A1_Session;
use App\Models\A1_User;
use App\Models\Vulnerability;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Carbon\Carbon;

class Controller extends BaseController
{
    public function index()
    {
        return Vulnerability::orderBy('id')->get();
    }

}
