import star_background from "../assets/star_background.png"
export default function Feature (props){

    return (
        <div className="bg-primary max-w-sm">
            <div className="w-full relative">
                <img src={star_background} alt="" className="h-[13rem] mx-auto"/>
                <div className="absolute w-20 top-[4rem] left-[40%]">
                    <img src={props.icon} alt="" />
                </div>
            </div>
            <div className="text-white text-center mt-5">
                <h2 className="text-xl font-semibold">{props.title}</h2>
                <p className="w-4/5 mx-auto">{props.description}</p>
            </div>
        </div>
    )
}