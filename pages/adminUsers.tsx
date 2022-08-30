import Head from "next/head";
import { useEffect, useState } from "react";
import AddModal from "../components/adminUsers/AddModal";
import DetailsModal from "../components/adminUsers/DetailsModal";
import OptionsMenu from "../components/adminUsers/OptionsMenu";
import TableComponent from "../components/adminUsers/TableComponent";
import HeaderComp from "../components/HeaderComp";
import LeftSideBar from "../components/LeftSideBar";
import { ADMIN } from "../variables";

const ITEMS_IN_ONE_PAGE = 15;

const tempAdminsData: Array<any> = [];
let LAST_PAGE: number;

const AdminUsers = () => {
  const [addAdminModal, setAddAdminModal] = useState<boolean>(false);
  const [adminDetailsModal, setAdminDetailsModal] = useState<boolean>(false);
  const [allChecked, setAllChecked] = useState<boolean>(false);
  const [currentPageData, setCurrentPageData] = useState<Array<any>>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [optionsMenu, setOptionsMenu] = useState<boolean>(false);
  const [currentOptions, setCurrentOptions] = useState<number>(0);

  useEffect(() => {
    for (let i = 0; i < 47; i++) {
      tempAdminsData.push([
        "1234567",
        "Shahan",
        "shahan@cc.com",
        "+971 508756181",
      ]);
    }
    LAST_PAGE = Math.ceil(tempAdminsData.length / ITEMS_IN_ONE_PAGE);
  }, []);

  useEffect(() => {
    setCurrentPageData([
      ...tempAdminsData.slice(
        (currentPage - 1) * ITEMS_IN_ONE_PAGE,
        currentPage * ITEMS_IN_ONE_PAGE
      ),
    ]);
  }, [currentPage, tempAdminsData]);

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
    setAdminDetailsModal(true);
  };

  const handleEditProject = () => {};
  const handleArchiveProject = () => {};
  const handleDeleteProject = () => {};

  return (
    <div>
      <LeftSideBar />
      <HeaderComp
        currPage={ADMIN}
        openModal={setAddAdminModal}
        optionsModal={setOptionsMenu}
      />
      <OptionsMenu
        optionsMenu={optionsMenu}
        currentOptions={currentOptions}
        handleEditProject={handleEditProject}
        handleArchiveProject={handleArchiveProject}
        handleDeleteProject={handleDeleteProject}
      />
      <TableComponent
        setAllChecked={setAllChecked}
        currentPageData={currentPageData}
        allChecked={allChecked}
        handleOptionsMenu={handleOptionsMenu}
        handlePaginationLeft={handlePaginationLeft}
        handlePaginationRight={handlePaginationRight}
        currentPage={currentPage}
        tempAdminsData={tempAdminsData}
        ITEMS_IN_ONE_PAGE={ITEMS_IN_ONE_PAGE}
        LAST_PAGE={LAST_PAGE}
        detailsModal={handleDetailClick}
      />
      <AddModal openModal={addAdminModal} setOpenModal={setAddAdminModal} />
      <DetailsModal
        openDetails={adminDetailsModal}
        setOpenDetails={setAdminDetailsModal}
      />
    </div>
  );
};

export default AdminUsers;
