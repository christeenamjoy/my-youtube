import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FETCH_ALL_URL } from "../utils/Constansts";
import WatchCard from "./WatchCard";

const WatchContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(FETCH_ALL_URL);
      const data = await response.json();
      setVideos(data);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap m-2">
      {videos.items?.map((video) => {
        return (
          <Link to={"watch?v=" + video.id} key={video.id}>
            <WatchCard data={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default WatchContainer;
