import styles from "../../styles/ForgotPassword.module.css";

const FourthPage = () => {
  return (
    <div className="sec4">
      <h1 className={styles.mainHeading}>Password reset</h1>
      <h6 className={styles.mainContent}>
        Your password has been successfully reset. Click below to log in
        magically
      </h6>
      <button className={styles.btnFour}>
        <a href="/login">Continue</a>
      </button>
    </div>
  );
};

export default FourthPage;
