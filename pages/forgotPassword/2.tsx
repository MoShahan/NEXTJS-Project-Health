import styles from "../../styles/ForgotPassword.module.css";

const SecondPage = () => {
  return (
    <div className="sec2">
      <div className={styles.backBtn}>
        <a href="/forgotPassword">{"< "} Back</a>
      </div>
      <h1 className={styles.mainHeading}>Check your email</h1>
      <h6 className={styles.mainContent}>
        <p>
          We sent a password reset link to
          <b> project@cognitiveclouds.com</b>
        </p>
        <p>
          Didn’t receive the email?{" "}
          <a href="#" className={styles.blueColor}>
            Click to resend
          </a>
        </p>
      </h6>
      {/* <h6>
        Didn’t receive the email? <a href="">Click to resend</a>
      </h6> */}
    </div>
  );
};

export default SecondPage;
