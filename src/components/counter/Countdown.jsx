import counterImg from "../../assets/images/slider-1.webp";
import {Link} from "react-router-dom";
//? Components
import Clock from "./Clock";
//!======================================================================
const Countdown = () => {
    return (
        <section className="countdown_timer">
            <div className="container">
                <div className="row">
                    <div className="countdown_content">
                        <div className="title">
                            <span>Limited Offers</span>
                            <h3>iphone 14 pro max</h3>
                        </div>

                        <Clock />

                        <button className="shop_btn">
                            <Link to="/shop">visit now</Link>
                        </button>
                    </div>

                    <div className="countdown_img">
                        <img src={counterImg} alt="counter-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Countdown;