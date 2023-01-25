

export default function HowToVote(props) {

    return  (
        <div className="flex gap-8">
            <div className="w-10 h-10 rounded-[50%] bg-violet-600 text-2xl pt-1 text-center text-white font-bold"><h2>{props.position}</h2></div>
            <div>
                <h2 className="text-violet-600 font-bold text-2xl mb-5">{props.name}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )

}