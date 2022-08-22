import Head from "next/head";
import { useEffect, useState } from "react";
import AddModal from "../components/adminUsers/AddModal";
import OptionsMenu from "../components/adminUsers/OptionsMenu";
import TableComponent from "../components/adminUsers/TableComponent";
import HeaderComp from "../components/HeaderComp";
import LeftSideBar from "../components/LeftSideBar";

const ITEMS_IN_ONE_PAGE = 15;

const AdminUsers = () => {
  const [addAdminModal, setAddAdminModal] = useState<boolean>(false);
  const [allChecked, setAllChecked] = useState<boolean>(false);
  const [currentPageData, setCurrentPageData] = useState<Array<any>>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [optionsMenu, setOptionsMenu] = useState<boolean>(false);
  const [currentOptions, setCurrentOptions] = useState<number>(0);

  const tempAdminsData: Array<any> = [];

  for (let i = 0; i < 47; i++) {
    tempAdminsData.push([
      "1234567",
      "Shahan",
      "shahan@cc.com",
      "+971 508756181",
    ]);
  }

  const LAST_PAGE = Math.ceil(tempAdminsData.length / ITEMS_IN_ONE_PAGE);

  useEffect(() => {
    setCurrentPageData([
      ...tempAdminsData.slice(
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
  const handleArchiveProject = () => {};
  const handleDeleteProject = () => {};

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.tutorialjinni.com/intl-tel-input/17.0.8/css/intlTelInput.css"
        />
        <script src="https://cdn.tutorialjinni.com/intl-tel-input/17.0.8/js/intlTelInput.min.js"></script>
      </Head>
      <LeftSideBar />
      <HeaderComp currPage={"admin"} openModal={setAddAdminModal} />
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
      />
      <AddModal openModal={addAdminModal} setOpenModal={setAddAdminModal} />
    </div>
  );
};

export default AdminUsers;
