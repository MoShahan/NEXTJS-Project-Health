import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import styles from "../styles/Login.module.css";
import axios from "axios";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const DEMO_CORRECT_USERNAME = "admin@cc.com";
const DEMO_CORRECT_PASSWORD = "Admin@123";

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
  const [authToken, setAuthToken] = useState<string>("");

  const router = useRouter();

  const signIn = () => {
    axios
      .post("https://health27.herokuapp.com/users/sign_in", {
        user: {
          email: "kavya1@gmail.com",
          password: "00112233",
        },
      })
      .then((res) => {
        console.log("----------------------------------------");
        console.log("KAVYA");
        console.log("HEADERS ==", res.headers);
        console.log("DATA ==", res.data);
      })
      .catch((e) => console.log(e));

    axios
      .post("https://obscure-springs-16848.herokuapp.com/users/sign_in", {
        user: {
          email: "batman@gmail.com",
          password: "batman",
        },
      })
      .then((res) => {
        console.log("----------------------------------------");
        console.log("SURAJ");
        console.log("HEADERS ==", res.headers);
        console.log("DATA ==", res.data);
      })
      .catch((e) => console.log(e));

    axios
      .post("https://sheltered-retreat-12255.herokuapp.com/users/sign_in", {
        user: {
          email: "test@gmail.com",
          password: "1234567",
        },
      })
      .then((res) => {
        console.log("----------------------------------------");
        console.log("PRAMODINI");
        console.log("HEADERS ==", res.headers);
        console.log("DATA ==", res.data);
      })
      .catch((e) => console.log(e));

    axios
      .post("https://floating-falls-55336.herokuapp.com/users/sign_in", {
        user: { email: "pk@gmail.com", password: "XyZ@1998" },
      })
      .then((res) => {
        console.log("----------------------------------------");
        console.log("PUNEETH");
        console.log("HEADERS ==", res.headers);
        console.log("AUTH TOKEN ==", res.headers.authorization);
        console.log("DATA ==", res.data);
        // setAuthToken(res.headers.authorization);
      })
      .catch((e) => console.log(e));
  };

  const signOut = () => {
    console.log("Signing Out...");

    axios({
      method: "delete",
      url: "https://obscure-springs-16848.herokuapp.com/users/sign_out",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjYyMzYyNjIzLCJleHAiOjE2NjIzNjYyMjMsImp0aSI6IjQ3MTgzN2MyLWM4ZDItNDc1Ni1hMTVmLTY3YWZhMWM5NzNiMiJ9.JyfszlFlzQCWo3IvWAy6ft_iy96tiuH5RXVM1MTB68Q",
        Cookie: "",
      },
    })
      .then((res) => {
        console.log("------------------------------------------------------");
        console.log("SURAJ");
        console.log(res);
      })
      .catch((e) => console.log(e));

    axios({
      method: "delete",
      url: "https://health27.herokuapp.com/users/sign_out",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjYyNDY5NjY0LCJleHAiOjE2NjI0NzMyNjQsImp0aSI6IjdlNTdjMTFhLTdkMWYtNDQwNS04NWM4LTM5ODMwOTY3OTM0YiJ9.TTiJwLzxmSjFE4Gd8pUtmACDhXIfow_gUCAyI19beU4",
      },
      withCredentials: true,
    })
      .then((res) => {
        console.log("------------------------------------------------------");
        console.log("KAVYA");
        console.log("RESPONSE ==", res);
        // console.log("HEADERS ==", res.headers);
        console.log("DATA ==", res.data);
        console.log("MESSAGE ==", res.data.message);
      })
      .catch((e) => console.log(e));

    // axios.defaults.headers.common["Authorization"] = authToken;
  };

  useEffect(() => {
    signIn();
    // signOut();
  }, []);

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
