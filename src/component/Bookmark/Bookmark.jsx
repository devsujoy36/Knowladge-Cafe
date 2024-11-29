const Bookmark = ({book}) => {
// console.log(book);
const {title, author} = book;
    return (
        <div className="border mb-2 bg-gray-100 p-4 font-semibold rounded-md">
            <h1>{title}</h1>
            <h1>{author}</h1>

        </div>
    );
};

export default Bookmark;