import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const intialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [isClicked, setIsClicked] = useState(intialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C907");
  const [themeSettings, setThemeSettings] = useState(false);
  const [currentMode, setCurrentMode] = useState("Light");
  const [todo,setTodo]=useState([]);
  const addTodo=(todo_item)=>{
    setTodo((prev)=>([...prev,todo_item]))
  }
  const removeTodo=(id)=>{
    setTodo((prev)=>(prev.filter((item)=>(item.id!==id))));

  }
  const handleClick = (element) => {
    setIsClicked((prev) => ({ ...prev, [element]: !prev[element] }));
  };
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    // localStorage.setItem("themeMode", e.target.value);
  };
  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };
  return (
    <div>
      <StateContext.Provider
        value={{
          activeMenu,
          setActiveMenu,
          isClicked,
          setIsClicked,
          handleClick,
          screenSize,
          setScreenSize,
          currentColor,
          setCurrentColor,
          currentMode,
          setCurrentMode,
          setColor,
          setMode,
          themeSettings,
          setThemeSettings,
          todo,
          addTodo,
          removeTodo

        }}
      >
        {children}
      </StateContext.Provider>
    </div>
  );
};

export const useStateContext = () => useContext(StateContext);
