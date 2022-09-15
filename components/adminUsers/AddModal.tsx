import Head from "next/head";
import React, { useEffect, useState } from "react";
import styles from "../../styles/components/Modal.module.css";
import uaeFlag from "../../assets/pics/uae-flag.png";
import Image from "next/image";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { MdAdd, MdClose } from "react-icons/md";
import axios from "axios";

type AdminModalProps = {
  openModal: boolean;
  setOpenModal: any;
  getAdminDetails: any;
};

const AddModal = ({
  openModal,
  setOpenModal,
  getAdminDetails,
}: AdminModalProps) => {
  const [phoneNumber, setPhoneNumber] = useState<any>("");
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");

  useEffect(() => {
    console.log("Phone Number:", phoneNumber);
  }, [phoneNumber]);

  const handleAddBtn = () => {
    axios
      .post("https://tranquil-hamlet-54124.herokuapp.com/user_profile", {
        user_profile: {
          first_name: name.split(" ")[0],
          last_name: name.split(" ").slice(1).join(" "),
          user_id: 8,
          status: 1,
          master_type_id: 1,
          phone: phoneNumber,
          join_date: "2022-02-22",
        },
      })
      .then((res) => {
        console.log(res);
        setOpenModal(false);
        getAdminDetails();
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div
        style={{
          display: openModal ? "block" : "none",
          zIndex: 2,
          width: 1440,
          height: "100vh",
          position: "absolute",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            opacity: "0.2",
            display: openModal ? "block" : "none",
          }}
          className={styles.modalBG}
          onClick={() => setOpenModal(false)}
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h6 className={styles.modalEmail}>EMAIL</h6>
          <input
            className={styles.modalEmailInput}
            type="text"
            placeholder="Enter your mail..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <button
            className={
              styles.modalAddProjectBtn +
              " " +
              (email === "" ? styles.disabledAddBtn : "")
            }
            onClick={handleAddBtn}
          >
            Add Project
          </button>
        </div>
      </div>
    </>
  );
};

export default AddModal;
