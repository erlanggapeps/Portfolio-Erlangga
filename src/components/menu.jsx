function Menu({ children }) {
    return (
        <div className="text-white hover:text-teal-700 hover:cursor-pointer">
            <p>{children}</p>
        </div>
    );
}

export default Menu;