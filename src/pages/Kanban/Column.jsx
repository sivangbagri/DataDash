import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

export default function Column({ id, title, tasks }) {
  return (
    <>
      <div className="flex bg-red-700 p-10">
        {title}

        <Droppable droppableId={id}>
          {(provided, snapshot) => {
            return (
              <div
                className="bg-blue-400 h-auto overflow-y-scroll "
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {tasks.map((task, index) => (
                  <Task key={index} index={index} task={task} />
                ))}
              </div>
            );
          }}
        </Droppable>
      </div>
    </>
  );
}
