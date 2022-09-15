import React, { useEffect, useState } from "react";
import styles from "../../styles/components/Modal.module.css";
import { MdClose } from "react-icons/md";
import axios from "axios";

type SettingsModalProps = {
  currSetting: string;
  openModal: boolean;
  setOpenModal: any;
  getTypeDetails: any;
};

const Modal = ({
  currSetting,
  openModal,
  setOpenModal,
  getTypeDetails,
}: SettingsModalProps) => {
  const [newDetails, setNewDetails] = useState<any>({
    name: "",
    description: "",
    status: "",
  });

  const handleAddType = () => {
    axios
      .post(
        `https://tranquil-hamlet-54124.herokuapp.com/${currSetting
          .split(" ")[0]
          .toLowerCase()}${
          currSetting.split(" ")[1]
            ? "_" + currSetting.split(" ")[1].toLowerCase()
            : ""
        }`,
        newDetails
      )
      .then((res) => {
        console.log(res);
        setOpenModal(false);
        getTypeDetails();
      })
      .catch((e) => console.log(e));
  };

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
          value={newDetails.name}
          onChange={(e) =>
            setNewDetails((prev: any) => ({ ...prev, name: e.target.value }))
          }
        />
        <h6 className={styles.modalDescription}>
          {currSetting + " Description"}
        </h6>
        <textarea
          className={styles.modalDescriptionInput}
          placeholder="Type your text here..."
          value={newDetails.description}
          onChange={(e) =>
            setNewDetails((prev: any) => ({
              ...prev,
              description: e.target.value,
            }))
          }
        />
        <h6 className={styles.modalStatus}>{currSetting + " Status"}</h6>
        <select
          className={styles.modalStatusInput}
          value={newDetails.status}
          onChange={(e) =>
            setNewDetails((prev: any) => ({ ...prev, status: e.target.value }))
          }
          style={{ color: "rgba(33, 33, 33, 0.4)" }}
        >
          <option disabled value="">
            Please Select Role...
          </option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="closed">Closed</option>
        </select>
        <button
          className={styles.modalCancel}
          onClick={() => setOpenModal(false)}
        >
          Close
        </button>
        <button className={styles.modalAddProjectBtn} onClick={handleAddType}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Modal;
