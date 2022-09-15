import React, { useEffect, useState } from "react";
import styles from "../../styles/components/Table.module.css";
import Pagination from "../Pagination";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { MdMoreVert } from "react-icons/md";
import tempStyles from "../../styles/Temp.module.css";
import axios from "axios";

type EmployeeTableProps = {
  setAllChecked: any;
  currentPageData: Array<any>;
  setCurrentPageData: any;
  allChecked: boolean;
  handleOptionsMenu: any;
  handlePaginationLeft: any;
  handlePaginationRight: any;
  currentPage: number;
  tempEmployeesData: Array<any>;
  ITEMS_IN_ONE_PAGE: number;
  LAST_PAGE: number;
  detailsModal: any;
};

const TableComponent = ({
  setAllChecked,
  currentPageData,
  setCurrentPageData,
  allChecked,
  handleOptionsMenu,
  handlePaginationLeft,
  handlePaginationRight,
  currentPage,
  tempEmployeesData,
  ITEMS_IN_ONE_PAGE,
  LAST_PAGE,
  detailsModal,
}: EmployeeTableProps) => {
  const employeeTableHeaders = [
    "Employee ID",
    "Name",
    "Email",
    "Project Name",
    "Skills",
    "Employee Type",
    "Joining Date",
    "Salary",
    "Utilization",
    "Revenue Opportunity",
  ];

  const [sortDirection, setSortDirection] = useState<"none" | "up" | "down">(
    "none"
  );

  const sortData = (column: string) => {
    const tempData = [...currentPageData];
    switch (column) {
      case "phone":
      case "employee id":
        tempData.sort((a: any, b: any) =>
          sortDirection === "up" ? a.id - b.id : b.id - a.id
        );
        break;
      case "name":
        tempData.sort((a: any, b: any) =>
          sortDirection === "up"
            ? `${a.first_name} ${a.last_name}`.localeCompare(
                `${b.first_name} ${b.last_name}`
              )
            : `${b.first_name} ${b.last_name}`.localeCompare(
                `${a.first_name} ${a.last_name}`
              )
        );
        break;
      case "role":
      case "revenue opportunity":
      case "project name":
      case "skills":
      case "salary":
        break;
      case "employee type":
        tempData.sort((a: any, b: any) =>
          sortDirection === "up"
            ? a.employee_type.localeCompare(b.employee_type)
            : b.employee_type.localeCompare(a.employee_type)
        );
        break;
      case "joining date":
        tempData.sort((a: any, b: any) =>
          sortDirection === "up"
            ? a?.join_date?.localeCompare(b?.join_date)
            : b?.join_date?.localeCompare(a?.join_date)
        );
        break;
      default:
        tempData.sort((a: any, b: any) =>
          sortDirection === "up"
            ? a[column].localeCompare(b[column])
            : b[column].localeCompare(a[column])
        );
    }

    setSortDirection((prev) => (prev === "up" ? "down" : "up"));
    setCurrentPageData(tempData);
  };

  return (
    <div
      className={tempStyles.tempEmployeeTable}
      style={{
        overflowX: "scroll",
        width: 1440,
        height: 900,
        position: "absolute",
      }}
    >
      <table
        className={styles.adminTable}
        // className={styles.adminTable+" "+styles.tempTable}
        style={{
          width: 1800,
          position: "relative",
        }}
      >
        <thead>
          <tr>
            <td>
              <input
                type="checkbox"
                name=""
                id=""
                onClick={() => setAllChecked((prev: boolean) => !prev)}
              />
            </td>
            {employeeTableHeaders.map((header) => (
              <td key={header} onClick={() => sortData(header.toLowerCase())}>
                {header}
                <span className={styles.topArrow}>
                  <FiArrowUp />
                </span>
                <span className={styles.downArrow}>
                  <FiArrowDown />
                </span>
              </td>
            ))}
            <td>Options</td>
          </tr>
        </thead>
        <tbody>
          {currentPageData?.map((employee: any, index: number) => (
            <tr
              key={index + employee?.email}
              onClick={() => {
                detailsModal(index);
              }}
            >
              <td
                onClick={(e) => e.stopPropagation()}
                className={styles.dontClickDetails}
              >
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={allChecked ? true : undefined}
                />
              </td>
              <td>{employee?.id}</td>
              <td>
                {employee?.first_name} {employee?.last_name}
              </td>
              <td>{employee?.email}</td>
              <td>
                {["Parking", "Quiz"].map((skill: string) => {
                  return (
                    <div key={skill} className={styles.eachEmployeeSkill}>
                      {skill}
                    </div>
                  );
                })}
              </td>
              <td>
                {["Front End", "Back End"].map((skill: string) => {
                  return (
                    <div
                      key={skill}
                      className={styles.eachEmployeeSkill}
                      style={{ width: 100 }}
                    >
                      {skill}
                    </div>
                  );
                })}
              </td>
              <td>{employee?.employee_type}</td>
              <td>{employee?.join_date}</td>
              <td>{employee?.salary}</td>
              <td>{employee?.tilization}</td>
              <td>Rev Opp</td>
              <td className={styles.dontClickDetails}>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOptionsMenu(index);
                  }}
                  className={styles.optionsMenu}
                >
                  <MdMoreVert />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <Pagination
              handlePaginationLeft={handlePaginationLeft}
              handlePaginationRight={handlePaginationRight}
              currentPage={currentPage}
              ITEMS_IN_ONE_PAGE={ITEMS_IN_ONE_PAGE}
              LAST_PAGE={LAST_PAGE}
              tempData={tempEmployeesData}
            />
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default TableComponent;
