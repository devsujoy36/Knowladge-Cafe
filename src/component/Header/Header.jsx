

const Header = () => {
    return (
        <header className=" border shadow-lg">
            <nav className="max-w-screen-2xl mx-auto flex justify-between items-center ">
                <a href="#" className='hover:scale-100 transition active:scale-95 text-center text-xl font-bold lg:text-4xl lg:font-semibold m-5'> Knowledge Cafe</a>
                <img className="mr-4 transition active:scale-95 rounded-full w-14" src="/public/imgs-author/author 5.jpg" alt="" />
            </nav>
        </header>
    ); 
};

export default Header;