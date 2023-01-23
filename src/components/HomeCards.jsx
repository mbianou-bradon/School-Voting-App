import Card from "./Card";


const cardData = [
    {
        name: "Bermond Yange",
        position : "P/F",
        description: "The president and founder of Wuna University",
        profileImage: ""
    },
    {
        name: "Ayuk Etta",
        position : "P/F",
        description: "The president and founder of Wuna University",
        profileImage: ""
    },
    {
        name: "Amin Jefferson",
        position : "GM",
        description: "The General Manager of Wuna University",
        profileImage: ""
    },
    {
        name: "Tim Merciful",
        position : "OM",
        description: "The Operational Manager of Wuna University",
        profileImage: ""
    },
    {
        name: "Bill Elton",
        position : "D",
        description: "UX/UI Designe of Wuna University",
        profileImage: ""
    }
]

export default function HomeCards () {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 min-h-max">
            {
                cardData.map(card =>{
                    return (
                    
                        <Card name={card.name} position = {card.position} description = {card.description} picture ={card.profileImage}/>
                    )
                })
            }
        </div>
        
    )
}