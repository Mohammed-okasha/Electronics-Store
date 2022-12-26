import { useState } from "react";

//!======================================================================
const Clock = () => {
    const [days, setDays] = useState("");
    const [hours, setHours] = useState("");
    const [minutes, setMinutes] = useState("");
    const [seconds, setSeconds] = useState("");

    let interval;

    // CountDown
    const countdown = () => {
        // destination (Get The Target Date)
        const destination = new Date("2022, Dec 31").getTime();

        interval = setInterval(() => {
            // Get Date Now
            const dateNow = new Date().getTime();
            // Get The Different Between destination and dateNow
            const diff = destination - dateNow;

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));

            const hours = Math.floor(
                diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)
            );

            const minutes = Math.floor(
                diff % (1000 * 60 * 60) / (1000 * 60)
            )

            const seconds = Math.floor(diff % (1000 * 60) / 1000);

            if (diff < 0) {
                clearInterval(interval);

            } else {
                // Update Counters Values
                setDays(days);
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);
            };
        })
    };

    useState(() => {
        countdown();

    }, [])

    return (
        <div className="clock_wrapper">
            <div className="clock_data">
                <h1>{days}</h1>
                <h5>days</h5>
            </div>

            <div className="clock_data">
                <h1>{hours}</h1>
                <h5>hours</h5>
            </div>

            <div className="clock_data">
                <h1>{minutes}</h1>
                <h5>minutes</h5>
            </div>

            <div className="clock_data">
                <h1>{seconds}</h1>
                <h5>seconds</h5>
            </div>
        </div>
    );
};

export default Clock;