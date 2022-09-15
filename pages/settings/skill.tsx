import axios from "axios";
import React, { useEffect, useState } from "react";
import ProtectedRoute from "../../components/auth/ProtectedRoute";
import HeaderComp from "../../components/HeaderComp";
import LeftSideBar from "../../components/LeftSideBar";
import Details from "../../components/settings/Details";
import Modal from "../../components/settings/Modal";
import Table from "../../components/settings/Table";
import { SKILL } from "../../variables";

const ITEMS_IN_ONE_PAGE = 10;
// let tempSkillsData: Array<any> = [];
let LAST_PAGE: number;

const Skill = () => {
  const [addNewSkillModal, setAddNewSkillModal] = useState<boolean>(false);
  const [addSkillDetailsModal, setAddSkillDetailsModal] =
    useState<boolean>(false);
  const [allChecked, setAllChecked] = useState<boolean>(false);
  const [currentPageData, setCurrentPageData] = useState<Array<any>>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [optionsMenu, setOptionsMenu] = useState<boolean>(false);
  const [currentOptions, setCurrentOptions] = useState<number>(0);
  const [loadingSType, setLoadingSType] = useState<boolean>(true);
  const [skillsData, setSkillsData] = useState<Array<any>>([]);

  // useEffect(() => {
  //   tempSkillsData = [];
  //   for (let i = 0; i < 99; i++) {
  //     tempSkillsData.push([
  //       "Shahan",
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  //       "Active",
  //     ]);
  //   }
  //   LAST_PAGE = Math.ceil(tempSkillsData.length / ITEMS_IN_ONE_PAGE);
  // }, []);

  useEffect(() => {
    // setCurrentPageData([
    //   ...tempSkillsData.slice(
    //     (currentPage - 1) * ITEMS_IN_ONE_PAGE,
    //     currentPage * ITEMS_IN_ONE_PAGE
    //   ),
    // ]);

    setCurrentPageData([
      ...skillsData.slice(
        (currentPage - 1) * ITEMS_IN_ONE_PAGE,
        currentPage * ITEMS_IN_ONE_PAGE
      ),
    ]);
  }, [currentPage, skillsData]);

  const getSkillTypeDetails = () => {
    axios
      .get(`https://tranquil-hamlet-54124.herokuapp.com/skills/all`)
      .then((res) => {
        // console.log(res);
        // setCurrentPageData(res.data);
        setSkillsData(res.data);
        setLoadingSType(false);
        LAST_PAGE = Math.ceil(res.data.length / ITEMS_IN_ONE_PAGE);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getSkillTypeDetails();
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
    setAddSkillDetailsModal(true);
  };

  return (
    <div>
      <LeftSideBar />
      <HeaderComp
        currPage={SKILL}
        openModal={setAddNewSkillModal}
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
        tempSettingsData={skillsData}
        // tempSettingsData={tempSkillsData}
        ITEMS_IN_ONE_PAGE={ITEMS_IN_ONE_PAGE}
        LAST_PAGE={LAST_PAGE}
        detailsModal={handleDetailClick}
      />
      <Modal
        currSetting="Skill"
        openModal={addNewSkillModal}
        setOpenModal={setAddNewSkillModal}
        getTypeDetails={getSkillTypeDetails}
      />
      <Details
        openDetails={addSkillDetailsModal}
        setOpenDetails={setAddSkillDetailsModal}
      />
    </div>
  );
};

export default ProtectedRoute(Skill);
