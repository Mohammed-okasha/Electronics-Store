import aboutBg from "../../assets/images/about_bg.png"
//!=================================================================
const AboutUs = () => {
    return (
        <section className="about_us">
            <div className="container">
                <div className="about_us_content">
                    <div className="about_title">
                        <h1>Things to know about us</h1>
                        <p className="text-muted">
                            Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien,
                            <br />
                            quis venenatis ante odio sit amet eros. Curabitur vestibulum aliquam leo.
                        </p>
                    </div>

                    <div className="about_bg"></div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;