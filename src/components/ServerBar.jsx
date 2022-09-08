import { PlusIcon } from '@heroicons/react/24/solid';
import React from 'react';

import { ReactComponent as Logo } from '../assets/icon_clyde_white_RGB.svg';
import ServerIcon from './ServerIcon';

const ServerBar = () => {
    return (
        <div className="flex h-full w-16 flex-col items-center space-y-3 bg-zinc-800 pt-3">
            <div className="server-icon">
                <Logo className="h-5" />
            </div>
            <hr className="mx-auto w-8 border border-gray-600" />
            <ServerIcon image="https://cdn.discordapp.com/icons/742670186376724561/5c6ec1af7b0ae516fd40fcafe1ac706a.webp?size=96" />
            <ServerIcon image="https://cdn.discordapp.com/icons/662267976984297473/e75033be72087a87fa09e91727dac2a4.webp?size=96" />
            <ServerIcon image="https://cdn.discordapp.com/icons/435431947963990026/a_413e9ba7f99ad564e919a4fbac085d0d.webp?size=96" />
            <ServerIcon image="https://cdn.discordapp.com/icons/428823240824061954/9e7803948be9d0a1b1282f54ed7dd544.webp?size=96" />
            <ServerIcon image="https://cdn.discordapp.com/icons/174517705272066048/a_2ff6f973d095c39a11bcb27f03843287.webp?size=96" />
            <div className="server-icon group hover:bg-discord-green ">
                <PlusIcon className="h-7 text-discord-green group-hover:text-white" />
            </div>
        </div>
    );
};

export default ServerBar;

/*
className="w-min cursor-pointer bg-gray-600 rounded-full py-4 px-3 
        hover:rounded-xl hover:bg-discord-blurple
        transition-all duration-500 ease-in-out"
*/
