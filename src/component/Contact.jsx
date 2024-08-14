import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Contact = () => {
    return (
        <>
            <Navbar />

            <p className='font-normal text-[14px] text-slate-400 container w-[1170px] my-20 '>Home / <span className='opacity-100 text-black font-normal ml-2'>Contact</span></p>

            <main className='container w-[1170px] flex justify-between'>

                <ul className='w-[340px] px-9 py-10 border-2'>
                    <li className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faPhone} className='p-2 bg-red-400 rounded-full text-white'/>
                        <p>Call To Us</p>
                    </li>
                    <li className='mt-6 mb-4'>
                        <p className='mb-4'>We are available 24/7, 7 days a week.</p>
                        <>Phone: +8801611112222</>
                    </li>
                    <button className='w-full h-[2px] bg-slate-400 mb-8'></button>
                    <li className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faEnvelope} className='p-2 bg-red-400 rounded-full text-white'/>
                        <p>Write To Us</p>
                    </li>
                    <li className='flex flex-col gap-4 mt-8'>
                        <p>
                        Fill out our form and we will contact you within 24 hours.
                        </p>
                        <p>Emails: <a href='#' className='hover:text-red-400'>customer@exclusive.com </a></p>
                        <p>Emails: <a href='#' className='hover:text-red-400'>support@exclusive.com</a></p>
                    </li>
                </ul>

                <ul className='w-[800px] h-[460px] border-2 px-8 py-10 flex flex-col gap-8'>
                    <li className='flex justify-between'>
                        <input type="text" placeholder='Your Name' className='w-[235px] h-[50px] rounded bg-slate-100 pl-4 outline-none'/>
                        <input type="email" placeholder='Your Email' className='w-[235px] h-[50px] rounded bg-slate-100 pl-4 outline-none'/>
                        <input type="number" placeholder='Your Phone' className='w-[235px] h-[50px] rounded bg-slate-100 pl-4 outline-none'/>
                    </li>
                    <input type='text' className='w-[737px] h-[210px] bg-slate-100'/>
                    <li className='w-full flex justify-end'>
                    <button className='w-[215px] h-[55px] bg-red-400 rounded text-white hover:bg-red-600 duration-100'>Send Massage</button>
                    </li>
                </ul>

            </main>

            <Footer />
        </>
    )
}

export default Contact