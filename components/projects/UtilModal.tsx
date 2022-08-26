import React, { useState } from "react";
import styles from "../../styles/components/Utilization.module.css";
import { HiTrash } from "react-icons/hi";

type UtilModalProps = {
  openUtil: boolean;
  setOpenUtil: any;
};

const UtilModal = ({ openUtil, setOpenUtil }: UtilModalProps) => {
  const handleAdd = () => {};
  const handleDelete = () => {};

  return (
    <div>
      <div
        style={{
          display: openUtil ? "block" : "none",
        }}
        className={styles.modalBG}
      ></div>
      <div
        style={{ display: openUtil ? "block" : "none" }}
        className="wholeModalContainer"
      >
        <div className={styles.modalContainer} style={{ height: 800 }}></div>
        <h1 className={styles.modalTitle}>Update Utilization</h1>
        <div className={styles.modalSep}></div>
        <div
          className={styles.modalClose}
          onClick={() => setOpenUtil(false)}
        ></div>
        <h6
          className={
            styles.headingRowOne + " " + styles.columnOne + " " + styles.heading
          }
        >
          Project Name
        </h6>
        <input
          className={
            styles.bodyRowOne + " " + styles.columnOne + " " + styles.modalBody
          }
          type="text"
          style={{ width: 420 }}
          placeholder="Enter..."
        />
        <h6
          className={
            styles.headingRowOne +
            " " +
            styles.columnFour +
            " " +
            styles.heading
          }
        >
          Project Type
        </h6>
        <input
          style={{ width: 180 }}
          type="text"
          className={
            styles.bodyRowOne + " " + styles.columnFour + " " + styles.modalBody
          }
          placeholder="Enter..."
        />
        <h6
          className={
            styles.headingRowTwo + " " + styles.columnOne + " " + styles.heading
          }
        >
          Month
        </h6>
        <input
          className={
            styles.bodyRowTwo + " " + styles.columnOne + " " + styles.modalBody
          }
          type="date"
          style={{ width: 300 }}
        />
        <h6
          className={
            styles.headingRowTwo +
            " " +
            styles.columnThree +
            " " +
            styles.heading
          }
        >
          Year
        </h6>
        <input
          type="date"
          style={{ width: 300 }}
          className={
            styles.bodyRowTwo +
            " " +
            styles.columnThree +
            " " +
            styles.modalBody
          }
        />
        <h6
          className={
            styles.headingRowThree +
            " " +
            styles.columnOne +
            " " +
            styles.heading
          }
        >
          Monthly Cost
        </h6>
        <input
          type="text"
          className={
            styles.bodyRowThree +
            " " +
            styles.columnOne +
            " " +
            styles.modalBody
          }
          style={{ width: 190 }}
          placeholder="0"
        />
        <h6
          className={
            styles.headingRowThree +
            " " +
            styles.columnTwo +
            " " +
            styles.heading
          }
        >
          Monthly Utilization
        </h6>
        <input
          style={{ width: 190 }}
          type="text"
          className={
            styles.bodyRowThree +
            " " +
            styles.columnTwo +
            " " +
            styles.modalBody
          }
          placeholder="0"
        />
        <h6
          className={
            styles.headingRowThree +
            " " +
            styles.columnFour +
            " " +
            styles.heading
          }
        >
          Cost YTD
        </h6>
        <input
          style={{ width: 190 }}
          type="text"
          className={
            styles.bodyRowThree +
            " " +
            styles.columnFour +
            " " +
            styles.modalBody
          }
          placeholder="0"
        />
        <h6
          className={
            styles.headingRowFour +
            " " +
            styles.columnOne +
            " " +
            styles.heading
          }
        >
          Employee Name
        </h6>
        <input
          style={{ width: 300 }}
          type="text"
          className={
            styles.bodyRowFour + " " + styles.columnOne + " " + styles.modalBody
          }
          placeholder="Enter..."
        />
        <h6
          className={
            styles.headingRowFour +
            " " +
            styles.columnThree +
            " " +
            styles.heading
          }
        >
          Utilization
        </h6>
        <input
          style={{ width: 100 }}
          type="text"
          className={
            styles.bodyRowFour +
            " " +
            styles.columnThree +
            " " +
            styles.modalBody
          }
          placeholder="0"
        />
        <h6
          className={
            styles.headingRowFour +
            " " +
            styles.columnFive +
            " " +
            styles.heading
          }
        >
          Cost
        </h6>
        <input
          type="text"
          className={
            styles.bodyRowFour +
            " " +
            styles.columnFive +
            " " +
            styles.modalBody
          }
          style={{ width: 100 }}
          placeholder="0"
        />
        <div
          className={
            styles.headingRowFour +
            " " +
            styles.columnFive +
            " " +
            styles.delete
          }
          style={{ left: 1000 }}
          onClick={handleDelete}
        >
          <HiTrash />
        </div>
        <button className={styles.addAnotherBtn} onClick={handleAdd}>
          + Add another
        </button>
        <button
          className={styles.modalCancel}
          onClick={() => setOpenUtil(false)}
          style={{ top: 849 }}
        >
          Cancel
        </button>
        <button className={styles.modalSaveBtn} style={{ top: 849 }}>
          Add Project
        </button>
      </div>
    </div>
  );
};

export default UtilModal;
