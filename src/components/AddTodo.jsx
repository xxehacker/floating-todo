import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";
import { useNavigate } from "react-router-dom";

function AddTodo() {
  const [taskname, setTaskname] = useState("");
  const [taskdes, setTaskdes] = useState("");
  const [bgcolor, setBgcolor] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hanldedTaskData = (e) => {
    e.preventDefault();

    if (taskname.trim() === "") {
      toast.error("Please fill Task Name");
    } else {
      dispatch(addTodo({ taskname, taskdes, bgcolor }));
      toast.success("Task Added Successfully");
      setTaskname("");
      setTaskdes("");
      setBgcolor("");

      setTimeout(() => {
        toast.success("Redirecting to My ToDo");
      }, 1000);

      setTimeout(() => {
        navigate("/mytodo");
      }, 2000);

      console.log("AddTodo :", taskname, taskdes, bgcolor);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col gap-5 flex-wrap justify-center items-center p-2"
    style={{
      // background: "radial-gradient(circle at 50% 100%, #f7ff0a, #ffd000, #ffa026, #ff7144, #f9455b, #d71c6d, #ab0478, #77107b)"
      background: "radial-gradient(circle at -10% 100%, #b70c00, #ba003b, #bc0060, #bf0086, #c200b4, #a100c5, #7b00c9, #5900cd)"
    }}
    
    >
      <ToastContainer />
      <form
        onSubmit={hanldedTaskData}
        className="relative p-2 w-full min-h-1/2 lg:w-[80%] bg-zinc-700 shadow-white rounded-lg 
        border-4"
        style={{
          borderImage:
            "linear-gradient(to right, #9BEC00 , #FFAF00 , #F9E400, #F5004F,white , purple) 1",
        }}
      >
        <div className="w-full h-full  grid items-center gap-3">
          <label htmlFor="" className="text-xl text-white font-semibold lg:text-4xl md:text-2xl sm:text-xl" >
            Task Name:
          </label>
          <input
            type="text"
            className="h-14 w-full mb-4 p-2 font-semibold lg:text-2xl md:text-2xl sm:text-xl text-lg"
            placeholder="Enter Task To Store: "
            onChange={(e) => setTaskname(e.target.value)}
          />
          <label htmlFor="" className="font-semibold lg:text-4xl md:text-2xl sm:text-xl text-white">
            Task Description:
          </label>
          <textarea
            className="h-32 w-full mb-4  p-2 font-semibold lg:text-2xl md:text-2xl sm:text-xl text-lg"
            type="text"
            placeholder="Enter Task Description: "
            onChange={(e) => setTaskdes(e.target.value)}
          />
          <label htmlFor="" className="font-semibold lg:text-4xl md:text-2xl sm:text-xl  text-white">
            Select a Color:
          </label>
          <select
            className="w-1/4 h-10 p-1 mb-4 font-semibold lg:text-2xl md:text-2xl sm:text-xl text-lg uppercase" 
            onClick={(e) => setBgcolor(e.target.value)}
          >
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
            <option value="orange">Orange</option>
            <option value="pink">Pink</option>
            <option value="gray">Gray</option>
            <option value="purple">Purple</option>
          </select>
          <input
            type="submit"
            value="submit"
            className="w-[10rem] h-16 text-white font-semibold hover:bg-purple-800 delay-75 bg-purple-500 cursor-pointer rounded-lg text-lg uppercase border-4 border-white"
          />
        </div>
      </form>

      <div className="w-1/7 h-16 grid items-center rounded-xl mb-10">
        <button
          className="w-full h-full px-10 py-5 bg-green-500 rounded-xl text-lg text-white font-semibold hover:bg-green-600 uppercase 
          border-4 border-white"
        >
          <Link to={"/mytodo"}> My ToDo </Link>
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
