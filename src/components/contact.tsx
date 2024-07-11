import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <section className="bg-primary text-background p-12" id="#contact">
      <h1 className="text-4xl font-bold text-center py-8">Contact</h1>
      <p>Official physical addresses of each academy:</p>
      <ul className="list-disc pl-8">
        <li>
          Amman: (Orange Digital Village - King Alhussain St. – Near Dakhliya
          Circle - Amman/
          <Link href="https://maps.app.goo.gl/sRNfCjtxheizZ6mH6">Map</Link> /
          <Link href="mailto:codingacademy.ojo@orange.com">
            codingacademy.ojo@orange.com
          </Link>
          )
        </li>
        <li>
          Irbid: (Downtown, Al-Sheikh Khalil St., Near Wasfi At-Tal Circle.
          <Link href="https://maps.app.goo.gl/kbuzFJoPyFz8yrbQ8">Map</Link> /
          <Link href="mailto:codingacademyirbid.ojo@orange.com">
            codingacademyirbid.ojo@orange.com
          </Link>
          )
        </li>
        <li>
          Zarqa: (Al-NuzhLink District, Near Government Departments Complex
          traffic light
          <Link href="https://maps.app.goo.gl/6ScKm8vFw7EqtfwC8">Map</Link> /
          <Link href="mailto:codingacademyzarqa.ojo@orange.com">
            codingacademyzarqa.ojo@orange.com
          </Link>
          )
        </li>
        <li>
          Balqa: Al Salt Vocational Training Corporation
          <Link href="https://maps.app.goo.gl/BG5cupSiKv4BmYWt8">Map</Link> /
          <Link href="mailto:codingacademybalqa.ojo@orange.com">
            codingacademybalqa.ojo@orange.com
          </Link>
        </li>
        <li>
          Aqaba: Fifth District - Opposite the Social Security Office
          <Link href="https://maps.app.goo.gl/TTuVkT3h4Kwvyr2Y8">Map</Link> /
          <Link href="mailto:codingacademyaqaba.ojo@orange.com">
            codingacademyaqaba.ojo@orange.com
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
