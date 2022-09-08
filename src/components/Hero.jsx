import React from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { ReactComponent as ImgLeft } from "../assets/discord-menu-left.svg";
import { ReactComponent as ImgMiddle } from "../assets/discord-menu-middle.svg";
import { ReactComponent as ImgRight } from "../assets/discord-menu-right.svg";

const Hero = () => {
  return (
    <div className="bg-discord-blue">
      <div className="pt-9 min-h-[626px] md:h-[607px] flex flex-col relative justify-between lg:justify-center lg:items-center">
        {/* SECTION */}
        <div className="pl-6 z-50 flex flex-col gap-7 md:max-w-md lg:max-w-none lg:justify-center">
          <h1 className="text-white font-bold uppercase clamp">
            Imagine a place ...
          </h1>
          <h6 className="text-white font-light tracking-wider lg:max-w-3xl">
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </h6>
          <div
            className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-6
          items-center md:items-start"
          >
            <button className="btn-white w-min flex flex-row justify-between items-center space-x-2 text-xl font-normal">
              <ArrowDownTrayIcon className="w-5" />
              <span>Download for Windows</span>
            </button>
            <button className="btn-white z-50 bg-gray-900 text-white w-min hover:bg-gray-800 text-xl font-normal">
              Open Discord in your browser
            </button>
          </div>
        </div>

        {/* IMG */}
        <div className="relative md:absolute bottom-0 left-0 h-full w-full">
          <ImgMiddle className="hidden md:flex absolute bottom-0 -ml-[1280px]" />
          <ImgLeft
            className="relative -z-0 h-auto max-w-4xl  w-full -ml-20
            md:hidden md:max-w-none md:ml-0 md:mb-0 md:w-auto
            lg:absolute lg:flex lg:bottom-0 lg:left-2/4 lg:-ml-[1030px]"
          />
          <ImgRight className="hidden md:flex absolute md:bottom-0 md:left-2/4 lg:ml-[370px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
