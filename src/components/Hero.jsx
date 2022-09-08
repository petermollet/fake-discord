import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import React from 'react';

import { ReactComponent as ImgLeft } from '../assets/discord-menu-left.svg';
import { ReactComponent as ImgMiddle } from '../assets/discord-menu-middle.svg';
import { ReactComponent as ImgRight } from '../assets/discord-menu-right.svg';

const Hero = () => {
    return (
        <div className="bg-discord-blue">
            <div className="relative flex min-h-[626px] flex-col justify-between pt-9 md:h-[607px] lg:items-center lg:justify-center">
                {/* SECTION */}
                <div className="z-50 flex flex-col gap-7 pl-6 md:max-w-md lg:max-w-none lg:justify-center">
                    <h1 className="clamp font-bold uppercase text-white">
                        Imagine a place ...
                    </h1>
                    <h6 className="font-light tracking-wider text-white lg:max-w-3xl">
                        ...where you can belong to a school club, a gaming group, or a
                        worldwide art community. Where just you and a handful of friends
                        can spend time together. A place that makes it easy to talk every
                        day and hang out more often.
                    </h6>
                    <div
                        className="flex flex-col items-center gap-6 sm:flex-row md:flex-col
          md:items-start lg:flex-row"
                    >
                        <button className="btn-white flex w-min flex-row items-center justify-between space-x-2 text-xl font-normal">
                            <ArrowDownTrayIcon className="w-5" />
                            <span>Download for Windows</span>
                        </button>
                        <button className="btn-white z-50 w-min bg-gray-900 text-xl font-normal text-white hover:bg-gray-800">
                            Open Discord in your browser
                        </button>
                    </div>
                </div>

                {/* IMG */}
                <div className="relative bottom-0 left-0 h-full w-full md:absolute">
                    <ImgMiddle className="absolute bottom-0 -ml-[1280px] hidden md:flex" />
                    <ImgLeft
                        className="relative -z-0 -ml-20 h-auto  w-full max-w-4xl
            md:ml-0 md:mb-0 md:hidden md:w-auto md:max-w-none
            lg:absolute lg:bottom-0 lg:left-2/4 lg:-ml-[1030px] lg:flex"
                    />
                    <ImgRight className="absolute hidden md:bottom-0 md:left-2/4 md:flex lg:ml-[370px]" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
