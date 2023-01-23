

export default function Navbar() {
    
    return (
        <nav className="w-full max-w-[80rem] mx-auto flex items-center justify-between lg:gap-4 px-4 md:px-10 py-6 sticky">
            <div className="brand">
                <h2 className="text-violet-600 font-semibold text-lg" >Wuna University</h2>
            </div>

            <div className="text-slate-800 [&>*>li]:  [&>*>li:hover]:text-violet-600 [&>*>li]:border-b-2 [&>*>li]:border-b-transparent [&>*>li:hover]:border-b-violet-600 flex items-center gap-5 lg:gap-20" >
                <ul className="hidden md:flex items-center gap-9">
                    <li className="hidden lg:block"><a href="">Home</a></li>
                    <li><a href="">Vote</a></li>
                    <li className="hidden lg:block"><a href="">News/Update</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>

                <div className="text-sm [&>*]:border [&>*]:border-violet-600 [&>*]:rounded-full [&>*]:w-fit [&>*]:cursor-pointer text-violet-600 font-semibold [&>*]:px-4 [&>*]:py-2 hidden sm:flex items-center gap-5">
                    <div className="hover:bg-violet-500 hover:text-white">
                        <a href="">
                            Log In
                        </a>
                    </div>

                    <div className="bg-violet-600 text-white hover:bg-white hover:text-violet-600">
                        <a href="">
                            Register as a Voter
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}