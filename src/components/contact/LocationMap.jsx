const LocationMap = () => {
    return (
        <section className="location_map">
            <div className="container">
                <div className="google_map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13813.
                        242678659242!2d31.32135283789012!3d30.05662818238857!2m3!1f0!2f0!3f0!3m2!1i1024!
                        2i768!4f13.1!3m3!1m2!1s0x14583e5d94c66301%3A0xddddf100de42206c!2sNasr%20Ci
                        ty%2C%20Al%20Manteqah%20Al%20Oula%2C%20Nasr%20City%2C%20
                        Cairo%20Governorate%204450113!5e0!3m2!1sen!2seg!4v1670949732727!5m2!1sen!2seg"
                        allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                        title="our-location"
                    >
                    </iframe>
                </div>
            </div>
        </section>
    );
};

export default LocationMap;