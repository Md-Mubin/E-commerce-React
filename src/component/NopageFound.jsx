import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const NopageFound = () => {
    return (
        <>
            <Navbar />

            <p className='font-normal text-[14px] text-slate-400 container w-[1170px] my-20 '>Home / <span className='opacity-100 text-black font-normal ml-2'>404 Error</span></p>
            
            <main className='w-full mt-[100px] flex flex-col items-center'>
                <h1 className='text-[110px] font-medium'>404 Not Found</h1>
                <p className='mt-10 mb-20'>Your visited page not found. You may go home page.</p>
                <button className='w-[255px] h-[55px] bg-red-400 text-white rounded-xl hover:bg-red-600 duration-200'>Back to home page</button>
            </main>
            <Footer />
        </>
    )
}

export default NopageFound