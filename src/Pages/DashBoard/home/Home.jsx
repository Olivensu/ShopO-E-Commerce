import React from "react";
import Chart from "../../../Compoents/Chart/Chart";
import Featured from "../../../Compoents/Featured/Featured";
import Fetured from "../../../Compoents/Fetured/Fetured";
import Tables from "../../../Compoents/Tables/Tables";
import Widgets from "../../../Compoents/Widgets/Widgets";
import Notifications from "../../../Compoents/Notifications/Notifications";
import Products from "../../../Compoents/Products/Products";
import Sales from "../../../Compoents/Sales/Sales";
import Weather from "../../../Compoents/Weather/Weather";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <div className="home">
      <div className="homeContainer">
        <div className="widgets">
          <Widgets type="user" />
          <Widgets type="order" />
          <Widgets type="earning" />
          <Widgets type="balance" />
        </div>

        <div className="charts">
          <Featured />
          <Chart />
        </div>
        <div className="listContainer">
            <div className=" ">Latest Transaction</div>
             <Tables/> 
        </div>
      </div>
      
    </div>
    <div className="main text-start ">
          <div className="title">Redgreen Sales</div>

          <Notifications />

          <div className="chartInfo">
            <Fetured />
            <Chart />
          </div>

          <div className="Allproducts">
            <Products />
            <div className="viewProducts">
              <Sales />
              <Weather />
            </div>
          </div>
        </div>
    </div>
  );
};

export default Home;
