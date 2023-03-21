import React from "react";
import { convertDatestampToTimeAgo, viewConverter } from "../utils/utils";

const WatchCard = ({ data }) => {
  return (
    <div className="m-2 w-72 cursor-pointer">
      <img
        src={data?.snippet?.thumbnails?.medium?.url}
        alt="thumbnail"
        className="rounded-lg"
      />
      <div className="font-bold m-2">{data?.snippet?.title}</div>
      <div className="mx-2">{data?.snippet?.channelTitle}</div>
      <div className="mx-2 mb-2 text-sm text-gray-500">
        {viewConverter(data?.statistics?.viewCount)} .
        <span className="ml-1">
          {convertDatestampToTimeAgo(data?.snippet?.publishedAt)}
        </span>
      </div>
    </div>
  );
};

export default WatchCard;
