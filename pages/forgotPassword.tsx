import React, { useState } from "react";
import PageOne from "../components/forgotPass/PageOne";
import PageTwo from "../components/forgotPass/PageTwo";

const ForgotPassword = () => {
  const [firstPage, setFirstPage] = useState(true);
  return (
    <>
      {firstPage ? (
        <PageOne setFirstPage={setFirstPage} />
      ) : (
        <PageTwo setFirstPage={setFirstPage} />
      )}
    </>
  );
};

export default ForgotPassword;
