
export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center bg-hero bg-cover bg-no-repeat bg-center w-screen h-screen">
            <div className="flex flex-col items-center justify-center bg-red-900 bg-opacity-60 w-screen h-screen">
            <div className="flex flex-col items-center justify-center bg-gradient-to-t from-black bg-cover bg-opacity-30 w-screen h-screen">
                <h1 className="text-7xl font-sans p-12 text-white text-center">
                    Renaissance Tarot
                </h1>
                <p className="text-white opacity-60">enter your question to the oracle below</p>
                <input className="p-3 m-3 bg-transparent border-b border-red-900 w-6/12 text-white text-center focus:outline-none" />
                <button className="bg-red-900 text-black rounded-sm p-3 drop-shadow-lg hover:bg-black hover:text-white transition ease-linear">reveal my fate</button>
            </div>
            </div>
        </div>
    )
}