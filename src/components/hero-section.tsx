import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const Hero = () => {
  return (
    <section className="layout-wrapper pt-32" id="#hero">
      <div className="flex flex-col md:flex-row  justify-center items-start w-full gap-12 text-center md:text-left">
        <div className="mt-8 w-full block mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-5xl font-extrabold">
            <span className=" bg-gradient-to-r from-[#ff5900] to-[#FFA500] text-transparent bg-clip-text">
              Orange{" "}
            </span>
            Jordan’s <br /> Future{" "}
            <span className="bg-gradient-to-r from-[#ff5900] to-[#FFA500] text-transparent bg-clip-text">
              Coders
            </span>
          </h1>
          <p className="opacity-80 text-sm sm:text-lg">
            Join our free 6-month coding program and transform your career.
          </p>
          <Button className="block text-center mx-auto md:mx-0 w-48 mt-6 mb-2">
            Apply Now
          </Button>
          <p className="text-xs opacity-50 text-center md:text-left">
            Limited spots available. Don’t miss your chance to innovate!
          </p>
          <div className="flex justify-center md:justify-start mt-4 rounded-full">
            {Array.from({ length: 5 }).map((_, index) => (
              <Avatar key={index} className="-mr-2">
                <AvatarFallback className="border-2 flex items-center justify-center w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded-full">
                  {index + 1}
                </AvatarFallback>
                <AvatarImage
                  width={32}
                  height={32}
                  className="rounded-full w-8 h-8 bg-cover "
                  src={`${
                    index === 4
                      ? "person" + (index + 1) + ".png"
                      : "person" + (index + 1) + ".webp"
                  }`}
                  alt={`User ${index + 1}`}
                />
              </Avatar>
            ))}
            <div className="ml-4 ">
              <Image src="/stars.png" alt="User 5" width={108} height={23.2} />
              <p className="text-xs opacity-50">+500 students enrolled</p>
            </div>
          </div>
        </div>
        <Image
          src="/hero.svg"
          alt="Hero"
          width={450}
          height={450}
          className="mx-auto "
        />
      </div>
    </section>
  );
};

export default Hero;
