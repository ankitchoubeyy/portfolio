"use client";
import React from "react";
import Image from "next/image";
import aboutImg from "../assets/profilepic.png";
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
import finance from "../assets/finance.png";

function About() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 md:px-0" id="about">
      \
      <h2 className="text-white mb-14 text-center font-extrabold text-4xl md:text-5xl  ">
        About Me
      </h2>
      <div className="grid md:grid-cols-8 gap-6 place-items-center">
        <div className="w-full md:col-span-5 relative bg-white/10 background-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-700 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6">
            <Image src={book} alt="book" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80">xyz</h2>
              <p className="text-lg text-white/70 mt-2 ">abcde</p>
            </div>
          </div>
        </div>

        <div className="w-full md:col-span-3 relative bg-white/10 background-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-700 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6">
            <Image src={card} alt="book" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80">xyz</h2>
              <p className="text-lg text-white/70 mt-2 ">abcde</p>
            </div>
          </div>
        </div>

        <div className="w-full md:col-span-3 relative bg-white/10 background-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-700 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6">
            <Image src={pc} alt="book" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80">xyz</h2>
              <p className="text-lg text-white/70 mt-2 ">abcde</p>
            </div>
          </div>
        </div>

        <div className="w-full md:col-span-5 relative bg-white/10 background-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-700 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6">
            <Image src={finance} alt="book" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80">xyz</h2>
              <p className="text-lg text-white/70 mt-2 ">abcde</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
