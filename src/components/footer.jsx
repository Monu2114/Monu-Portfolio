import React from "react";
import { Github, Twitter, TwitterIcon } from "lucide-react";
import { Linkedin, Mail } from "lucide-react";
const page = () => {
  return (
    <footer className="py-8 text-center text-muted-foreground">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com/Monu2114"
          className="hover:text-foreground transition-colors"
          target="_blank"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://x.com/monu_keys"
          target="_blank"
          className="hover:text-foreground transition-colors"
          rel="noopener noreferrer"
        >
          <TwitterIcon className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/monisha-nanabala-1636511b6/"
          target="_blank"
          className="hover:text-foreground transition-colors"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=monu.nanabala@gmail.com&su=Hello&body=Hi%20Monisha"
          target="_blank"
          className="hover:text-foreground transition-colors"
          rel="noopener noreferrer"
        >
          <Mail className="w-6 h-6" />
        </a>
      </div>
      <p>© 2025 Monisha Nanabala</p>
    </footer>
  );
};

export default page;
