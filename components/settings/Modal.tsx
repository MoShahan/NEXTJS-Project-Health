import React from "react";
import styles from "../../styles/components/Modal.module.css";

type SettingsModalProps = {
  currSetting: string;
  openModal: boolean;
  setOpenModal: any;
};

const Modal = ({
  currSetting,
  openModal,
  setOpenModal,
}: SettingsModalProps) => {
  return (
    <div
      style={{
        display: openModal ? "block" : "none",
        zIndex: 2,
        width: 1440,
        height: "100vh",
        position: "absolute",
      }}
    >
      <div
        style={{
          opacity: "0.2",
          display: openModal ? "block" : "none",
        }}
        className={styles.modalBG}
      ></div>
      <div
        style={{ display: openModal ? "block" : "none" }}
        className="wholeModalContainer"
      >
        <div className={styles.addProjectModalContainer}></div>
        <h1 className={styles.modalTitle}>{"Add " + currSetting}</h1>
        <div className={styles.modalSep}></div>
        <div
          className={styles.modalClose}
          onClick={() => setOpenModal(false)}
        ></div>
        <h6 className={styles.modalName}>{currSetting + " NAME"}</h6>
        <input
          className={styles.modalNameInput}
          type="text"
          placeholder="Enter..."
        />
        <h6 className={styles.modalDescription}>
          {currSetting + " Description"}
        </h6>
        <textarea
          className={styles.modalDescriptionInput}
          placeholder="Type your text here..."
        />
        <h6 className={styles.modalStatus}>{currSetting + " Status"}</h6>
        <select
          className={styles.modalStatusInput}
          name=""
          id=""
          style={{ color: "rgba(33, 33, 33, 0.4)" }}
        >
          <option disabled value="">
            Please Select Role...
          </option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
        </select>
        <button
          className={styles.modalCancel}
          onClick={() => setOpenModal(false)}
        >
          Close
        </button>
        <button className={styles.modalAddProjectBtn}>Add</button>
      </div>
    </div>
  );
};

export default Modal;
