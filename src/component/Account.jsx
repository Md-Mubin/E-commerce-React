import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Account = () => {
  return (
    <>
      <Navbar />

      <header className='container w-[1170px] my-20 flex justify-between '>
        <p className='font-normal text-[14px] text-slate-400'>Home / <span className='opacity-100 text-red-400 font-bold ml-2'>My Account</span></p>
        <p className='text-[14px] font-normal'>Welcome! <span className='text-red-400 font-bold'>Md Mubin</span></p>
      </header>

      <section className='container w-[1170px] flex justify-between'>
        <div className='font-medium text-base'>
          Manage My Account
          <ul className='mt-4 flex flex-col gap-2 pl-9 mb-6'>
            <li className='text-red-400 font-normal'><a href="#">My Profile</a></li>
            <li className='text-slate-400 font-normal'><a href="#">Address Book</a></li>
            <li className='text-slate-400 font-normal'><a href="#">My Payment Options</a></li>
          </ul>
          <>My Orders
            <ul className='mt-4 flex flex-col gap-2 pl-9'>
              <li className='text-slate-400 font-normal'><a href="#">My Returns</a></li>
              <li className='text-slate-400 font-normal'><a href="#">My Cancellation</a></li>
            </ul>
          </>
          <ul className='mt-6 hover:text-red-400'>
            <Link to='/Whislist'>My Whislist</Link>
          </ul>
        </div>

        <div className='w-[870px] h-[650px] border-4 rounded py-10 px-20'>
          <p className=' text-6 text-red-400 font-medium'>Edit Your Profile</p>
          <ul className='flex flex-wrap gap-[40px] mt-4'>
            <ul className='flex flex-col'>
              First Name
              <input type="text" placeholder='Your First Name' className='w-[330px] h-[50px] bg-slate-100 pl-2 mt-2 rounded outline-none' />
            </ul>
            <ul className='flex flex-col'>
              LAst Name
              <input type="text" placeholder='Your Last Name' className='w-[330px] h-[50px] bg-slate-100 pl-2 mt-2 rounded outline-none' />
            </ul>
            <ul className='flex flex-col'>
              Email
              <input type="email" placeholder='Email' className='w-[330px] h-[50px] bg-slate-100 pl-2 mt-2 rounded outline-none' />
            </ul>
            <ul className='flex flex-col'>
              Address
              <input type="text" placeholder='Your Address' className='w-[330px] h-[50px] bg-slate-100 pl-2 mt-2 rounded outline-none' />
            </ul>
          </ul>
          <ul className='mt-6 mb-2'>
            <p>Password Changes</p>
            <input type="text" placeholder='Current Passwod' className='w-full h-[50px] bg-slate-100 rounded mt-4 pl-4 outline-none'/>
            <input type="text" placeholder='New Passwod' className='w-full h-[50px] bg-slate-100 rounded mt-4 pl-4 outline-none'/>
            <input type="text" placeholder='Confirm New Passwod' className='w-full h-[50px] bg-slate-100 rounded mt-4 pl-4 outline-none'/>
          </ul>
          <button className='w-full flex justify-end items-center gap-2 mt-8'>
            <a href="#" className=' text-black hover:text-red-400 mr-4'>Cancel</a>
            <a href="#" className='w-[215px] h-[50px] flex justify-center items-center text-white bg-red-400  hover:bg-red-600 rounded-2xl'>Save Changes</a>
          </button>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Account