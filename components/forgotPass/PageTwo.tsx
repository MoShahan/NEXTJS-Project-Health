import React from "react";
import styles from "../../styles/ForgotPassword.module.css";

const PageTwo = ({ setFirstPage }: any) => {
  return (
    <div className="sec2">
      <div className={styles.backBtn} onClick={() => setFirstPage(true)}>
        {/* <a href="/forgotPassword">{"< "} Back</a> */}
        {"< "} Back
      </div>
      <h1 className={styles.mainHeading}>Check your email</h1>
      <h6 className={styles.mainContent}>
        <p>
          We sent a password reset link to
          <b> project@cognitiveclouds.com</b>
        </p>
        <p>
          Didn’t receive the email?{" "}
          <a href="#" className={styles.blueColor}>
            Click to resend
          </a>
        </p>
      </h6>
    </div>
  );
};

export default PageTwo;
