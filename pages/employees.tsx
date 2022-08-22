import AddModal from "../components/employees/AddModal";
import DetailsModal from "../components/employees/DetailsModal";
import OptionsMenu from "../components/employees/OptionsMenu";
import TableComponent from "../components/employees/TableComponent";
import HeaderComp from "../components/HeaderComp";
import LeftSideBar from "../components/LeftSideBar";

const Employees = () => {
  return (
    <>
      <LeftSideBar />
      <HeaderComp />
      <OptionsMenu />
      <TableComponent />
      <AddModal />
      <DetailsModal />
    </>
  );
};

export default Employees;
