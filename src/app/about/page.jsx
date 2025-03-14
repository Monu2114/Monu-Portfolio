import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { GithubIcon, FileText } from "lucide-react";

export default function About() {
  return (
    <div className="bg-gray-200 w-screen h-fit">
      <div className="flex gap-10">
        <div className="">
          <Avatar className="w-44 h-44">
            {" "}
            {/* Adjust size directly on Avatar */}
            <AvatarImage src="./koala.jpeg" alt="@shadcn" className="" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="text-black w-52 mt-12 text-xl flex-col">
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
