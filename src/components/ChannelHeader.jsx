import { HashtagIcon } from '@heroicons/react/24/solid';

const ChannelHeader = () => {
    return (
        <div
            className="flex h-[5vh] w-full cursor-pointer items-center space-x-3 border-b border-gray-800 px-4 py-3 shadow 
            hover:bg-zinc-700"
        >
            <HashtagIcon className="h-5 text-gray-400" />
            <span className="font-bold text-white ">general</span>
            <span className="h-5 border border-gray-500" />
            <span className="text-sm text-gray-400">Ma belle description</span>
        </div>
    );
};

export default ChannelHeader;
