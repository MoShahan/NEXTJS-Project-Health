import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../../styles/ForgotPassword.module.css";

const PageOne = ({ setFirstPage }: any) => {
  const [email, setEmail] = useState<string>("");

  const handleSendInstructionsBtn = () => {
    setFirstPage(false);
    axios
      .post("https://tranquil-hamlet-54124.herokuapp.com/users/password", {
        user: { email: email },
      })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

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
        <input
          className={styles.fEmailInput}
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className={styles.btnOne} onClick={handleSendInstructionsBtn}>
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
