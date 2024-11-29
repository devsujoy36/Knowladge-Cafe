import { useEffect, useState } from "react";
import Blog from "./Blog";
import Reading from "../Bookmark/Bookmark";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])




    return (
        <div className="lg:max-w-screen-2xl lg:mx-auto mx-8 lg:px-48 lg:py-10">
            <h1 className="text-2xl text-center font-semibold my-5">Here are all Blogs</h1>
            <div className="flex lg:flex-row flex-col gap-3">
                <div className="lg:w-2/3 lg:flex flex-col gap-3"> {blogs.map(blog => <Blog key={blog.id} blog={blog} />)} 
                </div>
                <div className="lg:w-1/3">
                    <Reading />
                </div>
            </div>
        </div>
    );
};

export default Blogs;