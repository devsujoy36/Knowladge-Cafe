/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
import { useEffect, useState } from "react";
import Blog from "./Blog";
import Bookmarks from "../Bookmark/Bookmarks";
import ReadingTIme from "../ReadingTime/ReadingTIme";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const [bookmarks, setBookmarks] = useState([])
    const [readingTime, setReadingTime] = useState(0)


    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const handleAddToBookmark = (blog) => {
        const newBookmark = [...bookmarks, blog]
        setBookmarks(newBookmark);
    }

    const handleMarkAsRead = (reading_time) => {
        setReadingTime(readingTime + reading_time)
    }



    return (
        <div className="lg:max-w-screen-2xl lg:mx-auto mx-8 lg:px-48 lg:py-10">
            <h1 className="text-2xl text-center font-semibold my-5">Here are all Blogs</h1>
            <div className="flex lg:flex-row flex-col gap-3">
                <div className="lg:w-2/3 lg:flex flex-col gap-3">
                    {blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        handleAddToBookmark={handleAddToBookmark}
                        handleMarkAsRead={handleMarkAsRead}
                    />)}
                </div>
                <div className="lg:w-1/3">
                    <ReadingTIme readingTime={readingTime} />
                    <div className=" bg-gray-300 text-xl p-4 rounded-md font-bold">
                        <Bookmarks bookmarks={bookmarks} />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Blogs;