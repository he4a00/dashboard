import React from "react";
import "./Widget.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BookIcon from "@mui/icons-material/Book";

const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        price: "720",
        link: "See all users",
        icon: (
          <PersonIcon
            className="icon"
            style={{
              backgroundColor: "#ffd5d6",
              color: "#6e3539",
              fontSize: "30px",
            }}
          />
        ),
      };
      break;

    case "order":
      data = {
        title: "ORDERS",
        price: "260",
        link: "View all orders",
        icon: (
          <ShoppingCartIcon
            className="icon"
            style={{
              backgroundColor: "#f8edd2",
              color: "#d1b666",
              fontSize: "30px",
            }}
          />
        ),
      };
      break;

    case "earning":
      data = {
        title: "EARNINGS",
        price: "$4.6k",
        link: "View net earnings",
        icon: (
          <AttachMoneyIcon
            className="icon"
            style={{
              backgroundColor: "#b8e7bb",
              color: "#5fa65d",
              fontSize: "30px",
            }}
          />
        ),
      };
      break;

    case "balance":
      data = {
        title: "MY BALANCE",
        price: "$7.8k",
        link: "See details",
        icon: (
          <BookIcon
            className="icon"
            style={{
              backgroundColor: "#e6caea",
              color: "#5b1e5d",
              fontSize: "30px",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
        <div className="left">
          <span className="title">{data.title}</span>
          <span className="price">{data.price}</span>
          <span className="link" href="/">
            {data.link}
          </span>
        </div>
        <div className="right">
          <span className="percentage">
            <KeyboardArrowUpIcon /> +2 %
          </span>
          <span className="icon">{data.icon}</span>
        </div>
    </div>
  );
};

export default Widget;
