const AboutBox = ({ icon, title }) => {
    return (
        <div className="col">
        <div className="box">
            {icon}
            <h2 className="title">
                {title}
            </h2>
            <p className="text-muted">
                Integer feugiat, nulla ut cursus sodales,
                turpis turpis efficitur tortor,
                vel dictum sapien augue eget mi.Duis
                maximus purus nec magna hendrerit elementum.
            </p>
        </div>
    </div>
    );
};

export default AboutBox;