// import React from 'react';

import SideBar from "./SideBar";
import Home from "./home/Home";

const Dashboard = () => {
    return (
        <div className=" ">
            <SideBar></SideBar>
            <div className={` relative float-left w-[calc(100%-200px)] max-h-screen overflow-auto  bg-slate-50`}>
                <div>
                    <Home></Home>
                </div>
                
            </div>
        </div>
    );
};

export default Dashboard;