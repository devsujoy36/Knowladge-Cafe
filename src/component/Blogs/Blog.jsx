

// eslint-disable-next-line react/prop-types
const Blog = ({ blog }) => {
    // console.log(blog);
    // eslint-disable-next-line react/prop-types
    const { id, cover, title, author, author_img, post_date, reading_time, hashtag } = blog;
    console.log(id, cover, title, author, author_img, post_date, reading_time, hashtag)

    return (
        <div>
            <figure className="">
                <img className="w-full" src={cover} alt="" />
            </figure>
        </div>
    );
};

export default Blog;