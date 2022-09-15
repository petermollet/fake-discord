import React from 'react';

import defaultAvatar from '../../../../assets/default-avatar.png';
import DateUtils from './../../../../utils/dateUtils';

const Message = ({ content, username, avatar, date }) => {
    return (
        <>
            <li className="my-3 flex items-start text-gray-300">
                <img
                    className="mt-1 mr-5 h-10 w-10 rounded-full"
                    src={avatar ? avatar : defaultAvatar}
                    alt={username}
                />
                <div className="flex flex-col">
                    <div className="mb-1 flex items-center">
                        <span className="mr-2 text-sm font-bold text-gray-100">
                            {username}
                        </span>
                        <span className="text-xs font-bold text-gray-500">
                            {DateUtils.formatToTime(date)}
                        </span>
                    </div>
                    <div className="text-sm">{content}</div>
                </div>
            </li>
        </>
    );
};

export default Message;
