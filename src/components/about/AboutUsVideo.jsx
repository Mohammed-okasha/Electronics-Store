import { useState } from "react";
//? React Icons
import { FaPlay } from "react-icons/fa";
import VideoPopup from "./VideoPopup";
//!=================================================================
const AboutUsVideo = () => {
    const [openVideo, setOpenVideo] = useState(false);

    // Open Video Popup
    const openVideoPopup = () => {
        setOpenVideo(true);
    };

    // Close Video Popup
    const closeVideoPopup = () => {
        setOpenVideo(false);
    };

    return (
        <section className="about_us_video">
            <div className="play_video">
                <button className="play_btn"
                    onClick={openVideoPopup}
                >
                    <FaPlay />
                </button>
            </div>

            {openVideo && <VideoPopup closeVideoPopup={closeVideoPopup} />}
        </section>
    );
};

export default AboutUsVideo;