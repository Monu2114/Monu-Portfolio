import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiGit,
  SiJava,
} from "react-icons/si";
import { FaCode } from "react-icons/fa"; // Fallback for missing icons
import Image from "next/image";

const skills = () => {
  const skills = [
    { name: "HTML", icon: SiHtml5, color: "#E34F26" }, // Orange-red
    { name: "CSS", icon: SiCss3, color: "#1572B6" }, // Blue
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" }, // Yellow
    { name: "React", icon: SiReact, color: "#61DAFB" }, // Light blue
    { name: "Node.js", icon: SiNodedotjs, color: "#8CC84B" }, // Green
    { name: "Express", color: "#505050" }, // Grey for Express (fallback)
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" }, // Green
    { name: "Next.JS", color: "#000000" }, // Black for Next.js (fallback)
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" }, // Teal
    { name: "Git", icon: SiGit, color: "#F05032" }, // Orange
    { name: "Java", icon: SiJava, color: "#007396" }, // Blue
  ];

  return (
    <section className="md:ml-10 py-20 px-6 text-center">
      <div className="flex flex-col">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Technical Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                className="border-2 md:w-36 h-24 rounded-2xl text-center p-3 flex flex-col justify-center w hover:shadow-lg transition duration-300"
                key={index}
              >
                <div className="mb-2 mx-auto">
                  {Icon ? (
                    <Icon className="w-8 h-8" style={{ color: skill.color }} />
                  ) : (
                    <Image
                      className="w-8 h-8 text-gray-400"
                      height={20}
                      width={10}
                      alt="Image"
                      src={`${skill.name}.svg`}
                    />
                  )}
                </div>
                <div>
                  <p>{skill.name}</p>
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
