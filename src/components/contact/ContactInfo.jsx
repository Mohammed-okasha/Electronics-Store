//? Components
import Ourdata from "./OurData";
import ContactForm from "./ContactForm";
//!=========================================================
const ContactInfo = () => {
    return (
        <section className="contact_info">
            <div className="container">
                <div className="row">
                    <Ourdata />
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;