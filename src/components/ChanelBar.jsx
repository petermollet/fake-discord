import {
    ChevronDownIcon,
    Cog8ToothIcon,
    MicrophoneIcon,
} from '@heroicons/react/24/solid';
import React from 'react';

import { ReactComponent as Headphone } from '../assets/headphone.svg';

const ChanelBar = () => {
    return (
        <div className="relative w-60 bg-zinc-750 text-gray-100">
            <div className="absolute top-0 flex w-full cursor-pointer items-center justify-between border-b border-gray-800 px-4 py-3 font-bold shadow hover:bg-zinc-700">
                <p>INSY2S</p>
                <ChevronDownIcon className="h-5" />
            </div>
            <div className="absolute bottom-0 flex w-full items-center justify-between bg-zinc-775 px-2 py-1">
                <div className="flex cursor-pointer items-center space-x-2 rounded p-1 hover:bg-zinc-700">
                    <img
                        src="https://cdn.discordapp.com/avatars/306033777669308416/9fdf2b63b258f0de00f691eb9f623141.webp?size=32"
                        alt=""
                        className="h-8 w-8 rounded-full object-contain"
                    />
                    <div>
                        <p className="w-24 truncate text-sm font-bold">plisken59</p>
                        <p className="text-xs">#6164</p>
                    </div>
                </div>

                <div className="flex space-x-3">
                    <MicrophoneIcon className="h-5 cursor-pointer text-zinc-400" />
                    <Headphone className="h-5 cursor-pointer text-zinc-400" />
                    <Cog8ToothIcon className="h-5 cursor-pointer text-zinc-400" />
                </div>
            </div>
        </div>
    );
};

export default ChanelBar;
