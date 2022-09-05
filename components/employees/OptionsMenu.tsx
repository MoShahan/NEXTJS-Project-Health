import React from "react";
import styles from "../../styles/components/OptionsMenu.module.css";
import tempStyles from "../../styles/Temp.module.css";

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
      className={styles.optionsMenuBox + " " + tempStyles.tempOptions}
      style={{
        display: optionsMenu ? "block" : "none",
        top: 260 + currentOptions * 65,
        width: 180,
        left: 1210,
      }}
    >
      <div onClick={handleEditProject}>Edit</div>
      <div onClick={handleActiveProject}>Active / Inactive</div>
      <div onClick={handleUpdateProject}>Update Utilization</div>
    </div>
  );
};

export default OptionsMenu;
