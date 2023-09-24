// import React from 'react';

import SideBar from "./SideBar";

const Dashboard = () => {
    return (
        <div className=" ">
            <SideBar></SideBar>
            <div className={` relative float-left w-[calc(100%-200px)] max-h-screen overflow-auto  bg-slate-50`}>
                <div>
                    Dashboard
                     
                </div>
                
            </div>
        </div>
    );
};

export default Dashboard;