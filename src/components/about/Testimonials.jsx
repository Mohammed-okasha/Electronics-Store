import TestimonialsItems from "./TestimonialsItems";
//!==============================================================
const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="container">
                <div className="about_title">
                    <h1>We Love Our Clients</h1>
                    <p className="text-muted">
                        We are very fortunate to have formed excellent partnerships
                        <br />
                        with many of our clients.
                    </p>
                </div>

                <TestimonialsItems />
            </div>
        </section>
    );
};

export default Testimonials;