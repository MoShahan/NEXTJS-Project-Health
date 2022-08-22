import { useState } from "react";
import styles from "../styles/Projects.module.css";

const Projects = () => {
  const [addProjectModal, setAddProjectModal] = useState(true);
  const [allChecked, setAllChecked] = useState(false);

  // const handleNewProject = () => {
  //   setAddProjectModal(true);
  // };

  const tempProjectData = [];

  for (let i = 0; i < 10; i++) {
    tempProjectData.push([
      "1234567",
      "Shahan",
      "Shahan",
      "Shahan",
      "Shahan",
      "04 Sep 1999",
      "30 Nov 2000",
      "Closed",
      "On-Track",
    ]);
  }

  return (
    <>
      <div className={styles.navBar}>
        <div className={styles.bellIcon}></div>
        <div className={styles.avatorIcon}></div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.leftBar}>
        <div className="logo">
          <div className={styles.topSemi}></div>
          <div className={styles.bottomSemi}></div>
          <div className={styles.middleLine}></div>
          <div className={styles.topLine}></div>
          <div className={styles.bottomLine}></div>
        </div>
        <div className={styles.logoIconSep}></div>
        <div className={styles.adminUsersIcon}></div>
        <div className={styles.projectsIconBG}>
          <div className={styles.projectsIcon}></div>
        </div>
        <div className={styles.employeesIcon}></div>
        <div className={styles.settingsIcon}></div>
      </div>
      <div className="headerSection">
        <div className={styles.pageTitle}>Projects</div>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search..."
        />
        <div
        // className={styles.addProjectBtn}
        >
          <button
            className={styles.addProjectBtn}
            onClick={() => {
              setAddProjectModal(true);
              console.log("ADD PROJ BTN CLICKD");
            }}
          >
            + ADD PROJECT
          </button>
        </div>
      </div>
      <div className={styles.separator}></div>
      <table className={styles.projectTable}>
        <thead>
          <tr>
            <td>
              <input
                type="checkbox"
                name=""
                id=""
                onClick={() => setAllChecked((prev) => !prev)}
              />
            </td>
            <td>
              Project ID
              <span className={styles.topArrow}></span>
              <span className={styles.downArrow}></span>
            </td>
            <td>
              Name
              <span className={styles.topArrow}></span>
              <span className={styles.downArrow}></span>
            </td>
            <td>
              Client
              <span className={styles.topArrow}></span>
              <span className={styles.downArrow}></span>
            </td>
            <td>
              Project Type
              <span className={styles.topArrow}></span>
              <span className={styles.downArrow}></span>
            </td>
            <td>
              Project Responsible
              <span className={styles.topArrow}></span>
              <span className={styles.downArrow}></span>
            </td>
            <td>
              Start Date
              <span className={styles.topArrow}></span>
              <span className={styles.downArrow}></span>
            </td>
            <td>
              End Date
              <span className={styles.topArrow}></span>
              <span className={styles.downArrow}></span>
            </td>
            <td>
              Project Status
              <span className={styles.topArrow}></span>
              <span className={styles.downArrow}></span>
            </td>
            <td>
              Monthly Status
              <span className={styles.topArrow}></span>
              <span className={styles.downArrow}></span>
            </td>
            <td>Options</td>
          </tr>
        </thead>
        <tbody>
          {tempProjectData.map((project: any) => {
            return (
              <tr>
                <td>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={allChecked ? true : false}
                  />
                </td>
                {project.map((cell: any) => (
                  <td>{cell}</td>
                ))}
                <td>
                  <div className={styles.optionsMenu}></div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles.pagination}>
        <div className={styles.paginationLeftBtn}></div>
        <div className={styles.paginationRightBtn}></div>
        <div className={styles.paginationText}>
          Showing <span className={styles.boldPaginationText}>1-10</span> of{" "}
          <span className={styles.boldPaginationText}>20</span>
        </div>
      </div>
      <div
        style={{
          opacity: "0.2",
          display: addProjectModal ? "block" : "none",
        }}
        className={styles.modalBG}
      ></div>
      <div
        // style={{ opacity: addProjectModal ? "1" : "0" }}
        style={{ display: addProjectModal ? "block" : "none" }}
        className="wholeModalContainer"
      >
        <div className={styles.addProjectModalContainer}></div>
        <h1 className={styles.modalTitle}>Add Project</h1>
        <div className={styles.modalSep}></div>
        <div
          className={styles.modalClose}
          onClick={() => setAddProjectModal(false)}
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
        <h6 className={styles.modalClient}>CLIENT</h6>
        <input
          className={styles.modalClientInput}
          type="text"
          placeholder="Harvard University"
        />
        <h6 className={styles.modalProjectType}>PROJECT TYPE</h6>
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
        <h6 className={styles.modalProjectResponsible}>PROJECT RESPONSIBLE</h6>
        <select
          className={styles.modalProjectResponsibleInput}
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
        <h6 className={styles.modalStartDate}>START DATE</h6>
        <input
          className={styles.modalStartDateInput}
          type="text"
          name=""
          id=""
          placeholder="Please Select..."
          onFocus={(e) => (e.target.type = "date")}
        />
        <h6 className={styles.modalEndDate}>END DATE</h6>
        <input
          className={styles.modalEndDateInput}
          type="text"
          name=""
          id=""
          placeholder="Please Select..."
          onFocus={(e) => (e.target.type = "date")}
        />
        <h6 className={styles.modalProjectStatus}>PROJECT STATUS</h6>
        <select
          style={{ color: "rgba(33, 33, 33, 0.4)" }}
          className={styles.modalProjectStatusInput}
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
        <h6 className={styles.modalMonthlyStatus}>MONTHLY STATUS</h6>
        <select
          className={styles.modalMonthlyStatusInput}
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
        <button
          className={styles.modalCancel}
          onClick={() => setAddProjectModal(false)}
        >
          Close
        </button>
        <button className={styles.modalAddProjectBtn}>Add Project</button>
      </div>
    </>
  );
};

export default Projects;
