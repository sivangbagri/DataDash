import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";
import avatar from "../data/avatar.jpg";
import LogoutButton from "./LogoutButton";

export default function UserProfile() {
  // {"given_name":"Shivang","family_name":"Bagri",
  // "nickname":"sivangbagri","name":"Shivang Bagri",
  // "picture":"https://lh3.googleusercontent.com/a/ACg8ocLjF4XWb8SF5wdnPtl2uUOZeIV261KsFlhuJ5rv2YCBtFGVyQA=s96-c",
  // "locale":"en","updated_at":"2024-06-05T09:24:52.751Z","email":"sivangbagri@gmail.com","email_verified":true,"sub":"google-oauth2|111303881190114085064"}
  const { user, isAuthenticated } = useAuth0();
  const { currentColor, handleClick,todo } = useStateContext();

  return (
    <div className=" dark:bg-secondary-dark-bg dark:text-white p-2 w-60 rounded-lg transition-all duration-300 bg-white drop-shadow-md text-black top-14 right-5 fixed z-50">
      <div className="flex  justify-end w-8   ">
        {/* <p>User Profile</p> */}
        <button
          type="button"
          onClick={() => {
            handleClick("userProfile");
          }}
          style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
          className=" text-2xl p-1 hover:drop-shadow-xl hover:bg-light-gray"
        >
          <MdOutlineCancel />
        </button>
      </div>
      {isAuthenticated && (
        <>
          {/* <p className="text-xs overflow-x-scroll">{JSON.stringify(user)}</p> */}
          <div className="">
            <div className="flex justify-center">
              <img
                src={user?.picture}
                className="rounded-full size-16 border-4 border-x-cyan-200  hover:drop-shadow-xl"
              />
            </div>
            <div className="flex justify-center mt-1">
              <p className="text-sm font-light "> Hii ! {user?.nickname}</p>
            </div>
          </div>
          <div className="flex justify-center my-3 gap-1 dark:border-b-1 rounded-md border-gray-700">
            <div className="p-3 text-center rounded-md drop-shadow-2xl text-sm text-gray-400">
              <p>To Do</p>
              
              <p className="text-2xl font-semibold" style={{color:currentColor}}>{todo.length}</p>
            </div>
            <div className="p-3 text-center rounded-md drop-shadow-2xl text-sm text-gray-400">
              <p>Pending</p>
              
              <p className="text-2xl font-semibold" style={{color:currentColor}}>26</p>
            </div>
            <div className="p-3 text-center rounded-md drop-shadow-2xl text-sm text-gray-400">
              <p>Mails</p>
              
              <p className="text-2xl font-semibold" style={{color:currentColor}}>6</p>
            </div>

          </div>
          <div className="flex text-sm justify-center my-3">
            {" "}
            <LogoutButton />
          </div>
        </>
      )}
    </div>
  );
}
