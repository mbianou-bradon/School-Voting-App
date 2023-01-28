import home from '../assets/home.png'

export default function Hero () {
    return (
        <header className='grid grid-cols-1 md:grid-cols-2 [&>*]:place-self-center [&>*]: gap-y-14 px-5 py-8 md:px-16 min-h-[87vh]'>
            <div>
                <div className=''>
                    <h2 className='text-3xl md:text-5xl leading-12 font-bold my-5'>Fast, Secured and Accessible Voting System</h2>
                    <p className='w-full md:w-4/5 text-sm md:text-[1rem]'>Let's make voting and elections easy for you. 
                        This is designed to ensure a secured voting session
                    </p>
                </div>

                <div className="mt-7 md:mt-10 bg-violet-600 text-white hover:bg-white hover:text-violet-600 text-sm border border-violet-600 rounded-full w-fit cursor-pointer font-semibold px-4 py-2 " >
                    <a href="#">Register as a voter</a>
                </div>
            </div>

            <div className='h-full order-first sm:order-last'>
                <img src={home} alt="" className='h-[105%] aspect-video object-cover'/>
            </div>
        </header>
    )
}