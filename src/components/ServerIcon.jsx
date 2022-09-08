const ServerIcon = ({ image }) => {
    return (
        <div className="server-icon overflow-hidden  hover:bg-zinc-800">
            <img src={image} alt="" className="w-15 h-15 " />
        </div>
    );
};

export default ServerIcon;
