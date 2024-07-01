function Experience() {
    return (
        <div className="px-10 h-screen w-screen">
            <h2>Experience</h2>
            <p>cerita tentang pengalaman dan portofolio yang sudah di kerjakan</p>
            <div className="flex text-white bg-slate-600 pb-7 gap-4 m-px">
                <div className="bg-black w-1/3 h-[500px]">1</div>
                <div className="bg-black w-1/3 h-[500px]">2</div>
                <div className="bg-black w-1/3 h-[500px]">3</div>
            </div>
            <div className="flex text-white h-[100px] gap-6 content-center ">
                <div className="bg-black w-1/6">htmllll</div>
                <div className="bg-black w-1/6">cssccc</div>
                <div className="bg-black w-1/6">...</div>
                <div className="bg-black w-1/6">...</div>
                <div className="bg-black w-1/6">...</div>
                <div className="bg-black w-1/6">...</div>
            </div>
        </div>
    )
}

export default Experience