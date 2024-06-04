import React from "react";
import { Draggable } from "react-beautiful-dnd";
import {useStateContext} from "../../contexts/ContextProvider"
export default function Task({ task, index }) {

  const { currentColor } = useStateContext();

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
            className="bg-purple-700 my-3 p-2 rounded-md opacity-80"
          >
            <div className="flex ">
              <p className="text-xs font-thin ">#{task.id}</p>
            </div>
            <div className="flex">
              <p className="text-white text-sm">{task.title}</p>
            </div>
            {provided.placeholder}
          </div>
        );
      }}
    </Draggable>
  );
}
