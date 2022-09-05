import React from "react";
import styles from "../../styles/components/Table.module.css";
import Pagination from "../Pagination";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { MdMoreVert } from "react-icons/md";
import tempStyles from "../../styles/Temp.module.css";

type EmployeeTableProps = {
  setAllChecked: any;
  currentPageData: Array<any>;
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
              <td key={header}>
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
          {currentPageData.map((admin: Array<any>, index: number) => {
            return (
              <tr key={index + admin[0]}>
                <td>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={allChecked ? true : undefined}
                  />
                </td>
                <td onClick={detailsModal} className={styles.clickDetails}>
                  {index + " - " + admin[0]}
                </td>
                <td onClick={detailsModal} className={styles.clickDetails}>
                  {admin[1]}
                </td>
                <td onClick={detailsModal} className={styles.clickDetails}>
                  {admin[2]}
                </td>
                <td onClick={detailsModal} className={styles.clickDetails}>
                  {admin[3].map((skill: string) => {
                    return (
                      <div key={skill} className={styles.eachEmployeeSkill}>
                        {skill}
                      </div>
                    );
                  })}
                </td>
                <td onClick={detailsModal} className={styles.clickDetails}>
                  {admin[4].map((skill: string) => {
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
                <td onClick={detailsModal} className={styles.clickDetails}>
                  {admin[5]}
                </td>
                <td onClick={detailsModal} className={styles.clickDetails}>
                  {admin[6]}
                </td>
                <td onClick={detailsModal} className={styles.clickDetails}>
                  {admin[7]}
                </td>
                <td onClick={detailsModal} className={styles.clickDetails}>
                  {admin[8]}
                </td>
                <td onClick={detailsModal} className={styles.clickDetails}>
                  {admin[9]}
                </td>
                <td>
                  <div
                    onClick={() => {
                      handleOptionsMenu(index);
                    }}
                    className={styles.optionsMenu}
                  ><MdMoreVert/></div>
                </td>
              </tr>
            );
          })}
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
