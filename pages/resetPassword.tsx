import React, { useState } from "react";
import PageFour from "../components/resetPass/PageFour";
import PageThree from "../components/resetPass/PageThree";
// import styles from "../../styles/ForgotPassword.module.css";

const ResetPassword = () => {
  const [firstPage, setFirstPage] = useState(true);
  return (
    <>{firstPage ? <PageThree setFirstPage={setFirstPage} /> : <PageFour />}</>
  );
};

export default ResetPassword;
