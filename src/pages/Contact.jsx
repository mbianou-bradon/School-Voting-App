import Questions from "../assets/ContactUs.png"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export default function Contact(){

    return(
        <div>
            <Navbar/>
            <div className="min-h-screen">
                <div>
                    <h2 className="text-3xl font-semibold text-center">Get In Touch with us</h2>
                    <p className="text-xs w-1/2 text-center mx-auto my-3">Kindly Contact Us via this platform, we aim to please our users and can't do that without
                        your feedbacks, reviews and comments
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 [&>*]:place-self-center px-3 sm:px-0">
                        <div>
                            <img src={Questions} alt="" />
                        </div>

                        <div className="w-4/5 ">
                            <form action="" className="[&>input]:border [&>input]:border-violet-600 [&>input]:block [&>input]:h-10 [&>input]:w-full  [&>input]:text-sm [&>input]:text-violet-600 [&>input]:rounded [&>input]:my-2 [&>input]:pl-2 [&>label]:text-sm [&>label]:mt-3 [&>label]:block">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="forName" placeholder="Mbianou Bradon"/>

                                <label htmlFor="email">Institutional Email</label>
                                <input type="email" name="email" id="forEmail" placeholder="mbianoubradon@wuna.cm" />

                                <label htmlFor="subject">Subject</label>
                                <input type="text" name="subject" id="forSubject" />

                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="forMessage" rows="5" placeholder="Write your message here. . ." className="block border border-violet-600 rounded p-2 my-2 text-sm w-full"></textarea>

                                <button className="border border-violet-600 bg-violet-600 py-2 text-white font-semibold rounded-full text-sm my-3 w-full hover:bg-violet-700 hover:scale-105 active:scale-95">Submit Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <Footer/>
        </div>
    )
}