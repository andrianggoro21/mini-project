import { useSelector, useDispatch } from "react-redux";
import Navbar from "../navbar";
import NavbarUser from "../navbarUser";

const NavbarIsLogin = () => {
    const { user, isLogin } = useSelector((state) => state.AuthReducer);
    return (
        <>
            {isLogin ? <NavbarUser /> : <Navbar />}
        </>
    )
}

export default NavbarIsLogin