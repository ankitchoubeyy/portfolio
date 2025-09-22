import React from "react";
import Image from "next/image";
import { FaArrowCircleDown } from "react-icons/fa";

const Resume = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-[#ec6313] hover:bg-[#b95419] transition-all duration-300 px-4 py-2 rounded-2xl gap-2 font-Secondary ">
        <FaArrowCircleDown />
        <a href="/Ankit_Choubey_Resume.pdf" download={true}>
          Resume
        </a>
      </div>
    </>
  );
};

export default Resume;
