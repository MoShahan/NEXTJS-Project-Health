import { useEffect, useState } from "react";
import HeaderComp from "../components/HeaderComp";
import LeftSideBar from "../components/LeftSideBar";
import Pagination from "../components/Pagination";
import DetailsModal from "../components/projects/DetailsModal";
import UtilModal from "../components/projects/UtilModal";
import styles from "../styles/Projects.module.css";
import { PROJECT } from "../variables";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { MdMoreVert, MdClose } from "react-icons/md";
import tempStyles from "../styles/Temp.module.css";
import axios from "axios";

const ITEMS_IN_ONE_PAGE = 10;
// let tempProjectData: Array<any> = [];
let LAST_PAGE: number;

const Projects = () => {
  const projectTableHeaders = [
    "Project ID",
    "Name",
    "Client",
    "Project Type",
    "Project Responsible",
    "Start Date",
    "End Date",
    "Project Status",
    "Monthly Status",
  ];

  const [addProjectModal, setAddProjectModal] = useState<boolean>(false);
  const [projectDetailsModal, setProjectDetailsModal] =
    useState<boolean>(false);
  const [utilModal, setUtilModal] = useState<boolean>(false);
  const [allChecked, setAllChecked] = useState<boolean>(false);
  const [currentPageData, setCurrentPageData] = useState<Array<any>>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [optionsMenu, setOptionsMenu] = useState<boolean>(false);
  const [currentOptions, setCurrentOptions] = useState<number>(0);
  const [clientList, setClientList] = useState<Array<any>>([]);
  const [projectData, setProjectData] = useState<Array<any>>([]);
  const [addProjectData, setAddProjectData] = useState<any>({
    name: "",
    project_manager_id: 0,
    client_id: 0,
    master_type_id: 0,
    start_date: "",
    end_date: "",
    project_closure_status: "",
  });
  const [projectTypes, setProjectTypes] = useState<Array<any>>([]);

  const getProjectData = () => {
    axios
      .get(`https://tranquil-hamlet-54124.herokuapp.com/projects/all`)
      .then((res) => {
        // console.log("P List");
        // console.log(res.data);
        setProjectData(res.data);
        LAST_PAGE = Math.ceil(res.data.length / ITEMS_IN_ONE_PAGE);
        // console.log(LAST_PAGE);
      })
      .catch((e) => {
        // console.log(e);
        console.error(e.message);
      });
  };

  const getClientsList = () => {
    axios
      .get(`https://tranquil-hamlet-54124.herokuapp.com/clients/dropdown`)
      .then((res) => {
        // console.log(res);
        setClientList(res.data);
      })
      .catch((e) => console.log(e));
  };

  const getProjectTypes = () => {
    axios
      .get("https://tranquil-hamlet-54124.herokuapp.com/project_types/names")
      .then((res) => {
        // console.log(res);
        setProjectTypes(res.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    // tempProjectData = [];
    // for (let i = 0; i < 27; i++) {
    //   tempProjectData.push([
    //     "1234567",
    //     "Shahan",
    //     "Shahan",
    //     "Shahan",
    //     "Shahan",
    //     "04 Sep 1999",
    //     "30 Nov 2000",
    //     "Closed",
    //     "On-Track",
    //   ]);
    // }
    // LAST_PAGE = Math.ceil(tempProjectData.length / ITEMS_IN_ONE_PAGE);
  }, []);

  useEffect(() => {
    // setCurrentPageData([
    //   ...tempProjectData.slice(
    //     (currentPage - 1) * ITEMS_IN_ONE_PAGE,
    //     currentPage * ITEMS_IN_ONE_PAGE
    //   ),
    // ]);
    setCurrentPageData([
      ...projectData.slice(
        (currentPage - 1) * ITEMS_IN_ONE_PAGE,
        currentPage * ITEMS_IN_ONE_PAGE
      ),
    ]);
  }, [currentPage, projectData]);

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

  const handleActiveProject = () => {
    axios
      .put(
        `https://tranquil-hamlet-54124.herokuapp.com/project/${currentPageData[currentOptions].id}`,
        {
          project: {
            status:
              currentPageData[currentOptions].status === "Active"
                ? "Inactive"
                : "Active",
          },
        }
      )
      .then((res) => {
        console.log(res);
        getProjectData();
      })
      .catch((e) => console.log(e));
    setOptionsMenu(false);
  };

  const handleUpdateProject = () => {
    setUtilModal(true);
    setOptionsMenu(false);
  };

  const handleDeleteProject = () => {
    const projectId = currentPageData[currentOptions].id;
    axios
      .delete(
        `https://tranquil-hamlet-54124.herokuapp.com/project/${projectId}`
      )
      .then((res) => {
        console.log(res);
        getProjectData();
      })
      .catch((e) => console.log(e));
  };

  const handleEditProject = () => {
    setOptionsMenu(false);
    handleDeleteProject();
  };

  const handleAddProjectBtn = () => {
    //the button inside the modal
    axios
      .post(`https://tranquil-hamlet-54124.herokuapp.com/project`, {
        project: addProjectData,
      })
      .then((res) => {
        // console.log(res);
        console.log(res.data);
        getProjectData();
        setAddProjectModal(false);
      })
      .catch((e) => {
        console.log(e);
        console.error(e.config.data);
      });
  };

  const getColor = (value: string) => {
    switch (value?.toLowerCase()) {
      case "closed":
      case "behind schedule":
        return "#e02424";
      case "running":
      case "open":
      case "ahead Schedule":
      case "on-track":
        return "#33bc28";
      default:
        return "#111928";
    }
  };

  useEffect(() => {
    getProjectData();
    getClientsList();
    getProjectTypes();
  }, []);

  const handleTDClick = (currIndex: any) => {
    setProjectDetailsModal(true);
    setOptionsMenu(false);
    setCurrentOptions(currIndex);
  };

  const [sortDirection, setSortDirection] = useState<"none" | "up" | "down">(
    "none"
  );

  const sortData = (column: string) => {
    const tempData = [...currentPageData];
    switch (column) {
      case "project id":
        tempData.sort((a: any, b: any) =>
          sortDirection === "up" ? a?.id - b?.id : b?.id - a?.id
        );
        break;
      case "name":
        tempData.sort((a: any, b: any) =>
          sortDirection === "up"
            ? a?.name.localeCompare(b?.name)
            : b?.name.localeCompare(a?.name)
        );
        break;
      case "client":
        tempData.sort((a: any, b: any) =>
          sortDirection === "up"
            ? a?.client_id.localeCompare(b?.client_id)
            : b?.client_id.localeCompare(a?.client_id)
        );
        break;
      case "project type":
        tempData.sort((a: any, b: any) =>
          sortDirection === "up"
            ? a?.project_type.localeCompare(b?.project_type)
            : b?.project_type.localeCompare(a?.project_type)
        );
        break;
      case "project responsible":
        tempData.sort((a: any, b: any) =>
          sortDirection === "up"
            ? a?.project_manager_id.localeCompare(b?.project_manager_id)
            : b?.project_manager_id.localeCompare(a?.project_manager_id)
        );
        break;
      case "start date":
        tempData.sort((a: any, b: any) =>
          sortDirection === "up"
            ? a?.start_date?.localeCompare(b?.start_date)
            : b?.start_date?.localeCompare(a?.start_date)
        );
        break;
      case "end date":
        tempData.sort((a: any, b: any) =>
          sortDirection === "up"
            ? a?.end_date?.localeCompare(b?.end_date)
            : b?.end_date?.localeCompare(a?.end_date)
        );
        break;
      case "project status":
        tempData.sort((a: any, b: any) =>
          sortDirection === "up"
            ? a?.project_closure_status?.localeCompare(
                b?.project_closure_status
              )
            : b?.project_closure_status?.localeCompare(
                a?.project_closure_status
              )
        );
        break;
      case "monthly status":
        break;
    }

    setSortDirection((prev) => (prev === "up" ? "down" : "up"));
    setCurrentPageData(tempData);
  };

  return (
    <>
      <div className={styles.leftSideBarMain + " " + tempStyles.tempLeft}>
        <LeftSideBar />
      </div>
      <HeaderComp
        currPage={PROJECT}
        openModal={setAddProjectModal}
        optionsModal={setOptionsMenu}
      />
      <div
        className={styles.optionsMenuBox + " " + tempStyles.tempOptions}
        style={{
          display: optionsMenu ? "block" : "none",
          top: 260 + currentOptions * 65,
        }}
      >
        <div onClick={handleEditProject}>Edit</div>
        <div onClick={handleActiveProject}>Active / Inactive</div>
        <div onClick={handleUpdateProject}>Update Utilization</div>
      </div>
      <div className={styles.projectTableContainer}>
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
              {projectTableHeaders.map((header) => (
                <td key={header} onClick={() => sortData(header.toLowerCase())}>
                  {header}
                  <span className={styles.topArrow}>
                    <FiArrowUp />
                  </span>
                  <span className={styles.downArrow}>
                    <FiArrowDown />
                  </span>
                </td>
              ))}
              <td>Options</td>
            </tr>
          </thead>
          <tbody>
            {currentPageData.map((project: any, index: number) => (
              <tr
                key={index + project?.name}
                onClick={() => handleTDClick(index)}
              >
                <td
                  onClick={(e) => e.stopPropagation()}
                  className={styles.dontClickDetails}
                >
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={allChecked ? true : undefined}
                  />
                </td>
                <td>{project?.id}</td>
                <td>{project?.name}</td>
                <td>{project?.client_id}</td>
                <td>{project?.project_type}</td>
                <td>{project?.project_manager_id}</td>
                <td>{project?.start_date}</td>
                <td>{project?.end_date}</td>
                <td
                  style={{ color: getColor(project?.project_closure_status) }}
                >
                  {project?.project_closure_status}
                </td>
                <td
                //  style={{getColor[project?.project_closure_status]}}
                >
                  {/* {project?.} */}
                  monthly status
                </td>
                <td
                  className={styles.dontClickDetails}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div
                    onClick={() => {
                      handleOptionsMenu(index);
                    }}
                    className={styles.optionsMenu}
                  >
                    <MdMoreVert />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <Pagination
                handlePaginationLeft={handlePaginationLeft}
                handlePaginationRight={handlePaginationRight}
                currentPage={currentPage}
                ITEMS_IN_ONE_PAGE={ITEMS_IN_ONE_PAGE}
                LAST_PAGE={LAST_PAGE}
                // tempData={tempProjectData}
                tempData={projectData}
              />
            </tr>
          </tfoot>
        </table>
      </div>
      <div
        style={{
          display: addProjectModal ? "block" : "none",
          zIndex: 2,
          width: 1440,
          height: "100vh",
          position: "absolute",
        }}
      >
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
          {/* ==================================================== */}
          <h6 className={styles.modalName}>NAME</h6>
          <input
            className={styles.modalNameInput}
            type="text"
            placeholder="Enter"
            value={addProjectData.name}
            onChange={(e) =>
              setAddProjectData((prev: any) => ({
                ...prev,
                name: e.target.value,
              }))
            }
          />
          {/* ==================================================== */}
          <h6 className={styles.modalClient}>CLIENT</h6>
          <select
            className={styles.modalClientInput}
            value={addProjectData.client_id}
            onChange={(e) =>
              setAddProjectData((prev: any) => ({
                ...prev,
                client_id: parseInt(e.target.value),
              }))
            }
          >
            <option key={"select"} disabled value="">
              Select the Client...
            </option>
            {clientList?.map((client: any) => (
              <option key={client?.split(",")[1]} value={client?.split(",")[1]}>
                {client?.split(",")[0]}
              </option>
            ))}
          </select>
          {/* ==================================================== */}
          <h6 className={styles.modalProjectType}>PROJECT TYPE</h6>
          <select
            className={styles.modalProjectTypeInput}
            style={{ color: "rgba(33, 33, 33, 0.4)" }}
            value={addProjectData.master_type_id}
            onChange={(e) =>
              setAddProjectData((prev: any) => ({
                ...prev,
                master_type_id: parseInt(e.target.value),
              }))
            }
          >
            <option value="" disabled>
              Please Select...
            </option>
            {projectTypes?.map((ptype: any) => (
              <option
                key={ptype?.split(",")[1]}
                value={ptype?.split(",")[1].trim()}
              >
                {ptype?.split(",")[0]}
              </option>
            ))}
          </select>
          {/* ==================================================== */}
          <h6 className={styles.modalProjectResponsible}>
            PROJECT RESPONSIBLE
          </h6>
          <select
            className={styles.modalProjectResponsibleInput}
            style={{ color: "rgba(33, 33, 33, 0.4)" }}
            value={addProjectData.project_manager_id}
            onChange={(e) =>
              setAddProjectData((prev: any) => ({
                ...prev,
                project_manager_id: parseInt(e.target.value),
              }))
            }
          >
            <option disabled value="">
              Please Select...
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          {/* ==================================================== */}
          <h6 className={styles.modalStartDate}>START DATE</h6>
          <input
            className={styles.modalStartDateInput}
            type="date"
            value={addProjectData.start_date}
            onChange={(e) =>
              setAddProjectData((prev: any) => ({
                ...prev,
                start_date: e.target.value,
              }))
            }
          />
          {/* ==================================================== */}
          <h6 className={styles.modalEndDate}>END DATE</h6>
          <input
            className={styles.modalEndDateInput}
            type="date"
            value={addProjectData.end_date}
            onChange={(e) =>
              setAddProjectData((prev: any) => ({
                ...prev,
                end_date: e.target.value,
              }))
            }
          />
          {/* ==================================================== */}
          <h6 className={styles.modalProjectStatus}>PROJECT STATUS</h6>
          <select
            style={{ color: "rgba(33, 33, 33, 0.4)" }}
            className={styles.modalProjectStatusInput}
            value={addProjectData.project_closure_status}
            onChange={(e) =>
              setAddProjectData((prev: any) => ({
                ...prev,
                project_closure_status: e.target.value,
              }))
            }
          >
            <option disabled value="">
              Please Select...
            </option>
            <option value="open">Running</option>
            <option value="closed">Closed</option>
          </select>
          {/* ==================================================== */}
          <h6 className={styles.modalMonthlyStatus}>MONTHLY STATUS</h6>
          <select
            className={styles.modalMonthlyStatusInput}
            style={{ color: "rgba(33, 33, 33, 0.4)" }}
          >
            <option value="" disabled>
              Please Select...
            </option>
            <option value="Behind Schedule">Behind Schedule</option>
            <option value="On-Track">On-Track</option>
            <option value="Ahead Schedule">Ahead Schedule</option>
          </select>
          {/* ==================================================== */}
          <button
            className={styles.modalCancel}
            onClick={() => setAddProjectModal(false)}
          >
            Close
          </button>
          <button
            className={styles.modalAddProjectBtn}
            onClick={handleAddProjectBtn}
          >
            Add Project
          </button>
        </div>
      </div>
      <DetailsModal
        openDetails={projectDetailsModal}
        setOpenDetails={setProjectDetailsModal}
        projectDataID={currentPageData[currentOptions]?.id}
      />
      <UtilModal openUtil={utilModal} setOpenUtil={setUtilModal} />
    </>
  );
};

export default Projects;
