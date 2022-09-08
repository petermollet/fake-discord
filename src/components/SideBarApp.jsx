import React from "react";

import { ReactComponent as Logo } from "../assets/icon_clyde_white_RGB.svg";

const SideBarApp = () => {
  return (
    <div>
      <div className="channel-icon ">
        <Logo className="h-5" />
      </div>
    </div>
  );
};

export default SideBarApp;

/*
className="w-min cursor-pointer bg-gray-600 rounded-full py-4 px-3 
        hover:rounded-xl hover:bg-discord-blurple
        transition-all duration-500 ease-in-out"
*/
