import { duration, IconButton } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../Images/live-chat_512px.png";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
function Groups() {
  const lightTheme = useSelector((state) => state.themeKey);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transaction={{ ease: "anticipate", duration: "0.3" }}
        className={"list-container" + (lightTheme ? "" : " dark")}
      >
        <div className={"ug-header" + (lightTheme ? "" : " dark")}>
          <img
            src={Logo}
            alt="logo-image"
            style={{ height: "2rem", width: "2rem", marginLeft: "10px" }}
          />
          <p className={"ug-title" + (lightTheme ? "" : " dark")}>
            {" "}
            Available groups
          </p>
        </div>
        <div className={"sb-search" + (lightTheme ? "" : " dark")}>
          <IconButton>
            <SearchIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>
          <input
            placeholder="Search"
            className={"search-box" + (lightTheme ? "" : " dark")}
          />
        </div>
        <div className="ug-list">
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className={"list-tem" + (lightTheme ? "" : " dark")}
          >
            <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
            <p className={"con-title" + (lightTheme ? "" : " dark")}>
              Test Group
            </p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Groups;
