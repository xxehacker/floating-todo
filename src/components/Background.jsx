import React from "react";

function Background() {
  return (
    <div className="w-full h-screen sm:h-full absolute sm:fixed z-2 overflow-y-scroll sm:overflow-hidden ">
      <div className="absolute top-[5%] w-full py-10 flex justify-center font-semibold text-xl">
        Todo App
      </div>

      <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] leading-none translate-tighter font-semibold text-8xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
        Floating Todo
      </h1>
    </div>
  );
}

export default Background;
