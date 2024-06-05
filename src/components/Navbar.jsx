import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { PiChatTextThin } from "react-icons/pi";

import { BsChatLeftDots } from "react-icons/bs";
import { BsCardChecklist } from "react-icons/bs";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";

const NavButton = ({ title, customFunc, icon, color, dotColor, showDot }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      {showDot && (
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
      )}
      {icon}
    </button>
  </TooltipComponent>
);
export default function Navbar() {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
    todo,
  } = useStateContext();
  const { user, isAuthenticated } = useAuth0();
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [screenSize]);

  useEffect(() => {
    if (screenSize <= 900) setActiveMenu(false);
    else setActiveMenu(true);
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prev) => !prev)}
        color={currentColor}
        icon={<AiOutlineMenu />}
        showDot={todo.length > 0}
      />
      {isAuthenticated && (
        <div className="flex">
          <NavButton
            title="Chat"
            customFunc={() => handleClick("cart")}
            color={currentColor}
            icon={<BsChatLeftDots />}
            showDot={todo.length > 0}
          />
          <NavButton
            title="To Do"
            dotColor="#03C9D7"
            customFunc={() => handleClick("chat")}
            color={currentColor}
            icon={<BsCardChecklist />}
            showDot={todo.length > 0}
          />
          <TooltipComponent content="Profile" position="BottomCenter">
            <div
              className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
              onClick={() => {
                handleClick("userProfile");
              }}
            >
              <img className="size-9 rounded-full" src={avatar}></img>

              <MdKeyboardArrowDown className="text-gray-400 text-14" />
            </div>
          </TooltipComponent>
          {isClicked.cart && <Cart />}
        </div>
      )}
      {!isAuthenticated && (
        <div className="flex items-center">
          <TooltipComponent content="Unlock Features" position="BottomCenter">
            {" "}
            <LoginButton />
          </TooltipComponent>
        </div>
      )}
    </div>
  );
}
