import React from 'react';

import InputBar from './content/InputBar';

const ChannelContent = () => {
    return (
        <div className="mr-[236px] flex h-full w-full flex-grow flex-col justify-between">
            <div className="px-3 text-base text-gray-200"></div>
            <InputBar />
        </div>
    );
};

export default ChannelContent;
