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
  const handleClick = (element) => {
    setIsClicked((prev)=>({...prev,[element]:true}))
  };
  return (
    <div>
      <StateContext.Provider
        value={{ activeMenu, setActiveMenu, isClicked, setIsClicked,handleClick,screenSize, setScreenSize }}
      >
        {children}
      </StateContext.Provider>
    </div>
  );
};

export const useStateContext = () => useContext(StateContext);
