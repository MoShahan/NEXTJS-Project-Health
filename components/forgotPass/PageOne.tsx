import Link from "next/link";
import React from "react";
import styles from "../../styles/ForgotPassword.module.css";

const PageOne = ({ setFirstPage }: any) => {
  return (
    <div>
      <div className={styles.backBtn}>
        <Link href="/login">
          <a>{"< "} Back</a>
        </Link>
      </div>
      <div className="sec1">
        <h1 className={styles.mainHeading}>Forgot your Password</h1>
        <h6 className={styles.mainContent}>
          Enter your email address, and we’ll send you an email with all the
          instructions.
        </h6>
        <h6 className={styles.firstPlaceholder}>Email</h6>
        <input className={styles.fEmailInput} type="text" />
        <button className={styles.btnOne} onClick={() => setFirstPage(false)}>
          {/* <a href="forgotPassword/2">Send me instructions</a> */}
          Send me instructions
        </button>
        <p className={styles.cancelOne}>
          <Link href="/login">
            <a>Cancel</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PageOne;
