import React, { useEffect, useState } from "react";
import styles from "../../styles/components/ViewDetails.module.css";
import { MdClose } from "react-icons/md";
import axios from "axios";

type AdminDetailsProps = {
  openDetails: boolean;
  setOpenDetails: any;
  adminDataID: any;
};

const DetailsModal = ({
  openDetails,
  setOpenDetails,
  adminDataID,
}: AdminDetailsProps) => {
  const [adminDetails, setAdminDetails] = useState<any>({});

  useEffect(() => {
    if (openDetails) {
      axios
        .get(
          `https://tranquil-hamlet-54124.herokuapp.com/user_profile/${adminDataID}`
        )
        .then((res) => {
          setAdminDetails(res.data);
        })
        .catch((e) => console.log(e));
    } else {
      setAdminDetails({});
    }
  }, [openDetails]);

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
        onClick={() => setOpenDetails(false)}
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
          {adminDetails?.id}
        </p>
        <div
          className={
            styles.separator +
            " " +
            styles.adminSeparatorRowOne +
            " " +
            styles.adminSeparatorColumnOne
          }
        ></div>
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
          {adminDetails?.first_name} {adminDetails?.last_name}
        </p>
        <div
          className={
            styles.separator +
            " " +
            styles.adminSeparatorRowOne +
            " " +
            styles.adminSeparatorColumnTwo
          }
        ></div>
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
          {adminDetails?.email}
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
          {adminDetails?.phone}
        </p>
        <div
          className={
            styles.separator +
            " " +
            styles.adminSeparatorRowTwo +
            " " +
            styles.adminSeparatorColumnOne
          }
        ></div>
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
          Admin
        </p>
        <div
          className={
            styles.separator +
            " " +
            styles.adminSeparatorRowTwo +
            " " +
            styles.adminSeparatorColumnTwo
          }
        ></div>
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
          {adminDetails?.status}
        </p>
      </div>
    </div>
  );
};

export default DetailsModal;
