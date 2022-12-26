//*? Hooks
import { useState, useEffect } from "react";
//*? Firebase Auth
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
//*? React Toast
import { toast } from 'react-toastify';
//*? React Router DOM
import { useNavigate } from "react-router-dom";
//*? Components
import SpinLoader from "../loader/SpinLoader";
//!=======================================================
const Registerform = () => {
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
        confirmPass: ""
    });

    const [fromErrors, setFromErrors] = useState({});

    const [isLoading, setIsLoading] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();

    // inputs States ====================
    const [isNotValidEmail, setIsNotValidEmail] = useState(false);
    const [isNotValidPassword, setIsNotValidPassword] = useState(false);
    const [isNotValidConfirmPass, setIsNotValidConfirmPass] = useState(false);
//!============================================================
    // Get Input Value
    const getInputValue = (e) => {
        const { name, value } = e.target;

        // Update form Values
        setFormValues({...formValues, [name]: value});
    };

    // Handling User registration ===========
    const handlingUserRegistration = (e) => {
        e.preventDefault();

        // Update fromErrors State
        setFromErrors(validForm(formValues));
        // Update isSubmit value
        setIsSubmit(true);
    };

    // Valid Form ================
    const validForm = (formValues) => {
        // Errors
        const errors = {};
        const {email, password, confirmPass} = formValues;

        if (!email) {
            errors["email"] = "email is required!";
            // Update isNotValidEmail Value
            setIsNotValidEmail(true);
            

        } else if (!validEmail(email)) {
            errors["email"] = "please provide a valid email address!";
            // Update isNotValidEmail Value
            setIsNotValidEmail(true);

        } else {
            // Update isNotValidEmail Value
            setIsNotValidEmail(false);
        };

        if (!password) {
            errors["password"] = "password is required!";
            // Update IsNotValidPassword Value
            setIsNotValidPassword(true);

        } else if (password.length > 30) {
            errors["password"] = "Maximum number of characters is 30!";
            // Update IsNotValidPassword Value
            setIsNotValidPassword(true);

        } else {
            // Update IsNotValidPassword Value
            setIsNotValidPassword(false);
        };

        if (!confirmPass) {
            errors["confirmPass"] = "confirm password is required!";
            // Update isNotValidConfirmPass Value
            setIsNotValidConfirmPass(true);

        } else if (confirmPass !== password) {
            errors["confirmPass"] = "confirm password is incorrect!";
            // Update isNotValidConfirmPass Value
            setIsNotValidConfirmPass(true);

        } else {
            // Reset isNotValidConfirmPass Value
            setIsNotValidConfirmPass(false);
        };

        return errors;
    };

    // Valid Email ================
    const validEmail = (email) => {
        const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return reg.test(String(email).toLowerCase().trim());
    };

    useEffect(() => {
        // Get Array Of Keys From fromErrors
        const errorsList = Object.keys(fromErrors);

        if (errorsList.length === 0 && isSubmit) {
            // distraction Form Values
            const { email, password } = formValues;

            // Update isLoading Value
            setIsLoading(true);

            createUserWithEmailAndPassword(auth, email, password)

            .then((credential) => {
                // Update isLoading Value
                setIsLoading(false);

                toast.success('You have been registered successfully', {
                    position: "top-left",
                    autoClose: 3000,
                    theme: "colored",
                });

                // Navigate To Home Page
                setTimeout(() => {
                    navigate("/");

                    window.scrollTo({
                        top: 0,
                        "behavior": "smooth"
                    })

                }, 1500);

                // Reset isSubmit State
                setIsSubmit(false);

                // Reset Form Values
                setFormValues({
                    email: "",
                    password: "",
                    confirmPass: ""
                });
            })

            .catch(error => {
                const errorMsg = error.message;

                // Set Email Message Error
                setFromErrors({
                    ...fromErrors,
                    email: "This mail is already in use, please choose another email"
                })

                //  Update isNotValidEmail Value
                setIsNotValidEmail(true);

                // Update isLoading Value
                setIsLoading(false);

                toast.error(errorMsg , {
                    position: "top-left",
                    autoClose: 3000,
                    theme: "colored",
                });

                // Reset isSubmit State
                setIsSubmit(false);
            })
        };

    }, [fromErrors, isSubmit]);

//!============================================================
    return (
        <div className="account_form">
            <h2 className="custom-title">
                <span>register</span>
            </h2>
            <form className="form register"
                onSubmit={handlingUserRegistration}
            >
                <p className="text-muted">
                    Create new account today to reap the benefits
                    of a personalized shopping experience.
                </p>

                <div className="form-input">
                    <input type="email" name="email"
                        placeholder="enter your email"
                        className={isNotValidEmail ? "error" : ""}
                        value={formValues.email}
                        onChange={getInputValue}
                    />

                    <p className="error_msg">{fromErrors.email}</p>
                </div>

                <div className="form-input">
                    <input type="password" name="password"
                        placeholder="enter your password"
                        className={isNotValidPassword ? "error" : ""}
                        value={formValues.password}
                        onChange={getInputValue}
                    />

                    <p className="error_msg">{fromErrors.password}</p>
                </div>

                <div className="form-input">
                    <input type="password" name="confirmPass"
                        placeholder="confirm your password"
                        value={formValues.confirmPass}
                        className={isNotValidConfirmPass ? "error" : ""}
                        onChange={getInputValue}
                    />
                    <p className="error_msg">{fromErrors.confirmPass}</p>
                </div>

                <div className="form_footer">
                    <p className="text-muted">
                        Your personal data will be used to support your experience throughout this website,
                        to manage access to your account, and for other purposes described in our privacy policy.
                    </p>

                    <button type="submit" className="form_btn">
                        {isLoading ? <SpinLoader /> : "register"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Registerform;