//? Hooks
import { useState, useEffect } from "react";
//? React Router DOM
import { useNavigate, Link } from "react-router-dom";
//*? React Toast
import { toast } from 'react-toastify';
//? Firebase
import { 
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect

} from "firebase/auth";
import { auth } from "../../firebase/config";
//? Components
import SpinLoader from "../loader/SpinLoader";
//? Google Logo
import googleLogo from "../../assets/images/google_logo.png";
//TODO==========================================================
const LoginForm = () => {
    //* [State Vlaues]
    const [formValues, setFormValues] = useState(() => {
        return {
            email: "",
            password: ""
        };
    });

    const [formErrors, setFormErrors] = useState(() => {
        return {};
    });

    const [isSubmit, setIsSubmit] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isGoogleLoading, swtIsGoogleLoading] = useState(false);
    const navigate = useNavigate();

    // inputs States ====================
    const [isNotvalidEmail, setIsNotvalidEmail] = useState(false);
    const [isNotValidPassword, setIsNotValidPassword] = useState(false);
//!========================================================
//* [Functions]
// Get Input Value
const getInputValue = (e) => {
    const { name, value } = e.target;

    // Update formValues
    setFormValues(() => {
        return {...formValues, [name]: value};
    });
};

// Handle User Login
const handleUserLogin = (e) => {
    e.preventDefault();

    // Update formErrors Value
    setFormErrors(validForm(formValues));

    // Update isSubmit Value
    setIsSubmit(!isSubmit);
};

// Valid Form
function validForm(formValues) {
    const { email, password } = formValues;
    // Erros
    const errors = {};

    if (!email) {
        errors["email"] = "email is required!";
        // Update isNotvalidEmail Value
        setIsNotvalidEmail(!isNotvalidEmail);

    } else if (!validEmail(email)) {
        errors["email"] = "please provide a valid email address!";
        // Update isNotvalidEmail Value
        setIsNotvalidEmail(!isNotvalidEmail);

    } else {
        // Update isNotvalidEmail Value
        setIsNotvalidEmail(false);
    }

    if (!password) {
        errors["password"] = "password is required!";
        // Update isNotvalidEmail Value
        setIsNotValidPassword(!isNotValidPassword);
        
    } else {
        // Update isNotvalidEmail Value
        setIsNotValidPassword(false);
    }

    return errors;
};

// Valid Email ================
const validEmail = (email) => {
    const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return reg.test(String(email).toLowerCase().trim());
};

// inputs error ================
const inputsError = () => {
    // Updtate inputs States
    setIsNotvalidEmail(!isNotvalidEmail);
    setIsNotValidPassword(!isNotValidPassword);

    setTimeout(() => {
        // Reset inputs States
        setIsNotvalidEmail(false);
        setIsNotValidPassword(false);

    }, 2000);
};

// Auth With Google (Login With Google Account)
const provider = new GoogleAuthProvider();
const authWithGoogle = () => {
    swtIsGoogleLoading(!isGoogleLoading);

    signInWithRedirect(auth, provider)

    .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        // const user = result.user;

        swtIsGoogleLoading(false);

        toast.success('You are successfully logged in', {
            position: "top-left",
            autoClose: 3000,
            theme: "colored",
        });

        navigate("/");
    })

    .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);

        swtIsGoogleLoading(false);

        toast.error(errorMessage , {
            position: "top-left",
            autoClose: 3000,
            theme: "colored",
        });
    })
};

useEffect(() => {
    // Get Array From formErrors properties
    const errorsList = Object.keys(formErrors);

    if (errorsList.length === 0 && isSubmit) {
        const { email, password } = formValues;

        // Update isLoading value
        setIsLoading(true);

        signInWithEmailAndPassword(auth, email, password)

        .then((credential) => {
            // console.log(credential);
            // Reset isLoading value
            setIsLoading(false);

            toast.success('You are successfully logged in', {
                position: "top-left",
                autoClose: 3000,
                theme: "colored",
            });

            // Navigate User To Home Page
            setTimeout(() => {
                navigate("/");
            }, 1500);

            // Reset States
            setIsSubmit(false);

            setFormValues({email: "", password: ""});
        })

        .catch((error) => {
            // Reset isLoading value
            setIsLoading(false);

            toast.error("email or password is not correct!" , {
                position: "top-left",
                autoClose: 3000,
                theme: "colored",
            });

            // Invoke inputsError function
            inputsError();

            // Reset States
            setIsSubmit(false);
        })
    };

}, [formErrors, isSubmit]);
//!========================================================
    return (
        <div className="account_form">
            <h2 className="custom-title">
                <span>login</span>
            </h2>

            <form className="form login"
                onSubmit={handleUserLogin}
            >
                <p className="text-muted">
                    Welcome back! Sign in to your account.
                </p>

                <div className="form-input">
                    <input type="email" name="email"
                        placeholder="enter your email"
                        className={isNotvalidEmail ? "error" : ""}
                        value={formValues.email}
                        onChange={getInputValue}
                    />

                    <p className="error_msg">{formErrors.email}</p>
                </div>

                <div className="form-input">
                    <input type="password" name="password"
                        placeholder="enter your password"
                        className={isNotValidPassword ? "error" : ""}
                        value={formValues.password}
                        onChange={getInputValue}
                    />

                    <p className="error_msg">{formErrors.password}</p>
                </div>

                <div className="form_footer">
                    <button type="submit" className="form_btn">
                        {isLoading ? <SpinLoader /> : "login"}
                    </button>

                    <p className="text-muted">
                        <Link to="/account/lost-password">Lost your password?</Link>
                    </p>

                    <div className="or">
                        <span>or</span>
                        <div className="google_auth">
                            <button className="login_with_google"
                            type="button"
                                onClick={authWithGoogle}
                            >
                                {isGoogleLoading ?
                                    <SpinLoader />
                                    :
                                    <>
                                        <img src={googleLogo} className="google-logo" alt="google" />
                                        <span>google</span>
                                    </>
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </form >
        </div>
    );
};

export default LoginForm;