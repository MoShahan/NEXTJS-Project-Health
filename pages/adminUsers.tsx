import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import AddModal from "../components/adminUsers/AddModal";
import DetailsModal from "../components/adminUsers/DetailsModal";
import OptionsMenu from "../components/adminUsers/OptionsMenu";
import TableComponent from "../components/adminUsers/TableComponent";
import HeaderComp from "../components/HeaderComp";
import LeftSideBar from "../components/LeftSideBar";
import { ADMIN } from "../variables";

const ITEMS_IN_ONE_PAGE = 10;

// let tempAdminsData: Array<any> = [];
let LAST_PAGE: number;

const AdminUsers = () => {
  const [addAdminModal, setAddAdminModal] = useState<boolean>(false);
  const [adminDetailsModal, setAdminDetailsModal] = useState<boolean>(false);
  const [allChecked, setAllChecked] = useState<boolean>(false);
  const [currentPageData, setCurrentPageData] = useState<Array<any>>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [optionsMenu, setOptionsMenu] = useState<boolean>(false);
  const [currentOptions, setCurrentOptions] = useState<number>(0);
  const [loadingAdminData, setLoadingAdminData] = useState<boolean>(true);
  const [adminsData, setAdminsData] = useState<Array<any>>([]);

  // console.log(adminDetailsModal)

  // useEffect(() => {
  //   tempAdminsData = [];
  //   for (let i = 0; i < 36; i++) {
  //     tempAdminsData.push([
  //       "1234567",
  //       "Shahan",
  //       "shahan@cc.com",
  //       "+971 508756181",
  //     ]);
  //   }
  //   LAST_PAGE = Math.ceil(tempAdminsData.length / ITEMS_IN_ONE_PAGE);
  // }, []);

  const getAdminDetails = () => {
    axios
      .get(`https://tranquil-hamlet-54124.herokuapp.com/user_profiles`)
      .then((res) => {
        // console.log(res.data);
        setAdminsData(res.data);
        setLoadingAdminData(false);
        LAST_PAGE = Math.ceil(res.data.length / ITEMS_IN_ONE_PAGE);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getAdminDetails();
  }, []);

  useEffect(() => {
    setCurrentPageData([
      ...adminsData.slice(
        (currentPage - 1) * ITEMS_IN_ONE_PAGE,
        currentPage * ITEMS_IN_ONE_PAGE
      ),
    ]);
  }, [currentPage, adminsData]);

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

  const handleDetailClick = (currIndex: number) => {
    setCurrentOptions(currIndex);
    setOptionsMenu(false);
    setAdminDetailsModal(true);
  };

  const handleEditAdmin = () => {};
  const handleArchiveAdmin = () => {};

  const handleDeleteAdmin = () => {
    const adminId = currentPageData[currentOptions].id;
    console.log(adminId);
    axios
      .delete(
        `https://tranquil-hamlet-54124.herokuapp.com/user_profile/${adminId}`
      )
      .then((res) => {
        console.log(res);
        setOptionsMenu(false);
        getAdminDetails();
      })
      .catch((e) => console.log(e));
  };

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
        handleEditProject={handleEditAdmin}
        handleArchiveProject={handleArchiveAdmin}
        handleDeleteProject={handleDeleteAdmin}
      />
      <TableComponent
        setAllChecked={setAllChecked}
        currentPageData={currentPageData}
        setCurrentPageData={setCurrentPageData}
        allChecked={allChecked}
        handleOptionsMenu={handleOptionsMenu}
        handlePaginationLeft={handlePaginationLeft}
        handlePaginationRight={handlePaginationRight}
        currentPage={currentPage}
        tempAdminsData={adminsData}
        // tempAdminsData={tempAdminsData}
        ITEMS_IN_ONE_PAGE={ITEMS_IN_ONE_PAGE}
        LAST_PAGE={LAST_PAGE}
        detailsModal={handleDetailClick}
        loading={loadingAdminData}
      />
      <AddModal
        openModal={addAdminModal}
        setOpenModal={setAddAdminModal}
        getAdminDetails={getAdminDetails}
      />
      <DetailsModal
        openDetails={adminDetailsModal}
        setOpenDetails={setAdminDetailsModal}
        adminDataID={currentPageData[currentOptions]?.id}
      />
    </div>
  );
};

export default AdminUsers;
