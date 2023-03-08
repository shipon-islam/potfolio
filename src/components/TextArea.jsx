import React from "react";

export default function TextArea({ label, type = "text", ...rest }) {
  return (
    <div>
      <label
        htmlFor={label}
        className="capitalize font-medium pb-1 pl-1 inline-block"
      >
        {label}
      </label>
      <textarea
        type={type}
        className="outline-none block border-blue border-2 bg-transparent py-3 pl-2 w-full rounded-lg "
        name={label}
        {...rest}
      ></textarea>
    </div>
  );
}
