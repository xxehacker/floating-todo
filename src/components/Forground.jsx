import React, { useRef } from "react";
import { Card } from "./index";
import { useSelector } from "react-redux";



const Forground = () => {
  const ref = useRef(null);
  const todos = useSelector((state) => state.todos);
  console.log("Forground :",todos);

  return (
    <>
      <div
        className="p-2 w-full h-screen  sm:h-full  z-10 flex gap-4 flex-wrap justify-center items-center absolute sm:fixed ooverflow-y-scroll sm:overflow-hidden"
        ref={ref}
      >
        {todos.map((card) => (
          <Card
            key={card.id}
            reference={ref}
            id={card.id}
            taskName={card.taskName}
            taskDescription={card.taskDes}
            bgColor={card.bgColor}
          />
        ))}
      </div>
    </>
  );
};

export default Forground;
