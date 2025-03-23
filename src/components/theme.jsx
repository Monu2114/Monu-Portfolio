"use-client";
import React from "react";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

const theme = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (typeof window != "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        setTheme(storedTheme);
        document.documentElement.className = storedTheme;
      } // Apply the theme to the HTML root

      console.log(localStorage);
    }
  }, []);

  // const storedTheme = localStorage

  const handleClick = () => {
    if (theme == "light") {
      setTheme("dark");
      document.documentElement.className = "dark"; // Update root class

      localStorage.setItem("theme", "dark");
    }

    if (theme == "dark") {
      setTheme("light");
      document.documentElement.className = "light"; // Update root class
      localStorage.setItem("theme", "light");
    }
    console.log(theme);
  };
  return (
    <div>
      <Button
        variant="outline"
        onClick={handleClick}
        className="rounded-xl"
        size="sm"
      >
        {theme == "light" && <Sun />}
        {theme == "dark" && <Moon />}
      </Button>
    </div>
  );
};

export default theme;
