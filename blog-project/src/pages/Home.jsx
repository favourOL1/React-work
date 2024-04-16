import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../helper";
import { RotatingLines } from "react-loader-spinner";

/* eslint-disable react/prop-types */
export default function HomePage (props) {

    const [postList, setPostList]  = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {

        async function getPosts(endpoint) {
            setLoading(true)
            try {
              const response = await axios.get(BASE_URL + "posts/" + endpoint);
              setPostList(response.data);
            } catch (error) {
              console.error(error);
            }
            setLoading(false)
        }

        if (props.pageInfo == "latest") {
            getPosts("latest")
        } else if (props.pageInfo == "top") {
            getPosts("top")
        } else {
            getPosts("")
        }
    }, [props.pageInfo])

    console.log(loading)

    if (loading) {

        return (
            <div className="loading-screen">
                <RotatingLines
                    visible={true}
                    height="96"
                    width="96"
                    strokeColor="white"
                    color="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    />
            </div>)
    }

    return(
        <>
            <div className="tabs container">
                <Link to="/">Relevant </Link>
                <Link to="/latest">Lastest</Link>
                <Link to="/top">Top</Link>
            </div>

            <div className="blog-container">
                {
                    postList.map((post)=> {
                        return <BlogCard key={post.id} post={post}  />
                    } )
                }
            </div>
        </>
    )
}