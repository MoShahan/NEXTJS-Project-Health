import React, { useEffect, useState } from "react";
import styles from "../../styles/components/Table.module.css";
import Pagination from "../Pagination";
import { MdCheckCircle, MdMoreVert, MdCancel } from "react-icons/md";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import tempStyles from "../../styles/Temp.module.css";
import axios from "axios";
import Splash from "../Splash";

type AdminTableProps = {
  setAllChecked: any;
  currentPageData: Array<any>;
  setCurrentPageData: any;
  allChecked: boolean;
  handleOptionsMenu: any;
  handlePaginationLeft: any;
  handlePaginationRight: any;
  currentPage: number;
  tempAdminsData: Array<any>;
  ITEMS_IN_ONE_PAGE: number;
  LAST_PAGE: number;
  detailsModal: any;
  loading: boolean;
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
  tempAdminsData,
  ITEMS_IN_ONE_PAGE,
  LAST_PAGE,
  detailsModal,
  loading,
}: AdminTableProps) => {
  const adminTableHeaders = [
    "User ID",
    "Name",
    "Email",
    "Phone",
    "Role",
    "Status",
  ];

  const [sortDirection, setSortDirection] = useState<"none" | "up" | "down">(
    "none"
  );

  const sortData = (column: string) => {
    const tempData = [...currentPageData];
    switch (column) {
      case "phone":
      case "user id":
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

  const getIcon = (status: string) => {
    switch (status?.toLowerCase()) {
      case "active":
        return <MdCheckCircle color={"green"} />;
      case "inactive":
        break;
      case "rejected":
        return <MdCancel />;
      case "invite sent":
        break;
      default:
        return "Not Found";
    }
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
          {adminTableHeaders.map((header) => (
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
        {currentPageData?.map((admin: any, index: number) => (
          <tr key={index + admin?.email} onClick={() => detailsModal(index)}>
            <td
              className={styles.dontClickDetails}
              onClick={(e) => e.stopPropagation()}
            >
              <input
                type="checkbox"
                name=""
                id=""
                checked={allChecked ? true : undefined}
              />
            </td>
            <td>{admin?.id}</td>
            <td>
              {admin?.first_name} {admin?.last_name}
            </td>
            <td>{admin?.email}</td>
            <td>{admin?.phone}</td>
            <td>
              {/* {admin.role.map((adminRole: string, roleIndex: any) => (
                  <div key={adminRole + roleIndex}>{adminRole}</div>
                ))} */}
              {/* <div>{admin.role}</div> */}
              <div>Admin</div>
            </td>
            <td>
              {/* <span></span> */}
              {/* Active */}
              {getIcon(admin?.status)} {admin?.status}
            </td>
            <td
              onClick={(e) => e.stopPropagation()}
              className={styles.dontClickDetails}
            >
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
            tempData={tempAdminsData}
          />
        </tr>
      </tfoot>
    </table>
  );
};

export default TableComponent;
