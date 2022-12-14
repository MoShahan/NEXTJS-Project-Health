import React, { useEffect, useState } from "react";
import styles from "../../styles/components/ViewDetails.module.css";
import { MdClose } from "react-icons/md";
import axios from "axios";

type EmployeeDetailsProps = {
  openDetails: boolean;
  setOpenDetails: any;
  employeeDataID: any;
};

const DetailsModal = ({
  openDetails,
  setOpenDetails,
  employeeDataID,
}: EmployeeDetailsProps) => {
  const skillsList = ["Front End", "Back End"];
  const projectsNameList = [
    "Parking",
    "Quiz",
    "Hacker Stories",
    "Country & Weather App",
  ];

  return (
    <div
      style={{
        display: openDetails ? "block" : "none",
        zIndex: 2,
        width: 1440,
        height: "100vh",
        position: "absolute",
      }}
    >
      <div
        style={{
          display: openDetails ? "block" : "none",
        }}
        className={styles.modalBG}
        onClick={() => setOpenDetails(false)}
      ></div>
      <div
        style={{ display: openDetails ? "block" : "none" }}
        className="wholeModalContainer"
      >
        <div
          className={styles.detailsModalContainer}
          style={{ height: 670 }}
        ></div>
        <h1 className={styles.modalTitle}>View Details</h1>
        <div className={styles.modalSep}></div>
        <div
          className={styles.modalClose}
          onClick={() => setOpenDetails(false)}
        ></div>
        <h6
          className={
            styles.userHeading +
            " " +
            styles.detailsModalHeading +
            " " +
            styles.detailsModalColumnOne +
            " " +
            styles.detailsModalHeadingRowOne
          }
        >
          Employer ID
        </h6>
        <p
          className={
            styles.userBody +
            " " +
            styles.detailsModalBody +
            " " +
            styles.detailsModalColumnOne +
            " " +
            styles.detailsModalBodyRowOne
          }
        >
          1234567
        </p>
        <div
          className={
            styles.separator +
            " " +
            styles.employeeSeparatorRowOne +
            " " +
            styles.employeeSeparatorColumnOne
          }
        ></div>
        <h6
          className={
            styles.nameHeading +
            " " +
            styles.detailsModalHeading +
            " " +
            styles.detailsModalColumnTwo +
            " " +
            styles.detailsModalHeadingRowOne
          }
        >
          Name
        </h6>
        <p
          className={
            styles.nameBody +
            " " +
            styles.detailsModalBody +
            " " +
            styles.detailsModalColumnTwo +
            " " +
            styles.detailsModalBodyRowOne
          }
        >
          Shahan
        </p>
        <div
          className={
            styles.separator +
            " " +
            styles.employeeSeparatorRowOne +
            " " +
            styles.employeeSeparatorColumnTwo
          }
        ></div>
        <h6
          className={
            styles.emailHeading +
            " " +
            styles.detailsModalHeading +
            " " +
            styles.detailsModalColumnThree +
            " " +
            styles.detailsModalHeadingRowOne
          }
        >
          Email
        </h6>
        <p
          className={
            styles.emailBody +
            " " +
            styles.detailsModalBody +
            " " +
            styles.detailsModalColumnThree +
            " " +
            styles.detailsModalBodyRowOne
          }
        >
          shahan@cc.com
        </p>
        <h6
          className={
            styles.phoneHeading +
            " " +
            styles.detailsModalHeading +
            " " +
            styles.detailsModalColumnOne +
            " " +
            styles.detailsModalHeadingRowTwo
          }
        >
          Contact Number
        </h6>
        <p
          className={
            styles.phoneBody +
            " " +
            styles.detailsModalBody +
            " " +
            styles.detailsModalColumnOne +
            " " +
            styles.detailsModalBodyRowTwo
          }
        >
          +971 508756181
        </p>
        <div
          className={
            styles.separator +
            " " +
            styles.employeeSeparatorRowTwo +
            " " +
            styles.employeeSeparatorColumnOne
          }
        ></div>
        <h6
          className={
            styles.roleHeading +
            " " +
            styles.detailsModalHeading +
            " " +
            styles.detailsModalColumnTwo +
            " " +
            styles.detailsModalHeadingRowTwo
          }
        >
          Employee Type
        </h6>
        <p
          className={
            styles.roleBody +
            " " +
            styles.detailsModalBody +
            " " +
            styles.detailsModalColumnTwo +
            " " +
            styles.detailsModalBodyRowTwo
          }
        >
          Blah Blah
        </p>
        <div
          className={
            styles.separator +
            " " +
            styles.employeeSeparatorRowTwo +
            " " +
            styles.employeeSeparatorColumnTwo
          }
        ></div>
        <h6
          className={
            styles.detailsModalHeading +
            " " +
            styles.detailsModalColumnThree +
            " " +
            styles.detailsModalHeadingRowTwo
          }
        >
          Joining Date
        </h6>
        <p
          className={
            styles.detailsModalBody +
            " " +
            styles.detailsModalColumnThree +
            " " +
            styles.detailsModalBodyRowTwo
          }
        >
          01 Sep 2022
        </p>
        <h6
          className={
            styles.detailsModalHeading +
            " " +
            styles.detailsModalColumnOne +
            " " +
            styles.detailsModalHeadingRowThree
          }
        >
          Salary
        </h6>
        <p
          className={
            styles.adminStatusBody +
            " " +
            styles.detailsModalBody +
            " " +
            styles.detailsModalColumnOne +
            " " +
            styles.detailsModalBodyRowThree
          }
        >
          0
        </p>
        <div
          className={
            styles.separator +
            " " +
            styles.employeeSeparatorRowThree +
            " " +
            styles.employeeSeparatorColumnOne
          }
        ></div>
        <h6
          className={
            styles.detailsModalHeading +
            " " +
            styles.detailsModalColumnTwo +
            " " +
            styles.detailsModalHeadingRowThree
          }
        >
          Utilization
        </h6>
        <p
          className={
            styles.detailsModalBody +
            " " +
            styles.detailsModalColumnTwo +
            " " +
            styles.detailsModalBodyRowThree
          }
        >
          uti
        </p>
        <div
          className={
            styles.separator +
            " " +
            styles.employeeSeparatorRowThree +
            " " +
            styles.employeeSeparatorColumnTwo
          }
        ></div>
        <h6
          className={
            styles.detailsModalHeading +
            " " +
            styles.detailsModalColumnThree +
            " " +
            styles.detailsModalHeadingRowThree
          }
        >
          Revenue Opportunity
        </h6>
        <p
          className={
            styles.detailsModalBody +
            " " +
            styles.detailsModalColumnThree +
            " " +
            styles.detailsModalBodyRowThree
          }
        >
          none
        </p>
        <h6
          className={
            styles.detailsModalHeading +
            " " +
            styles.detailsModalColumnOne +
            " " +
            styles.detailsModalHeadingRowFour
          }
        >
          Skills
        </h6>
        <p
          className={
            styles.employeeSkillsBody +
            " " +
            styles.detailsModalColumnOne +
            " " +
            styles.detailsModalBodyRowFour
          }
        >
          {skillsList.map((skill) => (
            <span key={skill} className={styles.eachEmployeeSkill}>
              {skill}
            </span>
          ))}
        </p>
        <h6
          className={
            styles.detailsModalHeading +
            " " +
            styles.detailsModalColumnOne +
            " " +
            styles.detailsModalHeadingRowFive
          }
        >
          Project Name
        </h6>
        <p
          className={
            styles.employeeProjectNameBody +
            " " +
            styles.detailsModalColumnOne +
            " " +
            styles.detailsModalBodyRowFive
          }
        >
          {projectsNameList.map((name) => (
            <span key={name} className={styles.eachEmployeeProjectName}>
              {name}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default DetailsModal;
