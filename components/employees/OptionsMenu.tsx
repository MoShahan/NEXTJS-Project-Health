import React from "react";
import styles from "../../styles/components/OptionsMenu.module.css";

type OptionsMenuProps = {
  optionsMenu: boolean;
  currentOptions: number;
  handleEditProject: () => void;
  handleActiveProject: () => void;
  handleUpdateProject: () => void;
};

const OptionsMenu = ({
  optionsMenu,
  currentOptions,
  handleEditProject,
  handleActiveProject,
  handleUpdateProject,
}: OptionsMenuProps) => {
  return (
    <div
      className={styles.optionsMenuBox}
      style={{
        display: optionsMenu ? "block" : "none",
        top: 290 + currentOptions * 70,
        width: 180,
      }}
    >
      <div onClick={handleEditProject}>Edit</div>
      <div onClick={handleActiveProject}>Active / Inactive</div>
      <div onClick={handleUpdateProject}>Update Utilization</div>
    </div>
  );
};

export default OptionsMenu;
