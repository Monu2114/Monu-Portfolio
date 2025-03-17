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
export default function projects() {
  const projects = [
    {
      title: "Mini-Wins",
      description:
        "Habit tracking habit that follows principles of Atomic Habits book by James Clear",
      tech: ["TypeScript", "React", "shadcn-ui", "Tailwind CSS"],
      link: "https://minimal-victory-habits.vercel.app/",
      git: "https://github.com/Monu2114/minimal-victory-habits",
    },

    {
      title: "Dumb Charades",
      description:
        "Developed a Telugu movie recommender web app by leveraging the TMDB (The Movie Database) API to dynamically recommend telugu movies",
      tech: ["React", "Vercel"],
      link: "https://dumb-charades-eta.vercel.app/",
      git: "https://github.com/Monu2114/Dumb-charades",
    },
    {
      title: "Role-Based-Access",
      description:
        "Designed and implemented a role-based task management system with Admin, Manager, and Guest role",
      tech: ["React"],
      link: "https://role-based-access-rho.vercel.app/",
      git: "https://github.com/Monu2114/Role-Based-Access",
    },
    {
      title: "Mini-Message-Board",
      description:
        "Built a full-stack web application that allows users to create, edit, and delete personal messages or notes in a to-do list format.",
      tech: ["MERN Stack", "Mongodb", "Express"],
      link: "https://github.com/Monu2114/mini-message-board",
      git: "https://github.com/Monu2114/mini-message-board",
    },
    {
      title: "Pokemon Card Game",
      description:
        "React Based game where user has to select unique pokemon cards to increase the score",
      tech: ["React"],
      link: "https://memory-game-silk-sigma.vercel.app/",
      git: "https://github.com/Monu2114/Memory-Card",
    },
    {
      title: "Coffee-Shop (Frontend)",
      description:
        "Built a full-stack web application that allows users to create, edit, and delete personal messages or notes in a to-do list format.",
      tech: ["MERN Stack", "Mongodb", "Express"],
      link: "https://coffee-shop-kappa-ashen.vercel.app/",
      git: "https://github.com/Monu2114/Coffee-shop",
    },
    {
      title: "Mini-Message-Board",
      description:
        "Built a full-stack web application that allows users to create, edit, and delete personal messages or notes in a to-do list format.",
      tech: ["MERN Stack", "Mongodb", "Express"],
      link: "https://github.com/Monu2114/mini-message-board",
      git: "https://github.com/Monu2114/mini-message-board",
    },
    {
      title: "AI Notes",
      description: "User can store text as well as audio data",
      tech: ["Mongodb", "Next.JS", "JWT-Authentication"],
      link: "https://notes-nu-five.vercel.app/",
      git: "https://github.com/Monu2114/Notes",
    },
  ];
  return (
    <div className="flex bg-gray-100 w-screen h-fit p-4">
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold py-8 ">Featured Projects</h1>
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-3">
          {projects &&
            projects.map((card, index) => {
              return (
                <Card key={index} className="">
                  <CardHeader>
                    <CardTitle>{card.title}</CardTitle>
                    <CardDescription>{card.description}</CardDescription>
                  </CardHeader>

                  <CardFooter>
                    <a href={card.link} target="_blank">
                      <Button variant="ghost">
                        Live <ExternalLink />
                      </Button>
                    </a>
                    <a href={card.git} target="_blank">
                      <Button variant="outline">
                        <Github /> <ExternalLink />
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              );
            })}
        </div>
      </div>
    </div>
  );
}
