import React from "react";

const page = () => {
  return (
    <div className="mt-28 container mx-auto px-5 min-h-screen text-justify">
      <h1 className="text-xl md:text-4xl font-bold my-10 font-Secondary">
        Hi, I&apos;m Ankit Choubey
      </h1>
      <div className="flex flex-col gap-5 md:gap-10 font-Tertiary leading-relaxed text-gray-300">
        <p>
          I&apos;m a passionate{" "}
          <span className="underline underline-orange">
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
      <div className="bg-[#181818] px-5 pt-4 pb-12 rounded-3xl mt-10">
        <h1 className="text-xl md:text-4xl font-bold my-10 font-Secondary">
          How My Expertise Can Benefit You?
        </h1>
        <div className="flex flex-col gap-5 md:gap-10 font-Tertiary leading-relaxed text-gray-300 text-justify">
          <p>
            As a seasoned Full Stack Developer with proficiency in the MERN
            stack, Python, and Django, I offer a comprehensive skill set to
            elevate your projects. Here&apos;s how my expertise can benefit you:
          </p>
          <ul
            className="list-disc ml-5 flex
        flex-col gap-2 text-justify"
          >
            <li>
              <span className="underline underline-orange font-bold">
                End-to-End Development:
              </span>{" "}
              I handle both front-end and back-end development, ensuring
              seamless integration and a cohesive user experience.
            </li>
            <li>
              <span className="underline underline-orange font-bold">Rapid Development:</span> My ability to work across the entire stack
              accelerates the development process, enabling faster
              time-to-market for your products.
            </li>
            <li>
              <span className="underline underline-orange font-bold">Scalability and Performance:</span> I design solutions that are both
              scalable and high-performing, ensuring your applications can grow
              and handle increased user demand.
            </li>
            <li>
              <span className="underline underline-orange font-bold">Continuous Support:</span> Beyond development, I offer ongoing
              maintenance and support to keep your applications running smoothly
              and up-to-date.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
