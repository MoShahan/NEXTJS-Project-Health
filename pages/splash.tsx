import styles from "../styles/Splash.module.css";
import SplashComponent from "../components/Splash";

const SplashPage = () => {
  return (
    <>
      {/* <div className={styles.logoContainer}>
      <div className={styles.topSemi}></div>
      <div className={styles.bottomSemi}></div>
      <div className={styles.middleLine}></div>
      <div className={styles.topLine}></div>
      <div className={styles.bottomLine}></div>
      <p className={styles.logoText}></p>
    </div> */}
      <SplashComponent />
    </>
  );
};

export default SplashPage;
