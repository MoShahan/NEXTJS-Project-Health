import Head from "next/head";
import React, { useEffect, useState } from "react";
import styles from "../../styles/components/Modal.module.css";
import uaeFlag from "../../assets/pics/uae-flag.png";
import Image from "next/image";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { MdAdd, MdClose } from "react-icons/md";

type AdminModalProps = { openModal: boolean; setOpenModal: any };

const AddModal = ({ openModal, setOpenModal }: AdminModalProps) => {
  const [phoneNumber, setPhoneNumber] = useState<any>("");

  useEffect(() => {
    console.log("Phone Number:", phoneNumber);
  }, [phoneNumber]);

  return (
    <>
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
          <h1 className={styles.modalTitle}>Invite User</h1>
          <div className={styles.modalSep}></div>
          <div
            className={styles.modalClose}
            onClick={() => setOpenModal(false)}
          ></div>
          <h6 className={styles.modalName}>NAME</h6>
          <input
            className={styles.modalNameInput}
            type="text"
            placeholder="Harvard University"
          />
          <h6 className={styles.modalEmail}>EMAIL</h6>
          <input
            className={styles.modalEmailInput}
            type="text"
            placeholder="Harvard University"
          />
          <h6 className={styles.modalPhone}>PHONE NUMBER</h6>
          <PhoneInput
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={setPhoneNumber}
            className={styles.modalPhoneInput}
          />
          <h6 className={styles.modalRole}>ROLE</h6>
          <select
            className={styles.modalRoleInput}
            name=""
            id=""
            style={{ color: "rgba(33, 33, 33, 0.4)" }}
            defaultValue={"Please Select Role"}
          >
            <option disabled value="">
              Please Select Role...
            </option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
          <button className={styles.modalAddAnotherBtn}>+ ADD ANOTHER</button>
          <button
            className={styles.modalCancel}
            onClick={() => setOpenModal(false)}
          >
            Close
          </button>
          <button className={styles.modalAddProjectBtn}>Add Project</button>
        </div>
      </div>
    </>
  );
};

export default AddModal;
