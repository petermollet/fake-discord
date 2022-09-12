import { HashtagIcon } from '@heroicons/react/24/solid';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { URL_SERVER, URL_SERVER_ID } from '../../../constants/url';
import { setChannelInfo } from '../../../store/channelSlice';
import { URL_CHANNEL_ID } from './../../../constants/url';

const Channel = ({ id: channelId, name }) => {
    const navigate = useNavigate();
    const params = useParams();

    const active = channelId == params[URL_CHANNEL_ID];
    const dispatch = useDispatch();

    const handleRedirect = () => {
        dispatch(setChannelInfo({ id: channelId, name }));
        const serverId = params[URL_SERVER_ID];
        navigate(`${URL_SERVER}/${serverId}/${channelId}`);
    };

    return (
        <button
            className={`${active && 'rounded bg-zinc-700 font-bold text-white'} 
            flex cursor-pointer items-center space-x-2 p-2 text-sm hover:bg-zinc-700`}
            onClick={handleRedirect}
        >
            <HashtagIcon className="h-4" />
            <p className="truncate">{name}</p>
        </button>
    );
};

export default Channel;
