import React from "react";
import { FaBookReader,FaLaptopCode, FaBook} from "react-icons/fa";
import { MdDoubleArrow, MdSportsCricket } from "react-icons/md";
import { RiEmotionHappyFill } from "react-icons/ri";

const page = () => {
  return (
    <div className="mt-20 container mx-auto px-5 min-h-screen">
      
      <div className="flex flex-col gap-5 md:gap-10 leading-loose text-gray-300 text-sm font-Quaternary text-justify">
        <p>
          I&apos;m a passionate{" "}
          <span className="font-bold">
            Full Stack Developer with expertise in the MERN stack, Python, and
            Django.
          </span>{" "}
          My journey into tech is driven by an insatiable curiosity to solve
          real-world problems through clean, efficient, and scalable code.
        </p>
        <p>
          With a knack for crafting seamless user experiences on the front end
          and architecting robust back-end solutions, I take pride in
          transforming ideas into impactful digital products.
        </p>
        <p>
          Beyond the code, I’m a lifelong learner who loves diving into new
          technologies, collaborating with like-minded individuals, and
          continuously refining my craft. My portfolio showcases projects that
          blend creativity, functionality, and innovation—each reflecting my
          dedication to excellence.
        </p>
        <p>
          When I’m not coding, you’ll find me indulging in my favorite game,
          cricket, or exploring ways to make everyday workflows more efficient.
        </p>
      </div>
      <div className="bg-[#181818] px-5 pt-4 pb-12 rounded-3xl mt-10 ">
        <h1 className="text-sm md:text-4xl font-bold my-5 font-Secondary">
          How My Expertise Can Benefit You?
        </h1>
        <div className="flex flex-col gap-5 md:gap-10  leading-loose text-gray-300 text-xs text-justify">
          <p className="font-Secondary leading-loose">
            As a seasoned Full Stack Developer with proficiency in the MERN
            stack, Python, and Django, I offer a comprehensive skill set to
            elevate your projects. Here&apos;s how my expertise can benefit you:
          </p>
          <ul
            className="list-disc ml-5 flex
        flex-col gap-2 "
          >
            <li>
              <span className="underline underline-orange font-bold font-Secondary">
                End-to-End Development:
              </span>{" "}
              I handle both front-end and back-end development, ensuring
              seamless integration and a cohesive user experience.
            </li>
            <li>
              <span className="underline underline-orange font-bold font-Secondary">
                Rapid Development:
              </span>{" "}
              My ability to work across the entire stack accelerates the
              development process, enabling faster time-to-market for your
              products.
            </li>
            <li>
              <span className="underline underline-orange font-bold font-Secondary">
                Scalability and Performance:
              </span>{" "}
              I design solutions that are both scalable and high-performing,
              ensuring your applications can grow and handle increased user
              demand.
            </li>
            <li>
              <span className="underline underline-orange font-bold font-Secondary">
                Continuous Support:
              </span>{" "}
              Beyond development, I offer ongoing maintenance and support to
              keep your applications running smoothly and up-to-date.
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h1 className="text-xl flex gap-2 md:text-3xl font-bold mb-5 mt-10 font-Secondary">
          <FaBookReader className="text-2xl md:text-3xl" />{" "}
          <span>Education</span>
        </h1>
        <p className="flex flex-col gap-2 mb-4">
          <span className="underline underline-orange font-bold">
            Bachelor of Technology (B.Tech)
          </span>
          <span className="font-Quaternary leading-loose flex items-center gap-2 text-gray-300">
            <MdDoubleArrow />
            MIET, Greater Noida
          </span>
        </p>
        <p className="flex flex-col gap-2 mb-4">
          <span className="underline underline-orange font-bold">
            Higher Secondary Education (12th Grade) 
          </span>
          <span className="font-Quaternary flex items-center gap-2 text-gray-300">
          <MdDoubleArrow />
            Shaiffali Public School, Greater Noida
          </span>
        </p>
        <p className="flex flex-col gap-2 mb-4">
          <span className="underline underline-orange font-bold">
            Secondary Education (10th Grade)
          </span>
          <span className="font-Quaternary flex items-center gap-2 text-gray-300">
          <MdDoubleArrow />
            Shaiffali Public School, Greater Noida
          </span>
        </p>
      </div>
      {/* Hobbies section */}
      <div>
        <h1 className="text-xl flex gap-2 md:text-3xl font-bold mb-5 mt-10 font-Secondary">
          My Hoobies
        </h1>
        <p className="flex flex-col gap-2 mb-4">
          <span className="underline underline-orange font-bold flex items-center gap-2">
          <FaLaptopCode />
            Exploring the World of Coding
          </span>
          <span className="font-Quaternary leading-loose text-gray-300 ">
            
            Embracing innovation and diving deep into the tech universe. Every click is a new adventure.
          </span>
        </p>
        <p className="flex flex-col gap-2 mb-4">
          <span className="underline underline-orange font-bold flex items-center gap-2">
          <FaBook />
            Reading 
          </span>
          <span className="font-Quaternary flex items-center gap-2 text-gray-300">
          Escaping into worlds beyond imagination, one page at a time.
          </span>
        </p>
        <p className="flex flex-col gap-2 mb-4">
          <span className="underline underline-orange font-bold flex items-center gap-2">
          <MdSportsCricket />
            Cricket
          </span>
          <span className="font-Quaternary flex items-center gap-2 text-gray-300">
          From the crease to the stands, living for the sound of the bat hitting the ball. Cricket is life.
          </span>
        </p>
      </div>
    </div>
  );
};

export default page;
