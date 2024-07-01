import Menu from "./components/menu"
import img from "./assets/img1.png"

function Home() {
    return (
        <div className="flex p-10 h-screen w-screen">
            <div className="flex-initial w-1/2 bg-white p-6 content-center text-justify">
                <h1 className="text-xl font-bold  text-teal-950">Hello, I'am Erlangga Perdana</h1>
                <h2 className="hover:scale-110 duration-300 text-teal-950">Fullstack Web Development</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus non quas, placeat quidem facilis repudiandae nostrum nobis itaque est aliquam quo, dolorum vel? Necessitatibus maxime quis repellendus obcaecati harum. Eaque?</p>
            </div>
            <div className="flex-initial w-1/2 bg-white text-black p-6 content-center text-justify">
                <img src={img} alt="fristPhoto" />
            </div>
        </div>
    )
}

export default Home