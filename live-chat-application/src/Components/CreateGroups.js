import { IconButton } from "@mui/material";
import React from "react";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import { useSelector } from "react-redux";
function CreateGroups() {
  const lightTheme = useSelector((state) => state.themeKey);

  return (
    <div className={"createGroups-container" + (lightTheme ? "" : " dark")}>
      <input placeholder="Enter Group Name" className="search-box" />
      <IconButton className={"icon" + (lightTheme ? "" : " dark")}>
        <DoneOutlineIcon />
      </IconButton>
    </div>
  );
}

export default CreateGroups;
