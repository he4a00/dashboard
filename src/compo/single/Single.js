import React, { useEffect, useState } from "react";
import "./Single.css";
import Sidebar from "../../pages/sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import { useParams } from "react-router-dom";
import Chart from "../charts/Chart";
import Table from "../../compo/table/Table";

const Single = () => {
  let { userID } = useParams();
  const [singleProduct, setSingleProduct] = useState([]);
  const getSingleProduct = () => {
    fetch(`http://localhost:3040/products/${userID}`)
      .then((res) => res.json())
      .then((singleProduct) => setSingleProduct(singleProduct));
  };
  useEffect(() => {
    getSingleProduct();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [toggleSidebar, setToggleSidebar] = useState(true);
  return (
    <div className="single">
      {toggleSidebar ? <Sidebar /> : ""}
      <div className="singleContainer">
        <Navbar
          toggleSidebar={toggleSidebar}
          setToggleSidebar={setToggleSidebar}
        />
        <div className="details-top">
          <div className="details-top-right">
            <div className="single-btn">
              <button className="btn btn-primary">Edit</button>
            </div>
            <h1 className="productHeader">Product Details</h1>
            <div className="single-item">
              <img src={singleProduct.image} alt="" />

              <div className="single-item-details">
                <h6>Product Title: {singleProduct.title}</h6>
                <h6>Product Price: {singleProduct.price}</h6>
                <h6>Product Status: {singleProduct.status}</h6>
                <h6>Product Category: {singleProduct.category}</h6>
              </div>
            </div>
          </div>
          <div className="details-top-left">
            <Chart height={250} />
          </div>
        </div>
        <div className="details-bottom">
        <div className="listContainer">
          <Table />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
