import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import AboutImage from '../assets/Side Image2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faDollar, faSackDollar, faShop } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    return (
        <>
            <Navbar />

            <p className='font-normal text-[14px] text-slate-400 container w-[1170px] my-20 '>Home / <span className='opacity-100 text-black font-normal ml-2'>About</span></p>
            <div className='container w-[1170px] flex justify-between'>
                <ul className='flex flex-col gap-7 justify-center'>
                    <h1 className='text-[54px] font-semibold'>Our Story</h1>
                    <p className='w-[525px] text-base font-normal'>Launced in 2015, Exclusive is South Asia's premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                    <p className='w-[525px] text-base font-normal'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                </ul>
                <img src={AboutImage} alt="Aboutpage_image" className='translate-x-48 z-[-1]' />
            </div>

            <div className='container w-[1170px] mt-36 flex justify-between'>
                <ul className='w-[270px] rounded border-2 border-black flex flex-col items-center py-[30px] '>
                    <li className='p-3 bg-[#72707088] rounded-full'>
                        <FontAwesomeIcon icon={faShop} className='p-3 bg-black rounded-full text-white text-2xl' />
                    </li>
                    <li className='mt-5 text-[32px] font-bold'>
                        10.5K
                    </li>
                    <li className='mt-3 text-base font-normal'>
                        Sallers active our site
                    </li>
                </ul>
                <ul className='w-[270px] rounded border-2 border-black flex flex-col items-center py-[30px] '>
                    <li className='p-3 bg-[#72707088] rounded-full'>
                        <FontAwesomeIcon icon={faDollar} className='p-3 bg-black rounded-full text-white text-2xl' />
                    </li>
                    <li className='mt-5 text-[32px] font-bold'>
                        33K
                    </li>
                    <li className='mt-3 text-base font-normal'>
                        Mopnthly Produduct Sale
                    </li>
                </ul>
                <ul className='w-[270px] rounded border-2 border-black flex flex-col items-center py-[30px] '>
                    <li className='p-3 bg-[#72707088] rounded-full'>
                        <FontAwesomeIcon icon={faBasketShopping} className='p-3 bg-black rounded-full text-white text-2xl' />
                    </li>
                    <li className='mt-5 text-[32px] font-bold'>
                        45.5k
                    </li>
                    <li className='mt-3 text-base font-normal'>
                        Customer active in our site
                    </li>
                </ul>
                <ul className='w-[270px] rounded border-2 border-black flex flex-col items-center py-[30px] '>
                    <li className='p-3 bg-[#72707088] rounded-full'>
                        <FontAwesomeIcon icon={faSackDollar} className='p-3 bg-black rounded-full text-white text-2xl' />
                    </li>
                    <li className='mt-5 text-[32px] font-bold'>
                        25k
                    </li>
                    <li className='mt-3 text-base font-normal'>
                        Anual gross sale in our site
                    </li>
                </ul>
            </div>


            <Footer />
        </>
    )
}

export default About