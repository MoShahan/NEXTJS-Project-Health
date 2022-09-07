import React, { useState } from "react";
import styles from "../../styles/components/Modal.module.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { MdClose } from "react-icons/md";

type EmployeeModalProps = { openModal: boolean; setOpenModal: any };

const AddModal = ({ openModal, setOpenModal }: EmployeeModalProps) => {
  const [phoneNumber, setPhoneNumber] = useState<any>("");

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
          onClick={() => setOpenModal(false)}
        ></div>
        <div
          style={{ display: openModal ? "block" : "none" }}
          className="wholeModalContainer"
        >
          <div
            className={styles.addProjectModalContainer}
            style={{ height: 802 }}
          ></div>
          <h1 className={styles.modalTitle}>Add Employee</h1>
          <div className={styles.modalSep}></div>
          <div
            className={styles.modalClose}
            onClick={() => setOpenModal(false)}
          ></div>
          <h6 className={styles.modalName}>NAME</h6>
          <input
            className={styles.modalNameInput}
            type="text"
            placeholder="Enter"
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
          <h6 className={styles.modalJoiningDate}>Joining Date</h6>
          <input type="date" className={styles.modalJoiningDateInput} />
          <h6 className={styles.modalSkills}>SKILLS</h6>
          <select
            className={styles.modalSkillsInput}
            name=""
            id=""
            style={{ color: "rgba(33, 33, 33, 0.4)" }}
          >
            <option value="" disabled>
              Please Select...
            </option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
          <h6 className={styles.modalEmpType}>Employee Type</h6>
          <select
            className={styles.modalEmpTypeInput}
            name=""
            id=""
            style={{ color: "rgba(33, 33, 33, 0.4)" }}
          >
            <option disabled value="">
              Please Select...
            </option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
          <h6 className={styles.modalSalary}>Salary</h6>
          <input
            className={styles.modalSalaryInput}
            type="text"
            name=""
            id=""
            placeholder="Please Select..."
            // onFocus={(e) => (e.target.type = "date")}
          />
          <h6 className={styles.modalUtilization}>Utilization</h6>
          <input
            className={styles.modalUtilizationInput}
            type="text"
            name=""
            id=""
            placeholder="Please Select..."
          />
          <h6 className={styles.modalRevenue}>Revenue Opportunity</h6>
          <select
            style={{ color: "rgba(33, 33, 33, 0.4)" }}
            className={styles.modalRevenueInput}
            name=""
            id=""
          >
            <option disabled value="">
              Please Select...
            </option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
          <button
            className={styles.modalCancel}
            onClick={() => setOpenModal(false)}
            style={{ top: 849 }}
          >
            Cancel
          </button>
          <button className={styles.modalAddProjectBtn} style={{ top: 849 }}>
            Add Project
          </button>
        </div>
      </div>
    </>
  );
};

export default AddModal;
