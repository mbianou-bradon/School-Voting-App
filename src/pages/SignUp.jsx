import { Link } from "react-router-dom"


export default function SignUp(){

    return (
        <div>

            <div>
                <div>
                    <img src="" alt="" />
                </div>

                <div>
                    <div>
                        <h2 className="text-4xl font-semibold">Welcome !</h2>
                        <p className=" text-sm mt-5">Register as a voter on the Wuna University voting platform to
                            in your preffered candidate
                        </p>
                    </div>

                    <div>
                        <form action="" className="[&>input]:border [&>input]:border-violet-600 [&>input]:block [&>input]:h-10 [&>input]:w-full  [&>input]:text-sm [&>input]:text-violet-600 [&>input]:rounded-full [&>input]:my-5 [&>input]:pl-4">

                            <input type="email" name="email" id="FormEmail" placeholder="Institutional Email"/>

                            <input type="password" name="password" id="FormPassword" placeholder="Password"/>

                            <p className="w-3/4 text-center mx-auto">By Clicking the sign up button, you agree with our <span className="block text-violet-600 font-semibold placeholder:text-violet-600">Terms and Conditions</span></p>

                            <button className="border border-violet-600 bg-violet-600 py-2 text-white font-semibold rounded-full text-sm my-3 w-full hover:bg-violet-700 hover:scale-105 active:scale-95">Sign Up</button>

                            <p className="w-full h-10 rounded-full shadow-md text-center bg-white border pt-1.5 my-3 cursor-pointer hover:scale-105 active:scale-95">Sign Up with Google</p>
                            <div className="text-center font-semibold"><Link to="/login/admin">Sign In as an Admin</Link></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}