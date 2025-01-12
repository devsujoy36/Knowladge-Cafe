/* eslint-disable react/prop-types */
import Bookmark from "./Bookmark";

const Bookmarks = ({ bookmarks }) => {
    // console.log(bookmarks);
    return (
        <div className="">
            <h1 className="mb-2 text-center font-semibold text-2xl">Bookmarked Blogs: {bookmarks.length}</h1>
            <div className="">{bookmarks.map((book,idx) => <Bookmark book={book} key={idx} />)}</div>

        </div>
    );
};

export default Bookmarks;