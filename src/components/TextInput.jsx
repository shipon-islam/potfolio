import React from "react";

export default function TextInput({
  label,
  type = "text",
  my = "my-0",
  ...rest
}) {
  return (
    <div className={my}>
      <label
        htmlFor={label}
        className="capitalize font-medium pb-1 pl-1 inline-block"
      >
        {label}
      </label>
      <input
        className="outline-none block border-blue/50 border-2 bg-transparent py-3 pl-2 w-full rounded-lg"
        type={type}
        name={label}
        {...rest}
      />
    </div>
  );
}
