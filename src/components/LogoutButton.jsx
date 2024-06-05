import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useStateContext } from "../contexts/ContextProvider";
export default function LogoutButton() {
  const { logout, isAuthenticated } = useAuth0();
  const { currentColor } = useStateContext();
  return (
    <>
      {isAuthenticated && (
        <button
          style={{ backgroundColor: currentColor }}
          className="text-white text-ms font-medium  py-2 px-4 rounded-md"
          onClick={() => logout()}
        >
          Logout{" "}
        </button>
      )}
    </>
  );
}
