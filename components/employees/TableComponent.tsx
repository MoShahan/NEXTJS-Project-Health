import React from "react";
import styles from "../../styles/components/Table.module.css";
import Pagination from "../Pagination";
import { IoIosArrowRoundUp, IoIosArrowRoundDown } from "react-icons/io";
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
  return (
    <table
      className={styles.adminTable + " " + tempStyles.tempTable}
      style={{
        width: 1800,
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
          <td>
            Employee ID
            <span className={styles.topArrow}>
              {/* <IoIosArrowRoundUp /> */}
            </span>
            <span className={styles.downArrow}>
              {/* <IoIosArrowRoundDown /> */}
            </span>
          </td>
          <td>
            Name
            <span className={styles.topArrow}></span>
            <span className={styles.downArrow}></span>
          </td>
          <td>
            Email
            <span className={styles.topArrow}></span>
            <span className={styles.downArrow}></span>
          </td>
          <td>
            Project Name
            <span className={styles.topArrow}></span>
            <span className={styles.downArrow}></span>
          </td>
          <td>
            Skills
            <span className={styles.topArrow}></span>
            <span className={styles.downArrow}></span>
          </td>
          <td>
            Employee Type
            <span className={styles.topArrow}></span>
            <span className={styles.downArrow}></span>
          </td>
          <td>
            Joining Date
            <span className={styles.topArrow}></span>
            <span className={styles.downArrow}></span>
          </td>
          <td>
            Salary
            <span className={styles.topArrow}></span>
            <span className={styles.downArrow}></span>
          </td>
          <td>
            Utilization
            <span className={styles.topArrow}></span>
            <span className={styles.downArrow}></span>
          </td>
          <td>
            Revenue Opportunity
            <span className={styles.topArrow}></span>
            <span className={styles.downArrow}></span>
          </td>
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
                ></div>
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
  );
};

export default TableComponent;
