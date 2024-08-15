import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Suggest2 from '../assets/Suggest2.png'
import Suggest3 from '../assets/Suggest3.png'
import Suggest4 from '../assets/Suggest4.png'
import Chair from '../assets/Chair.png'
import Redshirt from '../assets/redShirt.png'
import Desk from '../assets/desk.png'
import Cart1 from '../assets/Cart1.png'
import Cart2 from '../assets/Cart2.png'
import ExpImage from '../assets/expImage.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faTrash, faStar } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-regular-svg-icons'
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

            <section className='w-[1170px] container mt-10 flex justify-between'>
                <div>
                    <ul className='w-[270px] h-[250px] pt-6 px-6 bg-slate-100 rounded-xl flex flex-col items-center relative'>
                        <li className='w-full flex justify-end items-center'>
                            <FontAwesomeIcon icon={faEye} className='mr-4 text-xl hover:text-red-600 cursor-pointer' />
                        </li>
                        <img src={Suggest3} alt="suggest_image" className='w-[120px]' />
                        <button className='bg-black w-full h-10 rounded absolute bottom-0 text-white hover:bg-slate-700'><FontAwesomeIcon icon={faCartShopping} className='mr-2' /> Add To Cart</button>
                    </ul>
                    <ul>
                        <p className='mt-4'>HAVIT HV-G92 Gamepad</p>
                        <p className='text-red-400 mr-2 mt-2'>$560</p>
                        <ul className='text-lg mt-2 flex gap-2 w-[180px] relative'>
                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                            <p className='text-[20px] absolute top-[-5px] right-0'>(65)</p>
                        </ul>
                    </ul>
                </div>

                <div>
                    <ul className='w-[270px] h-[250px] pt-6 px-6 bg-slate-100 rounded-xl flex flex-col items-center relative z-[-100]'>
                        <li className='w-full flex justify-end items-center'>
                            <FontAwesomeIcon icon={faEye} className='mr-4 text-xl hover:text-red-600 cursor-pointer' />
                        </li>
                        <img src={Suggest4} alt="suggest_image" className='w-[120px] mt-4' />
                        <button className='bg-black w-full h-10 rounded absolute bottom-0 text-white hover:bg-slate-700'><FontAwesomeIcon icon={faCartShopping} className='mr-2' /> Add To Cart</button>
                    </ul>
                    <ul>
                        <p className='mt-4'>AK-900 Wired Keyboard</p>
                        <p className='text-red-400 mr-2 mt-2'>$200</p>
                        <ul className='text-lg mt-2 flex gap-2 w-[180px] relative'>
                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                            <p className='text-[20px] absolute top-[-5px] right-0'>(65)</p>
                        </ul>
                    </ul>
                </div>

                <div>
                    <ul className='w-[270px] h-[250px] pt-6 px-6 bg-slate-100 rounded-xl flex flex-col items-center relative z-[-100]'>
                        <li className='w-full flex justify-end items-center'>
                            <FontAwesomeIcon icon={faEye} className='mr-4 text-xl hover:text-red-600 cursor-pointer' />
                        </li>
                        <img src={Suggest2} alt="suggest_image" className='w-[120px] mt-4' />
                        <button className='bg-black w-full h-10 rounded absolute bottom-0 text-white hover:bg-slate-700'><FontAwesomeIcon icon={faCartShopping} className='mr-2' /> Add To Cart</button>
                    </ul>
                    <ul>
                        <p className='mt-4'>IPS LCD Gaming Monitor</p>
                        <p className='text-red-400 mr-2 mt-2'>$1160</p>
                        <ul className='text-lg mt-2 flex gap-2 w-[180px] relative'>
                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                            <p className='text-[20px] absolute top-[-5px] right-0'>(65)</p>
                        </ul>
                    </ul>
                </div>

                {/* items */}
                <div>
                    <ul className='w-[270px] h-[250px] pt-6 px-6 bg-slate-100 rounded-xl flex flex-col items-center relative z-[-100]'>
                        <li className='w-full flex justify-end items-center'>
                            <FontAwesomeIcon icon={faEye} className='mr-4 text-xl hover:text-red-600 cursor-pointer' />
                        </li>
                        <img src={Chair} alt="suggest_image" className='w-[100px]' />
                        <button className='bg-black w-full h-10 rounded absolute bottom-0 text-white hover:bg-slate-700'><FontAwesomeIcon icon={faCartShopping} className='mr-2' /> Add To Cart</button>
                    </ul>
                    <ul>
                        <p className='mt-4'>S-Series Comfort Chair </p>
                        <p className='text-red-400 mr-2 mt-2'>$1160</p>
                        <ul className='text-lg mt-2 flex gap-2 w-[180px] relative'>
                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                            <p className='text-[20px] absolute top-[-5px] right-0'>(65)</p>
                        </ul>
                    </ul>
                </div>
            </section>

            <ul className='w-full flex justify-center mt-10'>
                <button className='w-[234px] h-[56px] bg-red-400 hover:bg-red-500 text-white rounded-lg'>View All Products</button>
            </ul>

            <ul className='mx-auto w-[1170px] mt-[60px] mb-[80px]'>
                <button className='w-full h-[1px] bg-black'></button>
            </ul>

            <section className='container w-[1170px] relative z-[-100]'>
                <div className='w-[400px] flex flex-col'>
                    <box className='w-5 h-10 bg-[#db4444] rounded-[4px] absolute'></box>
                    <p className='absolute top-2 ml-8 text-[16px] font-semibold text-[#db4444]'>This Month</p>
                    <h3 className='text-4xl font-semibold mt-12'>Browse By Category</h3>
                    <button className='w-[160px] h-[56px] bg-red-400 rounded-lg text-white hover:bg-red-500 absolute right-0 bottom-0'>View All</button>
                </div>
            </section>

            <section className='container w-[1170px] mt-[60px] flex justify-between'>
                <div>
                    <ul className='w-[270px] h-[250px] pt-6 px-6 bg-slate-100 rounded-xl flex flex-col items-center relative'>
                        <li className='w-full flex justify-end items-center'>
                            <FontAwesomeIcon icon={faEye} className='mr-4 text-xl hover:text-red-600 cursor-pointer' />
                        </li>
                        <img src={Redshirt} alt="suggest_image" className='w-[150px]' />
                        <button className='bg-black w-full h-10 rounded absolute bottom-0 text-white hover:bg-slate-700'><FontAwesomeIcon icon={faCartShopping} className='mr-2' /> Add To Cart</button>
                    </ul>
                    <ul>
                        <p className='mt-4'>The north coat </p>
                        <p className='text-red-400 mr-2 mt-2'>$1160</p>
                        <ul className='text-lg mt-2 flex gap-2 w-[180px] relative'>
                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                            <p className='text-[20px] absolute top-[-5px] right-0'>(65)</p>
                        </ul>
                    </ul>
                </div>

                <div>
                    <ul className='w-[270px] h-[250px] pt-6 px-6 bg-slate-100 rounded-xl flex flex-col items-center relative'>
                        <li className='w-full flex justify-end items-center'>
                            <FontAwesomeIcon icon={faEye} className='mr-4 text-xl hover:text-red-600 cursor-pointer' />
                        </li>
                        <img src={Cart1} alt="suggest_image" className='w-[150px]' />
                        <button className='bg-black w-full h-10 rounded absolute bottom-0 text-white hover:bg-slate-700'><FontAwesomeIcon icon={faCartShopping} className='mr-2' /> Add To Cart</button>
                    </ul>
                    <ul>
                        <p className='mt-4'>Gucci duffle bag</p>
                        <p className='text-red-400 mr-2 mt-2'>$1160</p>
                        <ul className='text-lg mt-2 flex gap-2 w-[180px] relative'>
                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                            <p className='text-[20px] absolute top-[-5px] right-0'>(65)</p>
                        </ul>
                    </ul>
                </div>
                <div>
                    <ul className='w-[270px] h-[250px] pt-6 px-6 bg-slate-100 rounded-xl flex flex-col items-center relative'>
                        <li className='w-full flex justify-end items-center'>
                            <FontAwesomeIcon icon={faEye} className='mr-4 text-xl hover:text-red-600 cursor-pointer' />
                        </li>
                        <img src={Cart2} alt="suggest_image" className='w-[150px] mt-8' />
                        <button className='bg-black w-full h-10 rounded absolute bottom-0 text-white hover:bg-slate-700'><FontAwesomeIcon icon={faCartShopping} className='mr-2' /> Add To Cart</button>
                    </ul>
                    <ul>
                        <p className='mt-4'>RGB liquid CPU Cooler</p>
                        <p className='text-red-400 mr-2 mt-2'>$1160</p>
                        <ul className='text-lg mt-2 flex gap-2 w-[180px] relative'>
                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                            <p className='text-[20px] absolute top-[-5px] right-0'>(65)</p>
                        </ul>
                    </ul>
                </div>
                <div>
                    <ul className='w-[270px] h-[250px] pt-6 px-6 bg-slate-100 rounded-xl flex flex-col items-center relative'>
                        <li className='w-full flex justify-end items-center'>
                            <FontAwesomeIcon icon={faEye} className='mr-4 text-xl hover:text-red-600 cursor-pointer' />
                        </li>
                        <img src={Desk} alt="suggest_image" className='w-[150px]' />
                        <button className='bg-black w-full h-10 rounded absolute bottom-0 text-white hover:bg-slate-700'><FontAwesomeIcon icon={faCartShopping} className='mr-2' /> Add To Cart</button>
                    </ul>
                    <ul>
                        <p className='mt-4'>Small BookSelf</p>
                        <p className='text-red-400 mr-2 mt-2'>$1160</p>
                        <ul className='text-lg mt-2 flex gap-2 '>
                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                            <p className='text-[20px] absolute top-[-5px] right-0'>(65)</p>
                        </ul>
                    </ul>
                </div>
            </section>

            <section className='container w-[1170px] mt-[140px]'>
                <img src={ExpImage} alt="expImage" />
            </section>

            <Footer />
        </>
    )
}

export default Home