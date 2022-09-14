import { Cog8ToothIcon, MicrophoneIcon } from '@heroicons/react/24/solid';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../../../../firebase';
import { ReactComponent as Headphone } from '../../../assets/headphone.svg';

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
                    src={user?.photoURL}
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

export default UserFooter;
