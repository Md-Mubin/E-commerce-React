import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import bannerImage from '../assets/Banner_Image.jpg'

const Home = () => {
    return (
        <>
            <Navbar />
            <banner className='container w-[1170px] flex justify-between mt-10'>
                <ul className='w-[218px] flex flex-col gap-4'>
                    <li className='w-[217px] hover:shadow-md hover:translate-y-[-2px]'><a href="#">Woman's Fashion</a></li>
                    <li className='w-[217px] hover:shadow-md hover:translate-y-[-2px]'><a href="#">Men's Fashion</a></li>
                    <li className='w-[217px] hover:shadow-md hover:translate-y-[-2px]'><a href="#">Electronics</a></li>
                    <li className='w-[217px] hover:shadow-md hover:translate-y-[-2px]'><a href="#">Home & Lifestyle</a></li>
                    <li className='w-[217px] hover:shadow-md hover:translate-y-[-2px]'><a href="#">Medicine</a></li>
                    <li className='w-[217px] hover:shadow-md hover:translate-y-[-2px]'><a href="#">Sports & Outdoor</a></li>
                    <li className='w-[217px] hover:shadow-md hover:translate-y-[-2px]'><a href="#">Baby's & Toys</a></li>
                    <li className='w-[217px] hover:shadow-md hover:translate-y-[-2px]'><a href="#">Groceries & Pets</a></li>
                    <li className='w-[217px] hover:shadow-md hover:translate-y-[-2px]'><a href="#">Health & Beauty</a></li>
                </ul>
                <img src={bannerImage} alt="banner_image" />
            </banner>

            <section className='mt-[140px]'>
                <main className="container w-[1170px] flex relative">
                    <div className='w-[212px] flex flex-col'>
                        <box className='w-5 h-10 bg-[#db4444] rounded-[4px] absolute'></box>
                        <p className='absolute top-0 ml-8 text-[16px] font-semibold text-[#db4444]'>Today's</p>
                        <h3 className='text-4xl font-semibold mt-12'>Flash Sales</h3>
                    </div>
                    <time className='flex items-end ml-[88px] gap-[18px]'>
                        <ul>
                            <li className='text-sm font-medium'>Days</li>
                            <li className='text-4xl font-bold'>03</li>
                        </ul>
                        <span className='text-[#e07575] px-[17px] text-4xl'>:</span>
                        <ul>
                            <li className='text-sm font-medium'>Hours</li>
                            <li className='text-4xl font-bold'>23</li>
                        </ul>
                        <span className='text-[#e07575] px-[17px] text-4xl'>:</span>
                        <ul>
                            <li className='text-sm font-medium'>Minutes</li>
                            <li className='text-4xl font-bold'>19</li>
                        </ul>
                        <span className='text-[#e07575] px-[17px] text-4xl'>:</span>
                        <ul>
                            <li className='text-sm font-medium'>Seconds</li>
                            <li className='text-4xl font-bold'>56</li>
                        </ul>
                    </time>
                    <buttons className='absolute right-0 bottom-0 flex gap-2'>
                        <button className='w-[46px] h-[46px] rounded-full bg-[#f5f5f5] flex justify-center items-center text-2xl pb-1'>←</button>
                        <button className='w-[46px] h-[46px] rounded-full bg-[#f5f5f5] flex justify-center items-center text-2xl pb-1'>→</button>
                    </buttons>
                </main>
            </section>

            <Footer/>
        </>
    )
}

export default Home