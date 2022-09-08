import {
    ChevronDownIcon,
    ChevronRightIcon,
    Cog8ToothIcon,
    HashtagIcon,
    MicrophoneIcon,
    PlusIcon,
} from '@heroicons/react/24/solid';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { auth } from '../../firebase';
import { ReactComponent as Headphone } from '../assets/headphone.svg';

const ChannelBar = () => {
    return (
        <div className="relative h-screen w-60 min-w-[15rem] bg-zinc-750 text-gray-100">
            <ServerHeader />
            <div className="mt-12">
                <Category />
            </div>
            <UserFooter />
        </div>
    );
};

export default ChannelBar;

const ServerHeader = () => {
    return (
        <div
            className="absolute top-0 flex h-[5vh] w-full cursor-pointer items-center justify-between border-b border-gray-800 px-4 py-3 font-bold shadow 
                hover:bg-zinc-700"
        >
            <span className="w-48 overflow-hidden truncate">INSY2S</span>
            <ChevronDownIcon className="h-5" />
        </div>
    );
};

const UserFooter = () => {
    const [user] = useAuthState(auth);

    return (
        <div className="absolute bottom-0 flex w-full items-center justify-between bg-zinc-775 px-2 py-1">
            <button
                className="flex items-center space-x-2 rounded p-1 
                hover:bg-zinc-700"
                onClick={() => signOut(auth)}
            >
                <img
                    src="https://cdn.discordapp.com/avatars/306033777669308416/9fdf2b63b258f0de00f691eb9f623141.webp?size=32"
                    alt=""
                    className="h-8 w-8 rounded-full object-contain"
                />
                <div className="flex flex-col items-start">
                    <span className="max-w-[96px] truncate text-sm font-bold">
                        {user.displayName.replace(/\s/g, '').toLowerCase()}
                    </span>
                    <span className="text-xs">#6264</span>
                </div>
            </button>
            <div className="flex space-x-1">
                <button className="group my-1 rounded-md p-1 transition-all duration-200 ease-in-out hover:bg-zinc-500">
                    <MicrophoneIcon className="h-5 cursor-pointer text-zinc-400 group-hover:text-zinc-300" />
                </button>
                <button className="group my-1 rounded-md p-1 transition-all duration-200 ease-in-out hover:bg-zinc-500">
                    <Headphone className="h-5 cursor-pointer text-zinc-400 group-hover:text-zinc-300" />
                </button>
                <button className="group my-1 rounded-md p-1 transition-all duration-200 ease-in-out hover:bg-zinc-500">
                    <Cog8ToothIcon className="h-5 cursor-pointer text-zinc-400 group-hover:text-zinc-300" />
                </button>
            </div>
        </div>
    );
};

const Category = () => {
    const [showChannels, setShowChannels] = useState(true);
    return (
        <div className="flex flex-col space-y-2 px-2 py-2 text-gray-400">
            <div
                className="flex items-center justify-between space-x-2 
                "
            >
                <button
                    className="flex cursor-pointer items-center space-x-2 
                    transition-all duration-200 ease-in-out 
                    hover:font-bold hover:text-white"
                    onClick={() => setShowChannels(!showChannels)}
                >
                    {showChannels ? (
                        <ChevronDownIcon className="h-3" />
                    ) : (
                        <ChevronRightIcon className="h-3" />
                    )}
                    <p className="text-sm font-bold">Text Channels</p>
                </button>
                <button className="hover:text-white">
                    <PlusIcon className="h-5" />
                </button>
            </div>
            <div className={`${showChannels ? 'flex' : 'hidden'} flex-col space-y-1`}>
                <Channel id="1" name="general" />
                <Channel id="2" name="décompression" />
                <Channel id="3" name="pmo" />
            </div>
        </div>
    );
};

const Channel = ({ id: idChanel, name }) => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const active = idChanel == searchParams.get('id');

    const handleRedirect = () => {
        navigate(`/channels?id=${idChanel}`);
    };

    return (
        <button
            className={`${active && 'rounded bg-zinc-700 font-bold text-white'} 
            flex cursor-pointer items-center space-x-2 p-2 text-sm hover:bg-zinc-700`}
            onClick={handleRedirect}
        >
            <HashtagIcon className="h-4" />
            <p className="truncate">{name}</p>
        </button>
    );
};
