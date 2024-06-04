import {React,useState  } from "react";
import { Draggable } from "react-beautiful-dnd";
import { useStateContext } from "../../contexts/ContextProvider";
export default function Task({ task, index }) {
  const { currentColor } = useStateContext();
  const [isDragging, setIsDragging] = useState(false);


  
  
  return (
    <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
      {(provided, snapshot) => {
         const { isDragging, } = snapshot;
 
        return (
          <div
            {...provided.draggableProps}
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
            
            className={`${isDragging?`bg-[#9ca3af]`:`bg-white`} drop-shadow-md my-3 p-5 rounded-md opacity-80 text-black`}
          >
            <div className="flex ">
              <p className="text-sm ">Task {task.id}</p>
            </div>
            <div className="flex">
              <p className=" text-sm font-thin">{task.title}</p>
            </div>
            {provided.placeholder}
          </div>
        );
      }}
    </Draggable>
  );
}
