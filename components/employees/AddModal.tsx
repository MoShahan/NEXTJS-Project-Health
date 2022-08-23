import React from "react";
import styles from "../../styles/components/Modal.module.css";

type EmployeeModalProps = { openModal: boolean; setOpenModal: any };

const AddModal = ({ openModal, setOpenModal }: EmployeeModalProps) => {
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
        <div
          className={styles.addProjectModalContainer}
          style={{ height: 802 }}
        ></div>
        <h1 className={styles.modalTitle}>Add Employee</h1>
        <div className={styles.modalSep}></div>
        <div className={styles.modalClose} onClick={() => setOpenModal(false)}>
          {" "}
          X{" "}
        </div>
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
        <div className={styles.modalPhoneInput}>
          <select
            className={styles.modalPhoneCountry}
            name=""
            id=""
            style={{ color: "rgba(33, 33, 33, 0.4)" }}
          >
            <option selected value="" disabled>
              Please Select...
            </option>
            <option value="">🇦🇪&emsp;</option>
            <option value="">U+1F1EA</option>
          </select>
          <input
            type="number"
            className={styles.modalPhoneNumber}
            placeholder={"+971"}
          />
        </div>

        <h6 className={styles.modalJoiningDate}>Joining Date</h6>
        <input type="date" className={styles.modalJoiningDateInput} />
        <h6 className={styles.modalSkills}>SKILLS</h6>
        <select
          className={styles.modalSkillsInput}
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
        <h6 className={styles.modalEmpType}>Employee Type</h6>
        <select
          className={styles.modalEmpTypeInput}
          name=""
          id=""
          style={{ color: "rgba(33, 33, 33, 0.4)" }}
        >
          <option selected disabled value="">
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
          <option selected disabled value="">
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
    </>
  );
};

export default AddModal;
