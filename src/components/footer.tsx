import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  //     social media profiles:
  // X: https://twitter.com/ODCJordan
  // FB: https://www.facebook.com/ODCJordan
  // IG: https://www.instagram.com/odcjordan/
  // LI:https://www.linkedin.com/company/orange-jordan/?originalSubdomain=jo

  const socialMedia = [
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
  return (
    <footer className="rounded-lg shadow ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="https://orange.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image src="/logo.png" width={32} height={32} alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Orange Coding Academy
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <ul className="flex items-center justify-center gap-6 mb-4">
          {socialMedia.map((item, index) => (
            <li key={index}>
              <Link
                href={item.url}
                className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
              >
                <span className="sr-only">{item.title}</span>
                <p className="text-xl my-5">{item.title}</p>
              </Link>
            </li>
          ))}
        </ul>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <Link href="https://flowbite.com/" className="hover:underline">
            Orange Coding Academy
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
