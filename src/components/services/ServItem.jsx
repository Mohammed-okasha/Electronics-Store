const ServItem = ({icon, title, desc, bgColor}) => {

    return (
        <div className="serv-box" style={{backgroundColor: bgColor}}>
            <span className="icon">{icon}</span>
            <div className="content">
                <strong className="title">{title}</strong>
                <p className="text-muted">{desc}</p>
            </div>
        </div>
    );
};

export default ServItem;