import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { URL_SERVER, URL_SERVER_ID } from '../../constants/url';
import { setChannelInfo, setChannels } from '../../store/channelSlice';
import { setServerInfo } from '../../store/serverSlice';

const ServerIcon = ({ avatar, name, id }) => {
    const params = useParams();
    const active = id == params[URL_SERVER_ID];
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleServerClick = () => {
        dispatch(setServerInfo({ id, name, avatar }));
        dispatch(setChannelInfo({ id: null, name: null }));
        dispatch(setChannels([]));
        navigate(`${URL_SERVER}/${id}`);
    };

    return (
        <div className="group relative flex w-full items-center justify-center">
            <div
                className={`absolute left-0 h-10 w-1 
                transition-all duration-700 ease-in-out
                ${
                    active
                        ? 'rounded-r-[4px] bg-white'
                        : 'group-hover:h-4 group-hover:rounded-r-[4px] group-hover:bg-white'
                }`}
            />
            <button
                title={name}
                onClick={handleServerClick}
                className={`flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden rounded-[50px] bg-zinc-700 
                transition-all duration-500 ease-in-out 
                group-hover:rounded-2xl group-hover:bg-zinc-800 
                ${active && 'rounded-2xl'}`}
            >
                <img src={avatar} alt="" className="w-15 h-15 " />
            </button>
        </div>
    );
};

export default ServerIcon;
