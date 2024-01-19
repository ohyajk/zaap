"use client"
import { useState } from "react"
import StatsCard from "./StatsCard"

const Stats = () => {
    const [card, setCard] = useState("none")

    return (
        <div onMouseLeave={() => setCard("none")} className='w-full flex flex-wrap justify-center gap-3 mt-6'>
            <StatsCard
                name={"Views"} //Card name
                duration={7} //Duration
                count={0} //Count
                bgColor={"linear-gradient(90deg, rgba(119,100,232,1) 1%, rgba(82,74,177,1) 100%)"} //background color
                image={"https://app.zaap.ai/static/media/chain.52cd86c13054c882d5f646b2e2f429fa.svg"} //image
                func={() => setCard("card1")}
            />
            <StatsCard
                name={"Click Rate"} //Card name
                duration={7} //Duration
                count={"0%"} //Count
                bgColor={"linear-gradient(90deg, rgba(90,236,236,1) 1%, rgba(73,195,195,1) 100%)"} //background color
                image={"https://app.zaap.ai/static/media/funnel.c802a6c042dee2ed9a60fbedb8815d69.svg"} //image
                func={() => setCard("card2")}
            />
            <StatsCard
                name={"Sales"} //Card name
                duration={7} //Duration
                count={0} //Count
                bgColor={"linear-gradient(90deg, rgba(242,104,59,1) 1%, rgba(216,76,33,1) 100%)"} //background color
                image={"https://app.zaap.ai/static/media/target.480f3a1c9cdc3075ef31932724c6e22f.svg"} //image
                func={() => setCard("card3")}
            />
            <StatsCard
                name={"Revenue"} //Card name
                duration={7} //Duration
                count={0} //Count
                bgColor={"linear-gradient(90deg, rgba(243,170,60,1) 1%, rgba(224,150,43,1) 100%)"} //background color
                image={"https://app.zaap.ai/static/media/gold-plate.edcc14d96ac866e9d341881ce1fcca20.svg"} //image
                func={() => setCard("card4")}
            />
            <StatsCard
                name={"Subscribers"} //Card name
                duration={7} //Duration
                count={0} //Count
                bgColor={"linear-gradient(90deg, rgba(240,78,115,1) 1%, rgba(203,62,81,1) 100%)"} //background color
                image={"https://app.zaap.ai/static/media/heart.c98bc5efc969458adf70a1a40e58ba6d.svg"} //image
                func={() => setCard("card5")}
            />
            <StatsCard
                name={"Meetings"} //Card name
                duration={7} //Duration
                count={0} //Count
                bgColor={"linear-gradient(90deg, rgba(242,69,61,1) 1%, rgba(223,61,33,1) 100%)"} //background color
                image={"https://app.zaap.ai/static/media/calendar-half.1afbd64d0df4dac9da312548e8a15227.svg"} //image
                func={() => setCard("card6")}
            />
            <div className={`bg-white absolute left-0 top-0 h-full w-full -z-10 opacity-60 ease-in-out duration-75 delay-75 ${card}`}></div>
        </div>
    )
}

export default Stats
