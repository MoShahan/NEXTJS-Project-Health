import React, { useEffect, useState } from "react";
import styles from "../../styles/components/ViewDetails.module.css";
import { MdClose } from "react-icons/md";
import axios from "axios";

type ProjectDetailsProps = {
  openDetails: boolean;
  setOpenDetails: any;
  projectDataID: any;
};

const DetailsModal = ({
  openDetails,
  setOpenDetails,
  projectDataID,
}: ProjectDetailsProps) => {
  const [projectDetails, setProjectDetails] = useState<any>({});

  useEffect(() => {
    if (openDetails) {
      axios
        .get(
          `https://tranquil-hamlet-54124.herokuapp.com/project/${projectDataID}`
        )
        .then((res) => {
          setProjectDetails(res.data);
        })
        .catch((e) => console.log(e));
    } else {
      setProjectDetails({});
    }
  }, [openDetails, projectDataID]);

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
          {projectDetails?.id}
        </p>
        <div
          className={
            styles.separator +
            " " +
            styles.projectSeparatorRowOne +
            " " +
            styles.projectSeparatorColumnOne
          }
        ></div>
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
          {projectDetails?.name}
        </p>
        <div
          className={
            styles.separator +
            " " +
            styles.projectSeparatorRowOne +
            " " +
            styles.projectSeparatorColumnTwo
          }
        ></div>
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
          {projectDetails?.client_id}
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
          {projectDetails?.master_type_id}
        </p>
        <div
          className={
            styles.separator +
            " " +
            styles.projectSeparatorRowTwo +
            " " +
            styles.projectSeparatorColumnOne
          }
        ></div>
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
          {projectDetails?.project_manager_id}
        </p>
        <div
          className={
            styles.separator +
            " " +
            styles.projectSeparatorRowTwo +
            " " +
            styles.projectSeparatorColumnTwo
          }
        ></div>
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
          {projectDetails?.start_date}
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
          {projectDetails?.end_date}
        </p>
        <div
          className={
            styles.separator +
            " " +
            styles.projectSeparatorRowThree +
            " " +
            styles.projectSeparatorColumnOne
          }
        ></div>
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
          {projectDetails?.project_closure_status}
        </p>
        <div
          className={
            styles.separator +
            " " +
            styles.projectSeparatorRowThree +
            " " +
            styles.projectSeparatorColumnTwo
          }
        ></div>
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
          yet to recieve
        </p>
      </div>
    </div>
  );
};

export default DetailsModal;
