//? React Icon
import { FaChevronRight } from "react-icons/fa";
//? React Toast
import { toast } from "react-toastify";
//? Components
import SpinLoader from "../loader/SpinLoader";
//? Hooks
import { useState, useEffect } from "react";
//? Firebase Auth
import { dbRef } from "../../firebase/config";
import { child , push } from "firebase/database";
//!=============================================================
const ContactForm = () => {
    const [userData, setUserData] = useState(() => {
        return {
            name: "",
            email: "",
            mobileNumber: "",
            message: ""
        }
    })

    const [formErrors, setFormErrors] = useState({});

    // is Stateful Values ===========
    const [isSubmit, setisSubmit] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isNotValidName, setIsNotValidName] = useState(false);
    const [isNotValidEmail, setIsNotValidEmail] = useState(false);
    const [isNotValidNumber, setIsNotValidNumber] = useState(false);

    // Logic =======================
    const getInputValue = (e) => {
        const { name, value } = e.target;

        // Update userData Value
        setUserData({...userData, [name]: value.toLowerCase().trim()});
    };

    // Handle Submit Form
    const handleSubmitForm = (e) => {
        e.preventDefault();

        // Update formErrors Values
        setFormErrors(validForm(userData));

        // Update isSubmit Value
        setisSubmit(!isSubmit);
    };

    // Valid Form
    const validForm = ({ name, email, mobileNumber }) => {
        const error = {};

        if (!name) {
            error["name"] = "name is required!";
            setIsNotValidName(true);

        } else if (name.length > 30) {
            error["name"] = "Maximum characters are 30!";
            setIsNotValidName(true);

        } else {
            setIsNotValidName(false);
        };

        if (!email) {
            error["email"] = "email is required!";
            setIsNotValidEmail(true);
            
        } else if (!validEmail(email)) {
            error["email"] = "please provide a valid email address!";
            setIsNotValidEmail(true);

        } else {
            setIsNotValidEmail(false);
        };

        if (!mobileNumber) {
            error["mobileNumber"] = "mobile number is required!";
            setIsNotValidNumber(true);

        } else if (isNaN(mobileNumber) || (mobileNumber.length > 11 || mobileNumber.length < 11)) {
            error["mobileNumber"] = "please provide a valid mobile number!";
            setIsNotValidNumber(true);

        } else {
            setIsNotValidNumber(false);
        }

        return error;
    };

    // Valid Email
    const validEmail = (email) => {
        const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return reg.test(String(email).toLowerCase().trim());
    };

    useEffect(() => {
        // Get Array Of Errors From formErrors
        const errorList = Object.keys(formErrors);

        if (errorList.length === 0 && isSubmit) {
            setIsLoading(!isLoading);

            push(child(dbRef, "users"), userData)

            .then((value) => {
                console.log(value);
                setIsLoading(false);

                toast.success(("Thank you, we will contact you soon"), {
                    position: "top-left",
                    autoClose: 3000,
                    theme: "colored"
                })

                // Reset isSubmit Value
                setisSubmit(false);

                // Reset Contact Form
                setUserData({
                    name: "",
                    email: "",
                    mobileNumber: "",
                    message: ""
                })
            })

            .catch((error) => {
                console.log(error);
                setIsLoading(false);

                toast.error((error.message), {
                    position: "top-left",
                    autoClose: 3000,
                    theme: "colored"
                })

                // Reset isSubmit Value
                setisSubmit(false);
            })
        };

    }, [formErrors, isSubmit]);

    return (
        <div className="contact_form">
            <form onSubmit={handleSubmitForm}>
                <div className="form_input">
                    <input type="text"
                        name="name"
                        placeholder="your name"
                        value={userData.name}
                        className={isNotValidName ? "error" : ""}
                        onChange={getInputValue}
                    />
                    <p className="error_msg">{formErrors.name}</p>
                </div>
                <div className="form_input">
                    <input type="email"
                        name="email"
                        placeholder="your email"
                        value={userData.email}
                        className={isNotValidEmail ? "error" : ""}
                        onChange={getInputValue}
                    />
                    <p className="error_msg">{formErrors.email}</p>
                </div>
                <div className="form_input">
                    <input type="text"
                        name="mobileNumber"
                        placeholder="your mobile number"
                        value={userData.mobileNumber}
                        className={isNotValidNumber ? "error" : ""}
                        onChange={getInputValue}
                    />
                    <p className="error_msg">{formErrors.mobileNumber}</p>
                </div>

                <div className="form_input">
                    <textarea
                        name="message"
                        placeholder="your message"
                        value={userData.message}
                        onChange={getInputValue}
                    />
                </div>

                <button type="submit" className="submit_btn"
                >
                    {
                        isLoading ?
                        <SpinLoader />
                        :
                        <>
                            <span>submit</span>
                            <FaChevronRight fontSize="12px" />
                        </>
                    }
                </button>
            </form>
        </div>
    );
}

export default ContactForm;