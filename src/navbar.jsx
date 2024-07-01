import Menu from "./components/menu"

function Navbar() {
    return (
        <div className="fixed flex bg-cyan-950 md:bg-teal-950 h-20 w-screen justify-between">
            <div className="flex justify-between items-center gap-10 px-10 subpixel-antialiased text-4xl font-bold italic ">
                <Menu>ERLANGGAPEPS</Menu>
            </div>
            <div className="flex justify-end items-center gap-10 px-10 text-base font-medium not-italic ">
                <Menu>Home</Menu>
                <Menu>Experience</Menu>
                <Menu>Other</Menu>

            </div>
        </div>
    )
}

export default Navbar