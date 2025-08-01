"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { GithubIcon, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Theme from "./theme";
export default function About() {
  // in dark mode - dark:from-gray-400
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center"
      >
        <div className="flex justify-center mb-6">
          <motion.div
            className="koala-ears relative bg-muted rounded-full p-6 shadow-lg"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-24 h-24 bg-muted rounded-full relative ">
              <div className="absolute w-4 h-4 bg-foreground rounded-full left-4 top-8" />
              <div className="absolute w-4 h-4 bg-foreground rounded-full right-4 top-8" />
              <div className="absolute w-6 h-4 bg-foreground rounded-full left-1/2 top-14 -translate-x-1/2" />

              {/* <div className="absolute w-10 h-4 bg-foreground rounded-full left-1/2 top-20 -translate-x-1/2" /> */}
            </div>
          </motion.div>
        </div>
        <Theme />
        <div className="text-black mt-12 text-2xl font-semibold flex-col">
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-gray-900 dark:from-gray-400 dark:to-gray-100">
            Monisha Nanabala
          </h1>
          <div className="text-xl text-muted-foreground mb-8 h-8 ">
            <TypeAnimation
              sequence={[
                "Mern Stack Developer",
                1000,
                "Final year CSE Student",
                1000,
                "Full Stack Developer",
                1000,
                "Open Source Contributor",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <div className="flex justify-center gap-4">
            <a
              href="https://drive.google.com/file/d/1w_boPyMnS1QO9P0hgMQ6t67SAhv6GQR_/view?usp=sharing"
              target="_blank"
            >
              <Button variant="outline" className="dark:bg-gray-100">
                <FileText />
                Resume
              </Button>
            </a>
            <a href="https://github.com/Monu2114" target="_blank">
              <Button variant="outline" className="dark:bg-gray-100">
                <GithubIcon />
                Github
              </Button>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
