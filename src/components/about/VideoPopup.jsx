//? React Icons
import { FaTimes } from "react-icons/fa";
//!=========================================================
const VideoPopup = ({ closeVideoPopup }) => {
    return (
        <div className="video_popup_overlay"
            onClick={closeVideoPopup}
        >
            <div className="content">
                <div className="close_video">
                    <button className="close_btn"
                        title="close"
                        onClick={closeVideoPopup}
                    >
                        <FaTimes />
                    </button>

                    <div className="video">
                        <iframe src="https://www.youtube.com/embed/7tz4Ya6gzG4"
                            title="company video" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen width="100%" height="100%"
                        >
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoPopup;