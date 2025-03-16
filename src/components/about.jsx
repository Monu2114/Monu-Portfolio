"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { GithubIcon, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
export default function About() {
  // in dark mode - dark:from-gray-400
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="text-black mt-12 text-2xl font-semibold flex-col">
        <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-gray-900 dark:from-gray-400 dark:to-gray-100">
          Monisha Nanabala
        </h1>
        <div className="text-xl text-muted-foreground mb-8 h-8 ">
          <TypeAnimation
            sequence={[
              "Mern Stack developer",
              1000,
              "3rd year CSE Student",
              1000,
              "Full Stack Enthusiast",
              1000,
              "Open Source Contributor",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
        <div className="flex">
          <a
            href="https://drive.google.com/file/d/1xc2fHgWr9qRO9eYGaN4VRLZTFIiiJyqJ/view?usp=sharing"
            target="_blank"
          >
            <Button variant="outline">
              <FileText />
              Resume
            </Button>
          </a>
          <a href="https://github.com/Monu2114" target="_blank">
            <Button variant="outline">
              <GithubIcon />
              Github
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
