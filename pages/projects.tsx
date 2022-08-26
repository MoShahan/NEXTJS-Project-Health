import { useEffect, useState } from "react";
import HeaderComp from "../components/HeaderComp";
import LeftSideBar from "../components/LeftSideBar";
import Pagination from "../components/Pagination";
import DetailsModal from "../components/projects/DetailsModal";
import UtilModal from "../components/projects/UtilModal";
import styles from "../styles/Projects.module.css";
import { PROJECT } from "../variables";

const ITEMS_IN_ONE_PAGE = 15;

const Projects = () => {
  const [addProjectModal, setAddProjectModal] = useState<boolean>(false);
  const [projectDetailsModal, setProjectDetailsModal] =
    useState<boolean>(false);
  const [utilModal, setUtilModal] = useState<boolean>(false);
  const [allChecked, setAllChecked] = useState<boolean>(false);
  const [currentPageData, setCurrentPageData] = useState<Array<any>>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [optionsMenu, setOptionsMenu] = useState<boolean>(false);
  const [currentOptions, setCurrentOptions] = useState<number>(0);

  const tempProjectData: Array<any> = [];

  for (let i = 0; i < 101; i++) {
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

  const LAST_PAGE = Math.ceil(tempProjectData.length / ITEMS_IN_ONE_PAGE);

  useEffect(() => {
    setCurrentPageData([
      ...tempProjectData.slice(
        (currentPage - 1) * ITEMS_IN_ONE_PAGE,
        currentPage * ITEMS_IN_ONE_PAGE
      ),
    ]);
  }, [currentPage]);

  const handlePaginationLeft = () => {
    if (currentPage === 1) {
      return;
    } else {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handlePaginationRight = () => {
    if (currentPage === LAST_PAGE) {
      return;
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handleOptionsMenu = (currIndex: number) => {
    if (currIndex === currentOptions) {
      setOptionsMenu((prev) => !prev);
    } else {
      setCurrentOptions(currIndex);
      setOptionsMenu(true);
    }
  };

  const handleEditProject = () => {};
  const handleActiveProject = () => {};
  const handleUpdateProject = () => {
    setUtilModal(true);
    setOptionsMenu(false);
  };

  return (
    <>
      <LeftSideBar />
      <HeaderComp
        currPage={PROJECT}
        openModal={setAddProjectModal}
        optionsModal={setOptionsMenu}
      />
      <div
        className={styles.optionsMenuBox}
        style={{
          display: optionsMenu ? "block" : "none",
          top: 290 + currentOptions * 70,
        }}
      >
        <div onClick={handleEditProject}>Edit</div>
        <div onClick={handleActiveProject}>Active / Inactive</div>
        <div onClick={handleUpdateProject}>Update Utilization</div>
      </div>
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
          {currentPageData.map((project: any, index: number) => {
            return (
              <tr>
                <td>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={allChecked ? true : undefined}
                  />
                </td>
                {project.map((cell: any) => (
                  <td
                    onClick={() => {
                      setProjectDetailsModal(true);
                      setOptionsMenu(false);
                    }}
                    className={styles.clickDetails}
                  >
                    {cell}
                  </td>
                ))}
                <td>
                  <div
                    onClick={() => {
                      handleOptionsMenu(index);
                    }}
                    className={styles.optionsMenu}
                  ></div>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <Pagination
              handlePaginationLeft={handlePaginationLeft}
              handlePaginationRight={handlePaginationRight}
              currentPage={currentPage}
              ITEMS_IN_ONE_PAGE={ITEMS_IN_ONE_PAGE}
              LAST_PAGE={LAST_PAGE}
              tempData={tempProjectData}
            />
          </tr>
        </tfoot>
      </table>
      <div
        style={{
          opacity: "0.2",
          display: addProjectModal ? "block" : "none",
        }}
        className={styles.modalBG}
      ></div>
      <div
        style={{ display: addProjectModal ? "block" : "none" }}
        className="wholeModalContainer"
      >
        <div className={styles.addProjectModalContainer}></div>
        <h1 className={styles.modalTitle}>Add Project</h1>
        <div className={styles.modalSep}></div>
        <div
          className={styles.modalClose}
          onClick={() => setAddProjectModal(false)}
        ></div>
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
      <DetailsModal
        openDetails={projectDetailsModal}
        setOpenDetails={setProjectDetailsModal}
      />
      <UtilModal openUtil={utilModal} setOpenUtil={setUtilModal} />
    </>
  );
};

export default Projects;
