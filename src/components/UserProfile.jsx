import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";
import avatar from "../data/avatar.jpg";

export default function UserProfile() {
  const { currentColor, handleClick } = useStateContext();

  return (
    <div className=" p-2 w-72 rounded-lg transition-all duration-300 bg-white drop-shadow-md text-black top-14 right-5 fixed z-60">
      <div className="flex justify-between  ">
        <p>User Profile</p>
        <button
          type="button"
          onClick={() => {
            handleClick("userProfile");
          }}
          style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
          className="text-2xl p-1 hover:drop-shadow-xl hover:bg-light-gray"
        >
          <MdOutlineCancel />
        </button>
      </div>
      <div className="">
       
        <div className="flex justify-center">
          <img src={avatar} className="rounded-full size-28 drop-shadow-md" />
        </div>
        <div className="flex justify-center mt-2">
          <p> Hii ! Sweety</p>
        </div>
      </div>

      <div>
        <p>Want a Break ? </p>

      </div>
    </div>
  );
}
