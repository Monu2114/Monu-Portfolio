"use-client";
import React from "react";
import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

const theme = () => {
  const handleClick = () => {
    {
      theme == "light" && setTheme("dark");
    }
    {
      theme == "dark" && setTheme("light");
    }
    console.log(theme);
  };
  const [theme, setTheme] = new useState("light");
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
