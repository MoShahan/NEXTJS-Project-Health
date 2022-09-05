import React from "react";
import styles from "../../styles/components/Table.module.css";
import Pagination from "../Pagination";
import { MdCheckCircle, MdMoreVert, MdCancel } from "react-icons/md";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import tempStyles from "../../styles/Temp.module.css";

type AdminTableProps = {
  setAllChecked: any;
  currentPageData: Array<any>;
  allChecked: boolean;
  handleOptionsMenu: any;
  handlePaginationLeft: any;
  handlePaginationRight: any;
  currentPage: number;
  tempAdminsData: Array<any>;
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
  tempAdminsData,
  ITEMS_IN_ONE_PAGE,
  LAST_PAGE,
  detailsModal,
}: AdminTableProps) => {
  const adminTableHeaders = [
    "User ID",
    "Name",
    "Email",
    "Phone",
    "Role(s)",
    "Status",
  ];

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
          {adminTableHeaders.map((header) => (
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
              {admin.map((cell: string) => (
                <td
                  key={cell}
                  className={styles.clickDetails}
                  onClick={detailsModal}
                >
                  {cell}
                </td>
              ))}
              <td className={styles.clickDetails} onClick={detailsModal}>
                <div>Admin</div>
              </td>
              <td className={styles.clickDetails} onClick={detailsModal}>
                <span></span>
                Active
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
            tempData={tempAdminsData}
          />
        </tr>
      </tfoot>
    </table>
  );
};

export default TableComponent;
