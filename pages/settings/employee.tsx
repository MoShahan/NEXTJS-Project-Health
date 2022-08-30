import React, { useEffect, useState } from "react";
import HeaderComp from "../../components/HeaderComp";
import LeftSideBar from "../../components/LeftSideBar";
import Details from "../../components/settings/Details";
import Modal from "../../components/settings/Modal";
import Table from "../../components/settings/Table";
import { EMPLOYEE_TYPE } from "../../variables";

const ITEMS_IN_ONE_PAGE = 14;
const tempEmployeeTypeData: Array<any> = [];
let LAST_PAGE: number;

const Employee = () => {
  const [addEmployeeTypeModal, setAddEmployeeTypeModal] =
    useState<boolean>(false);
  const [employeeDetailsModal, setEmployeeDetailsModal] =
    useState<boolean>(false);
  const [allChecked, setAllChecked] = useState<boolean>(false);
  const [currentPageData, setCurrentPageData] = useState<Array<any>>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [optionsMenu, setOptionsMenu] = useState<boolean>(false);
  const [currentOptions, setCurrentOptions] = useState<number>(0);

  useEffect(() => {
    for (let i = 0; i < 39; i++) {
      tempEmployeeTypeData.push([
        "Shahan",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        "Active",
      ]);
    }
    LAST_PAGE = Math.ceil(tempEmployeeTypeData.length / ITEMS_IN_ONE_PAGE);
  }, []);

  useEffect(() => {
    setCurrentPageData([
      ...tempEmployeeTypeData.slice(
        (currentPage - 1) * ITEMS_IN_ONE_PAGE,
        currentPage * ITEMS_IN_ONE_PAGE
      ),
    ]);
  }, [currentPage, tempEmployeeTypeData]);

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

  return (
    <div>
      <LeftSideBar />
      <HeaderComp
        currPage={EMPLOYEE_TYPE}
        openModal={setAddEmployeeTypeModal}
        optionsModal={setOptionsMenu}
      />
      <Table
        setAllChecked={setAllChecked}
        currentPageData={currentPageData}
        allChecked={allChecked}
        handleOptionsMenu={handleOptionsMenu}
        handlePaginationLeft={handlePaginationLeft}
        handlePaginationRight={handlePaginationRight}
        currentPage={currentPage}
        tempSettingsData={tempEmployeeTypeData}
        ITEMS_IN_ONE_PAGE={ITEMS_IN_ONE_PAGE}
        LAST_PAGE={LAST_PAGE}
        detailsModal={handleDetailClick}
      />
      <Modal
        currSetting="Employee Type"
        openModal={addEmployeeTypeModal}
        setOpenModal={setAddEmployeeTypeModal}
      />
      <Details
        openDetails={employeeDetailsModal}
        setOpenDetails={setEmployeeDetailsModal}
      />
    </div>
  );
};

export default Employee;
