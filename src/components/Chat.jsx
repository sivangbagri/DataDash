import React, { useEffect, useId, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";
import Button from "./Button";
export default function Chat() {
  const id = useId();
  const { currentColor, addTodo, todo, handleClick, removeTodo,setTodo} =
    useStateContext();

  const [todo_item, setTodo_item] = useState({});

  
  return (
    <>
      <div className="bg-white top-14 right-auto md:right-20 p-4 h-auto w-72 rounded-lg transition-all duration-300 drop-shadow-md fixed z-50">
        <div className="flex justify-between">
          <div>
            <p className="text-xl font-semibold "> To Do</p>
            <p className="text-xs font-semibold text-gray-400 ">
              {" "}
              Add your task here
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              handleClick("chat");
            }}
            style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className=" text-black">
          <div className="items-center mb-4 justify-start">
            {todo.map((item) => (
              <div
                className="flex border-b-2 my-4 justify-between transition-all duration-300"
                key={item.id}
              >
                {" "}
                <p className="flex items-center">{item.value}</p>
                <button
                  type="submit"
                  onClick={() => removeTodo(item.id)}
                  style={{ backgroundColor: currentColor }}
                  className={`text-white mb-3 p-2 text-xs ont-thin rounded-md `}
                >
                  ❌
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="flex bottom-0 mt-4 bg-white text-gray-700">
          <input
            value={todo_item.value}
            onChange={(e) => setTodo_item(e.target.value)}
            placeholder="Whats next ?"
            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
          />
          <button
            type="submit"
            onClick={() => addTodo({ id: Date.now(), value: todo_item })}
            style={{ backgroundColor: currentColor }}
            className={`text-white mb-3 p-2 text-xs ont-thin rounded-md `}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}
