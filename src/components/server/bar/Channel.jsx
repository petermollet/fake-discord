import { HashtagIcon, TrashIcon } from '@heroicons/react/24/solid';
import { deleteDoc, doc } from 'firebase/firestore';
import { useMemo } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { auth, db } from '../../../../firebase';
import { URL_SERVER, URL_SERVER_ID } from '../../../constants/url';
import { setChannelInfo } from '../../../store/channelSlice';
import { URL_CHANNEL_ID } from './../../../constants/url';

const EMAIL = 'plisken59@gmail.com';

const Channel = ({ id: channelId, name }) => {
    const navigate = useNavigate();
    const params = useParams();
    const serverId = params[URL_SERVER_ID];
    const [{ email }] = useAuthState(auth);
    const active = channelId == params[URL_CHANNEL_ID];
    const dispatch = useDispatch();

    const handleRedirect = useMemo(() => {
        if (active) return;
        return () => {
            dispatch(setChannelInfo({ id: channelId, name }));
            navigate(`${URL_SERVER}/${serverId}/${channelId}`);
        };
    }, [active, channelId, dispatch, navigate, serverId]);

    const handleDelete = useMemo(() => {
        if (email !== EMAIL) return null;
        return () => {
            const isSure = confirm('Are you sure you want to delete this channel?');
            if (!isSure) return;
            deleteDoc(doc(db, 'channels', channelId));
            navigate(`${URL_SERVER}/${serverId}`);
        };
    }, [channelId, email, navigate, serverId]);

    return (
        <div
            className={`${active && 'rounded bg-zinc-700 font-bold text-white'}
            group flex items-center justify-between hover:bg-zinc-700`}
        >
            <button
                className={`flex flex-grow cursor-pointer items-center space-x-2 py-2 pl-2 text-sm `}
                onClick={handleRedirect}
            >
                <HashtagIcon className="h-4" />
                <p className="truncate">{name}</p>
            </button>
            {email === EMAIL && (
                <button onClick={handleDelete}>
                    <TrashIcon className="h-4 pr-2 text-gray-400 hover:text-white" />
                </button>
            )}
        </div>
    );
};

export default Channel;
