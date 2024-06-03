import React from "react";
import { Draggable } from "react-beautiful-dnd";

export default function Task({ task, index }) {
  const bgcolorChange = (props) => {
    return props.isDragging
      ? "green-500"
      : props.isDraggable
      ? props.isBacklog
        ? "red-800"
        : "red-200"
      : props.isBacklog
      ? "blue-900"
      : "black";
  };
  return (
    <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            {...provided.draggableProps}
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
          >
            <div className="flex justify-start p-2 ">
              <p>#{task.id}</p>
            </div>
            <div className="flex justify-center p-2 ">
              <p className="text-white">#{task.title}</p>
            </div>
            {provided.placeholder}
          </div>
        );
      }}
    </Draggable>
  );
}
