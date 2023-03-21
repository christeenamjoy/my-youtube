import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Body = () => {
  const toggleSideBar = useSelector((store) => store.app.toggleSideBar);
  return (
    <div className="grid grid-flow-col h-full  mt-16">
      {toggleSideBar && <SideBar />}
      <Outlet/>
    </div>
  );
};

export default Body;
