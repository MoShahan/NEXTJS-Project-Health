import React from "react";
import { useEffect, useState } from "react";
import Router from "next/router";
import Splash from "../Splash";

const ProtectedRoute = (Component: any) => {
  const ProtecRout = () => {
    const [authState, setAuthState] = useState<boolean>(false);

    useEffect(() => {
      const authPassed = localStorage.getItem("isLoggedIn");
      if (authPassed === "true") {
        setAuthState(true);
      } else {
        Router.push("/");
      }
    }, [setAuthState]);

    return <>{authState ? <Component /> : <Splash />}</>;
  };
  return ProtecRout;
};

export default ProtectedRoute;
