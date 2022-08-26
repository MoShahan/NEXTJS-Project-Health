import React, { useEffect, useState } from "react";
import styles from "../../styles/components/Utilization.module.css";
import { HiTrash } from "react-icons/hi";

type UtilizationModalProps = {
  openUtil: boolean;
  setOpenUtil: any;
};

// var totalFields: Array<any> = [];

const UtilizationModal = ({ openUtil, setOpenUtil }: UtilizationModalProps) => {
  // const [numberOfExtraFields, setNumberOfExtraFields] = useState<number>(0);
  // change top of add another button
  // change height of modal container
  // difference in top of each hreading and body == 99
  // heading - 540
  // body - 591
  // delete - 599

  //   useEffect(() => {
  //     totalFields = [];
  //     for (let i = 1; i < numberOfExtraFields + 1; i++) {
  //       totalFields.push(
  //         <div style={{ position: "absolute" }}>
  //           <h6
  //             className={styles.columnOne + " " + styles.heading}
  //             style={{ top: 540 + i * 50, background: "red" }}
  //           >
  //             Project Name
  //           </h6>
  //           <input
  //             style={{ width: 300 }}
  //             type="text"
  //             className={
  //               styles.bodyRowFour +
  //               " " +
  //               styles.columnOne +
  //               " " +
  //               styles.modalBody
  //             }
  //             placeholder="Enter..."
  //           />
  //           <h6
  //             className={styles.columnThree + " " + styles.heading}
  //             style={{ top: 540 + i * 50 }}
  //           >
  //             Utilization
  //           </h6>
  //           <input
  //             style={{ width: 200 }}
  //             type="text"
  //             className={
  //               styles.bodyRowFour +
  //               " " +
  //               styles.columnThree +
  //               " " +
  //               styles.modalBody
  //             }
  //             placeholder="0"
  //           />
  //           <div
  //             className={
  //               styles.headingRowFour +
  //               " " +
  //               styles.columnFive +
  //               " " +
  //               styles.delete
  //             }
  //             style={{ left: 955 }}
  //             onClick={handleDelete}
  //           >
  //             <HiTrash />
  //           </div>
  //         </div>
  //       );
  //     }
  //     console.log(totalFields);
  //     console.log(numberOfExtraFields);
  //   }, [numberOfExtraFields]);

  //   const handleAdd = () => {
  //     setNumberOfExtraFields((prev) => prev + 1);
  //   };
  //   const handleDelete = () => {
  //     console.log("Handle Delete is called");
  //     if (numberOfExtraFields > 0) {
  //       setNumberOfExtraFields((prev) => prev - 1);
  //       console.log("IF === ", numberOfExtraFields);
  //     }
  //   };

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
          Name
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
          Employee ID
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
          Salary
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
          Total Utilization
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
          Revenue Loss
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
          Project Name
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
          style={{ width: 200 }}
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
        <div
          className={
            styles.headingRowFour +
            " " +
            styles.columnFive +
            " " +
            styles.delete
          }
          style={{ left: 955 }}
        //   onClick={handleDelete}
        >
          <HiTrash />
        </div>
        {/* {totalFields.map((field: any) => field)} */}
        <button
          className={styles.addAnotherBtn}
        //   onClick={handleAdd}
        //   style={{ top: 680 + numberOfExtraFields * 70 }}
        >
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

export default UtilizationModal;
