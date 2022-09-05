import React from "react";
import styles from "../../styles/components/OptionsMenu.module.css";
import tempStyles from "../../styles/Temp.module.css";

type OptionsMenuProps = {
  optionsMenu: boolean;
  currentOptions: number;
  handleEditProject: () => void;
  handleArchiveProject: () => void;
  handleDeleteProject: () => void;
};

const OptionsMenu = ({
  optionsMenu,
  currentOptions,
  handleEditProject,
  handleArchiveProject,
  handleDeleteProject,
}: OptionsMenuProps) => {
  return (
    <div
      className={styles.optionsMenuBox + " " + tempStyles.tempOptions}
      style={{
        display: optionsMenu ? "block" : "none",
        top: 260 + currentOptions * 65,
        left: 1255,
      }}
    >
      <div onClick={handleEditProject}>Edit</div>
      <div onClick={handleArchiveProject}>Archive</div>
      <div onClick={handleDeleteProject}>Delete</div>
    </div>
  );
};

export default OptionsMenu;
