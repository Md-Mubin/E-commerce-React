import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import signUpImage from '../assets/Side Image.png'

const Log_in = () => {
  return (
    <>
      <Navbar />

      <main className='w-[1450px] mt-[40px] flex justify-between items-center'>
        <img src={signUpImage} alt="Sign_UP_image" />
        <box className="w-[370px] flex flex-col">
          <>
            <h3 className='text-4xl font-medium'>Log in to Exclusive</h3>
            <p className='text-[16px] font-normal mt-6'>Enter your details below</p>
          </>
          <>
            <input type="text" placeholder='Email or Phone Number' className='mt-10 text-xl font-normal outline-none' />
            <input type="password" placeholder='Password' className='mt-10 border-b-2 text-xl font-normal outline-none' />
          </>
          <login className='flex justify-between items-center mt-10'>
            <button className='w-[143px] h-14 bg-[#db4444] rounded-lg text-white hover:translate-y-[-2px] duration-200'>Log In</button>
            <a href='#' className='hover:text-[#db4444] hover:scale-105'>Forget Password?</a>
          </login>
        </box>
      </main>

      <Footer />
    </>
  )
}

export default Log_in