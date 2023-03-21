import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import {
  HamburgerIcon,
  SearchIcon,
  SearchIconSmall,
  UserIcon,
} from "../assets/icons";
import { FECTH_AUTOSUGGESTION_URL } from "../utils/Constansts";
import { toggleSideBar } from "./appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchAutoSegestion(searchQuery);
    }, 200);
    return () => clearInterval(timer);
  }, [searchQuery]);

  const searchQueryLen = useMemo(() => searchQuery.length, [searchQuery]);

  const fetchAutoSegestion = async (searchQuery) => {
    const response = await fetch(FECTH_AUTOSUGGESTION_URL + searchQuery);
    const data = await response.json();
    setSearchResults(data);
  };

  const onClick = () => {
    dispatch(toggleSideBar());
  };

  const fetchData = async()=>{
    const response = await fetch()
  }
  return (
    <div className="fixed top-0 bg-white w-full h-16 shadow-lg items-center grid grid-flow-col px-4">
      <div className="flex col-span-1">
        <div onClick={onClick} className="w-6">
          {HamburgerIcon}
        </div>
        <img
          className="h-8 mx-2"
          src={
            "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          }
          alt="logo"
        />
      </div>
      <div className="col-span-4 relative">
        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSearch(true)}
            // onBlur={() => setShowSearch(false)}
            className=" border w-full py-2 rounded-l-full px-4"
          ></input>
          <button className="border py-2 rounded-r-full px-4 bg-gray-100"  onClick={fetchData}>
            {SearchIcon}
          </button>
        </div>
        {searchResults[1]?.length > 0 && showSearch ? (
          <div className="absolute bg-white shadow-lg rounded-lg w-full py-4"                
         >
            {searchResults[1]?.map((res) => (
              <div
                key={res}
                className="flex px-5 py-2 items-center  hover:bg-gray-200"
                onClick={()=>{setSearchQuery(res); fetchData()}}
              >
                {SearchIconSmall}
                <span className="pl-2">
                  {searchQuery}
                  <span className="font-bold">{res.slice(searchQueryLen)}</span>
                </span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className="col-span-4 flex justify-end">{UserIcon}</div>
    </div>
  );
};

export default Header;
