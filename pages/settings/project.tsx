import axios from "axios";
import React, { useEffect, useState } from "react";
import ProtectedRoute from "../../components/auth/ProtectedRoute";
import HeaderComp from "../../components/HeaderComp";
import LeftSideBar from "../../components/LeftSideBar";
import Details from "../../components/settings/Details";
import Modal from "../../components/settings/Modal";
import Table from "../../components/settings/Table";
import { PROJECT_TYPE } from "../../variables";

const ITEMS_IN_ONE_PAGE = 10;
// let tempProjectTypeData: Array<any> = [];
let LAST_PAGE: number;

const ProjectType = () => {
  const [addNewProjectTypeModal, setAddNewProjectTypeModal] =
    useState<boolean>(false);
  const [projectDetailsModal, setProjectDetailsModal] =
    useState<boolean>(false);
  const [allChecked, setAllChecked] = useState<boolean>(false);
  const [currentPageData, setCurrentPageData] = useState<Array<any>>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [optionsMenu, setOptionsMenu] = useState<boolean>(false);
  const [currentOptions, setCurrentOptions] = useState<number>(0);
  const [loadingPType, setLoadingPType] = useState<boolean>(true);
  const [projectTypeData, setProjectTypeData] = useState<Array<any>>([]);

  // useEffect(() => {
  //   tempProjectTypeData = [];
  //   for (let i = 0; i < 12; i++) {
  //     tempProjectTypeData.push([
  //       "Shahan",
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  //       "Active",
  //     ]);
  //   }
  //   LAST_PAGE = Math.ceil(tempProjectTypeData.length / ITEMS_IN_ONE_PAGE);
  // }, []);

  useEffect(() => {
    //   setCurrentPageData([
    //     ...tempProjectTypeData.slice(
    //       (currentPage - 1) * ITEMS_IN_ONE_PAGE,
    //       currentPage * ITEMS_IN_ONE_PAGE
    //     ),
    //   ]);
    setCurrentPageData([
      ...projectTypeData.slice(
        (currentPage - 1) * ITEMS_IN_ONE_PAGE,
        currentPage * ITEMS_IN_ONE_PAGE
      ),
    ]);
  }, [currentPage, projectTypeData]);

  const getProjectTypeDetails = () => {
    axios
      .get(`https://tranquil-hamlet-54124.herokuapp.com/project_types/all`)
      .then((res) => {
        // console.log(res);
        setProjectTypeData(res.data);
        setLoadingPType(false);
        LAST_PAGE = Math.ceil(res.data.length / ITEMS_IN_ONE_PAGE);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getProjectTypeDetails();
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

  const handleDetailClick = () => {
    setOptionsMenu(false);
    setProjectDetailsModal(true);
  };

  return (
    <div>
      <LeftSideBar />
      <HeaderComp
        currPage={PROJECT_TYPE}
        openModal={setAddNewProjectTypeModal}
        optionsModal={setOptionsMenu}
      />
      <Table
        setAllChecked={setAllChecked}
        currentPageData={currentPageData}
        setCurrentPageData={setCurrentPageData}
        allChecked={allChecked}
        handleOptionsMenu={handleOptionsMenu}
        handlePaginationLeft={handlePaginationLeft}
        handlePaginationRight={handlePaginationRight}
        currentPage={currentPage}
        tempSettingsData={projectTypeData}
        // tempSettingsData={tempProjectTypeData}
        ITEMS_IN_ONE_PAGE={ITEMS_IN_ONE_PAGE}
        LAST_PAGE={LAST_PAGE}
        detailsModal={handleDetailClick}
      />
      <Modal
        currSetting="Project Type"
        openModal={addNewProjectTypeModal}
        setOpenModal={setAddNewProjectTypeModal}
        getTypeDetails={getProjectTypeDetails}
      />
      <Details
        openDetails={projectDetailsModal}
        setOpenDetails={setProjectDetailsModal}
      />
    </div>
  );
};

const temp = ProtectedRoute(ProjectType);
// console.log("temp ==", temp);
export default temp;
// export default ProtectedRoute(ProjectType);
// export default ProjectType;
