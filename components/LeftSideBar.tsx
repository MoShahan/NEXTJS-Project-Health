import { useState } from "react";
import styles from "../styles/components/LeftSideBar.module.css";

const LeftSideBar = () => {
  const [settingsDropdown, setSettingsDropdown] = useState<boolean>(false);
  return (
    <div>
      <div className={styles.leftBar}>
        <div className="logo" style={{ cursor: "pointer" }}>
          <div className={styles.topSemi}></div>
          <div className={styles.bottomSemi}></div>
          <div className={styles.middleLine}></div>
          <div className={styles.topLine}></div>
          <div className={styles.bottomLine}></div>
        </div>
        <div className={styles.logoIconSep}></div>
        <div className={styles.adminUsersIcon}></div>
        <div className={styles.projectsIconBG}>
          <div className={styles.projectsIcon}></div>
        </div>
        <div className={styles.employeesIcon}></div>
        <div
          onClick={() => {
            setSettingsDropdown((prev) => !prev);
          }}
          className={styles.settingsIcon}
        ></div>
        <div
          style={{
            display: settingsDropdown ? "block" : "none",
            marginTop: "150px",
            position: "fixed",
            overflow: "hidden",
          }}
        >
          <a href="#">Skills</a>
          <br />
          <a href="#">Project Type</a>
          <br />
          <a href="#">Employee Type</a>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
