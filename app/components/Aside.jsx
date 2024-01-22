"use client"
import Link from "next/link"
import React, { useState } from "react"
import ProjectDrop from "./ProjectDrop"
import ProjectDropMob from "./ProjectDropMob"

const Aside = () => {
    const [min, setMin] = useState(false)

    if (min == false) {
        return (
            <aside className='hidden sm:flex flex-col justify-between items-center md:items-start p-2 md:p-4 bg-gray-100  md:min-w-64 min-h-[calc(100vh-69px)] '>
                <section className='text-sm w-full'>
                    <button onClick={() => setMin(!min)} className='hidden md:flex justify-end w-full'>
                        <img src='https://app.zaap.ai/static/media/sidebar-close.3381cba38179b81d3ac5e4492b856918.svg' alt='hidepanel' width='11' height='8' />
                    </button>
                    <div className='pb-4 py-2'>
                        <h4 className='hidden md:block font-medium py-2 text-[12px]'>Manage</h4>
                        <ul>
                            <li>
                                <Link href='#' className='flex gap-2 items-center justify-center md:justify-start w-full p-2 bg-gray-200 rounded-lg'>
                                    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
                                        <path
                                            d='M10 14.0006V10.6673C10 9.56274 9.10457 8.66731 8 8.66731C6.89543 8.66731 6 9.56274 6 10.6673V14.0006M5.07041 3.76748L3.33707 5.40452C2.84421 5.87 2.59778 6.10274 2.42127 6.37826C2.26481 6.62249 2.14923 6.89061 2.07911 7.17205C2 7.48956 2 7.82852 2 8.50644V9.73398C2 11.2275 2 11.9742 2.29065 12.5446C2.54631 13.0464 2.95426 13.4543 3.45603 13.71C4.02646 14.0006 4.77319 14.0006 6.26667 14.0006H9.73333C11.2268 14.0006 11.9735 14.0006 12.544 13.71C13.0457 13.4543 13.4537 13.0464 13.7094 12.5446C14 11.9742 14 11.2275 14 9.73398V8.50644C14 7.82852 14 7.48956 13.9209 7.17205C13.8508 6.89061 13.7352 6.62249 13.5787 6.37826C13.4022 6.10274 13.1558 5.87 12.6629 5.40452L10.9296 3.76748C9.89859 2.79376 9.38309 2.3069 8.79502 2.12322C8.27734 1.96153 7.72266 1.96153 7.20498 2.12322C6.61691 2.3069 6.10141 2.79376 5.07041 3.76748Z'
                                            stroke='#333333'
                                            strokeWidth='1.5'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'></path>
                                    </svg>
                                    <span className='hidden md:block font-medium'>Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='flex gap-2 items-center justify-center md:justify-start w-full p-2 hover:bg-gray-200 rounded-lg'>
                                    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
                                        <path
                                            d='M8 14C10.6787 11.8171 10.7261 16.2383 14 12.6667M2.04411 12.2101C2.05031 11.9587 2.05341 11.8331 2.08379 11.7151C2.11072 11.6104 2.15338 11.5105 2.21029 11.4188C2.27447 11.3153 2.36296 11.2264 2.53993 11.0487L11.2417 2.30865C11.5908 1.95805 12.136 1.89931 12.5511 2.16754C13.0433 2.48553 13.4638 2.9034 13.7857 3.39431L13.8082 3.42871C13.8245 3.45358 13.8327 3.46601 13.8396 3.47721C14.0951 3.88885 14.0411 4.42196 13.7081 4.77337C13.6991 4.78293 13.6886 4.79345 13.6676 4.81451L5.01874 13.5014C4.83516 13.6858 4.74337 13.7779 4.63623 13.8439C4.54125 13.9023 4.43769 13.9452 4.32937 13.9712C4.20719 14.0005 4.07739 14.0003 3.81777 13.9999L2 13.997L2.04411 12.2101Z'
                                            stroke='#333333'
                                            strokeWidth='1.5'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'></path>
                                    </svg>
                                    <span className='hidden md:block font-medium'>Page</span>
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='flex gap-2 items-center justify-center md:justify-start w-full p-2 hover:bg-gray-200 rounded-lg'>
                                    <img src='https://app.zaap.ai/static/media/sidebar-audience-icon.53ab728deff0edcfad028f16cfe0b6a1.svg' width='16px' height='16px' alt='auedinece' />
                                    <span className='hidden md:block font-medium'>Audeinece</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='py-4'>
                        <h4 className='hidden md:block font-medium py-2 text-[12px]'>E-Commerce</h4>
                        <ul>
                            <li>
                                <Link href='#' className='flex gap-2 items-center justify-center md:justify-start w-full p-2 hover:bg-gray-200 rounded-lg'>
                                    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
                                        <path
                                            d='M1.33325 2C2.63933 1.99998 3.77912 2.81123 4.23309 3.98804M4.23309 3.98804C4.31236 4.19354 4.37072 4.4102 4.4054 4.63562L5.01967 8.62834C5.19627 9.77626 6.23099 10.5918 7.3884 10.4954L12.0615 10.1059C12.8003 10.0444 13.3906 9.46757 13.4824 8.73185C13.6263 7.57776 13.7423 6.83846 13.8921 5.59858C13.9185 5.37934 13.9318 5.26969 13.9165 5.17614C13.8778 4.94018 13.7124 4.74016 13.4879 4.65791C13.3989 4.62529 13.2875 4.61763 13.0647 4.60231L4.23309 3.98804ZM7.99992 13.3333C7.99992 13.7015 7.70144 14 7.33325 14C6.96506 14 6.66659 13.7015 6.66659 13.3333C6.66659 12.9651 6.96506 12.6666 7.33325 12.6666C7.70144 12.6666 7.99992 12.9651 7.99992 13.3333ZM13.3333 13.3333C13.3333 13.7015 13.0348 14 12.6666 14C12.2984 14 11.9999 13.7015 11.9999 13.3333C11.9999 12.9651 12.2984 12.6666 12.6666 12.6666C13.0348 12.6666 13.3333 12.9651 13.3333 13.3333Z'
                                            stroke='#303A47'
                                            strokeWidth='1.5'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'></path>
                                    </svg>
                                    <span className='hidden md:block font-medium'>Products</span>
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='flex gap-2 items-center justify-center md:justify-start w-full p-2 hover:bg-gray-200 rounded-lg'>
                                    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
                                        <path d='M8.00008 2V14M11.3334 5C11.0867 3.96486 10.2167 3.2 9.1812 3.2H8.00008H6.88897C5.66167 3.2 4.66675 4.27452 4.66675 5.6C4.66675 6.92548 5.66167 8 6.88897 8H8.00008L9.11119 8C10.3385 8 11.3334 9.07452 11.3334 10.4C11.3334 11.7255 10.3385 12.8 9.11119 12.8H8.00008H6.81896C5.78349 12.8 4.91344 12.0351 4.66675 11' stroke='#303A47' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'></path>
                                    </svg>
                                    <span className='hidden md:block font-medium'>Orders</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='py-2'>
                        <h4 className='hidden md:block font-medium py-2 text-[12px]'>Marketing</h4>
                        <ul>
                            <li>
                                <Link href='#' className='flex gap-2 items-center justify-center md:justify-start w-full p-2 hover:bg-gray-200 rounded-lg'>
                                    <img src='https://app.zaap.ai/static/media/sidebar-post-icon.9c5350abc869f8563014e37bc3b45cd3.svg' width='15px' height='14px' alt='blog' />
                                    <span className='hidden md:block font-medium'>Blog Posts</span>
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='flex gap-2 items-center justify-center md:justify-start w-full p-2 hover:bg-gray-200 rounded-lg'>
                                    <img src='https://app.zaap.ai/static/media/broadcast-icon.b996ccd7a4e2267654b47f9bb56e2c09.svg' width='15px' height='14px' alt='brodacast' />
                                    <span className='hidden md:block font-medium'>Broadcasts</span>
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='flex gap-2 items-center justify-center md:justify-start w-full p-2 hover:bg-gray-200 rounded-lg'>
                                    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
                                        <path
                                            d='M2.9 11.6V12.5M2.9 12.5V13.4M2.9 12.5H3.8M2.9 12.5H2M8.6 2L8.8135 3.67981C9.08286 5.79918 10.7205 7.48542 12.8311 7.81659L14 8L12.8311 8.18341C10.7205 8.51458 9.08286 10.2008 8.8135 12.3202L8.6 14L8.3865 12.3202C8.11714 10.2008 6.47946 8.51458 4.36887 8.18341L3.2 8L4.36887 7.81659C6.47946 7.48542 8.11714 5.79918 8.3865 3.67981L8.6 2ZM3.8 2L3.84476 2.27172C3.97017 3.03309 4.56691 3.62983 5.32828 3.75524L5.6 3.8L5.32828 3.84476C4.56691 3.97017 3.97017 4.56691 3.84476 5.32828L3.8 5.6L3.75524 5.32828C3.62983 4.56691 3.03309 3.97017 2.27172 3.84476L2 3.8L2.27172 3.75524C3.03309 3.62983 3.62983 3.03309 3.75524 2.27172L3.8 2Z'
                                            stroke='#303A47'
                                            strokeWidth='1.5'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'></path>
                                    </svg>
                                    <span className='hidden md:block font-medium'>Analytics</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </section>
                <ProjectDrop />
            </aside>
        )
    } else {
        return (
            <aside className='hidden sm:flex flex-col justify-between items-center px-2 py-4  bg-gray-100   min-h-[calc(100vh-69px)] '>
                <section className='text-sm w-full'>
                    <button onClick={() => setMin(!min)} className='hidden md:flex justify-center w-full'>
                        <img src='https://app.zaap.ai/static/media/sidebar-open.fbcb533537acf2fed7543dc0f75d5cad.svg' alt='hidepanel' width='11' height='8' />
                    </button>
                    <div className='pb-4 py-4'>
                        <ul>
                            <li>
                                <Link href='#' className='flex gap-2 items-center justify-center w-full p-2 bg-gray-200 rounded-lg'>
                                    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
                                        <path
                                            d='M10 14.0006V10.6673C10 9.56274 9.10457 8.66731 8 8.66731C6.89543 8.66731 6 9.56274 6 10.6673V14.0006M5.07041 3.76748L3.33707 5.40452C2.84421 5.87 2.59778 6.10274 2.42127 6.37826C2.26481 6.62249 2.14923 6.89061 2.07911 7.17205C2 7.48956 2 7.82852 2 8.50644V9.73398C2 11.2275 2 11.9742 2.29065 12.5446C2.54631 13.0464 2.95426 13.4543 3.45603 13.71C4.02646 14.0006 4.77319 14.0006 6.26667 14.0006H9.73333C11.2268 14.0006 11.9735 14.0006 12.544 13.71C13.0457 13.4543 13.4537 13.0464 13.7094 12.5446C14 11.9742 14 11.2275 14 9.73398V8.50644C14 7.82852 14 7.48956 13.9209 7.17205C13.8508 6.89061 13.7352 6.62249 13.5787 6.37826C13.4022 6.10274 13.1558 5.87 12.6629 5.40452L10.9296 3.76748C9.89859 2.79376 9.38309 2.3069 8.79502 2.12322C8.27734 1.96153 7.72266 1.96153 7.20498 2.12322C6.61691 2.3069 6.10141 2.79376 5.07041 3.76748Z'
                                            stroke='#333333'
                                            strokeWidth='1.5'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'></path>
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='flex gap-2 items-center justify-center w-full p-2 hover:bg-gray-200 rounded-lg'>
                                    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
                                        <path
                                            d='M8 14C10.6787 11.8171 10.7261 16.2383 14 12.6667M2.04411 12.2101C2.05031 11.9587 2.05341 11.8331 2.08379 11.7151C2.11072 11.6104 2.15338 11.5105 2.21029 11.4188C2.27447 11.3153 2.36296 11.2264 2.53993 11.0487L11.2417 2.30865C11.5908 1.95805 12.136 1.89931 12.5511 2.16754C13.0433 2.48553 13.4638 2.9034 13.7857 3.39431L13.8082 3.42871C13.8245 3.45358 13.8327 3.46601 13.8396 3.47721C14.0951 3.88885 14.0411 4.42196 13.7081 4.77337C13.6991 4.78293 13.6886 4.79345 13.6676 4.81451L5.01874 13.5014C4.83516 13.6858 4.74337 13.7779 4.63623 13.8439C4.54125 13.9023 4.43769 13.9452 4.32937 13.9712C4.20719 14.0005 4.07739 14.0003 3.81777 13.9999L2 13.997L2.04411 12.2101Z'
                                            stroke='#333333'
                                            strokeWidth='1.5'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'></path>
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='flex gap-2 items-center justify-center w-full p-2 hover:bg-gray-200 rounded-lg'>
                                    <img src='https://app.zaap.ai/static/media/sidebar-audience-icon.53ab728deff0edcfad028f16cfe0b6a1.svg' width='16px' height='16px' alt='auedinece' />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='py-4'>
                        <ul>
                            <li>
                                <Link href='#' className='flex gap-2 items-center justify-center  w-full p-2 hover:bg-gray-200 rounded-lg'>
                                    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
                                        <path
                                            d='M1.33325 2C2.63933 1.99998 3.77912 2.81123 4.23309 3.98804M4.23309 3.98804C4.31236 4.19354 4.37072 4.4102 4.4054 4.63562L5.01967 8.62834C5.19627 9.77626 6.23099 10.5918 7.3884 10.4954L12.0615 10.1059C12.8003 10.0444 13.3906 9.46757 13.4824 8.73185C13.6263 7.57776 13.7423 6.83846 13.8921 5.59858C13.9185 5.37934 13.9318 5.26969 13.9165 5.17614C13.8778 4.94018 13.7124 4.74016 13.4879 4.65791C13.3989 4.62529 13.2875 4.61763 13.0647 4.60231L4.23309 3.98804ZM7.99992 13.3333C7.99992 13.7015 7.70144 14 7.33325 14C6.96506 14 6.66659 13.7015 6.66659 13.3333C6.66659 12.9651 6.96506 12.6666 7.33325 12.6666C7.70144 12.6666 7.99992 12.9651 7.99992 13.3333ZM13.3333 13.3333C13.3333 13.7015 13.0348 14 12.6666 14C12.2984 14 11.9999 13.7015 11.9999 13.3333C11.9999 12.9651 12.2984 12.6666 12.6666 12.6666C13.0348 12.6666 13.3333 12.9651 13.3333 13.3333Z'
                                            stroke='#303A47'
                                            strokeWidth='1.5'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'></path>
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='flex gap-2 items-center justify-center  w-full p-2 hover:bg-gray-200 rounded-lg'>
                                    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
                                        <path d='M8.00008 2V14M11.3334 5C11.0867 3.96486 10.2167 3.2 9.1812 3.2H8.00008H6.88897C5.66167 3.2 4.66675 4.27452 4.66675 5.6C4.66675 6.92548 5.66167 8 6.88897 8H8.00008L9.11119 8C10.3385 8 11.3334 9.07452 11.3334 10.4C11.3334 11.7255 10.3385 12.8 9.11119 12.8H8.00008H6.81896C5.78349 12.8 4.91344 12.0351 4.66675 11' stroke='#303A47' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'></path>
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='py-2'>
                        <ul>
                            <li>
                                <Link href='#' className='flex gap-2 items-center justify-center  w-full p-2 hover:bg-gray-200 rounded-lg'>
                                    <img src='https://app.zaap.ai/static/media/sidebar-post-icon.9c5350abc869f8563014e37bc3b45cd3.svg' width='15px' height='14px' alt='blog' />
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='flex gap-2 items-center justify-center  w-full p-2 hover:bg-gray-200 rounded-lg'>
                                    <img src='https://app.zaap.ai/static/media/broadcast-icon.b996ccd7a4e2267654b47f9bb56e2c09.svg' width='15px' height='14px' alt='brodacast' />
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='flex gap-2 items-center justify-center  w-full p-2 hover:bg-gray-200 rounded-lg'>
                                    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
                                        <path
                                            d='M2.9 11.6V12.5M2.9 12.5V13.4M2.9 12.5H3.8M2.9 12.5H2M8.6 2L8.8135 3.67981C9.08286 5.79918 10.7205 7.48542 12.8311 7.81659L14 8L12.8311 8.18341C10.7205 8.51458 9.08286 10.2008 8.8135 12.3202L8.6 14L8.3865 12.3202C8.11714 10.2008 6.47946 8.51458 4.36887 8.18341L3.2 8L4.36887 7.81659C6.47946 7.48542 8.11714 5.79918 8.3865 3.67981L8.6 2ZM3.8 2L3.84476 2.27172C3.97017 3.03309 4.56691 3.62983 5.32828 3.75524L5.6 3.8L5.32828 3.84476C4.56691 3.97017 3.97017 4.56691 3.84476 5.32828L3.8 5.6L3.75524 5.32828C3.62983 4.56691 3.03309 3.97017 2.27172 3.84476L2 3.8L2.27172 3.75524C3.03309 3.62983 3.62983 3.03309 3.75524 2.27172L3.8 2Z'
                                            stroke='#303A47'
                                            strokeWidth='1.5'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'></path>
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </section>
                <ProjectDropMob />
            </aside>
        )
    }
}

export default Aside
