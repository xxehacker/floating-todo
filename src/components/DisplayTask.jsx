import React from "react";
import { Background, Forground } from "./index";


function DisplayTask() {
  
  window.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      window.location.href = "/";
    }
  });

  
  return (
    <>
      <div className="w-full h-screen overflow-y-scroll bg-zinc-800 relative ">
        <Background />
        <Forground />
      </div>
    </>
  );
}

export default DisplayTask;
