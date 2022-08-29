import React from "react";
import Pagination from "../Pagination";
import styles from "../../styles/components/Table.module.css";

type SettingsTableProps = {
  setAllChecked: any;
  currentPageData: Array<any>;
  allChecked: boolean;
  handleOptionsMenu: any;
  handlePaginationLeft: any;
  handlePaginationRight: any;
  currentPage: number;
  tempSettingsData: Array<any>;
  ITEMS_IN_ONE_PAGE: number;
  LAST_PAGE: number;
  detailsModal: any;
};

const Table = ({
  setAllChecked,
  currentPageData,
  allChecked,
  handleOptionsMenu,
  handlePaginationLeft,
  handlePaginationRight,
  currentPage,
  tempSettingsData,
  ITEMS_IN_ONE_PAGE,
  LAST_PAGE,
  detailsModal,
}: SettingsTableProps) => {
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
            Name
            <span className={styles.topArrow}></span>
            <span className={styles.downArrow}></span>
          </td>
          <td>
            Description
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
            <tr key={index + admin[0]}>
              <td>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={allChecked ? true : undefined}
                />
              </td>
              {admin.map((cell: string) => (
                <td
                  key={cell}
                  className={styles.clickDetails}
                  onClick={detailsModal}
                >
                  {cell}
                </td>
              ))}
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
            tempData={tempSettingsData}
          />
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
