import profileImg from "../../assets/images/User-Profile.png";
//? Hooks
import { useState } from "react";
//? Loader
import SpinLoader from "../loader/SpinLoader";
//? React Toost
import { toast } from "react-toastify";
//? Redux + Redux Toolkit
import { useSelector } from "react-redux";
import { selectUserName, selectUserEmail } from "../../RTk/slices/userAuth-slice";
//? React Router Dom
import { useNavigate } from "react-router-dom";
//? Firebase Auth
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
//!=====================================================
const UserProfile = () => {
    const userName = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail);

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    // Handle Sign Out User
    const handleSignOutUser = () => {
        // set isLoading => true
        setIsLoading(!isLoading);

        signOut(auth)
        .then((uesr) => {
            // Reset isLoading
            setIsLoading(false);

            toast.success("You are signed out successfully", {
                position: "top-left",
                autoClose: 3000,
                theme: "colored",
            })

            // navigate To Home Page
            navigate("/");
        })

        .catch(error => {
            // Reset isLoading
            setIsLoading(false);

            toast.error(error.message, {
                position: "top-left",
                autoClose: 3000,
                theme: "colored",
            })
        })
    };

    return (
        <section id="user_profile">
            <div className="container">
                <div className="row">
                    <div className="user_info">
                        <div className="image">
                            <img src={profileImg} alt="prfile" />
                        </div>
                        <div className="user_name_email">
                            <h3>{userName}</h3>
                            <p >{userEmail}</p>
                        </div>
                        <button type="button"
                            className="logout"
                            onClick={handleSignOutUser}
                        >
                            {isLoading ? <SpinLoader /> : "logout"}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserProfile;