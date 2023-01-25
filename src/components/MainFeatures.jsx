import Feature from "./Feature"
import lock from '../assets/lock.png'
import result from '../assets/result.png'
import onlineVoting from '../assets/onlineVoting.png'

const featureData = [
    {
        icon: lock,
        name: 'Secured Platform',
        description: 'With our platform, your data is secured'
    },
     {
        icon: onlineVoting,
        name: 'Vote Online',
        description: 'With just few clicks, you can vote for preferred candidates'
    },
     {
        icon: result,
        name: 'Real Time Results',
        description: 'View real time voting results and scores for each candidate'
    }

]

export default function MainFeatures (){
        
    return (
        <div className="flex items-center justify-center flex-col bg-violet-600 min-h-screen text-white text-center py-8">
            <div className="mb-10">
                <h2 className="text-4xl font-semibold">Our Features</h2>
                <p className="my-5 text-lg">Secured Sytem that guarantee seamless Elections</p>
            </div>
            <div className="grid grid-cols-1 gap-y-9 sm:flex items-center justify-around">
                {
                    featureData.map((feature)=>{
                        return (
                            <div>
                                <Feature icon ={feature.icon} title = {feature.name} description = {feature.description}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}