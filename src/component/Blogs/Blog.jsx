import { FaBookmark  } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Blog = ({ blog }) => {
    // eslint-disable-next-line react/prop-types
    const { cover, title, author, author_img, post_date, reading_time, hashtags } = blog;

    console.log(blog);

    console.log(hashtags);

    return (
        <div className="p-5 border mb-2">
            <figure className="overflow-hidden">
                <img className="w-full lg:h-[400px] hover:scale-110 transition" src={cover} alt={`Cover picture of the title ${title}`} />
            </figure>

            <div className="flex justify-between items-center my-5">
                <div className="flex items-center flex-row lg:gap-3 gap-2">
                    <img className="rounded-full w-14" src={author_img} alt="" />
                    <div className="">
                        <p className="font-semibold ">{author}</p>
                        <p>{post_date}</p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-1">
                    <span>{reading_time} min read</span>
                    <button className="active:scale-95 transition text-red-600 text-2xl"><FaBookmark /></button> 
                </div>
            </div>
 
            <h1 className="text-3xl font-semibold">{title}</h1>
            <div className="flex gap-3 my-2 font-semibold">
                {hashtags.map(hash => <span  className="active:scale-95 transition" key={hash}><a href="#">{hash}</a></span>)}
            </div>
            <a href="#read-more" className="text-xs underline text-blue-500 hover:text-red-500 ">Read More</a>



        </div>
    );
};

export default Blog;