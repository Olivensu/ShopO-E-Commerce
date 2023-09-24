import React from 'react';
import SideBar from './SideBar';
import CreateCategories from '../Categories/CreateCategories';

const DashCreateCategory = () => {
    return (
        <div>
            <SideBar></SideBar>
            <div className="relative float-left w-[calc(100%-200px)] max-h-screen overflow-auto  bg-slate-50">
                <CreateCategories></CreateCategories>
            </div>
        </div>
    );
};

export default DashCreateCategory;