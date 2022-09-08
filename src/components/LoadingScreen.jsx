import React from 'react';

import { ReactComponent as Logo } from '../assets/icon_clyde_white_RGB.svg';

const LoadingScreen = () => {
    return (
        <div className="flex h-full w-full flex-1 flex-col items-center justify-center space-y-3 bg-zinc-800 text-white">
            <Logo className="h-16 w-16" />
            <h6 className="font-extrabold">Did you know</h6>
            <p className="text-sm">Discord&apos;s official birthday is May 13th, 2015.</p>
        </div>
    );
};

export default LoadingScreen;
