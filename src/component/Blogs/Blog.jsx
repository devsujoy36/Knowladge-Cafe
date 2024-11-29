

// eslint-disable-next-line react/prop-types
const Blog = ({ blog }) => {
    // eslint-disable-next-line react/prop-types
    const { cover, title, author, author_img, post_date, reading_time, hashtag } = blog;

    return (
        <div className="p-5">
            <figure className="">
                <img className="w-full" src={cover} alt={`Cover picture of the title ${title}`} />
            </figure>

            <div className="flex justify-between items-center my-5">
                <div className="flex items-center flex-row lg:gap-3 gap-2">
                    <img className="rounded-full w-14" src={author_img} alt="" />
                    <div className="">
                        <p className="font-semibold ">{author}</p>
                        <p>{post_date}</p>
                    </div>
                </div>
                <h1>{reading_time} min read <input type="checkbox" /></h1>
            </div>

            <h1 className="text-3xl font-semibold">{title}</h1>

            

        </div>
    );
};

export default Blog;