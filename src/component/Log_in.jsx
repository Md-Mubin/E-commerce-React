import React               from 'react'
import { Link }            from 'react-router-dom'
import { faBackward }      from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Log_in = () => {
  return (
    <>
      <main className='w-[1450px] mt-[40px] flex justify-between items-center relative'>
        <img src="/Side Image.png" alt="Sign_UP_image" />
        <ul className="w-[370px] flex flex-col">
          <>
            <h3 className='text-4xl font-medium'>Log in to Exclusive</h3>
            <p className='text-[16px] font-normal mt-6'>Enter your details below</p>
          </>
          <>
            <input type="text" placeholder='Email or Phone Number' className='mt-10 border-b-2 text-xl font-normal outline-none' />
            <input type="password" placeholder='Password' className='mt-10 border-b-2 text-xl font-normal outline-none' />
          </>
          <ul className='flex justify-between items-center mt-10'>
            <button className='w-[143px] h-14 bg-[#db4444] rounded-lg text-white hover:translate-y-[-2px] duration-200'>Log In</button>
            <a href='#' className='hover:text-[#db4444] duration-200'>Forget Password?</a>
          </ul>
        </ul>
        <Link to="/Sign_up" className='absolute right-0 bottom-[150px] hover:text-red-400  duration-200 text-[17px] font-semibold'><FontAwesomeIcon icon={faBackward} /> Go Back To Sign Up</Link>
      </main>
    </>
  )
}

export default Log_in