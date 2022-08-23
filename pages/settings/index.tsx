import React from "react";
import LeftSideBar from "../../components/LeftSideBar";

const Settings = () => {
  return (
    <div>
      <LeftSideBar />
      <div style={{ marginLeft: 300 }}>
        <h1>Settings</h1>
        <h3>Please Specify One of Below Three Options</h3>
        <h4>Admin Users</h4>
        <h4>Projects</h4>
        <h4>Employees</h4>
      </div>
    </div>
  );
};

export default Settings;
