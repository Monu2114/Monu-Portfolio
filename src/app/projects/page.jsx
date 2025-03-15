import Card from "@/components/card";
export default function projects() {
  const projects = [
    {
      title: "Dumb Charades-Telugu Movie Recommender",
      description:
        "Developed a Telugu movie recommender web app by leveraging the TMDB (The Movie Database) API to dynamically recommend telugu movies",
      tech: ["Next.JS", "API", "React", "Vercel"],
      link: "https://dumb-charades-eta.vercel.app/",
      git: "https://github.com/Monu2114/Dumb-charades",
    },
    {
      title: "Role-Based-Access",
      description:
        "Designed and implemented a role-based task management system with Admin, Manager, and Guest role.",
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
  ];
  return (
    <div className="flex bg-orange-100 w-screen h-screen p-4">
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold ">Featured Projects</h1>
        <div className="flex">
          {projects &&
            projects.map((card, index) => {
              return (
                <Card key={index} card={card}>
                  {card}
                </Card>
              );
            })}
        </div>
      </div>
    </div>
  );
}
