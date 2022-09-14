import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { db } from '../../../firebase';
import DefaultAvatar from '../../assets/default-avatar.png';
import { setMembers } from '../../store/serverSlice';

const ChannelMembers = () => {
    const members = useSelector((state) => state.server.members);
    const dispatch = useDispatch();

    useEffect(() => {
        const membersRef = collection(db, 'user');
        const unsubscribe = onSnapshot(membersRef, (querySnapshot) => {
            dispatch(
                setMembers(
                    querySnapshot.docs.map((doc) => ({
                        id: doc.id,
                        name: doc.data().name,
                        avatar: doc.data().avatar,
                    })),
                ),
            );
        });
        return () => unsubscribe();
    }, []);

    return (
        <div className="absolute right-0 h-full w-[236px] flex-grow overflow-y-scroll bg-zinc-750 px-2 pt-4 text-gray-400 scrollbar-hide">
            <MemberCategory name="online" number={6} />
            {members?.map((member) => (
                <Member key={member.id} name={member.name} avatar={member.avatar} />
            ))}
        </div>
    );
};

export default ChannelMembers;

const Member = ({ name, avatar }) => {
    return (
        <div className="flex cursor-pointer items-center space-x-3 rounded px-1  py-2 text-sm font-medium hover:bg-zinc-700">
            <img
                src={avatar ? avatar : DefaultAvatar}
                alt=""
                className="h-8 w-8 rounded-full object-contain"
            />
            <p className="truncate">{name}</p>
        </div>
    );
};

const MemberCategory = ({ name, number }) => {
    return (
        <div className="flex items-center justify-between px-1  py-2">
            <p className="flex items-center text-xs font-semibold uppercase">
                {name} — {number}
            </p>
        </div>
    );
};
