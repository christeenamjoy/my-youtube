import React from "react";
import Button from "./Button";

const ButtonContainer = () => {
  const list = [
    "All",
    "Music",
    "Live",
    "Game",
    "Nature",
    "Cooking",
    "Recently Uploaded",
  ];

  return (
    <div className="flex flex-wrap m-2">
      {list.map((item) => (
        <Button name={item} key={item} />
      ))}
    </div>
  );
};

export default ButtonContainer;
