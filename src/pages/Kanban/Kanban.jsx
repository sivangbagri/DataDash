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
    if (source.destinationId == destination.draggableId) return;

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
        <h2> Prgress </h2>
        <div className="flex justify-center">
          <Column title="to do" tasks={incomplete} id={"1"} />
          <Column title="done" tasks={completed} id={"2"} />
          <Column title="backlog" tasks={[]} id={"3"} />
        </div>
      </DragDropContext>
    </>
  );
}
