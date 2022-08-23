import { useEffect, useState } from "react";
import AddModal from "../components/employees/AddModal";
import DetailsModal from "../components/employees/DetailsModal";
import OptionsMenu from "../components/employees/OptionsMenu";
import TableComponent from "../components/employees/TableComponent";
import HeaderComp from "../components/HeaderComp";
import LeftSideBar from "../components/LeftSideBar";

const ITEMS_IN_ONE_PAGE = 15;

const Employees = () => {
  const [addEmployeeModal, setAddEmployeeModal] = useState<boolean>(false);
  const [allChecked, setAllChecked] = useState<boolean>(false);
  const [currentPageData, setCurrentPageData] = useState<Array<any>>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [optionsMenu, setOptionsMenu] = useState<boolean>(false);
  const [currentOptions, setCurrentOptions] = useState<number>(0);

  const tempEmployeesData: Array<any> = [];

  for (let i = 0; i < 31; i++) {
    tempEmployeesData.push(["Shahan", "Sep 01 2022", "0", "uti", "revenue"]);
  }

  const LAST_PAGE = Math.ceil(tempEmployeesData.length / ITEMS_IN_ONE_PAGE);

  useEffect(() => {
    setCurrentPageData([
      ...tempEmployeesData.slice(
        (currentPage - 1) * ITEMS_IN_ONE_PAGE,
        currentPage * ITEMS_IN_ONE_PAGE
      ),
    ]);
    console.log("Current Page ===", currentPage);
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
  const handleUpdateProject = () => {};

  return (
    <>
      <LeftSideBar />
      <HeaderComp currPage={"employee"} openModal={setAddEmployeeModal} />
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
      />
      <AddModal
        openModal={addEmployeeModal}
        setOpenModal={setAddEmployeeModal}
      />
      <DetailsModal />
    </>
  );
};

export default Employees;
