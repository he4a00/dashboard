import React from "react";
import "./Navbar.css";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ZoomInMapOutlinedIcon from "@mui/icons-material/ZoomInMapOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch } from "react-redux";
import { darkActions } from "../../store/darkSlice";

const Navbar = ({ toggleSidebar, setToggleSidebar }) => {
  const toggle = () => {
    setToggleSidebar(!toggleSidebar);
  };
  const dispatch = useDispatch();
  const { toggleDarkMode } = darkActions;
  return (
    <div className="navbar">
      <div className="nav-wrapper">
        <div className="menu">
          <MenuIcon className="menu-icon" onClick={() => toggle()} />
        </div>
        <div className="search">
          <input placeholder="Search..." />
          <SearchIcon className="search-icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon />
            <span>English</span>
          </div>

          <div className="item">
            <DarkModeOutlinedIcon onClick={() => dispatch(toggleDarkMode())} />
          </div>

          <div className="item">
            <ZoomInMapOutlinedIcon />
          </div>

          <div className="item">
            <NotificationsNoneOutlinedIcon />
            <div className="counter">2</div>
          </div>

          <div className="item">
            <ChatBubbleOutlineOutlinedIcon />
            <div className="counter">2</div>
          </div>

          <div className="item">
            <FormatListBulletedOutlinedIcon />
          </div>

          <div className="item">
            <SettingsOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
