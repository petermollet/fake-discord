import React from 'react';
import { useParams } from 'react-router-dom';

import { URL_CHANNEL_ID } from './../../constants/url';
import InputBar from './content/InputBar';
import MessageList from './content/message/MessageList';

const ChannelContent = () => {
    const params = useParams();
    const idChannel = params[URL_CHANNEL_ID];

    return (
        <div className="mr-[236px] flex h-full w-full flex-grow flex-col justify-between">
            <div
                className="scrollbar-track-rounded-ful h-[calc(100vh-120px)] overflow-y-auto overflow-x-hidden px-3 text-base text-gray-400 
                scrollbar-thin scrollbar-track-zinc-600 scrollbar-thumb-zinc-800 scrollbar-track-rounded-full scrollbar-thumb-rounded-full"
            >
                <MessageList />
            </div>
            <InputBar disabled={!idChannel} />
        </div>
    );
};

export default ChannelContent;
