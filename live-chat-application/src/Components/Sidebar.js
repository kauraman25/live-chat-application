import React, { useState } from "react";
import "./mystyle.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import NightlightIcon from "@mui/icons-material/Nightlight";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ConversationsItem from "./ConversationsItem";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Features/themeSlice";
function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);
  // const [lightTheme, setLightTheme] = useState("true");
  // console.log(useSelector((state) => state.themeKey));
  const [conversations, setConversations] = useState([
    {
      name: "Test#1",
      lastMessage: "Last message #1",
      timeStamp: "today",
    },
    {
      name: "Test#2",
      lastMessage: "Last message #2",
      timeStamp: "today",
    },
    {
      name: "Test#3",
      lastMessage: "Last message #3",
      timeStamp: "today",
    },
  ]);

  return (
    <div className={"sidebar-container" + (lightTheme ? "" : " dark")}>
      <div className={"sb-header" + (lightTheme ? "" : " dark")}>
        <div className="other-icons">
          <IconButton>
            <AccountCircleIcon
              className={"icon" + (lightTheme ? "" : " dark")}
            />
          </IconButton>
        </div>
        <div>
          <IconButton
            onClick={() => {
              navigate("users");
            }}
          >
            <PersonAddIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("groups");
            }}
          >
            <GroupAddIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("create-groups");
            }}
          >
            <AddCircleIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>
          <IconButton
            onClick={() => {
              dispatch(toggleTheme());
            }}
          >
            {lightTheme && (
              <NightlightIcon
                className={"icon" + (lightTheme ? "" : " dark")}
              />
            )}
            {!lightTheme && (
              <LightModeIcon className={"icon" + (lightTheme ? "" : " dark")} />
            )}
          </IconButton>
        </div>
      </div>
      <div className={"sb-search" + (lightTheme ? "" : " dark")}>
        <IconButton>
          <SearchIcon />
        </IconButton>

        <input
          placeholder="search"
          className={"search-box" + (lightTheme ? "" : " dark")}
        />
      </div>
      <div className={"sb-conversation" + (lightTheme ? "" : " dark")}>
        {conversations.map((conversation) => {
          return (
            <ConversationsItem props={conversation} key={conversation.name} />
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
