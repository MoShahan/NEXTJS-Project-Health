import React from "react";
import styles from "../../styles/ForgotPassword.module.css";

const PageThree = ({ setFirstPage }: any) => {
  return (
    <div className="sec3">
      {/* <div className={styles.backBtn}>
        <a href="/forgotPassword/2">{"< "} Back</a>
      </div> */}
      <h1 className={styles.mainHeading}>Set new password</h1>
      <h6 className={styles.mainContent}>
        Your new password must be different from previous used passwords.
      </h6>
      <h6 className={styles.firstPlaceholder}>Password</h6>
      <input type="password" placeholder="" className={styles.firstPassInput} />
      <h6 className={styles.firstHelper}>
        Minimum 8 characters with at least 1 number
      </h6>
      <h6 className={styles.secondPlaceholder}>Password</h6>
      <input
        type="password"
        placeholder=""
        className={styles.secondPassInput}
      />
      <h6 className={styles.secondHelper}>Both password must match.</h6>
      <button
        className={styles.btnThree}
        onClick={() => setFirstPage(false)}
        type="submit"
      >
        {/* <a href="/forgotPassword/4">Reset password</a> */}
        Reset password
      </button>
      <a className={styles.cancelThree} href="/login">
        Cancel
      </a>
    </div>
  );
};

export default PageThree;
