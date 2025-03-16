import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { GithubIcon, FileText } from "lucide-react";

export default function About() {
  return (
    <div className="bg-gray-200 w-screen h-screen">
      <div className="flex ml-20">
        <div className="text-black w-52 mt-12 text-2xl font-semibold flex-col">
          Monisha Nanabala
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
      </div>
    </div>
  );
}
