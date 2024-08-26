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
                "title" => "Nextjs developer portfolio",
                "description" => "A web application that helps users manage their tasks and projects.",
                "image" => "/assets/1.png",
                "githubLink" => "https://github.com/s-azizkhan/nextjs-developer-portfolio",
                "techStack" => [
                    "NextJS",
                    "TailwindCSS",
                    "TypeScript",
                ],
            ],
            [
                "title" => "Email validation server",
                "description" => "Validate single and bulk emails with general rules, disposable blocklist, and MX record checks.",
                "image" => "/assets/2.jpg",
                "githubLink" => "https://github.com/s-azizkhan/fastapi-email-validation-server",
                "techStack" => [
                    "FastAPI",
                    "Python",
                ],
            ],
            [
                "title" => "WishNex",
                "description" => "An open-source platform that encourages empathy and understanding by providing a space for sharing wishes, confessions, and stories",
                "image" => "/assets/3.jpg",
                "previewLink" => "https://graphicsocean.com",
                "githubLink" => "https://github.com/s-azizkhan/wishnex",
                "techStack" => [
                    "PHP",
                    "Laravel",
                    "React",
                    "TailwindCSS",
                ],
            ],
            [
                "title" => "VipHub",
                "description" => "A collaborative platform for entrepreneurs and business owners to share their knowledge, experiences, and insights.",
                "previewLink" => "https://viphub.in",
                "githubLink" => "https://github.com/s-azizkhan/viphub",
                "image" => "/assets/aziz-avatar.jpeg",
                "techStack" => [
                    "React",
                    "PHP",
                    "Laravel",
                    "TailwindCSS",
                    "TypeScript",
                ],
            ],
            [
                "title" => "Create user from guest order plugin",
                "description" => "A plugin that allows users to create an account and login after completing their order.",
                "image" => "/assets/placeholder.svg",
                "githubLink" => "https://github.com/s-azizkhan/create-user-from-guest-order-wp-plugin",
                "techStack" => [
                    "PHP",
                    "Laravel",
                    "MySQL",
                    "JavaScript",
                    "WordPress",
                ],
            ],
            [
                "title" => "Zakat App",
                "description" => "A platform that enables users to request zakat funds and donors to donate to them.",
                "image" => "/assets/placeholder.svg",
                "previewLink" => "https://jewelsofkindness.org",
                "githubLink" => "https://github.com/s-azizkhan/zakat-app",
                "techStack" => [
                    "React",
                    "PHP",
                    "Laravel",
                    "MySQL",
                    "JavaScript",
                    "TailwindCSS",
                ],
            ],
            [
                "title" => "wc auto address filler",
                "description" => "A plugin that automatically fills in the address fields in WooCommerce based on the user's IP address.",
                "image" => "/assets/placeholder.svg",
                "githubLink" => "https://github.com/s-azizkhan/wc-auto-address-filler",
                "techStack" => [
                    "PHP",
                    "MySQL",
                    "JavaScript",
                    "WordPress",
                ],
            ],
        ];

        return Inertia::render('Welcome', [
            'projects' => $projects,
        ]);
    }
}
