import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/Login.module.css";
import axios from "axios";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

// 67XQGs

const MAIL_FORMAT = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const PASSWORD_FORMAT =
  /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9])(.{8,24})$/;

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [invalidUsername, setInvalidUsername] = useState<boolean>(false);
  const [invalidPassword, setInvalidPassword] = useState<boolean>(false);
  const [wrongCredentials, setWrongCredentials] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  // const [authToken, setAuthToken] = useState<string>("");

  const router = useRouter();

  const signIn = () => {
    console.log("Signing In...");

    // axios
    //   .post("https://obscure-springs-16848.herokuapp.com/users/sign_in", {
    //     user: { email: "flash@dc.com", password: "testinG&0" },
    //   })
    //   .then((res) => {
    //     console.log("----------------------------------------");
    //     console.log("SURAJ");
    //     console.log("AUTH TOKEN ==", res.headers.authorization);
    //     axios.defaults.headers.common["Authorization"] =
    //       res.headers.authorization;
    //     localStorage.setItem("isLoggedIn", "true");
    //     router.push("/projects");
    //   })
    //   .catch((e) => console.log(e));

    axios
      .post("https://tranquil-hamlet-54124.herokuapp.com/users/sign_in", {
        user: { email: "shahan@cc.com", password: "Shahan#27" },
        // user: { email: username, password: password },
      })
      .then((res) => {
        setWrongCredentials(false);
        console.log("----------------------------------------");
        console.log("Thushar");
        console.log("AUTH TOKEN ==", res.headers.authorization);
        axios.defaults.headers.common["Authorization"] =
          res.headers.authorization;
        // axios.defaults.headers.get["Content-Type"] = "application/json";
        axios.defaults.headers.get["Accept"] = "application/json";
        localStorage.setItem("isLoggedIn", "true");
        router.push("/projects");
      })
      .catch((e) => {
        console.log(e);
        setWrongCredentials(true);
      });
  };

  const handleLogin = () => {
    signIn();

    if (MAIL_FORMAT.test(username) && PASSWORD_FORMAT.test(password)) {
      signIn();
    } else {
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
        style={{ color: invalidUsername ? "#eb5757" : "#212121" }}
      >
        Email
      </h6>
      <input
        className={
          styles.emailInput +
          " " +
          (wrongCredentials ? styles.errorColor : styles.normalColor)
        }
        type="text"
        placeholder=""
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <h6
        className={styles.passwordText}
        style={{ color: invalidPassword ? "#eb5757" : "#212121" }}
      >
        Password
      </h6>
      <input
        className={
          styles.passwordInput +
          " " +
          (wrongCredentials ? styles.errorColor : styles.normalColor)
        }
        type={showPassword ? "text" : "password"}
        placeholder=""
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div
        onClick={() => setShowPassword((prev) => !prev)}
        className={styles.showPasswordIcon}
      >
        {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
      </div>
      <h6
        className={styles.passwordRule}
        style={{ color: invalidPassword ? "#eb5757" : "#212121" }}
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
