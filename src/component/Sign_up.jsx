import React from 'react'
import { Link } from 'react-router-dom'

const Sign_up = () => {
    return (
        <>
            <main className='w-[1450px] mt-[40px] flex justify-between items-center'>
                <img src="/Side Image.png" alt="Sign_UP_image" />
                <ul className="w-[370px] flex flex-col">
                    <>
                        <h3 className='text-4xl font-medium'>Create an Account</h3>
                        <p className='text-[16px] font-normal mt-6'>Enter your details below</p>
                    </>
                    <>
                        <input type="text" placeholder='Name' className='mt-12 border-b-2 text-xl font-normal outline-none'/>
                        <input type="text" placeholder='Email or Phone Number' className='mt-10 border-b-2 text-xl font-normal outline-none'/>
                        <input type="password" placeholder='Password' className='mt-10 border-b-2 text-xl font-normal outline-none'/>
                    </>
                    <>
                        <button className='w-full h-14 bg-[#db4444] rounded-lg mt-10 text-white hover:translate-y-[-2px] duration-200'>Create Account</button>
                        <button className='w-full h-14 mt-4 border-2 rounded-lg mb-8 hover:translate-y-[-2px] duration-200'>Sign up with Google</button>
                        <p className='text-center'>Already have account? <Link to='/Log_In' className='ml-4 cursor-pointer underline hover:text-[#db4444]'>Log in</Link></p>
                    </>
                </ul>
            </main>            
        </>
    )
}

export default Sign_up