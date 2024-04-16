import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function NavButton (props) {

    return (
        <Link to={props.link}>
            <button className="btn">
                {props.title}
            </button>
        </Link>
    )
}