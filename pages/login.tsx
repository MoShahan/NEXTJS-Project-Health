import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Login.module.css";

const DEMO_CORRECT_USERNAME = "admin";
const DEMO_CORRECT_PASSWORD = "admin123";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [wrongPassword, setWrongPassword] = useState(false);
  const [wrongUsername, setWrongUsername] = useState(false);

  const handleLogin = () => {
    if (
      username === DEMO_CORRECT_USERNAME &&
      password === DEMO_CORRECT_PASSWORD
    ) {
      setWrongPassword(false);
      setWrongUsername(false);
      console.log("LOGIN SUCCESSFUL");
    } else if (
      username === DEMO_CORRECT_USERNAME &&
      password !== DEMO_CORRECT_PASSWORD
    ) {
      setWrongUsername(false);
      setWrongPassword(true);
    } else if (username !== DEMO_CORRECT_USERNAME) {
      setWrongUsername(true);
    }
  };

  return (
    <>
      <div className={styles.left}>
        <div className="logoContainer">
          <div className={styles.topSemi}></div>
          <div className={styles.bottomSemi}></div>
          <div className={styles.middleLine}></div>
          <div className={styles.topLine}></div>
          <div className={styles.bottomLine}></div>
          <p className={styles.logoText}></p>
        </div>
      </div>
      <div
        // style={{ display: wrongPassword ? "block" : "none" }}
        style={{ opacity: wrongPassword ? "1" : "0" }}
        className={styles.errorBox}
      >
        <div className={styles.errorLine}></div>
        <div className={styles.errorImage}></div>
        <div className={styles.errorText}>
          This password is not correct. Try again or request a new password if
          you forgot.
        </div>
        <div className={styles.errorClose}> X </div>
      </div>
      <h1 className={styles.loginTitle}>Log In</h1>
      <h6 className={styles.emailText}>Email</h6>
      <input
        style={{ color: wrongUsername ? "red" : "black" }}
        className={styles.emailInput}
        type="text"
        placeholder=""
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <h6 className={styles.passwordText}>Password</h6>
      <input
        style={{ color: wrongPassword || wrongUsername ? "red" : "black" }}
        className={styles.passwordInput}
        type="password"
        placeholder=""
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <h6 className={styles.passwordRule}>
        Minimum 8 characters with at least 1 number
      </h6>
      <button onClick={handleLogin} type="submit" className={styles.loginBtn}>
        LOGIN
      </button>
      <p className={styles.policyText}>
        By signing in you agree to Health{" "}
        <Link href="/tos">
          <a className={styles.blueColor}>Terms of service </a>
        </Link>
        and{" "}
        <Link href="/pp">
          <a className={styles.blueColor}>Privacy policy.</a>
        </Link>
      </p>
      <p className={styles.forgotPassword}>
        <Link href="/forgotPassword">
          <a>Forgot Your Password ?</a>
        </Link>
      </p>
    </>
  );
};

export default Login;
