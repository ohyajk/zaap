"use client"
import { useState } from "react"
import AnalyticsCard from "./AnalyticsCard"

const Analytics = () => {
    const [active, setActive] = useState(7)

    return (
        <div className='w-full mt-8'>
            <div className='flex justify-between'>
                <span></span>
                <div className='flex gap-4 px-3'>
                    <button onClick={() => setActive(7)} className={`px-3 py-1 rounded-lg ${active == 7 ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}>
                        Last 7 Days
                    </button>
                    <button onClick={() => setActive(14)} className={`px-3 py-1 rounded-lg ${active == 14 ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}>
                        Last 14 Days
                    </button>
                    <button onClick={() => setActive(30)} className={`px-3 py-1 rounded-lg ${active == 30 ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}>
                        Last 30 Days
                    </button>
                </div>
            </div>
            <div className='flex flex-wrap justify-center md:justify-start gap-5 mt-5'>
                <AnalyticsCard name={"Unique Visitors"} duration={7} durationData={0} previousPeriodData={0} chartData={""} />
                <AnalyticsCard name={"Impressions"} duration={7} durationData={0} previousPeriodData={0} chartData={""} />
                <AnalyticsCard name={"Meetings"} duration={7} durationData={0} previousPeriodData={0} chartData={""} />
                <AnalyticsCard name={"Sales"} duration={7} durationData={0} previousPeriodData={0} chartData={""} />
                <AnalyticsCard name={"Revenue"} duration={7} durationData={0} previousPeriodData={0} chartData={""} />
                <AnalyticsCard name={"Subscribers"} duration={7} durationData={0} previousPeriodData={0} chartData={""} />
            </div>
        </div>
    )
}

export default Analytics
