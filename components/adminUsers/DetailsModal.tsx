import React from "react";
import styles from "../../styles/components/ViewDetails.module.css";
import { MdClose } from "react-icons/md";

type AdminDetailsProps = {
  openDetails: boolean;
  setOpenDetails: any;
};

const DetailsModal = ({ openDetails, setOpenDetails }: AdminDetailsProps) => {
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
          style={{ height: 360 }}
        ></div>
        <h1 className={styles.modalTitle}>View Details</h1>
        <div className={styles.modalSep}></div>
        <div
          className={styles.modalClose}
          onClick={() => setOpenDetails(false)}
        ></div>
        <h6
          className={
            styles.userHeading +
            " " +
            styles.detailsModalHeading +
            " " +
            styles.detailsModalColumnOne +
            " " +
            styles.detailsModalHeadingRowOne
          }
        >
          User ID
        </h6>
        <p
          className={
            styles.userBody +
            " " +
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
            styles.nameHeading +
            " " +
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
            styles.nameBody +
            " " +
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
            styles.emailHeading +
            " " +
            styles.detailsModalHeading +
            " " +
            styles.detailsModalColumnThree +
            " " +
            styles.detailsModalHeadingRowOne
          }
        >
          Email
        </h6>
        <p
          className={
            styles.emailBody +
            " " +
            styles.detailsModalBody +
            " " +
            styles.detailsModalColumnThree +
            " " +
            styles.detailsModalBodyRowOne
          }
        >
          shahan@cc.com
        </p>
        <h6
          className={
            styles.phoneHeading +
            " " +
            styles.detailsModalHeading +
            " " +
            styles.detailsModalColumnOne +
            " " +
            styles.detailsModalHeadingRowTwo
          }
        >
          Phone
        </h6>
        <p
          className={
            styles.phoneBody +
            " " +
            styles.detailsModalBody +
            " " +
            styles.detailsModalColumnOne +
            " " +
            styles.detailsModalBodyRowTwo
          }
        >
          +971 508756181
        </p>
        <h6
          className={
            styles.roleHeading +
            " " +
            styles.detailsModalHeading +
            " " +
            styles.detailsModalColumnTwo +
            " " +
            styles.detailsModalHeadingRowTwo
          }
        >
          Roles
        </h6>
        <p
          className={
            styles.roleBody +
            " " +
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
            styles.adminStatusHeading +
            " " +
            styles.detailsModalHeading +
            " " +
            styles.detailsModalColumnThree +
            " " +
            styles.detailsModalHeadingRowTwo
          }
        >
          Status
        </h6>
        <p
          className={
            styles.adminStatusBody +
            " " +
            styles.detailsModalBody +
            " " +
            styles.detailsModalColumnThree +
            " " +
            styles.detailsModalBodyRowTwo
          }
        >
          04 Sep 2022
        </p>
        {/* <h6 className={styles.descriptionHeading}>Description</h6>
        <p className={styles.descriptionBody}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit modi
          obcaecati dolor atque deleniti facere nulla possimus vitae ratione
          iste itaque, illo suscipit nobis non!
        </p> */}
      </div>
    </div>
  );
};

export default DetailsModal;
