import React, { useState } from "react";
import Pagination from "../Pagination";
import styles from "../../styles/components/Table.module.css";
import { MdMoreVert } from "react-icons/md";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import tempStyles from "../../styles/Temp.module.css";

type SettingsTableProps = {
  setAllChecked: any;
  currentPageData: Array<any>;
  setCurrentPageData: any;
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
  setCurrentPageData,
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
  const settingsTableHeaders = ["Name", "Description", "Status"];

  const [sortDirection, setSortDirection] = useState<"none" | "up" | "down">(
    "none"
  );

  const sortData = (column: string) => {
    const tempData = [...currentPageData];
    tempData.sort((a: any, b: any) =>
      sortDirection === "up"
        ? a[column]?.localeCompare(b[column])
        : b[column]?.localeCompare(a[column])
    );
    setSortDirection((prev) => (prev === "up" ? "down" : "up"));
    setCurrentPageData(tempData);
  };

  return (
    <table className={styles.adminTable + " " + tempStyles.tempTable}>
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
          {settingsTableHeaders.map((header) => (
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
        {currentPageData.map((eachRow: any, index: number) => {
          return (
            <tr key={index + eachRow?.name}>
              <td>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={allChecked ? true : undefined}
                />
              </td>
              <td className={styles.clickDetails} onClick={detailsModal}>
                {eachRow?.name}
              </td>
              <td className={styles.clickDetails} onClick={detailsModal}>
                {eachRow?.description}
              </td>
              <td className={styles.clickDetails} onClick={detailsModal}>
                {eachRow?.status}
              </td>
              <td>
                <div
                  onClick={() => {
                    handleOptionsMenu(index);
                  }}
                  className={styles.optionsMenu}
                >
                  <MdMoreVert />
                </div>
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
