import React from 'react';

import InputBar from './InputBar';

const ChannelContent = () => {
    return (
        <div className="flex w-full flex-col justify-between">
            <div className="px-3 text-base text-gray-200"></div>
            <InputBar />
        </div>
    );
};

export default ChannelContent;
