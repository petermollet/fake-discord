import DefaultAvatar from '../../assets/default-avatar.png';

const Avatar = ({ avatar }) => {
    return (
        <div className="relative">
            <img
                src={avatar ? avatar : DefaultAvatar}
                alt=""
                className="h-8 w-8 rounded-full object-contain"
            />
            <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-[3px] border-zinc-750 bg-discord-green" />
        </div>
    );
};

export default Avatar;
