import React, { act } from "react";
import { forwardRef, useRef, useImperativeHandle } from "react";

export default function ProjectDescription({
  projectKey,
  projects,
  handleAddTask,
  handleClearTask,
}) {
  const activeProject = projects[projectKey];

  return (
    <>
      <div className="flex text-left flex-col gap-1 my-4">
        <h3 className="text-xl font-bold text-stone-500">
          {activeProject.name}
        </h3>
        <p className="text-l font-bold text-stone-500 my-4 w-3/4">
          {activeProject.description}
        </p>
        <hr className="my-2 border-stone-500 border-t-100 w-3/4" />
        <h3 className="text-xl font-bold text-stone-500 my-3">Tasks</h3>
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
