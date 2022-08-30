import { useState } from "react";
import styles from "../styles/components/LeftSideBar.module.css";
import { useRouter } from "next/router";
import { HiClipboardList } from "react-icons/hi";
import {
  MdArrowDropDown,
  MdArrowDropUp,
  MdPeopleAlt,
  MdPerson,
  MdSettings,
} from "react-icons/md";
import Link from "next/link";

const LeftSideBar = () => {
  const [settingsDropdown, setSettingsDropdown] = useState<boolean>(false);
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <div>
      <div className={styles.leftBar}>
        <div className="logo" style={{ cursor: "pointer", height: 70 }}>
          <div className={styles.topSemi}></div>
          <div className={styles.bottomSemi}></div>
          <div className={styles.middleLine}></div>
          <div className={styles.topLine}></div>
          <div className={styles.bottomLine}></div>
        </div>
        <div className={styles.logoIconSep}></div>
        {/* ===================================== */}
        <Link href="/adminUsers">
          <div
            className={
              styles.adminUsersContainer +
              " " +
              (currentPath === "/adminUsers" ? styles.currentPageContainer : "")
            }
          >
            <div
              className={
                styles.adminUsersIcon +
                " " +
                (currentPath === "/adminUsers" ? styles.currentPageIcon : "")
              }
            >
              <MdPerson />
            </div>
            <div className={styles.adminUsersText}>Admin Users</div>
          </div>
        </Link>
        {/* ===================================== */}
        <Link href="/projects">
          <div
            className={
              styles.projectsContainer +
              " " +
              (currentPath === "/projects" ? styles.currentPageContainer : "")
            }
          >
            <div
              className={
                styles.projectsIcon +
                " " +
                (currentPath === "/projects" ? styles.currentPageIcon : "")
              }
            >
              <HiClipboardList />
            </div>
            <div className={styles.projectsText}>Projects</div>
          </div>
        </Link>
        {/* ===================================== */}
        <Link href="/employees">
          <div
            className={
              styles.employeesContainer +
              " " +
              (currentPath === "/employees" ? styles.currentPageContainer : "")
            }
          >
            <div
              className={
                styles.employeesIcon +
                " " +
                (currentPath === "/employees" ? styles.currentPageIcon : "")
              }
            >
              <MdPeopleAlt />
            </div>
            <div className={styles.employeessText}>Employees</div>
          </div>
        </Link>
        {/* ===================================== */}
        <div
          onClick={() => {
            setSettingsDropdown((prev) => !prev);
          }}
          className={styles.settingsContainer}
        >
          <div
            className={
              styles.settingsIcon +
              " " +
              (currentPath === "/settings/skill" ||
              currentPath === "/settings/project" ||
              currentPath === "/settings/employee"
                ? styles.currentPageIcon
                : "")
            }
          >
            <MdSettings />
          </div>
          <div className={styles.settingsText}>
            Settings
            {settingsDropdown ? (
              <MdArrowDropUp size={20} />
            ) : (
              <MdArrowDropDown size={20} />
            )}
          </div>
        </div>
        <div
          className={styles.settingsList}
          style={{ display: settingsDropdown ? "flex" : "none" }}
        >
          <Link href="/settings/skill">
            <a
              className={
                styles.eachSetting +
                " " +
                (currentPath === "/settings/skill"
                  ? styles.currentPageContainer
                  : "")
              }
            >
              Skills
            </a>
          </Link>
          <Link href="/settings/project">
            <a
              className={
                styles.eachSetting +
                " " +
                (currentPath === "/settings/project"
                  ? styles.currentPageContainer
                  : "")
              }
            >
              Project Type
            </a>
          </Link>
          <Link href="/settings/employee">
            <a
              className={
                styles.eachSetting +
                " " +
                (currentPath === "/settings/employee"
                  ? styles.currentPageContainer
                  : "")
              }
            >
              Employee Type
            </a>
          </Link>
        </div>
        {/* ===================================== */}
      </div>
    </div>
  );
};

export default LeftSideBar;
