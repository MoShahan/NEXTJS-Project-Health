import React from "react";
import styles from "../../styles/components/AdminTable.module.css";
import Pagination from "../Pagination";

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
}: EmployeeTableProps) => {
  return (
    <table className={styles.adminTable}>
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
            User ID
            <span className={styles.topArrow}></span>
            <span className={styles.downArrow}></span>
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
            Phone
            <span className={styles.topArrow}></span>
            <span className={styles.downArrow}></span>
          </td>
          <td>
            Role(s)
            <span className={styles.topArrow}></span>
            <span className={styles.downArrow}></span>
          </td>
          <td>
            Status
            <span className={styles.topArrow}></span>
            <span className={styles.downArrow}></span>
          </td>
          <td>Options</td>
        </tr>
      </thead>
      <tbody>
        {currentPageData.map((admin: Array<any>, index: number) => {
          return (
            <tr>
              <td>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={allChecked ? true : undefined}
                />
              </td>
              {admin.map((cell: string) => (
                <td>{cell}</td>
              ))}
              <td>
                <div>Admin</div>
              </td>
              <td>
                <span></span>
                Active
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
