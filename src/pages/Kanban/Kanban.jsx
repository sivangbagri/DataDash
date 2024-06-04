import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";

export default function Kanban() {
  const [completed, setCompleted] = useState([]);
  const [incomplete, setIncomplete] = useState([]);

  useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((json) => {
          setCompleted(json.filter((task) => task.completed));
          setIncomplete(json.filter((task) => !task.completed));
        });
    },  
    []);

  const handleDrageEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination || source.droppableId === destination.droppableId) return;

    //remove

    if (source.droppableId == 2) {
      setCompleted(removeItemById(draggableId, completed));
    } else {
      setIncomplete(removeItemById(draggableId, incomplete));
    }

    // get

    const task = findItemById(draggableId, [...incomplete, ...completed]);

    // add item
    if (destination.droppableId == 2) {
      setCompleted([{ ...task, completed: !task.completed }, ...completed]);
    } else {
      setIncomplete([{ ...task, completed: !task.completed }, ...incomplete]);
    }

    function findItemById(id, array) {
      return array.find((item) => item.id == id);
    }

    function removeItemById(id, array) {
      return array.filter((item) => item.id != id);
    }
  };
  return (
    <>
      <DragDropContext onDragEnd={handleDrageEnd}>
        <div className=" text-xl text-white font-semibold flex justify-center mt-5">
          <Column title="To do" tasks={incomplete} id={"1"} />
          <Column title="Done" tasks={completed} id={"2"} />
          <Column title="Backlog" tasks={completed} id={"3"} />
        </div>
      </DragDropContext>
    </>
  );
}
