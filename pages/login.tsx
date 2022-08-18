import styles from "../styles/Login.module.css";
// import "../styles/Login.module.css";

const Login = () => {
  return (
    // <div className={styles.container}>
    <>
      <div className={styles.left}>
        <div className="logoContainer">
          <p className={styles.logoText}></p>
        </div>
      </div>
      {/* <div className={styles.right}> */}
      {/* <div className={styles.card}> */}
      <h1 className={styles.loginTitle}>Log In</h1>
      <h6 className={styles.emailText}>Email</h6>
      <input className={styles.emailInput} type="text" placeholder="" />
      <h6 className={styles.passwordText}>Password</h6>
      <input className={styles.passwordInput} type="password" placeholder="" />
      <h6 className={styles.passwordRule}>
        Minimum 8 characters with at least 1 number
      </h6>
      <button type="submit" className={styles.loginBtn}>
        LOGIN
      </button>
      <p className={styles.policyText}>
        By signing in you agree to Health{" "}
        <a className={styles.blueColor} href="/tos">
          Terms of service
        </a>{" "}
        and{" "}
        <a className={styles.blueColor} href="/pp">
          Privacy policy.
        </a>
      </p>
      <p className={styles.forgotPassword}>
        <a href="/forgotPassword">Forgot Your Password ?</a>
      </p>
      {/* </div> */}
      {/* </div> */}
    </>
    // </div>
  );
};

export default Login;
