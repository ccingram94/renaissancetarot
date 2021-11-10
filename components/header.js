
export default function Header() {
    return (
        <div className="flex justify-between bg-black w-full h-24 drop-shadow-lg">
            <div>
                <p className="text-white hover:text-red-900 text-left p-6 m-3 transition ease-linear">Renaissance Tarot</p>
            </div>
            <div>
                <button className="border-white border font-sans bg-black text-white rounded-xl p-3 m-6 hover:bg-red-900 hover:border-transparent transition ease-linear opacity-80">sign in</button>
            </div>
        </div>
    )
}