
import React, { useState } from "react";
import Chart from "../../compo/charts/Chart";
import Featured from "../../compo/featured/Featured";
import Navbar from "../../compo/navbar/Navbar";
import Widget from "../../compo/widget/Widget";
import Sidebar from "../sidebar/Sidebar";
import Table from "../../compo/table/Table";
import "./Home.css";

const Home = ({height}) => {
  const [toggleSidebar, setToggleSidebar] = useState(true);

  return (
    <div className="home">
      {toggleSidebar ? <Sidebar /> : ""}
      <div className="homeContainer">
        <Navbar
          toggleSidebar={toggleSidebar}
          setToggleSidebar={setToggleSidebar}
        />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart height={400}/>
        </div>
        <div className="listContainer">
          <div className="list-title">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
