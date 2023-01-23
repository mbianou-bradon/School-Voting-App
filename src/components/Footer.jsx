

export default function Footer (){

    return (
        <footer>
            <div>
                <div className="short_about">
                    <h2>Wuna University</h2>

                    <p>We give High Quality training to make our students stand out
                        amongst other students from other University
                    </p>
                </div>

                <div>
                    <h2>Insight</h2>
                    <ul>
                        <li><a href="">Resources</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Blog</a></li>
                    </ul>
                </div>

                <div>
                    <h2>Help</h2>
                    <ul>
                        <li><a href="">Support</a></li>
                        <li><a href="">Sign Up</a></li>
                        <li><a href="">Sign In</a></li>
                    </ul>
                </div>

                <div>
                    <h2>Others</h2>
                    <ul>
                        <li><a href="">Our Successful Students</a></li>
                        <div>
                            {/* Facebook */}
                            <div>

                            </div>
                            {/* Twitter */}
                            <div>

                            </div>
                            {/* Instagram */}
                            <div>

                            </div>
                        </div>
                    </ul>
                </div>
            </div>

            <div>
                <p>Our <span>Terms and Conditions</span> and <span>Private Policy</span></p>
                <p>Copyright &copy; 2023, Wuna University</p>
            </div>
        </footer>
    )
}