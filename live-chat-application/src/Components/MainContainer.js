import React from "react";
import "./mystyle.css";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import Users from "./Users";
// import ChatArea from "./ChatArea";
// import Welcome from "./Welcome";
// import CreateGroups from "./CreateGroups";

function MainContainer() {
    const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);
    return <div className={"main-container" + (lightTheme ? "" : " dark")}>
         <Sidebar />
         <Outlet />
        {/*<Welcome/>
        <CreateGroups />
        <ChatArea props={conversations[0]}/>
        <Users /> */}
    </div>;
}

export default MainContainer;