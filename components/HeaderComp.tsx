import React, { useEffect, useState } from "react";
import styles from "../styles/components/Header.module.css";
import {
  ADMIN,
  EMPLOYEE,
  EMPLOYEE_TYPE,
  PROJECT,
  PROJECT_TYPE,
  SKILL,
} from "../variables";

type HeaderProps = {
  currPage: string;
  openModal: any;
  optionsModal: any;
};

const HeaderComp = ({ currPage, openModal, optionsModal }: HeaderProps) => {
  const [searchWord, setSearchWord] = useState<string>("");

  let pageTitleValue;
  let btnValue;

  switch (currPage) {
    case ADMIN:
      pageTitleValue = "Admin Users";
      btnValue = "+ Add User";
      break;
    case PROJECT:
      pageTitleValue = "Projects";
      btnValue = "+ Add Project";
      break;
    case EMPLOYEE:
      pageTitleValue = "Employees";
      btnValue = "+ Add Employees";
      break;
    case SKILL:
      pageTitleValue = "Skills";
      btnValue = "+ Add Skill";
      break;
    case PROJECT_TYPE:
      pageTitleValue = "Project Type";
      btnValue = "+ Add Project Type";
      break;
    case EMPLOYEE_TYPE:
      pageTitleValue = "Employee Type";
      btnValue = "+ Add Employee Type";
      break;
    default:
      pageTitleValue = "Page Doesn't Exist";
      btnValue = "-X-";
  }

  // Debounce Search Function
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Searcing for results on -->", searchWord);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchWord]);

  return (
    <>
      <div
        style={{
          position: "fixed",
          zIndex: 1,
          backgroundColor: "white",
          height: 150,
          width: 1440,
        }}
      >
        <div className={styles.navBar}>
          <div className={styles.bellIcon}></div>
          <div className={styles.avatorIcon}></div>
        </div>
        <div className={styles.divider}></div>
        <div className="headerSection">
          <div className={styles.pageTitle}>
            {/* <button>CLICK ME DHANISH</button> */}
            {pageTitleValue}
          </div>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search..."
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
          />
          <div>
            <button
              className={styles.addProjectBtn}
              onClick={() => {
                openModal(true);
                optionsModal(false);
                console.log("ADD MODAL BTN CLICKD");
              }}
            >
              {btnValue}
            </button>
          </div>
        </div>
        <div className={styles.separator}></div>
      </div>
    </>
  );
};

export default HeaderComp;
