import React from "react";
import "./Featured.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="feat-title">Total Revenue</h1>
        <MoreVertIcon />
      </div>
      <div className="bottom">
        <div styles={{ width: 100, height: 200 }} className="featuredChart">
          <CircularProgressbar strokeWidth={5} value={70} text={"70%"} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">
          Previuos transactions processing Last payments may not be included
        </p>
        <div className="target">
          <div className="target-1">
            <h5>Target</h5>
            <div className="target-details">
            <div className="target-info">
                <KeyboardArrowUpIcon className="target-icon"/>
                <p>$12.4k</p>
              </div>
            </div>
          </div>

          <div className="target-1">
            <h5>Target</h5>
            <div className="target-details">
            <div className="target-info">
                <KeyboardArrowUpIcon className="target-icon"/>
                <p>$12.4k</p>
              </div>
            </div>
          </div>

          <div className="target-1">
            <h5>Target</h5>
            <div className="target-details">
              <div className="target-info">
                <KeyboardArrowUpIcon className="target-icon"/>
                <p>$12.4k</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
