import { useEffect, useState } from "react";
import Blog from "./Blog";
import Reading from "../Reading/Reading";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    // console.log(blogs);




    return (
        <div className="lg:max-w-screen-2xl mx-auto lg:px-48 lg:py-10">
            <h1 className="text-2xl text-center font-semibold my-5">Here are all Blogs</h1>
            <div className="flex border lg:flex-row flex-col">
                <div className="lg:w-2/3"> {blogs.map(blog => <Blog key={blog.id} blog={blog} />)} 
                </div>
                <div className="lg:w-1/3">
                    <Reading />
                </div>
            </div>
        </div>
    );
};

export default Blogs;