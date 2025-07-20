import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Samurai",
      description:
        "Transform lengthy PDFs into clear, accurate summaries in seconds using AI",
      tech: ["NextJS", "Gemini", "neon", "zod"],
      // link: "https://github.com/Monu2114/Samurai",
      git: "https://github.com/Monu2114/Samurai",
    },
    {
      title: "Dumb Charades",
      description:
        "Developed a Telugu movie recommender web app using TMDB API",
      tech: ["React", "Vercel"],
      link: "https://dumb-charades-eta.vercel.app/",
      git: "https://github.com/Monu2114/Dumb-charades",
    },
    {
      title: "Pokemon Card Game",
      description:
        "React-based game where user selects unique cards to increase score",
      tech: ["React"],
      link: "https://memory-card-iota-lovat.vercel.app/",
      git: "https://github.com/Monu2114/Memory-Card",
    },
    {
      title: "Mini-Wins",
      description:
        "Habit tracking app that follows principles of Atomic Habits book by James Clear",
      tech: ["TypeScript", "React", "shadcn-ui", "Tailwind CSS"],
      link: "https://minimal-victory-habits.vercel.app/",
      git: "https://github.com/Monu2114/minimal-victory-habits",
    },
    {
      title: "Green Day",
      description: "A site for green day enthusiasts",
      tech: ["Vibe coding", "HTML", "CSS", "Javascript"],
      link: "https://incomparable-crepe-a2727b.netlify.app/",
      git: "https://github.com/Monu2114/green-day",
    },

    {
      title: "Role-Based-Access",
      description:
        "Designed a role-based task management system with Admin, Manager, and Guest roles",
      tech: ["React"],
      link: "https://role-based-access-rho.vercel.app/",
      git: "https://github.com/Monu2114/Role-Based-Access",
    },
    {
      title: "Taskflow - Your Simple Task Manager",
      description:
        "Lightweight, responsive task management app built using plain HTML, CSS (Tailwind), and JavaScript.Manage your tasks efficiently with features like filtering, search, priority levels, data export/import, and keyboard shortcuts.",

      tech: ["HTML", "CSS", "Javascript"],
      link: "https://taskflow-gules-xi.vercel.app/",
      git: "https://github.com/Monu2114/Taskflow",
    },
    {
      title: "Pokémon MCP Server",
      description:
        "Get detailed info (stats, types, abilities, moves, evolution chain) from the public PokéAPI. Simulate Battles: Run simple Pokémon battles with type effectiveness and status effects.The server exposes these features via the Model Context Protocol (MCP), and a client can call the resource and the tool",
      tech: ["Python ", "requests "],

      git: "https://github.com/Monu2114/MCP_Pokemon",
    },

    {
      title: "Coffee-Shop (Frontend)",
      description: "Built a  beautiful coffee shop site(frontend)",
      tech: ["MERN Stack", "MongoDB", "Express"],
      link: "https://coffee-shop-kappa-ashen.vercel.app/",
      git: "https://github.com/Monu2114/Coffee-shop",
    },
    {
      title: "AI Notes",
      description: "User can store text as well as audio data",
      tech: ["MongoDB", "Next.JS", "JWT-Authentication"],
      link: "https://notes-nu-five.vercel.app/",
      git: "https://github.com/Monu2114/Notes",
    },
    {
      title: "Mini-Message-Board",
      description:
        "Full-stack web app that allows users to create, edit, and delete personal messages",
      tech: ["MERN Stack", "MongoDB", "Express"],
      link: null,
      git: "https://github.com/Monu2114/mini-message-board",
    },
  ];

  return (
    <div className="flex p-4 ">
      <div className="flex flex-col w-full">
        <h1 className="text-3xl font-semibold py-8 text-center">
          Featured Projects
        </h1>

        {/* Grid layout with better responsiveness */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {projects.map((card, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle className="text-lg font-bold">
                  {card.title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  {card.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {card.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                {card.link && (
                  <a href={card.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      Live <ExternalLink className="ml-1 h-4 w-4" />
                    </Button>
                  </a>
                )}

                <a href={card.git} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    <Github className="mr-1 h-4 w-4" />
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
