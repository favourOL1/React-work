import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar () {

    const { token } = useContext(AuthContext)

    return (
        <nav className="container">

            <div>
                <Link className="red" to={"/"}> My Blog </Link> 
            </div>

            <div>

                {
                    token && (
                        <>
                            <NavButton title="My Profile" link="/profile" />
                            <NavButton title="My Blogs" link={"/my-blogs"} />                         
                            <NavButton title="Create Post" link="/create-post" />
                            <NavButton title="Logout" link={"/logout"} />                         
                        </>
                    )
                }


                {
                    !token && (
                        <>
                            <NavButton title="Sign Up" link="/create-account" />
                            <NavButton title="Login" link={"/login"} />                         
                        </>
                    )
                }


            </div>

        </nav>
    )
}