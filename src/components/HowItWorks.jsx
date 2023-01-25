import HowToVote from "./HowToVote"
import IVoted from "../assets/ivote.png"

const StepToVoteData = [
    {
        position: '1',
        name: 'Sign up',
        description: 'Create an account on the platform to vote'
    },
    {
        position: '2',
        name: 'Vote',
        description: 'Vote for your preferred candidate'
    },
    {
        position: '3',
        name: 'View Election Results',
        description: 'View election result of various candidates'
    },
]


export default function HowItWorks() {

    return (
        <div className="flex justify-center gap-16 w-full min-h-screen py-20">
           <div className="flex justify-between flex-col ">
                {
                    StepToVoteData.map(step => {
                        return (<HowToVote position = {step.position} name = {step.name} description = {step.description} />)
                    })
                }
           </div>

            <div>
                <img src={IVoted} alt="" className="h-[105%] object-cover"/>
            </div>
        </div>
    )
}