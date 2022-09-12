import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';

import { auth } from '../../firebase';
import LoadingScreen from './../components/lib/LoadingScreen';
import ChannelBar from './../components/server/ChannelBar';
import ChannelContent from './../components/server/ChannelContent';
import ChannelMembers from './../components/server/ChannelMembers';
import ChannelHeader from './../components/server/content/ChannelHeader';

const ServerView = () => {
    const [user, loading] = useAuthState(auth);

    if (loading) return <LoadingScreen />;
    if (!user) return <Navigate to="/" />;

    return (
        <>
            <ChannelBar />
            <div className="flex w-full flex-col">
                <ChannelHeader />
                <div className="relative flex h-full">
                    <ChannelContent />
                    <ChannelMembers />
                </div>
            </div>
        </>
    );
};

export default ServerView;
