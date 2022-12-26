//?? Hooks
import { useState } from "react";
//? Fuirebase Auth
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/config";
//? React toast
import { toast } from "react-toastify";
//? React Router DOM
import { useNavigate, Link } from "react-router-dom";
//? Componnets
import { SpinLoader, PagesRouting } from "../components";
//? React Icons
//!======================================================================
const LostPassword = () => {
    const [email, setEmail] = useState("");

    const [formErrors, setFormErrors] = useState(() => {
        return {type: "", status: false, msg: ""}
    });

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    // Get Input Value
    function getInputValue(e) {
        setEmail(String(e.target.value).toLowerCase());
    };

    // Handle Lost Password
    const handleLostPassword = (e) => {
        e.preventDefault();

        if (!email) {
            // Update formErrors Values
            setFormErrors({
                ...formErrors,
                type: "error",
                status: true,
                msg: "email is required!"
            })

        } else if (!validEmail(email)) {
            // Update formErrors Values
            setFormErrors({
                ...formErrors,
                type: "error",
                status: true,
                msg: "please provide a valid email address!"
            })

        } else {
            // Reset formErrors Values
            setFormErrors({
                ...formErrors,
                type: "",
                status: false,
                msg: ""
            })

            setIsLoading(!isLoading);

            // Send Request
            sendPasswordResetEmail(auth, email)

            .then(() => {
                setIsLoading(false);

                toast.success('The new password will be sent to your email', {
                    position: "top-left",
                    autoClose: 3000,
                    theme: "colored",
                });

                // navigate To Account Page
                navigate("/account");

                // Reset email vlaue
                setEmail("");
            })

            .catch((error) => {
                setIsLoading(false);

                // Update formErrors Values
                setFormErrors({
                    ...formErrors,
                    type: "error",
                    status: true,
                    msg: ""
                })

                toast.error('email is not found!', {
                    position: "top-left",
                    autoClose: 3000,
                    theme: "colored",
                });
            })
        }
    };

// Valid Email ================
const validEmail = (email) => {
    const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return reg.test(String(email).toLowerCase().trim());
};
//!==================================================================
    return (
        <section id="account_lost_password">
            <div className="container" style={{overflow: "auto"}}>
                <div className="row">
                    <div className="form_box">
                        <ul className="nav_links">
                            <li className="nav_item">
                                <Link to="/" className="nav_link">
                                    home
                                </Link>
                            </li>
                            <li className="nav_item">
                                <Link to="/account" className="nav_link">
                                    account
                                </Link>
                            </li>
                            <li className="nav_item">
                                <span className="text">lost password</span>
                            </li>
                        </ul>

                        <div className="title">
                            <h2 className="title">
                                <span>Lost password</span>
                            </h2>
                            <p className="text-muted">
                                Lost your password? Please enter your  email address.
                                You will receive a link to create a new password via email.
                            </p>
                        </div>

                        <form action=""
                            className="form"
                            onSubmit={handleLostPassword}
                        >
                            <div className="form-input">
                                <input type="email" name="email"
                                    placeholder="enter your email"
                                    className={formErrors.status ? formErrors.type : ""}
                                    value={email}
                                    onChange={getInputValue}
                                />

                                <p className="error_msg">{formErrors.msg}</p>
                            </div>

                            <button type="submit"
                                className="reset_password"
                            >
                                {isLoading ? <SpinLoader /> : "reset password"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LostPassword;