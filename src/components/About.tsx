"use client";
import React from "react";
import Image from "next/image";
import aboutImg from "../assets/profilepic.png";
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
import finance from "../assets/finance.png";
import { TypeAnimation } from "react-type-animation";


function About() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 md:px-0 none hidden" id="about">
      \
      <h2 className="text-white mb-14 text-center font-extrabold text-4xl md:text-5xl">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row gap-5 text-white lg:max-w[800px] px-16 justify-around">
        <div className="md:w-[400px]">
          <Image
            src="/images/Formal.jpg"
            width={180}
            height={50}
            alt="my image"
            className="md:h-[400px] w-auto rounded-md hidden md:block"
          ></Image>
        </div>
        <div className="flex flex-col bg-[#181818] rounded-md p-4">
          <h1 className="text-2xl md:text-4xl font-bold">Ankit Choubey</h1>
          <h5 className="my-2 text-orange-400">
            Full stack Developer | Djano | MERN
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas
            distinctio tempore corrupti reprehenderit commodi in quam, incidunt
            amet numquam.{" "}
          </p>
          <h3 className="text-[20px] font-bold my-2">Education</h3>
          <p>Mangalmay Institute of Engineering and Technology, <span className="text-orange-400">2021 -2025</span> | ( B.Tech - CSE )</p>
          <button className="bg-orange-400 hover:bg-orange-600 py-2 px-10 md:max-w-[300px] rounded-md my-5 font-bold text-[20px] border-none">Download Resume</button>
        </div>
      </div>
    </div>
  );
}

export default About;
