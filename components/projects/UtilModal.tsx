import React, { useCallback, useEffect, useState } from "react";
import styles from "../../styles/components/Utilization.module.css";
import { HiTrash } from "react-icons/hi";
import { MdAdd, MdClose } from "react-icons/md";

const TOP_VALUE_OF_FIELD_HEADING = 640;
const TOP_VALUE_OF_FIELD_INPUT = 690;
const HEIGHT_BETWEEN = 100;

type UtilModalProps = {
  openUtil: boolean;
  setOpenUtil: any;
};

const UtilModal = ({ openUtil, setOpenUtil }: UtilModalProps) => {
  const [numberOfExtraFields, setNumberOfExtraFields] = useState<number>(0);
  const [totalFields, setTotalFields] = useState<Array<any>>([]);

  const handleAdd = () => {
    setNumberOfExtraFields((prev) => prev + 1);
  };

  const handleDelete = useCallback(() => {
    if (numberOfExtraFields > 0) {
      setNumberOfExtraFields((prev) => prev - 1);
    }
  }, [numberOfExtraFields]);

  useEffect(() => {
    var tempTotalFields: Array<any> = [];
    for (let i = 0; i < numberOfExtraFields; i++) {
      tempTotalFields.push(
        <div key={i} style={{ position: "absolute" }}>
          <h6
            className={
              styles.headingRowFour +
              " " +
              styles.columnOne +
              " " +
              styles.heading
            }
            style={{
              top: TOP_VALUE_OF_FIELD_HEADING + i * HEIGHT_BETWEEN,
              width: 200,
            }}
          >
            Employee Name
          </h6>
          <input
            style={{
              width: 300,
              top: TOP_VALUE_OF_FIELD_INPUT + i * HEIGHT_BETWEEN,
            }}
            type="text"
            className={
              styles.bodyRowFour +
              " " +
              styles.columnOne +
              " " +
              styles.modalBody
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
            style={{
              top: TOP_VALUE_OF_FIELD_HEADING + i * HEIGHT_BETWEEN,
            }}
          >
            Utilization
          </h6>
          <input
            style={{
              width: 100,
              top: TOP_VALUE_OF_FIELD_INPUT + i * HEIGHT_BETWEEN,
            }}
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
            style={{
              top: TOP_VALUE_OF_FIELD_HEADING + i * HEIGHT_BETWEEN,
            }}
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
            style={{
              width: 100,
              top: TOP_VALUE_OF_FIELD_INPUT + i * HEIGHT_BETWEEN,
            }}
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
            style={{
              left: 1000,
              transform: "translateY(-5%)",
              top: 700 + i * HEIGHT_BETWEEN,
            }}
            onClick={handleDelete}
          >
            <HiTrash />
          </div>
        </div>
      );
    }
    setTotalFields(tempTotalFields);
  }, [numberOfExtraFields, handleDelete]);

  return (
    <div
      style={{
        display: openUtil ? "block" : "none",
        zIndex: 2,
        width: 1440,
        height: "100vh",
        position: "absolute",
      }}
    >
      <div
        style={{
          display: openUtil ? "block" : "none",
        }}
        className={styles.modalBG}
        onClick={() => setOpenUtil(false)}
      ></div>
      <div
        style={{ display: openUtil ? "block" : "none" }}
        className="wholeModalContainer"
      >
        <div
          className={styles.modalContainer}
          style={{ height: 700 + numberOfExtraFields * 100 }}
        ></div>
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
          disabled
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
        {totalFields}
        <button
          className={styles.addAnotherBtn}
          onClick={handleAdd}
          style={{ top: 680 + numberOfExtraFields * 100 }}
        >
          + Add another
        </button>
        <button
          className={styles.modalCancel}
          onClick={() => setOpenUtil(false)}
          style={{ top: 749 + numberOfExtraFields * 100 }}
        >
          Cancel
        </button>
        <button
          className={styles.modalSaveBtn}
          style={{ top: 749 + numberOfExtraFields * 100 }}
        >
          Add Project
        </button>
      </div>
    </div>
  );
};

export default UtilModal;
