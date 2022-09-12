import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useSelector } from 'react-redux';

const ServerHeader = () => {
    const serverName = useSelector((state) => state.server.serverSelected.name);
    return (
        <div
            className="absolute top-0 flex h-12 w-full cursor-pointer items-center justify-between border-b border-gray-800 px-4 py-3 font-bold shadow 
                hover:bg-zinc-700"
        >
            <span className="w-48 overflow-hidden truncate">{serverName}</span>
            <ChevronDownIcon className="h-5" />
        </div>
    );
};

export default ServerHeader;
