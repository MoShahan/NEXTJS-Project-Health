import React from "react";
import styles from "../../styles/components/ViewDetails.module.css";

type SettingsDetailsProps = {
  openDetails: boolean;
  setOpenDetails: any;
};

const Details = ({ openDetails, setOpenDetails }: SettingsDetailsProps) => {
  return (
    <div>
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
        <div className={styles.detailsModalContainer}></div>
        <h1 className={styles.modalTitle}>View Details</h1>
        <div className={styles.modalSep}></div>
        <div
          className={styles.modalClose}
          onClick={() => setOpenDetails(false)}
        ></div>
        <h6 className={styles.skillHeading}>Skill Name</h6>
        <p className={styles.skillBody}>1234567</p>
        <h6 className={styles.statusHeading}>Status</h6>
        <p className={styles.statusBody}>Shahan</p>
        <h6 className={styles.descriptionHeading}>Description</h6>
        <p className={styles.descriptionBody}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit modi
          obcaecati dolor atque deleniti facere nulla possimus vitae ratione
          iste itaque, illo suscipit nobis non!
        </p>
      </div>
    </div>
  );
};

export default Details;
