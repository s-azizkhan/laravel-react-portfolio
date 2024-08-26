<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class WelcomeController extends Controller
{
    public function index()
    {
        $projects = [
            [
                "title" => "Project 1",
                "description" => "A web application that helps users manage their tasks and projects.",
                "image" => "/assets/1.png",
                "previewLink" => "/",
                "githubLink" => "/",
                "techStack" => [
                    "React",
                    "Next.js",
                    "Node.js",
                    "MongoDB",
                    "Express.js",
                    "AWS",
                ],
            ],
            [
                "title" => "Project 2",
                "description" => "A web application that helps users manage their tasks and projects.",
                "image" => "/assets/2.jpg",
                "githubLink" => "/",
                "techStack" => [
                    "Vue",
                    "Nuxt.js",
                    "Firebase",
                ],
            ],
            [
                "title" => "Project 3",
                "description" => "A web application that helps users manage their tasks and projects.",
                "image" => "/assets/3.jpg",
                "previewLink" => "/",
                "techStack" => [
                    "Angular",
                    "NestJS",
                    "MongoDB",
                ],
            ],
            [
                "title" => "Project 4",
                "description" => "A web application that helps users manage their tasks and projects.",
                "image" => "/assets/aziz-avatar.jpeg",
                "techStack" => [
                    "Svelte",
                    "Sapper",
                    "GraphQL",
                ],
            ],
            [
                "title" => "Project 5",
                "description" => "A web application that helps users manage their tasks and projects.",
                "image" => "/assets/placeholder.svg",
                "techStack" => [
                    "Svelte",
                    "Sapper",
                    "GraphQL",
                ],
            ],
        ];

        return Inertia::render('Welcome', [
            'projects' => $projects,
        ]);
    }
}
