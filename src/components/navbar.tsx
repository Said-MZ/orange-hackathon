"use client";

import React from "react";
import { ModeToggle } from "./ui/theme-btn";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  // to do: replace with social media icons later
  const socials: [
    {
      title: string;
      url: string;
    }
  ] = [
    {
      title: "Twitter",
      url: "https://twitter.com/ODCJordan",
    },
    {
      title: "Facebook",
      url: "https://www.facebook.com/ODCJordan",
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/odcjordan/",
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/company/orange-jordan/?originalSubdomain=jo",
    },
  ];

  const links: [
    {
      title: string;
      url: string;
    }
  ] = [
    {
      title: "Home",
      url: "#hero",
    },
    {
      title: "About Us",
      url: "#about",
    },
    {
      title: "Our Impact",
      url: "#impact",
    },
    {
      title: "Locations",
      url: "#locations",
    },
    {
      title: "Contact Us",
      url: "#contact",
    },
  ];

  const data = [
    // Home, About Us, Our Impact, Locations, and Contact Us
    {
      title: "Home",
      url: "#hero",
    },
    {
      title: "About Us",
      url: "#about",
    },
    {
      title: "Our Impact",
      url: "#impact",
    },
    {
      title: "Locations",
      url: "#locations",
    },
    {
      title: "Contact Us",
      url: "#contact",
    },
  ];

  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <nav>
      <div className="layout-wrapper flex justify-between items-center py-4">
        {/* backdrop */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } sm:hidden  fixed inset-0 bg-black bg-opacity-50 z-40`}
          onClick={() => setIsOpen(false)}
        ></div>
        {/* sidebar */}
        <div
          className={`${
            isOpen ? "left-0" : "-left-full"
          } sm:hidden fixed top-0 h-full w-full  bg-white dark:bg-black z-50 transition-all duration-300 grid place-items-center text-center`}
        >
          <div>
            <div className="flex justify-end p-4"></div>
            <ul className="flex flex-col gap-6 p-4">
              {data.map((item, index) => (
                <li key={index}>
                  <Link
                    className="hover:brightness-150  dark:hover:opacity-75  transition-all"
                    href={item.url}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex gap-4 p-4 opacity-45">
              {socials.map((item, index) => (
                <li key={index}>
                  <Link
                    className="hover:brightness-150  dark:hover:opacity-75   transition-all"
                    href={item.url}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
              <ModeToggle />
            </div>
          </div>
        </div>
        <Link
          className="hover:opacity-50  dark:hover:opacity-75  transition-all"
          href={"/"}
        >
          <Image
            src="/logo.png"
            alt="Orange Coding Academy"
            width={64}
            height={64}
          />
        </Link>

        <ul className="  justify-between gap-6 hidden sm:flex">
          {data.map((item, index) => (
            <li key={index}>
              <Link
                className="hover:brightness-150  dark:hover:opacity-75 "
                href={item.url}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden sm:block">
          <ModeToggle />
        </div>
        <div className="flex gap-4 sm:hidden">
          <div
            className="z-50 sm:hidden  flex flex-col gap-3 items-end justify-center dark:hover:brightness-125   hover:opacity-75  cursor-pointer transition-all h-8"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`transition-all duration-300 w-8 ${
                isOpen
                  ? "bg-red-600 dark:bg-red-700 -rotate-45 translate-y-[7px] h-[3px]"
                  : "bg-black dark:bg-white w-8 h-[2px]"
              }`}
            ></div>
            <div
              className={`transition-all duration-300   ${
                isOpen
                  ? "w-8 bg-red-600 dark:bg-red-700 rotate-45 -translate-y-2 h-[3px]"
                  : "bg-black dark:bg-white w-6 h-[2px]"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
