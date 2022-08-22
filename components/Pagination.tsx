import React from "react";
import styles from "../styles/components/Pagination.module.css";

type PaginationProps = {
  handlePaginationLeft: any;
  handlePaginationRight: any;
  currentPage: number;
  ITEMS_IN_ONE_PAGE: number;
  LAST_PAGE: number;
  tempData: Array<any>;
};

const Pagination = ({
  handlePaginationLeft,
  handlePaginationRight,
  currentPage,
  ITEMS_IN_ONE_PAGE,
  LAST_PAGE,
  tempData,
}: PaginationProps) => {
  return (
    <td className={styles.pagination}>
      <div
        onClick={handlePaginationLeft}
        className={styles.paginationLeftBtn}
      ></div>
      <div
        onClick={handlePaginationRight}
        className={styles.paginationRightBtn}
      ></div>
      <div className={styles.paginationText}>
        Showing{" "}
        <span className={styles.boldPaginationText}>
          {(currentPage - 1) * ITEMS_IN_ONE_PAGE +
            1 +
            "-" +
            (currentPage === LAST_PAGE
              ? tempData.length
              : currentPage * ITEMS_IN_ONE_PAGE)}
        </span>{" "}
        of{" "}
        <span className={styles.boldPaginationText}>
          {tempData.length}
        </span>
      </div>
    </td>
  );
};

export default Pagination;
