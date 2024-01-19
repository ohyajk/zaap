const StatsCard = ({ name, duration, count, bgColor, image, func }) => {
    return (
        <div onMouseMove={func} className='w-full max-w-[166px] px-4 py-3 rounded-3xl relative overflow-hidden' style={{ background: `${bgColor}` }}>
            <p className='text-lg font-medium text-white'>{name}</p>
            <p className='text-sm font-medium text-white/70'>Last {duration} days</p>
            <p className='text-2xl font-medium text-white mb-16'>{count}</p>
            <img alt='chain' className='absolute bottom-0 right-0' src={image} />
        </div>
    )
}

export default StatsCard
