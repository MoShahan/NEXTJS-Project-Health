import React, { useEffect, useState } from "react";
import HeaderComp from "../../components/HeaderComp";
import LeftSideBar from "../../components/LeftSideBar";
import Details from "../../components/settings/Details";
import Modal from "../../components/settings/Modal";
import Table from "../../components/settings/Table";
import { SKILL } from "../../variables";

const ITEMS_IN_ONE_PAGE = 11;

const Skill = () => {
  const [addNewSkillModal, setAddNewSkillModal] = useState(false);
  const [addSkillDetailsModal, setAddSkillDetailsModal] = useState(false);
  const [allChecked, setAllChecked] = useState<boolean>(false);
  const [currentPageData, setCurrentPageData] = useState<Array<any>>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [optionsMenu, setOptionsMenu] = useState<boolean>(false);
  const [currentOptions, setCurrentOptions] = useState<number>(0);

  const tempSkillsData: Array<any> = [];

  for (let i = 0; i < 27; i++) {
    tempSkillsData.push([
      "Shahan",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Active",
    ]);
  }

  const LAST_PAGE = Math.ceil(tempSkillsData.length / ITEMS_IN_ONE_PAGE);

  useEffect(() => {
    setCurrentPageData([
      ...tempSkillsData.slice(
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

  return (
    <div>
      <LeftSideBar />
      <HeaderComp currPage={SKILL} openModal={setAddNewSkillModal} />
      <Table
        setAllChecked={setAllChecked}
        currentPageData={currentPageData}
        allChecked={allChecked}
        handleOptionsMenu={handleOptionsMenu}
        handlePaginationLeft={handlePaginationLeft}
        handlePaginationRight={handlePaginationRight}
        currentPage={currentPage}
        tempSettingsData={tempSkillsData}
        ITEMS_IN_ONE_PAGE={ITEMS_IN_ONE_PAGE}
        LAST_PAGE={LAST_PAGE}
        detailsModal={setAddSkillDetailsModal}
      />
      <Modal
        currSetting="Skill"
        openModal={addNewSkillModal}
        setOpenModal={setAddNewSkillModal}
      />
      <Details
        openDetails={addSkillDetailsModal}
        setOpenDetails={setAddSkillDetailsModal}
      />
    </div>
  );
};

export default Skill;
