import React from "react";
import { useState } from "react";

function BGColourchanger() {
  const [colour, setcolour] = useState("olive");

  return (
    <div className="w-full h-sceen duration-200" style={{ background: colour }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div ClassName="flex flex-wrap justify-center gap-3 shadow-lg bg-white">
          <button ClassName="outline-none px-4 rounded-full" style={{ background: "red" }}>
            red
          </button>
        </div>
      </div>
    </div>
  );
}

export default BGColourchanger;
