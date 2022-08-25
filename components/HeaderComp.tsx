import React from "react";
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
};

const HeaderComp = ({ currPage, openModal }: HeaderProps) => {
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

  return (
    <>
      <div className={styles.navBar}>
        <div className={styles.bellIcon}></div>
        <div className={styles.avatorIcon}></div>
      </div>
      <div className={styles.divider}></div>
      <div className="headerSection">
        <div className={styles.pageTitle}>{pageTitleValue}</div>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search..."
        />
        <div>
          <button
            className={styles.addProjectBtn}
            onClick={() => {
              openModal(true);
              console.log("ADD MODAL BTN CLICKD");
            }}
          >
            {btnValue}
          </button>
        </div>
      </div>
      <div className={styles.separator}></div>
    </>
  );
};

export default HeaderComp;
