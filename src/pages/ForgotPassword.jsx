import forgot from "../assets/Forgot_password.png"

export default function ForgotPassword(){

    return(
        <div>

            <div className="flex flex-wrap items-center justify-around min-h-[50vh] lg:min-h-[87vh] px-8">
                <div className="w-2/3 md:w-1/3">
                    <img src={forgot} alt="" />
                </div>

                <div>
                    <div>
                        <h2 className="text-3xl font-bold">Forgot Password</h2>
                        <p className="text-xs w-4/5 my-5">Enter your Institutional email address and we will send you a code to reset your password</p>
                    </div>

                    <div>
                        <form action="">
                            <input type="email" name="email" id="formEmail" placeholder="Enter institutional email Address" className="h-10 w-full pl-4 border border-violet-600 rounded-full text-sm text-violet-600 mb-5"/>
                            <button className="border border-violet-600 bg-violet-600 py-2 text-white font-semibold rounded-full text-sm my-3 w-full hover:bg-violet-700 hover:scale-105 active:scale-95">Send Code</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}