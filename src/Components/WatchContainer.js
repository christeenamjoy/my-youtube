import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { FETCH_VIDEO_URL } from "../utils/Constansts";
import { closeMenu } from "./appSlice";

const WatchContainer = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [videoData, setVideoData] = useState({});
  const id = searchParams.get("v");

  useEffect(() => {
    dispatch(closeMenu());
    const fetchVideo = async () => {
      const resposne = await fetch(FETCH_VIDEO_URL(id));
      const data = await resposne.json();
      setVideoData(data?.items[0]);
    };

    fetchVideo();
  }, [id,dispatch]);

  return (
    <div className="col-span-10 m-10">
      <iframe
        width="923"
        height="519"
        src={"https://www.youtube.com/embed/" + id}
        title={videoData?.snippet?.tags?.join(",")}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchContainer;
