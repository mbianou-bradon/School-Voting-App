import { Link } from "react-router-dom"
import signup from "../assets/signup.jpg"

export default function SignUp(){

    return (
        <div>

            <div className="flex flex-wrap items-center justify-around min-h-[50vh] lg:min-h-[87vh] px-8">
                <div className="w-4/5 md:w-1/3">
                    <img src={signup} alt="" />
                </div>

                <div>
                    <div>
                        <h2 className="text-4xl font-semibold">Welcome !</h2>
                        <p className=" text-sm mt-5">Register as a voter on the Wuna University voting platform to
                            in your preffered candidate
                        </p>
                    </div>

                    <div>
                        <form action="" className="[&>input]:border [&>input]:border-primary [&>input]:block [&>input]:h-10 [&>input]:w-full  [&>input]:text-sm [&>input]:text-primary [&>input]:rounded-full [&>input]:my-5 [&>input]:pl-4">

                            <input type="email" name="email" id="FormEmail" placeholder="Institutional Email"/>

                            <input type="password" name="password" id="FormPassword" placeholder="Password"/>

                            <p className="w-3/4 text-center mx-auto">By Clicking the sign up button, you agree with our <span className="block text-primary font-semibold placeholder:text-primary hover:underline">Terms and Conditions</span></p>

                            <button className="border border-primary bg-primary py-2 text-white font-semibold rounded-full text-sm my-3 w-full hover:bg-primary hover:scale-105 active:scale-95">Sign Up</button>

                            <p className="w-full h-10 rounded-full shadow-md text-center bg-white border pt-1.5 my-3 cursor-pointer hover:scale-105 active:scale-95">Sign Up with Google</p>
                            <div className="text-center font-semibold"><Link to="/login/admin">Sign In as an Admin</Link></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}