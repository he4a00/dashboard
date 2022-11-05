import React, { useState } from "react";
import "./Users.css";
import Sidebar from "../../pages/sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import DataTable from "../datatable/Datatable";

const List = () => {
  const [toggleSidebar, setToggleSidebar] = useState(true);
  return (
    <div className="list">
      {toggleSidebar ? <Sidebar /> : ""}
      <div className="userContainer">
        <Navbar
          toggleSidebar={toggleSidebar}
          setToggleSidebar={setToggleSidebar}
        />
        <DataTable/>
      </div>
    </div>
  );
};

export default List;
