export default function Page() {
    return <div className="page ">
        <img className="title" src="pubgtitle.png"></img>
        <div className="flex items-center mt-8 gap-3">
            <button className="login-button font-semibold flex items-center w-80 justify-start gap-16 text-white py-6 px-6 text-2xl bg-cyan-600 hover:bg-cyan-700">
                <i className="fa-brands fa-square-twitter fa-2xl"></i>
                <span>Twitter</span>
            </button>
            <button className="login-button font-semibold flex items-center w-80 justify-start gap-16 text-white py-6 px-6 text-2xl bg-gray-800 hover:bg-gray-900">
                <i className="fa-brands fa-square-github fa-2xl"></i>
                <span>Github</span>
            </button>
            <div className="more">More..</div>
        </div>
    </div>
}