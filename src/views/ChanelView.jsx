import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';

import { auth } from '../../firebase';
import ChanelBar from '../components/ChanelBar';
import LoadingScreen from '../components/LoadingScreen';
import ServerBar from '../components/ServerBar';

const ChanelView = () => {
    const [user, loading] = useAuthState(auth);

    if (loading) return <LoadingScreen />;
    if (!user) return <Navigate to="/" />;

    return (
        <div className="flex h-full">
            <ServerBar />
            <ChanelBar />
        </div>
    );
};

export default ChanelView;
