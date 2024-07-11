import React from "react";

import { Button } from "./ui/button";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";

const Join = () => {
  // join us now page cta
  return (
    <section className="layout-wrapper pt-32 text-center my-12" id="join">
      <div className="flex flex-col md:flex-row  justify-center items-start w-full gap-12 text-center">
        <div className="mt-8 w-full block mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-5xl font-extrabold">
            <span className=" bg-gradient-to-r from-[#ff5900] to-[#FFA500] text-transparent bg-clip-text">
              Orange{" "}
            </span>
            Jordan’s Future{" "}
            <span className="bg-gradient-to-r from-[#ff5900] to-[#FFA500] text-transparent bg-clip-text">
              Coders
            </span>
          </h1>
          <p className="opacity-80 text-sm sm:text-lg">
            Join our free 6-month coding program and transform your career.
          </p>
          <Button className="block text-center mx-auto  w-48 mt-6 mb-2">
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Join;
