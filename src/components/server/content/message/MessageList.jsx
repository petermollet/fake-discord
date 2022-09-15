import { Fragment, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import DateUtils from './../../../../utils/dateUtils';
import Message from './Message';

const MessageList = () => {
    const messages = useSelector((state) => state.channel.channelSelected.messages);

    //SCROLL TO BOTTOM
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'instant' });
    };
    useEffect(scrollToBottom, [messages]);

    return (
        <ol className="flex flex-col pt-1">
            <div className="h-full">
                {messages.map(({ id, ...message }, index) => {
                    let isSameDayAsPrevious = false;
                    if (index > 0) {
                        const datePrevious = DateUtils.formatToYearMonthDay(
                            messages[index - 1].date,
                        );
                        const currentDate = DateUtils.formatToYearMonthDay(message.date);
                        isSameDayAsPrevious = datePrevious === currentDate;
                    }
                    return (
                        <Fragment key={id}>
                            {!isSameDayAsPrevious && <Separator date={message.date} />}
                            <Message {...message} />
                        </Fragment>
                    );
                })}
                <div ref={messagesEndRef} />
            </div>
        </ol>
    );
};

export default MessageList;

const Separator = ({ date }) => {
    return (
        <div className="relative my-5 flex items-center justify-center border-b border-zinc-600">
            <span className="absolute bg-zinc-700 px-1 text-xs font-bold">
                {DateUtils.formatToDay(date)}
            </span>
        </div>
    );
};
