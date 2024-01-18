"use client"
import { LineChart, Line, CartesianGrid, XAxis, ResponsiveContainer } from "recharts"
const data = [
    { name: "11", uv: 10, amt: 100 },
    { name: "12", uv: 20, amt: 100 },
    { name: "13", uv: 30, amt: 100 },
    { name: "14", uv: 20, amt: 100 },
    { name: "15", uv: 50, amt: 100 },
    { name: "16", uv: 60, amt: 100 },
    { name: "17", uv: 30, amt: 100 },
]
const AnalyticsCard = ({ name, duration, durationData, previousPeriodData, chartData }) => {
    const allTicks = data.map((item) => item.name)
    const verticalPoints = data.map((_, index) => index * (100 / (data.length - 1)))
    return (
        <div className='w-full max-w-[341px] bg-white px-4 pt-4 rounded-xl' style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}>
            <p className='text-lg text-black font-medium'>{name}</p>
            <div className='flex gap-4 mt-2'>
                <p className='flex flex-col text-blue-500 border-l-4 border-blue-500 pl-3 rounded-tl-sm rounded-bl-sm'>
                    <span className='text-lg font-bold'>{durationData}</span>
                    <span className='text-sm font-medium'>Last {durationData} Days</span>
                </p>
                <p className='flex flex-col text-purple-500 border-l-4 border-purple-500 pl-3 rounded-tl-sm rounded-bl-sm'>
                    <span className='text-lg font-bold'>{durationData}</span>
                    <span className='text-sm font-medium'>Last {durationData} Days</span>
                </p>
            </div>
            <div className='pt-4'>
                <ResponsiveContainer width='100%' height={200}>
                    <LineChart data={data}>
                        <XAxis dataKey='name' ticks={allTicks} interval={0} />
                        <CartesianGrid stroke='#ccc' strokeDasharray='5 5' horizontal={false} />
                        <Line type='monotone' dataKey='uv' stroke='#8884d8' />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default AnalyticsCard
