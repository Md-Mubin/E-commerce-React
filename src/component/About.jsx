import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import AboutImage from '../assets/Side Image2.png'
import Review1 from '../assets/review1.png'
import Review2 from '../assets/review2.png'
import Review3 from '../assets/review3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faCheck, faDollar, faHeadphonesSimple, faSackDollar, faShield, faShop, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

const About = () => {
    return (
        <>
            <Navbar />

            {/* ============= Header ============= */}
            <p className='font-normal text-[14px] text-slate-400 container w-[1170px] my-20 '>Home / <span className='opacity-100 text-black font-normal ml-2'>About</span></p>
            <div className='container w-[1170px] flex justify-between'>
                <ul className='flex flex-col gap-7 justify-center'>
                    <h1 className='text-[54px] font-semibold'>Our Story</h1>
                    <p className='w-[525px] text-base font-normal'>Launced in 2015, Exclusive is South Asia's premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                    <p className='w-[525px] text-base font-normal'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                </ul>
                <img src={AboutImage} alt="Aboutpage_image" className='translate-x-48 z-[-1]' />
            </div>

            {/* ============= Counter ============= */}
            <section className='container w-[1170px] mt-36 flex justify-between'>

                {/* seller active counters */}
                <ul className='w-[270px] rounded border-2 border-black flex flex-col items-center py-[30px] '>
                    <li className=' w-20 h-20 bg-[#72707088] rounded-full flex justify-center items-center'>
                        <div className='w-14 h-14 rounded-full bg-black relative '></div>
                        <FontAwesomeIcon icon={faShop} className='  text-white text-2xl absolute' />
                    </li>
                    <li className='mt-5 text-[32px] font-bold'>
                        10.5K
                    </li>
                    <li className='mt-3 text-base font-normal'>
                        Sallers active our site
                    </li>
                </ul>

                {/* monthly sell counter */}
                <ul className='w-[270px] rounded border-2 border-black flex flex-col items-center py-[30px] '>
                    <li className='w-20 h-20 bg-[#72707088] rounded-full flex justify-center items-center'>
                        <div className='w-14 h-14 rounded-full bg-black relative'></div>
                        <FontAwesomeIcon icon={faDollar} className='text-white text-2xl absolute' />
                    </li>
                    <li className='mt-5 text-[32px] font-bold'>
                        33K
                    </li>
                    <li className='mt-3 text-base font-normal'>
                        Monthly Produduct Sale
                    </li>
                </ul>

                {/* customer active counter */}
                <ul className='w-[270px] rounded border-2 border-black flex flex-col items-center py-[30px] '>
                    <li className='w-20 h-20 bg-[#72707088] rounded-full flex justify-center items-center'>
                        <div className='w-14 h-14 rounded-full bg-black relative'></div>
                        <FontAwesomeIcon icon={faBasketShopping} className='text-white text-2xl absolute' />
                    </li>
                    <li className='mt-5 text-[32px] font-bold'>
                        45.5k
                    </li>
                    <li className='mt-3 text-base font-normal'>
                        Customer active in our site
                    </li>
                </ul>

                {/* gross sale counter */}
                <ul className='w-[270px] rounded border-2 border-black flex flex-col items-center py-[30px] '>
                    <li className='w-20 h-20 bg-[#72707088] rounded-full flex justify-center items-center'>
                        <div className='w-14 h-14 rounded-full bg-black relative'></div>
                        <FontAwesomeIcon icon={faSackDollar} className='text-white text-2xl absolute' />
                    </li>
                    <li className='mt-5 text-[32px] font-bold'>
                        25k
                    </li>
                    <li className='mt-3 text-base font-normal'>
                        Anual gross sale in our site
                    </li>
                </ul>
            </section>

            {/* ============= Reviewer ============= */}
            <section className='container w-[1170px] mt-[140px] flex justify-between'>
                <ul>
                    <img src={Review1} alt="reviewer_image" />
                    <h2 className='text-[32px] font-medium mt-8'>Will Smith</h2>
                    <p className='text-base font-normal mt-2'>Product Designer</p>
                    <li className='mt-4 flex gap-6 text-[30px]'>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </li>
                </ul>
                <ul>
                    <img src={Review2} alt="reviewer_image" />
                    <h2 className='text-[32px] font-medium mt-8'>Emma Watson</h2>
                    <p className='text-base font-normal mt-2'>Managing Director</p>
                    <li className='mt-4 flex gap-6 text-[30px]'>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </li>
                </ul>
                <ul>
                    <img src={Review3} alt="reviewer_image" />
                    <h2 className='text-[32px] font-medium mt-8'>Tom Cruise</h2>
                    <p className='text-base font-normal mt-2'>Founder & Chairman</p>
                    <li className='mt-4 flex gap-6 text-[30px]'>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </li>
                </ul>
            </section>
            
            {/* ============= Supports ============= */}
            <section className='container w-[1170px] mt-[180px] flex justify-between'>

                {/* free and fast delivery */}
                <ul className='w-[270px] flex flex-col items-center py-[30px] '>
                    <li className='w-20 h-20 bg-[#72707088] rounded-full flex justify-center items-center'>
                        <div className='w-14 h-14 rounded-full bg-black relative'></div>
                        <FontAwesomeIcon icon={faTruckFast} className='text-white text-2xl absolute' />
                    </li>
                    <li className='mt-5 text-xl font-semibold'>
                        FREE AND FAST DELIVERY
                    </li>
                    <li className='mt-3 text-sm font-normal'>
                        Free delivery for all orders over $140
                    </li>
                </ul>

                {/* customer service */}
                <ul className='w-[270px] flex flex-col items-center py-[30px] '>
                    <li className='w-20 h-20 bg-[#72707088] rounded-full flex justify-center items-center'>
                        <div className='w-14 h-14 rounded-full bg-black relative'></div>
                        <FontAwesomeIcon icon={faHeadphonesSimple} className='text-white text-2xl absolute' />
                    </li>
                    <li className='mt-5 text-xl font-semibold'>
                        24/7 CUSTOMER SERVICE
                    </li>
                    <li className='mt-3 text-sm font-normal'>
                        Friendly 24/7 customer support
                    </li>
                </ul>

                {/* money back gurantee */}
                <ul className='w-[270px] flex flex-col items-center py-[30px] '>
                    <li className='w-20 h-20 bg-[#72707088] rounded-full flex justify-center items-center'>
                        <div className='w-14 h-14 rounded-full bg-black relative'></div>
                        <FontAwesomeIcon icon={faShield} className='text-white text-3xl absolute' />
                        <FontAwesomeIcon icon={faCheck} className='absolute'/>
                    </li>
                    <li className='mt-5 text-xl font-semibold'>
                        MONEY BACK GUARANTEE
                    </li>
                    <li className='mt-3 text-sm font-normal'>
                        We reurn money within 30 days
                    </li>
                </ul>
            </section>
            
            <Footer />
        </>
    )
}

export default About