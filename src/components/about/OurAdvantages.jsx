import AdvantagesContent from "./AdvantagesContent";
import ImagesWrapper from "./ImagesWrapper";
//!===================================================
const OurAdvantages = () => {
    return (
        <section className="our_advantages">
            <div className="container">
                <div className="row">
                    <AdvantagesContent />
                    <ImagesWrapper />
                </div>
            </div>
        </section>
    );
};

export default OurAdvantages;