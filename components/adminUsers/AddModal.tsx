import React from "react";
import styles from "../../styles/components/AdminModal.module.css";

type AdminModalProps = { openModal: boolean; setOpenModal: any };

const AddModal = ({ openModal, setOpenModal }: AdminModalProps) => {
  return (
    <>
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
        <h1 className={styles.modalTitle}>Invite User</h1>
        <div className={styles.modalSep}></div>
        <div
          className={styles.modalClose}
          onClick={() => setOpenModal(false)}
        >
          {" "}
          X{" "}
        </div>
        <h6 className={styles.modalName}>NAME</h6>
        <input
          className={styles.modalNameInput}
          type="text"
          placeholder="Enter"
        />
        <h6 className={styles.modalClient}>EMAIL</h6>
        <input
          className={styles.modalClientInput}
          type="text"
          placeholder="Harvard University"
        />
        <h6 className={styles.modalProjectType}>PHONE NUMBER</h6>
        <select
          className={styles.modalProjectTypeInput}
          name=""
          id=""
          style={{ color: "rgba(33, 33, 33, 0.4)" }}
        >
          <option selected value="" disabled>
            Please Select...
          </option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
        </select>
        <h6 className={styles.modalProjectResponsible}>ROLE</h6>
        <select
          className={styles.modalProjectResponsibleInput}
          name=""
          id=""
          style={{ color: "rgba(33, 33, 33, 0.4)" }}
        >
          <option selected disabled value="">
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
        <button className={styles.modalAddProjectBtn}>Add Project</button>
      </div>
    </>
  );
};

export default AddModal;
