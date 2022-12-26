//*? Components
import { 
    Registerform,
    LoginForm,
    UserProfile,
    PagesRouting

} from "../components";
//? Redux + Redux Toolkit
import ShowOnSignIn from "../components/auth/ShowOnSignIn";
import ShowOnSignOut from "../components/auth/ShowOnSignOut";
import { Link } from "react-router-dom";
//!=====================================================
const Account = () => {
    return (
        <>
        <PagesRouting>
                <li className="nav_item">
                    <Link to="/" className="nav_link">
                        home
                    </Link>
                </li>
                <li className="nav_item">
                    <span className="text">account</span>
                </li>
        </PagesRouting>
        <ShowOnSignOut>
            <section id="app_account">
                <div className="container">
                    <div className="forms_wrapper">
                        <LoginForm />
                        <Registerform />
                    </div>
                </div>
            </section>
        </ShowOnSignOut>

        <ShowOnSignIn>
            <UserProfile />
        </ShowOnSignIn>
        </>
    );
};

export default Account;