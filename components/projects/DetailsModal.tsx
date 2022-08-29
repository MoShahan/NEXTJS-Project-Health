import React from "react";
import styles from "../../styles/components/ViewDetails.module.css";

type ProjectDetailsProps = {
  openDetails: boolean;
  setOpenDetails: any;
};

const DetailsModal = ({ openDetails, setOpenDetails }: ProjectDetailsProps) => {
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
      ></div>
      <div
        style={{ display: openDetails ? "block" : "none" }}
        className="wholeModalContainer"
      >
        <div
          className={styles.detailsModalContainer}
          style={{ height: 450 }}
        ></div>
        <h1 className={styles.modalTitle}>View Details</h1>
        <div className={styles.modalSep}></div>
        <div
          className={styles.modalClose}
          onClick={() => setOpenDetails(false)}
        ></div>
        <h6
          className={
            styles.detailsModalHeading +
            " " +
            styles.detailsModalColumnOne +
            " " +
            styles.detailsModalHeadingRowOne
          }
        >
          Project ID
        </h6>
        <p
          className={
            styles.detailsModalBody +
            " " +
            styles.detailsModalColumnOne +
            " " +
            styles.detailsModalBodyRowOne
          }
        >
          1234567
        </p>
        <h6
          className={
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
            styles.detailsModalBody +
            " " +
            styles.detailsModalColumnTwo +
            " " +
            styles.detailsModalBodyRowOne
          }
        >
          Shahan
        </p>
        <h6
          className={
            styles.detailsModalHeading +
            " " +
            styles.projectDetailsModalColumnThree +
            " " +
            styles.detailsModalHeadingRowOne
          }
        >
          Client
        </h6>
        <p
          className={
            styles.detailsModalBody +
            " " +
            styles.projectDetailsModalColumnThree +
            " " +
            styles.detailsModalBodyRowOne
          }
        >
          Bruce Wayne
        </p>
        <h6
          className={
            styles.detailsModalHeading +
            " " +
            styles.detailsModalColumnOne +
            " " +
            styles.detailsModalHeadingRowTwo
          }
        >
          Project Type
        </h6>
        <p
          className={
            styles.detailsModalBody +
            " " +
            styles.detailsModalColumnOne +
            " " +
            styles.detailsModalBodyRowTwo
          }
        >
          Front End
        </p>
        <h6
          className={
            styles.detailsModalHeading +
            " " +
            styles.detailsModalColumnTwo +
            " " +
            styles.detailsModalHeadingRowTwo
          }
        >
          Project Responsible
        </h6>
        <p
          className={
            styles.detailsModalBody +
            " " +
            styles.detailsModalColumnTwo +
            " " +
            styles.detailsModalBodyRowTwo
          }
        >
          Blah Blah
        </p>
        <h6
          className={
            styles.detailsModalHeading +
            " " +
            styles.projectDetailsModalColumnThree +
            " " +
            styles.detailsModalHeadingRowTwo
          }
        >
          Start Date
        </h6>
        <p
          className={
            styles.detailsModalBody +
            " " +
            styles.projectDetailsModalColumnThree +
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
          End Date
        </h6>
        <p
          className={
            styles.detailsModalBody +
            " " +
            styles.detailsModalColumnOne +
            " " +
            styles.detailsModalBodyRowThree
          }
        >
          30 Nov 2022
        </p>
        <h6
          className={
            styles.detailsModalHeading +
            " " +
            styles.detailsModalColumnTwo +
            " " +
            styles.detailsModalHeadingRowThree
          }
        >
          Project Status
        </h6>
        <p
          className={
            styles.detailsModalBody +
            " " +
            styles.detailsModalColumnTwo +
            " " +
            styles.detailsModalBodyRowThree +
            " " +
            styles.green
          }
        >
          Running
        </p>
        <h6
          className={
            styles.detailsModalHeading +
            " " +
            styles.projectDetailsModalColumnThree +
            " " +
            styles.detailsModalHeadingRowThree
          }
        >
          Monthly Status
        </h6>
        <p
          className={
            styles.detailsModalBody +
            " " +
            styles.projectDetailsModalColumnThree +
            " " +
            styles.detailsModalBodyRowThree +
            " " +
            styles.red
          }
        >
          Behind Schedule
        </p>
      </div>
    </div>
  );
};

export default DetailsModal;
