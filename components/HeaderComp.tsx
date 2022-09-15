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
import { MdAdd } from "react-icons/md";
import tempStyles from "../styles/Temp.module.css";
import axios from "axios";
import Router from "next/router";

type HeaderProps = {
  currPage: string;
  openModal: any;
  optionsModal: any;
};

let pageTitleValue;
let btnValue;

const HeaderComp = ({ currPage, openModal, optionsModal }: HeaderProps) => {
  const [searchWord, setSearchWord] = useState<string>("");

  switch (currPage) {
    case ADMIN:
      pageTitleValue = "Admin Users";
      btnValue = "Add User";
      break;
    case PROJECT:
      pageTitleValue = "Projects";
      btnValue = "Add Project";
      break;
    case EMPLOYEE:
      pageTitleValue = "Employees";
      btnValue = "Add Employees";
      break;
    case SKILL:
      pageTitleValue = "Skills";
      btnValue = "Add Skill";
      break;
    case PROJECT_TYPE:
      pageTitleValue = "Project Type";
      btnValue = "Add Project Type";
      break;
    case EMPLOYEE_TYPE:
      pageTitleValue = "Employee Type";
      btnValue = "Add Employee Type";
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

  const signOut = () => {
    // axios({
    //   method: "delete",
    //   url: "https://obscure-springs-16848.herokuapp.com/users/sign_out",
    // })
    //   .then((res) => {
    //     console.log(res);
    //     localStorage.setItem("isLoggedIn", "false");
    //   })
    //   .catch((e) => console.log(e));

    axios({
      method: "delete",
      url: "https://tranquil-hamlet-54124.herokuapp.com/users/sign_out",
    })
      .then((res) => {
        console.warn(res.data.message);
        localStorage.setItem("isLoggedIn", "false");
        Router.push("/");
      })
      .catch((e) => console.error(e.message));
  };

  const handleAvatarClick = () => {
    signOut();
  };

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 1,
        backgroundColor: "white",
        height: 150,
        width: 1440,
      }}
      className={"headerMain" + " " + tempStyles.tempHeader}
    >
      <div className={styles.navBar}>
        <div className={styles.bellIcon}></div>
        <div className={styles.avatarIcon} onClick={handleAvatarClick}></div>
      </div>
      <div className={styles.divider}></div>
      <div className="headerSection">
        <div className={styles.pageTitle}>{pageTitleValue}</div>
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
            }}
          >
            <MdAdd size={18} />
            {btnValue}
          </button>
        </div>
      </div>
      <div className={styles.separator}></div>
    </div>
  );
};

export default HeaderComp;
