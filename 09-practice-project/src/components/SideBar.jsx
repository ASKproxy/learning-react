import React from "react";
import { useState, useRef } from "react";
import CreateProjectDialog from "./Project";

export default function SideBar({
  projects,
  handleSaveProject,
  handleChooseProject,
}) {
  const createProjectRef = useRef();

  // const handleNewTask = function (projectKey, taskName) {
  //   const existingDetails = projects[projectKey];
  //   const taskList = existingDetails.tasks;
  //   const updatedTaskList = [...taskList, taskName];
  //   const updatedDetails = { ...existingDetails, ["tasks"]: updatedTaskList };
  //   setProjects((prevProjects) => ({
  //     ...prevProjects,
  //     [projectKey]: updatedDetails,
  //   }));
  // };

  return (
    <>
      <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        {/* <CreateProjectDialog
          ref={createProjectRef}
          saveProjectHandler={handleSaveProject}
        /> */}
        <h2 className="font-bold uppercase md:text-xl text-stone-200">
          Your Projects
        </h2>
        <button
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
          onClick={() => {
            createProjectRef.current.open();
          }}
        >
          + Add Project
        </button>
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
