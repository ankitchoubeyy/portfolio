import React from "react";

function ProjectTag({ tag, onClick, isSelected }) {
  const buttonStyles = isSelected
    ? "text-white border-orange-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2  px-3 md:px-6 py-2 md:py-3 text-sm md:text-xl cursor-pointer`}
      onClick={() => onClick(tag)}
    >
      {tag}
    </button>
  );
}

export default ProjectTag;
