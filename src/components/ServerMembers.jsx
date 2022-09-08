import DefaultAvatar from '../assets/default-avatar.png';

const ServerMembers = () => {
    return (
        <div className="min-w-[236px] bg-zinc-750 px-2 pt-4 text-gray-400">
            <MemberCategory name="online" number={6} />
            <Member
                name="Fethi"
                img="https://cdn.discordapp.com/avatars/262619343618179072/6bc41d3a6f972f377b99452431ba6557.webp?size=32"
            />
            <Member
                name="Jovany"
                img="https://cdn.discordapp.com/avatars/263155833934708736/6efb7f7a0bfa437055dc683a73f252ff.webp?size=32"
            />
            <Member
                name="Peter"
                img="https://cdn.discordapp.com/avatars/306033777669308416/9fdf2b63b258f0de00f691eb9f623141.webp?size=32"
            />
            <Member name="Marine" />
        </div>
    );
};

export default ServerMembers;

const Member = ({ name, img }) => {
    return (
        <div className="flex cursor-pointer items-center space-x-3 rounded px-1  py-2 text-sm font-medium hover:bg-zinc-700">
            <img
                src={img ?? DefaultAvatar}
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
