import { ChevronDownIcon, ChevronRightIcon, PlusIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

import Channel from './Channel';

const Category = ({ channels, handleAddChannel, categoryName }) => {
    const [showChannels, setShowChannels] = useState(true);
    return (
        <div className="flex flex-col space-y-2 px-2 py-2 text-gray-400">
            <div className="flex items-center justify-between space-x-2">
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
                    <p className="text-sm font-bold">{categoryName}</p>
                </button>
                <button
                    className="hover:text-white"
                    onClick={() => handleAddChannel(categoryName)}
                >
                    <PlusIcon className="h-5" />
                </button>
            </div>
            <div className={`${showChannels ? 'flex' : 'hidden'} flex-col space-y-1`}>
                {channels?.map((channel) => (
                    <Channel
                        key={channel.id}
                        name={channel.channelName}
                        id={channel.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default Category;
