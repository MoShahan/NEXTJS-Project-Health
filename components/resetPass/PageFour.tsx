import Link from "next/link";
import React from "react";
import styles from "../../styles/ForgotPassword.module.css";

const PageFour = () => {
  return (
    <div className="sec4">
      <h1 className={styles.mainHeading}>Password reset</h1>
      <h6 className={styles.mainContent}>
        Your password has been successfully reset. Click below to log in
        magically
      </h6>
      <Link href="/login">
        <button className={styles.btnFour}>
          {/* <a href="/login">Continue</a> */}
          <a>Continue</a>
        </button>
      </Link>
    </div>
  );
};

export default PageFour;
