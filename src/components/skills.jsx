import React from "react";
import { motion } from "motion/react";
import { Code } from "lucide-react";

const skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Mern",
    "Next.JS",
    "Tailwind CSS",
    "Git",
    "Java",
  ];
  return (
    <section className="ml-10 py-20 px-6 text-center">
      <div className="flex flex-col">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Technical Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            return (
              <div
                className="border-2 w-36 h-18 rounded-2xl text-center p-3 flex flex-col justify-center"
                key={index}
              >
                <div className="mb-2 mx-auto text-primary">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <p>{skill}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default skills;
