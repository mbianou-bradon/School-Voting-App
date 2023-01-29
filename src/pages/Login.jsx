

export default function SignUp(){

    return (
        <div>

            <div>
                <div>
                    <img src="" alt="" />
                </div>

                <div>
                    <div>
                        <h2 className="text-4xl font-semibold">Welcome Back!</h2>
                        <p className=" text-sm mt-5">Welcome back to the Wuna University voting platform. Sign in 
                        to vote in your preffered candidate
                        </p>
                    </div>

                    <div>
                        <form action="" className="[&>input]:border [&>input]:border-violet-600 [&>input]:block [&>input]:h-10 [&>input]:w-full  [&>input]:text-sm [&>input]:text-violet-600 [&>input]:rounded-full [&>input]:my-5 [&>input]:pl-4">

                            <input type="email" name="email" id="FormEmail" placeholder="Institutional Email"/>

                            <input type="password" name="password" id="FormPassword" placeholder="Password"/>

                            <div className="flex justify-between mb-10 text-xs sm:text-sm flex-wrap gap-y-4">
                                <div className="flex items-center">
                                    <input type="checkbox" name="rememberPassword" id="rememberPassword" className="w-5 h-5 border border-violet-600 mr-2"/>
                                    <label htmlFor="rememberPassword">Remember Password</label>
                                </div>

                                <h2 className="text-violet-600 font-semibold hover:underline cursor-pointer"><a href="">Forgot Password?</a></h2>
                            </div>

                            <button className="border border-violet-600 bg-violet-600 py-2 text-white font-semibold rounded-full text-sm my-3 w-full hover:bg-violet-700 hover:scale-105 active:scale-95">LogIn</button>

                            <p className="w-full h-10 rounded-full shadow-md text-center bg-white border pt-1.5 my-3 cursor-pointer hover:scale-105 active:scale-95">LogIn with Google</p>
                            <div className="text-center font-semibold mt-6"><a href="">LogIn as an Admin</a></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}