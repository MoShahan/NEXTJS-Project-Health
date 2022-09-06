import Link from "next/link";
import { useRouter } from "next/router";
import { memo, ReactElement, useEffect, useState } from "react";
import styles from "../styles/Login.module.css";
import axios from "axios";

const DEMO_CORRECT_USERNAME = "admin@cc.com";
const DEMO_CORRECT_PASSWORD = "Admin@123";

const MAIL_FORMAT = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const PASSWORD_FORMAT =
  /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9])(.{8,24})$/;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalidUsername, setInvalidUsername] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [wrongCredentials, setWrongCredentials] = useState(false);

  const router = useRouter();

  // KAVYA
  useEffect(() => {
    const loginData = {
      user: {
        email: "kavya1@gmail.com",
        password: "00112233",
      },
    };

    axios
      .post("https://health27.herokuapp.com/users/sign_in", loginData)
      .then((res) => {
        console.log("RESPONSE ==", res);
        console.log("HEADERS ==", res.headers);
        console.log("DATA ==", res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  // Cache-Control
  // Content-Language
  // Content-Type
  // Expires
  // Last-Modified
  // Pragma

  // PUNEETH
  // useEffect(() => {
  //   const loginData = { user: { email: "pk@gmail.com", password: "XyZ@1998" } };

  //   axios
  //     .post(
  //       "https://floating-falls-55336.herokuapp.com/users/sign_in",
  //       loginData
  //     )
  //     .then((res) => {
  //       console.log("RESPONSE ==", res);
  //       console.log("DATA ==", res.data);
  //     })
  //     .catch((e) => console.log(e));
  // }, []);

  const handleLogin = () => {
    // checking for username pattern
    if (MAIL_FORMAT.test(username)) {
      setInvalidUsername(false);
      console.log("ACCEPTED -->", username);
    } else {
      setInvalidUsername(true);
      console.log("REJECTED -->", username);
    }

    // checking for password pattern
    if (PASSWORD_FORMAT.test(password)) {
      setInvalidPassword(false);
      console.log("ACCEPTED -->", password);
    } else {
      setInvalidPassword(true);
      console.log("REJECTED -->", password);
    }

    // checking if the username and password is correct
    if (
      username === DEMO_CORRECT_USERNAME &&
      password === DEMO_CORRECT_PASSWORD
    ) {
      setWrongCredentials(false);
      console.log("LOGIN SUCCESSFUL");
      router.push("/projects");
    } else {
      setWrongCredentials(true);
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
        style={{ opacity: wrongCredentials ? "1" : "0" }}
        className={styles.errorBox}
      >
        <div className={styles.errorLine}></div>
        <div className={styles.errorImage}></div>
        <div className={styles.errorText}>
          Either username or password is not correct. Try again or request a new
          password if you forgot.
        </div>
        <div className={styles.errorClose}></div>
      </div>
      <h1 className={styles.loginTitle}>Log In</h1>
      <h6
        className={styles.emailText}
        style={{ color: invalidUsername ? "#eb5757" : "" }}
      >
        Email
      </h6>
      <input
        style={{ color: wrongCredentials ? "#eb5757" : "black" }}
        className={
          styles.emailInput + " " + (wrongCredentials ? styles.errorOffset : "")
        }
        type="text"
        placeholder=""
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <h6
        className={styles.passwordText}
        style={{ color: invalidPassword ? "#eb5757" : "" }}
      >
        Password
      </h6>
      <input
        style={{ color: wrongCredentials ? "#eb5757" : "black" }}
        className={
          styles.passwordInput +
          " " +
          (wrongCredentials ? styles.errorOffset : "")
        }
        type="password"
        placeholder=""
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <h6
        className={styles.passwordRule}
        style={{ color: invalidPassword ? "#eb5757" : "" }}
      >
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

// Login.getLayout = function getLayout(page: ReactElement) {
//   return page;
// };

export default Login;
