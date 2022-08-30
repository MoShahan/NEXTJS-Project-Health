import { useEffect, useState } from "react";
import AddModal from "../components/employees/AddModal";
import DetailsModal from "../components/employees/DetailsModal";
import OptionsMenu from "../components/employees/OptionsMenu";
import TableComponent from "../components/employees/TableComponent";
import UtilizationModal from "../components/employees/UtilizationModal";
import HeaderComp from "../components/HeaderComp";
import LeftSideBar from "../components/LeftSideBar";
import { EMPLOYEE } from "../variables";

const ITEMS_IN_ONE_PAGE = 15;
const tempEmployeesData: Array<any> = [];
let LAST_PAGE: number;

const Employees = () => {
  const [addEmployeeModal, setAddEmployeeModal] = useState<boolean>(false);
  const [employeeDetailsModal, setEmployeeDetailsModal] =
    useState<boolean>(false);
  const [utilModal, setUtilModal] = useState<boolean>(false);
  const [allChecked, setAllChecked] = useState<boolean>(false);
  const [currentPageData, setCurrentPageData] = useState<Array<any>>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [optionsMenu, setOptionsMenu] = useState<boolean>(false);
  const [currentOptions, setCurrentOptions] = useState<number>(0);

  useEffect(() => {
    for (let i = 0; i < 27; i++) {
      tempEmployeesData.push([
        "1234567",
        "Shahan",
        "shahan@cc.com",
        ["Parking", "Quiz"],
        ["Front End", "Back End"],
        "Expert",
        "Sep 01 2022",
        "0",
        "uti",
        "revenue",
      ]);
    }
    LAST_PAGE = Math.ceil(tempEmployeesData.length / ITEMS_IN_ONE_PAGE);
  }, []);

  useEffect(() => {
    setCurrentPageData([
      ...tempEmployeesData.slice(
        (currentPage - 1) * ITEMS_IN_ONE_PAGE,
        currentPage * ITEMS_IN_ONE_PAGE
      ),
    ]);
  }, [currentPage, tempEmployeesData]);

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

  const handleDetailClick = () => {
    setOptionsMenu(false);
    setEmployeeDetailsModal(true);
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
      {/* <div style={{ width: 1900, position: "absolute" }}> */}
      <HeaderComp
        currPage={EMPLOYEE}
        openModal={setAddEmployeeModal}
        optionsModal={setOptionsMenu}
      />
      {/* </div> */}
      <OptionsMenu
        optionsMenu={optionsMenu}
        currentOptions={currentOptions}
        handleEditProject={handleEditProject}
        handleActiveProject={handleActiveProject}
        handleUpdateProject={handleUpdateProject}
      />
      <TableComponent
        setAllChecked={setAllChecked}
        currentPageData={currentPageData}
        allChecked={allChecked}
        handleOptionsMenu={handleOptionsMenu}
        handlePaginationLeft={handlePaginationLeft}
        handlePaginationRight={handlePaginationRight}
        currentPage={currentPage}
        tempEmployeesData={tempEmployeesData}
        ITEMS_IN_ONE_PAGE={ITEMS_IN_ONE_PAGE}
        LAST_PAGE={LAST_PAGE}
        detailsModal={handleDetailClick}
      />
      <AddModal
        openModal={addEmployeeModal}
        setOpenModal={setAddEmployeeModal}
      />
      <DetailsModal
        openDetails={employeeDetailsModal}
        setOpenDetails={setEmployeeDetailsModal}
      />
      <UtilizationModal openUtil={utilModal} setOpenUtil={setUtilModal} />
    </>
  );
};

export default Employees;
