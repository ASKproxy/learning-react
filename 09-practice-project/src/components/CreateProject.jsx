import React, { useReducer } from "react";
import { forwardRef, useRef, useImperativeHandle } from "react";
import Input from "./Input";
import DateInput from "./DateInput";

export default function CreateProject({ handleSaveProject, handleCancel }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  return (
    <>
      <div className="w-[35rem] mt-16">
        <menu className="flex justify-end gap-4 my-4">
          <li>
            <button
              className=" text-stone-800 hover:text-stone-950 bg-stone-300 rounded px-4 py-2 hover:bg-stone-400"
              onClick={() => {
                handleCancel();
              }}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="bg-cyan-300 text-stone-800 hover:text-stone-950 rounded-md px-6 py-2 hover:bg-cyan-400"
              onClick={() => {
                handleSaveProject(
                  titleRef.current.value,
                  descriptionRef.current.value,
                  dateRef.current.value
                );
              }}
            >
              Save
            </button>
          </li>
        </menu>
        <div className="flex-col items-center justify-end space-y-4">
          <Input ref={titleRef} label="Title" />
          <Input ref={descriptionRef} label="Description" isTextArea />
          <DateInput ref={dateRef} label="Due Date" />
        </div>
      </div>
    </>
  );
}
