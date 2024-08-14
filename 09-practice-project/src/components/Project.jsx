import React, { useReducer } from "react";
import { forwardRef, useRef, useImperativeHandle } from "react";
import Input from "./Input";

export default function CreateProject() {
  return (
    <>
      <div className="w-[35rem] mt-16">
        <menu className="flex justify-end gap-4 my-4">
          <li>
            <button className=" text-stone-800 hover:text-stone-950 bg-stone-300 rounded px-4 py-2 hover:bg-stone-400 ">
              Cancel
            </button>
          </li>
          <li>
            <button className="bg-cyan-300 text-stone-800 hover:text-stone-950 rounded-md px-6 py-2 hover:bg-cyan-400 ">
              Save
            </button>
          </li>
        </menu>
        <div className="flex-col items-center justify-end space-y-4">
          <Input label="Title" />
          <Input label="Description" isTextArea />
          <Input label="Due Date" />
        </div>
      </div>
    </>
  );
}
const CreateProjectDialog = forwardRef(function CreateProjectDialog(
  { saveProjectHandler },
  ref
) {
  const showCreateProject = useRef(false);
  const formData = useRef({
    name: "",
    description: "",
    dueDate: "",
  });

  //   useImperativeHandle(ref, () => {
  //     return {
  //       open() {
  //         projectDialog.current.showModal();
  //       },
  //     };
  //   });
  return (
    <>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end">
          <li>
            <button>Cancel</button>
          </li>
          <li>
            <button
            //   onClick={() => {
            //     console.log(formData);
            //     saveProjectHandler(
            //       formData.current.name,
            //       formData.current.description,
            //       formData.current.dueDate
            //     );
            //     // projectDialog.current.close();
            //   }}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input label="Title" />
          <Input label="Description" isTextArea />
          <Input label="Due Date" />
        </div>
      </div>
      {/* <dialog
        ref={projectDialog}
        className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
      >
        <div className="flex flex-col space-y-4 mt-8">
          <input
            type="text"
            className="w-64 px-2 py-1 rounded-sm bg-stone-200"
            name="name"
            placeholder="project name"
            defaultValue={formData.current.name}
            onChange={(event) => {
              formData.current.name = event.target.value;
            }}
          />
          <input
            type="text"
            className="w-64 px-2 py-1 rounded-sm bg-stone-200"
            name="description"
            placeholder="no one ever reads this anyway"
            defaultValue={formData.current.name}
            onChange={(event) => {
              formData.current.description = event.target.value;
            }}
          />
          <input
            type="date"
            name="dueDate"
            className="w-64 px-2 py-1 rounded-sm bg-stone-200"
            defaultValue={formData.current.dueDate}
            onChange={(event) => {
              formData.current.dueDate = event.target.value;
            }}
          />
        </div>
      </dialog> */}
    </>
  );
});

// export default CreateProjectDialog;
