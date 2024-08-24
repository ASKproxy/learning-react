import React, { useReducer } from "react";
import { forwardRef, useRef, useImperativeHandle } from "react";

const DateInput = forwardRef(function DateInput(
  { label, isTextArea, ...props },
  ref
) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-blue-500 focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm uppercase font-bold text-stone-500">
        {label}
      </label>
      <input type="date" ref={ref} className={classes} {...props} />
    </p>
  );
});

export default DateInput;
