import { addDoc, collection, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { db } from '../../../firebase';
import { setChannelInfo, setChannels } from '../../store/channelSlice';
import { URL_CHANNEL_ID, URL_SERVER, URL_SERVER_ID } from './../../constants/url';
import Category from './bar/Category';
import ServerHeader from './bar/ServerHeader';
import UserFooter from './bar/UserFooter';

const ChannelBar = () => {
    const channels = useSelector((state) => state.channel.channels);
    const channelSelected = useSelector((state) => state.channel.channelSelected);
    const dispatch = useDispatch();
    const params = useParams();
    const channelId = params[URL_CHANNEL_ID];
    const serverId = params[URL_SERVER_ID];
    const navigate = useNavigate();

    useEffect(() => {
        const q = query(collection(db, 'channels'), where('serverId', '==', serverId));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const c = [];
            querySnapshot.forEach((doc) => {
                c.push({
                    id: doc.id,
                    channelName: doc.data().channelName,
                    categoryName: doc.data().categoryName,
                    serverId: doc.data().serverId,
                });
            });
            dispatch(setChannels(c));
        });
        return () => unsubscribe();
    }, [serverId]);

    useEffect(() => {
        if (channels?.length > 0 && (!channelSelected?.id || !channelId)) {
            let channel;
            if (channelId) {
                const index = channels.findIndex((c) => c.id === channelId);
                if (index === -1) channel = channels[index];
                else channel = channels ? channels[0] : null;
            } else {
                channel = channels ? channels[0] : null;
            }

            navigate(`${URL_SERVER}/${serverId}/${channel ? channel.id : ''}`, {
                replace: true,
            });

            dispatch(
                setChannelInfo({
                    id: channel.id,
                    name: channel.channelName,
                }),
            );
        }
    }, [channels, serverId, channelId, channelSelected, serverId]);

    const handleAddChannel = (categoryName) => {
        if (!categoryName) return;

        const channelName = prompt('Enter a new channel name');
        if (channelName) {
            addDoc(collection(db, 'channels'), {
                categoryName,
                channelName,
                serverId,
            });
        }
    };

    return (
        <div className="relative flex w-60 min-w-[15rem] flex-col bg-zinc-750 text-gray-100">
            <ServerHeader />
            <div className="mt-12 flex-grow overflow-y-scroll scrollbar-hide">
                <Category
                    channels={channels}
                    handleAddChannel={handleAddChannel}
                    categoryName="Text channels"
                />
            </div>
            <UserFooter />
        </div>
    );
};

export default ChannelBar;
