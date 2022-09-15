import React from "react";
import styles from "../styles/Splash.module.css";

const Splash = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.loader}>
          <div className={styles.splashFullLogo}></div>
        </div>
      </div>
    </>
  );
};

export default Splash;
