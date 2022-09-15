import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Splash from "../Splash";

const ProtectedRoute = (Component: any) => {
  const protecRout = () => {
    const router = useRouter();

    const [authState, setAuthState] = useState<boolean>(false);

    useEffect(() => {
      const authPassed = localStorage.getItem("isLoggedIn");
      if (authPassed === "true") {
        setAuthState(true);
      } else {
        router.push("/");
      }
    }, [setAuthState]);

    return <>{authState ? <Component /> : <Splash />}</>;
  };
  return protecRout;
};

export default ProtectedRoute;
