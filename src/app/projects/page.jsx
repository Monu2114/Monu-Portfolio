import Card from "@/components/card";
export default function projects() {
  const projects = [
    {
      Title: "Dumbcharades-Telugu Movie Recommender System",
      Description: "Movie Recommender using TMDB API",
      git_link: "https://github.com/Monu2114/Dumb-charades",
      deploy_link: "https://dumb-charades-eta.vercel.app/",
    },
    {
      Title: "Dumbcharades-Telugu Movie Recommender System",
      Description: "Movie Recommender using TMDB API",
      git_link: "https://github.com/Monu2114/Dumb-charades",
      deploy_link: "https://dumb-charades-eta.vercel.app/",
    },
    {
      Title: "Dumbcharades-Telugu Movie Recommender System",
      Description: "Movie Recommender using TMDB API",
      git_link: "https://github.com/Monu2114/Dumb-charades",
      deploy_link: "https://dumb-charades-eta.vercel.app/",
    },
    {
      Title: "Dumbcharades-Telugu Movie Recommender System",
      Description: "Movie Recommender using TMDB API",
      git_link: "https://github.com/Monu2114/Dumb-charades",
      deploy_link: "https://dumb-charades-eta.vercel.app/",
    },
  ];
  return (
    <div className="flex bg-orange-100 w-screen h-screen p-4">
      {projects &&
        projects.map((card, index) => {
          return (
            <Card key={index} card={card}>
              {card}
            </Card>
          );
        })}
    </div>
  );
}
