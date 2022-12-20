import React from "react";

export default function Spin() {
  return (
    <div className="flex justify-center items-center gap-x-2">
      <span className=" inline-block w-6 h-6 rounded-full border-r-4 border-l-4 border-blue/50 animate-spin"></span>
      sending...
    </div>
  );
}
