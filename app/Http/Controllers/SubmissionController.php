<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Submission;

class SubmissionController extends Controller
{
    public function index()
    {
        return response()->json(Submission::all());
    }

    // Store a new submission
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'dropdown_value' => 'required|string|max:255',
        ]);

        $submission = Submission::create($validated);

        return response()->json($submission, 201);
    }
}
