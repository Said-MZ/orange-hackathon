import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section id="about" className="layout-wrapper my-16">
      <h2 className="text-xl md:text-3xl font-bold mb-12 text-center">
        About Us
      </h2>
      <p className="text-sm md:text-md text-left">
        In response to the escalating demand for skilled programmers within both
        local and regional markets, Orange Jordan has steadfastly committed
        itself to nurturing a new generation proficient in these crucial skills.
        The Coding Academy by Orange, inaugurated in June 2019, in collaboration
        with Simplon.co, embarked on its mission to provide comprehensive,
        tuition-free 6-month training courses in coding languages, complemented
        by a month-long internship within tech and tech-enabled companies. Each
        year, students are selected to join the Academy through a competitive
        admissions process. Building on its initial success, our coding academy
        graduates now boast an impressive 85% employment rate across all
        cohorts. This affirms the efficiency of the academys teaching
        methodology, curricula, and academic staff. Moreover, the academy has
        expanded across the kingdoms governorates. It has established academies
        in Irbid, Zarqa, Balqa, and Aqaba, further extending its impact and
        accessibility.
      </p>
      <div className=" mt-8 flex flex-col md:flex-row  justify-center items-start w-full gap-12 text-center md:text-left">
        <Image
          src="/mission.svg"
          alt="Hero"
          width={450}
          height={450}
          className="mx-auto "
        />
        <div>
          <h2 className="text-3xl font-bold mt-8 mb-2">Mission and Vision</h2>
          <ul>
            <li>
              Train and empower Youth to enhance their opportunities in the
              digital sector in Jordan
            </li>
            <li>
              Meet the market need of local and global markets to meet the
              increasing demand for qualified programmers.
            </li>
            <li>
              Lead the digital transformation in the local community by
              transforming the youth from technology consumers to producers.
            </li>
            <li>Give youth a second chance to develop professionally.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

// In response to the escalating demand for skilled programmers within both local and regional markets, Orange Jordan has steadfastly committed itself to nurturing a new generation proficient in these crucial skills. The Coding Academy by Orange, inaugurated in June 2019, in collaboration with Simplon.co, embarked on its mission to provide comprehensive, tuition-free 6-month training courses in coding languages, complemented by a month-long internship within tech and tech-enabled companies. Each year, students are selected to join the Academy through a competitive admissions process. Building on its initial success, our coding academy graduates now boast an impressive 85% employment rate across all cohorts. This affirms the efficiency of the academy’s teaching methodology, curricula, and academic staff. Moreover, the academy has expanded across the kingdom's governorates. It has established academies in Irbid, Zarqa, Balqa, and Aqaba, further extending its impact and accessibility. Mission and vision: -Train and empower Youth to enhance their opportunities in the digital sector in Jordan

// Meet the market need of local and global markets to meet the increasing demand for qualified programmers. -Lead the digital transformation in the local community by transforming the youth from technology consumers to producers. -Professional development Give youth a second chance to develop professionall
