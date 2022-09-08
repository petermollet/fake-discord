import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';

import { auth } from '../../firebase';
import ChannelBar from '../components/ChannelBar';
import LoadingScreen from '../components/LoadingScreen';
import ServerBar from '../components/ServerBar';
import ChannelContent from './../components/ChannelContent';
import ChannelHeader from './../components/ChannelHeader';
import ServerMembers from './../components/ServerMembers';

const ChannelView = () => {
    const [user, loading] = useAuthState(auth);

    if (loading) return <LoadingScreen />;
    if (!user) return <Navigate to="/" />;

    return (
        <div className="flex h-screen bg-zinc-700">
            <ServerBar />
            <ChannelBar />
            <div className="h-screen w-full">
                <ChannelHeader />
                <div className="flex h-[95vh]">
                    <ChannelContent />
                    <ServerMembers />
                </div>
            </div>
        </div>
    );
};

export default ChannelView;
