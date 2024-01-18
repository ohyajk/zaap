"use client"
import Link from "next/link"
import React, { useState } from "react"

const ChevBtn = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <button onClick={() => setOpen(!open)} className='p-2 flex gap-2 items-center shadow-md rounded-lg hover:shadow-black/30'>
                <img src='https://imagedelivery.net/tqC70bVt8T6GtQUXNsa2-g/2ed3f3ff-715a-487d-4412-7b78ddeb7800/public' width='15px' height='16.88px' alt='logo' />
                <img src='https://app.zaap.ai/static/media/chevron-down.da71b7fd23e630ce2ec349d1a2932862.svg' width='8px' height='5px' alt='chevron' />
            </button>
            {open && (
                <ul onClick={() => setOpen(false)} className='absolute top-16 left-2 bg-white px-2 py-1 rounded-lg shadow-md w-fit'>
                    <li className='py-1 px-1 font-medium rounded-lg hover:bg-blue-500 hover:text-white'>
                        <Link href='#' className='flex gap-2 justify-between items-center w-full'>
                            <h6>Account Settings</h6>
                            <img width='16' height='16' src='https://img.icons8.com/material-rounded/24/chevron-right.png' alt='chevron-right' />
                        </Link>
                    </li>
                    <li className='py-1 px-1 font-medium rounded-lg hover:bg-blue-500 hover:text-white'>
                        <Link href='#' className='flex gap-2 justify-between items-center w-full'>
                            <h6>Help</h6>
                            <img width='16' height='16' src='https://img.icons8.com/material-rounded/24/chevron-right.png' alt='chevron-right' />
                        </Link>
                    </li>
                    <li className='py-1 bg-red-200 px-1 font-medium rounded-lg'>
                        <Link href='#' className='flex gap-2 justify-between items-center w-full'>
                            <h6>Logout</h6>
                            <img width='16' height='16' src='https://img.icons8.com/material-rounded/24/chevron-right.png' alt='chevron-right' />
                        </Link>
                    </li>
                </ul>
            )}
        </>
    )
}

export default ChevBtn
