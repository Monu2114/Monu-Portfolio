import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
        <div className="text-black w-52 mt-12">Monisha Nanabala</div>
      </div>
    </div>
  );
}
