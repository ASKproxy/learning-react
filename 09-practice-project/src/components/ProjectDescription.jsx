import React, { act } from "react";
import { forwardRef, useRef, useImperativeHandle } from "react";

// const ProjectDescription = forwardRef(function ProjectDescription(
//   { projectKey, projects },
//   ref
// ) {});

export default function ProjectDescription({
  projectKey,
  projects,
  handleAddTask,
  handleClearTask,
}) {
  const activeProject = projects[projectKey];

  return (
    <>
      <div className="flex text-center flex-col gap-1 my-4">
        <h2>{activeProject.name}</h2>
        <p>{activeProject.description}</p>
        <br />
        <h4>Tasks</h4>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            className="px-2 py-1 border rounded"
            placeholder="Enter task name"
          />
          <button className="px-4 py-1 bg-blue-500 text-white rounded">
            Add Task
          </button>
        </div>

        <ul>
          {activeProject.tasks.map(
            (t, index) => console.log(t.name)
            // <li key={t.name}></li>
          )}
        </ul>
      </div>
    </>
  );
}
