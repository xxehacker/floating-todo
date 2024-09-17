import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { removeTodo} from "../store/todoSlice";
import { toast } from "react-toastify";
// import classNames from 'classnames';

function Card({ id, reference, bgColor, taskName, taskDescription }) {
  const dispatch = useDispatch();
  console.log(" Card:", id, bgColor, taskName, taskDescription);

  // not working 
  // const bgClass = String(bgColor) ? `bg-${bgColor}-500` : 'bg-green-500';

  const getBgClass = (bgColor) => {
    if (bgColor === 'green') {  
      return 'bg-green-500/90';
    } else if (bgColor === 'red') {
      return 'bg-red-500/90';
    } else if (bgColor === 'blue') {
      return 'bg-blue-500/90';
    } else if (bgColor === 'yellow') {
      return 'bg-yellow-500/90';
    } else if (bgColor === 'purple') {
      return 'bg-purple-500/90  ';
    } else if (bgColor === 'orange') {
      return 'bg-orange-500';
    } else if (bgColor === 'pink') {
      return 'bg-pink-500/90';
    } else if (bgColor === 'gray') {
      return 'bg-gray-500/90';
    } else if (bgColor === 'purple') {
      return 'bg-purple-500/90';
    } else {
      return 'bg-green-500';
    }
  };
  
  return (
    <motion.div
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      drag
      className=" relative w-[45%] h-[30%] sm:w-44 sm:h-52 md:w-48 md:h-56 lg:w-64 lg:h-72
      rounded-[1rem] sm:rounded-[30px] cursor-pointer px-5 py-2 lg:py-10 bg-zinc-900/90 text-white overflow-hidden flex flex-col lg:gap-2 sm:gap-1 md:gap-2 gap-[0.2rem] shadow-gray-300 shadow-inner"
    >
      <FaRegFileAlt />
      <h2 className="text-xs sm:text-[0.001rem] lg:text-xl font-bold leading-none translate-tighter ">
        {taskName}
      </h2>
      <h5 className="text-xs leading-tigher mt-2 lg:mt-5 font-semibold lg:text-xl overflow-x-hidden overflow-y-scroll">
        {taskDescription}
      </h5>

      <div
        
        className={`absolute bottom-0 w-full h-10 lg:h-14 left-0 py-3 px-8 text-white flex justify-center items-center shadow-black shadow-inner ${getBgClass(bgColor)}`}
      >
        <div className="flex w-full justify-around items-center">
      
          <span
            className="w-8 h-8 hover:bg-orange-500 bg-zinc-300 rounded-full flex items-center justify-center hover:cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              dispatch(removeTodo(id));
              toast.success("Task Deleted Successfully");
            }}
          >
            <FaDeleteLeft color="black" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
