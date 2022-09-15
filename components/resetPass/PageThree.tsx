import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../../styles/ForgotPassword.module.css";

const PageThree = ({ setFirstPage }: any) => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordDontMatch, setPasswordDontMatch] = useState<boolean>(false);

  const handleResetPasswordBtn = () => {
    if (password === confirmPassword) {
      setPasswordDontMatch(false);
      setFirstPage(false);
      axios
        .post("https://obscure-springs-16848.herokuapp.com/users/password", {
          user: {
            password: password,
            password_confirmation: confirmPassword,
            reset_password_token: "KJozKJhtfziPA99deK6R",
          },
        })
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    } else {
      setPasswordDontMatch(true);
    }
  };

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
      <input
        type="password"
        placeholder=""
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles.firstPassInput}
      />
      <h6 className={styles.firstHelper}>
        Minimum 8 characters with at least 1 number
      </h6>
      <h6 className={styles.secondPlaceholder}>Password</h6>
      <input
        type="password"
        placeholder=""
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className={styles.secondPassInput}
      />
      <h6
        className={styles.secondHelper}
        style={{ color: passwordDontMatch ? "#eb5757" : "#212121" }}
      >
        Both password must match.
      </h6>
      <button
        className={styles.btnThree}
        onClick={handleResetPasswordBtn}
        type="submit"
      >
        Reset password
      </button>
      <Link href="/login">
        <a className={styles.cancelThree}>Cancel</a>
      </Link>
    </div>
  );
};

export default PageThree;
