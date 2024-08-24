import React from "react";
import { useState, useRef } from "react";
import CreateProjectDialog from "./CreateProject";
import Button from "./Button";

export default function SideBar({
  projects,
  handleSaveProject,
  handleChooseProject,
}) {
  const createProjectRef = useRef();

  return (
    <>
      <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="font-bold uppercase md:text-xl text-stone-200">
          Your Projects
        </h2>
        <Button
          onClick={() => {
            createProjectRef.current.open();
          }}
        >
          + Add Project
        </Button>
        <ul>
          {Object.entries(projects).map(([key, value]) => (
            <li key={key}>
              <button
                className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                onClick={() => handleChooseProject(key)}
              >
                {value.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
