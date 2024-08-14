import React from "react";
import headerImg from "../assets/no-projects.png";
import Button from "./Button";
export default function NoProjectSelected() {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={headerImg} className="w-16 h-16 object-contain mx-auto" />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 my-4">
        Select a project or get started with a new one
      </p>
      <Button>Create a new project</Button>
    </div>
  );
}
