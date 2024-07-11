"use client";

import React from "react";
import { Card } from "./ui/card";
import { HoverEffect } from "./ui/card-hover-effect";
import { title } from "process";
import { link } from "fs";
import Map from "./ui/map";

const Impact = () => {
  const projects = [
    {
      title: "Total Beneficiaries: 689 ",
      description:
        "Orange Coding Academy has positively impacted the lives of 689 individuals. This milestone reflects our dedication to providing high-quality education and skill development opportunities to a diverse group of learners. Each beneficiary represents a success story and a step forward in our mission to cultivate a skilled and innovative tech community.",
      link: "https://orange.com",
    },
    {
      title: "Women Participation: 42%",
      description:
        "We are proud to highlight that 42% of our beneficiaries are women, showcasing our commitment to gender equality and empowerment in the tech industry. This significant percentage reflects our proactive efforts to create an inclusive learning environment that supports and encourages women to pursue careers in technology.",
      link: "https://orange.com",
    },
    {
      title: "Operating in 5 Key Locations",
      description:
        "With operations in five key locations, Orange Coding Academy has strategically positioned itself to reach and serve diverse communities. Our presence in these locations allows us to tailor our programs to meet the specific needs of each community, ensuring accessibility and relevance. This geographical expansion marks a crucial step in our journey to democratise tech education and foster innovation across different regions.",
      link: "https://orange.com",
    },
    {
      title: "550 Hiring rate of graduates: 83% ",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://orange.com",
    },
    {
      title: "500+ of graduates of all coding academies : ",
      description:
        "Orange Coding Academy has positively impacted the lives of 689 individuals. This milestone reflects our dedication to providing high-quality education and skill development opportunities to a diverse group of learners. Each beneficiary represents a success story and a step forward in our mission to cultivate a skilled and innovative tech community.",
      link: "https://orange.com",
    },
  ];

  return (
    <section className="layout-wrapper -z-40" id="#impact">
      <h2 className="text-xl md:text-5xl font-bold mb-12 text-center">
        Our Impact
      </h2>
      <div className="max-w-5xl mx-auto px-8 ">
        <HoverEffect items={projects} />
      </div>
      <div className="w-screen min-h-screen ">
        <Map />
      </div>
    </section>
  );
};

export default Impact;
