import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function ProjectCard({ imgURL, title, description, gitUrl, previewUrl }) {
  return (
    <div>
      <div
        className="min-h-60 md:min-h-74 rounded-t-xl mt-10 relative group"
        style={{ background: `url(${imgURL})`, backgroundSize: "cover" }}
      >
        <div className="overlay gap-6 flex-items items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            className="w-14 h-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="w-14 h-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-2xl font-semibold mb-2">{title}</h5>
        <p className="text-orange-400">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
