//>? Hooks
import { useState } from "react";
import { servicesData } from "../../assets/data/services";

import ServItem from "./ServItem";
//!===============================================================
const Services = () => {
    const [services, setServices] = useState(servicesData);

    return (
        <section id="services">
            <div className="container">
                <div className="row">
                    {services.map((serv, index) => {
                        return (
                            <ServItem {...serv} key={index} />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;