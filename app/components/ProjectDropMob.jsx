"use client"
import React, { useState } from "react"

const ProjectDropMob = () => {
    const [showProjects, setShowProjects] = useState(false)

    return (
        <div>
            {showProjects && (
                <div onClick={() => setShowProjects(!showProjects)} className='absolute bottom-12 right-2 rounded-lg bg-white p-2 w-full text-sm flex flex-col min-w-[200px]'>
                    <button className='flex gap-2 items-center w-full bg-gray-100 p-1 rounded-lg'>
                        <img alt='profile' className='w-8' src='https://imagedelivery.net/tqC70bVt8T6GtQUXNsa2-g/743efd57-1c7a-4ea5-402b-ec349ceae400/public' />
                        <span>@gauravweb</span>
                        <span className='flex-grow flex justify-end items-center'>
                            <img className='' src='https://app.zaap.ai/static/media/dots.017a5ac9ccfa4d92fccbc0d0a0d5fa6f.svg' alt='3dot' />
                        </span>
                    </button>
                    <button className='flex gap-2 items-center w-full hover:bg-gray-100 p-2 rounded-lg'>
                        <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 13' fill='none'>
                            <path d='M6.64084 1.64085C6.64084 1.14885 6.242 0.75 5.75 0.75C5.258 0.75 4.85915 1.14884 4.85915 1.64085V11.3592C4.85915 11.8512 5.258 12.25 5.75 12.25C6.242 12.25 6.64084 11.8512 6.64084 11.3592V1.64085Z' fill='#333333'></path>
                            <path d='M0.890844 5.60916C0.398845 5.60916 0 6.008 0 6.5C0 6.992 0.398845 7.39085 0.890844 7.39085L10.6092 7.39085C11.1012 7.39085 11.5 6.992 11.5 6.5C11.5 6.008 11.1012 5.60915 10.6092 5.60915L0.890844 5.60916Z' fill='#333333'></path>
                        </svg>
                        <span>Add new Project</span>
                    </button>
                </div>
            )}
            <button onClick={() => setShowProjects(!showProjects)} className='bg-gray-200 rounded-lg px-4 py-2 flex justify-between items-center gap-2 w-full hover:shadow-md'>
                <span className='flex gap-2 items-center'>
                    <img alt='profile' className='w-8' src='https://imagedelivery.net/tqC70bVt8T6GtQUXNsa2-g/743efd57-1c7a-4ea5-402b-ec349ceae400/public' />
                </span>
            </button>
        </div>
    )
}

export default ProjectDropMob
