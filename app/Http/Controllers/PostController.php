<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreatePostRequest;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();

        return inertia("Post/Index", compact("posts"));
    }

    public function create()
    {
        return inertia("Post/Create");
    }

    public function store(CreatePostRequest $request)
    {
        Post::create($request->all());

        return redirect()->route("posts.index");
    }
}
