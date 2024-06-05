import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { UserProfile } from "../components";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";

export default function AuthPage() {
  const { isLoading, error } = useAuth0();
  return (
    <div>
      Auth login
      {error && <p> Error occured</p>}
      {!error && isLoading && <p>Loading ...</p>}
      {!error && !isLoading && (
        <>
          <LoginButton />
          <LogoutButton /> <UserProfile />
        </>
      )}
    </div>
  );
}
