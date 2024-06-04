import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { useStateContext } from "../../contexts/ContextProvider";
import Task from "./Task";

export default function Column({ id, title, tasks }) {
  const { currentColor } = useStateContext();
  return (
    <>
      <div className="bg-[#d1d5db] mx-1 p-2 rounded-sm text-black w-1/3 h-auto">
        <p className="flex items-center dark:text-black/70">
          {title}{" "}
          <span
            className="ml-2 text-xs font-extralight items-center text-gray-500"
            style={{ color: currentColor }}
          >
            {tasks.length} items
          </span>
        </p>

        <Droppable droppableId={id}>
          {(provided, snapshot) => {
            const {isDraggingOver} =snapshot;
            return (
              <div
                className={`  overflow-y-scroll `}
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {tasks.map((task, index) => (
                  <div className={`${isDraggingOver? `bg-[#9ca3af]/40`:``} rounded-md`}>
                  <Task key={index} index={index} task={task} />
                  </div>
                ))}
              </div>
            );
          }}
        </Droppable>
      </div>
    </>
  );
}
