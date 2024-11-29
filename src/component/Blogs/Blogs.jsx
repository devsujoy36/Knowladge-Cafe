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
        <div className="max-w-screen-2xl mx-auto px-6 py-10">
            <h1>Here are all Blogs</h1>
            <div className="grid">
                <div className="grid-">
                    {
                        blogs.map(blog => <Blog key={blog.id} blog={blog} />)
                    }
                </div>
                <div>
                    <Reading />
                </div>
            </div>
        </div>
    );
};

export default Blogs;