import React from "react";
import "./Sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { darkActions } from "../../store/darkSlice";

const Sidebar = () => {
  // const dark = useSelector((state) => state.dark);
  const dispatch = useDispatch();
  const { black, light } = darkActions;
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h5>he4a Store</h5>
        </Link>
      </div>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon1" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <GroupIcon className="icon1" />
            <Link to="/users" style={{ textDecoration: "none" }}>
              <span>Users</span>
            </Link>
          </li>

          <li>
            <ProductionQuantityLimitsIcon className="icon1" />
            <span>Products</span>
          </li>

          <li>
            <DeliveryDiningIcon className="icon1" />
            <span>Orders</span>
          </li>

          <li>
            <QueryStatsIcon className="icon1" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <CircleNotificationsIcon className="icon1" />
            <span>Stats</span>
          </li>

          <li>
            <SettingsSystemDaydreamIcon className="icon1" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsIcon className="icon1" />
            <span>System Health</span>
          </li>

          <li>
            <SettingsIcon className="icon1" />
            <span>Logs</span>
          </li>
          <p className="title">USER</p>
          <li>
            <SettingsIcon className="icon1" />
            <span>Settings</span>
          </li>

          <li>
            <AccountBoxIcon className="icon1" />
            <span>Profile</span>
          </li>

          <li>
            <LoginIcon className="icon1" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <p className="title">THEME</p>
        <div className="color-wrap">
          <div className="black" onClick={() => dispatch(black())}></div>
          <div className="white" onClick={() => dispatch(light())}></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
