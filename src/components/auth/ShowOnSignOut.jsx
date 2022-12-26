//? react-redux
import { useSelector } from "react-redux";
//? Redux Toolkit
import { selectIsLoggedin } from "../../RTk/slices/userAuth-slice";
//!====================================================
const ShowOnSignOut = ({children}) => {
    const isLoggedin = useSelector(selectIsLoggedin);

    if (!isLoggedin) {
        return children
    };

    return null;
};

export default ShowOnSignOut;