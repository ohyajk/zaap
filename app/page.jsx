import Analytics from "./components/Analytics"
import Aside from "./components/Aside"
import Profile from "./components/Profile"
import Stats from "./components/Stats"

export default function Home() {
    return (
        <main className='h-full min-h-[calc(100vh-69px)] flex justify-start items-start'>
            <Aside />
            <section className='w-full max-h-[calc(100vh-69px)] overflow-y-auto'>
                <div className='w-full sm:max-w-[360px] xl:max-w-[710px] 2xl:max-w-[1071px] mx-auto py-4 px-4 md:px-0  flex flex-col justify-center items-center md:items-start'>
                    <Profile />
                    <Stats />
                    <Analytics />
                </div>
            </section>
        </main>
    )
}
