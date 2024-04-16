/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import placeHolderIcon from "../assets/react.svg"

export default function BlogCard (props) {

    const { title, author, date, views, slug } = props?.post

    return (
        <div className="blog-card">

            <img className="profile-icon" src={ author.profile_img === null ?   placeHolderIcon : author.profile_img} width={"50px"} height={"50px"} />

            <div className="blog-info">

                <h3>{author?.first_name} {author?.last_name}</h3>

                <h4>{date}</h4>

                <h2>
                    <Link to={"/post/" + slug}>
                     {title}
                    </Link>
                </h2>


                <h4>Views: {views}</h4>

       
            </div>


        </div>
    )
}

//JSON