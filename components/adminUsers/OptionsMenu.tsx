import React from "react";
import styles from "../../styles/components/OptionsMenu.module.css";

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
      className={styles.optionsMenuBox}
      style={{
        display: optionsMenu ? "block" : "none",
        top: 290 + currentOptions * 70,
        left: 1235,
      }}
    >
      <div onClick={handleEditProject}>Edit</div>
      <div onClick={handleArchiveProject}>Archive</div>
      <div onClick={handleDeleteProject}>Delete</div>
    </div>
  );
};

export default OptionsMenu;