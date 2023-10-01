import React from "react";
import "./Widgets.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import RedeemOutlinedIcon from "@mui/icons-material/RedeemOutlined";
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
const Widgets = ({ type }) => {
  const amount = 100;
  const percentage = 20;

  let data;
  if (type === "user") {
    data = {
      title: "USERS",
      isMoney: false,
      link: "See all users",
      icon: <PersonOutlineOutlinedIcon className="icon" style={{backgroundColor: "rgba(205, 170, 241)",color:"crimson"}} />,
    };
  }
  if (type === "order") {
    data = {
      title: "ORDERS",
      isMoney: false,
      link: "See all orders",
      icon: <RedeemOutlinedIcon className="icon" style={{backgroundColor: "rgb(234, 241, 10)",color:"grey"}} />,
    };
  }
  if (type === "earning") {
    data = {
      title: "EARNINGS",
      isMoney: true,
      link: "View net earnings",
      icon: <ShowChartOutlinedIcon className="icon" style={{backgroundColor: "rgb(18, 235, 29)"}} />,
    };
  }
  if (type === "balance") {
    data = {
      title: "BALANCE",
      isMoney: true,
      link: "See details",
      icon: <MonetizationOnOutlinedIcon className="icon" style={{backgroundColor: " rgb(239, 160, 12)",color:"purple"}} />,
    };
  }

  console.log(data);

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>

      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon />
          {percentage} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widgets;
