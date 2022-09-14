import { PlusIcon } from '@heroicons/react/24/solid';
import {
    addDoc,
    collection,
    getDocs,
    onSnapshot,
    query,
    where,
} from 'firebase/firestore';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';

import { auth, db } from '../../../firebase';
import { ReactComponent as Logo } from '../../assets/icon_clyde_white_RGB.svg';
import { URL_SERVER_ID } from '../../constants/url';
import { setServerInfo, setServers } from '../../store/serverSlice';
import { URL_ME } from './../../constants/url';
import ServerIcon from './ServerIcon';

const AppLayout = () => {
    const servers = useSelector((state) => state.server.servers);
    const serverSelected = useSelector((state) => state.server.serverSelected);
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const [user] = useAuthState(auth);
    useEffect(() => {
        const createUserOnFirestoreIfNotExisting = async () => {
            const q = query(collection(db, 'user'), where('email', '==', user.email));
            const docSnap = await getDocs(q);
            if (docSnap.empty) {
                addDoc(collection(db, 'user'), {
                    email: user.email.replace(/\s/g, '').toLowerCase(),
                    avatar: user.photoURL,
                    name: user.displayName.replace(/\s/g, '').toLowerCase(),
                });
            }
        };

        if (!user) return;
        createUserOnFirestoreIfNotExisting();
    }, [user]);

    useEffect(() => {
        const channelsRef = collection(db, 'servers');
        const unsubscribe = onSnapshot(channelsRef, (snapshot) => {
            dispatch(
                setServers(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    })),
                ),
            );
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const idServer = params[URL_SERVER_ID];
        if (servers?.length > 0 && !serverSelected?.id && idServer) {
            const server = servers.find((server) => server.id === idServer);
            if (server) {
                dispatch(setServerInfo(server));
            }
        }
    }, [servers]);

    return (
        <div className="flex h-full max-h-full bg-zinc-700">
            <div className="flex w-16 min-w-[4rem] flex-col items-center space-y-3 bg-zinc-800 pt-3">
                <button
                    className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-[50px] bg-zinc-700 
                    transition-all duration-500 ease-in-out 
                    hover:rounded-2xl hover:bg-discord-blurple
                    ${location.pathname == URL_ME && 'rounded-2xl bg-discord-blurple'}`}
                    onClick={() => navigate(URL_ME)}
                >
                    <Logo className="h-5" />
                </button>
                <hr className="mx-auto w-8 border border-gray-600" />
                {servers.map((server) => (
                    <ServerIcon
                        key={server.id}
                        avatar={server.avatar}
                        name={server.name}
                        id={server.id}
                    />
                ))}
                <div
                    className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-[50px] 
                    bg-zinc-700 transition-all duration-500 
                    ease-in-out hover:rounded-2xl hover:bg-discord-green "
                >
                    <PlusIcon className="h-7 text-discord-green group-hover:text-white" />
                </div>
            </div>

            <Outlet />
        </div>
    );
};

export default AppLayout;
