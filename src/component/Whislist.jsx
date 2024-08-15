import React from 'react'
import Navbar from './Navbar'
import CartImage1 from '../assets/Cart1.png'
import CartImage2 from '../assets/Cart2.png'
import CartImage3 from '../assets/Cart3.png'
import CartImage4 from '../assets/Cart4.png'
import Suggest1 from '../assets/Suggest1.png'
import Suggest2 from '../assets/Suggest2.png'
import Suggest3 from '../assets/Suggest3.png'
import Suggest4 from '../assets/Suggest4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faTrash, faStar } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import Footer from './Footer'

const Whislist = () => {
    return (
        <>
            <Navbar />

            {/* =============== header =============== */}
            <header className='container w-[1170px] my-20 flex justify-between '>
                <p className='font-normal text-[14px] text-slate-400 flex items-center'>My Profile / <p className='opacity-100 text-red-400 font-bold ml-2'>My Whislist</p></p>
                <button className='text-[14px] font-semibold border-2 w-[225px] h-[56px] rounded-lg hover:translate-y-[-3px] duration-200 hover:bg-red-400 hover:text-white'>Move All To Blog</button>
            </header>

            {/* =============== Favourite items =============== */}
            <section className='container w-[1170px] mt-[60px] flex justify-between'>

                {/* items */}
                <div>
                    <ul className='w-[270px] h-[250px] pt-10 px-10 bg-slate-100 rounded-xl flex flex-col items-center relative z-[-100]'>
                        <li className='w-full flex justify-between items-center'>
                            <div className='w-[55px] h-[26px] bg-red-400 rounded text-center'>-35%</div>
                            <FontAwesomeIcon icon={faTrash} className='mr-4 text-xl hover:text-red-600 cursor-pointer' />
                        </li>
                        <img src={CartImage1} alt="cart_image" className='w-[150px]' />
                        <button className='bg-black w-full h-10 rounded absolute bottom-0 text-white hover:bg-slate-700 '><FontAwesomeIcon icon={faCartShopping} className='mr-2' /> Add To Cart</button>
                    </ul>
                    <ul>
                        <p className='mt-4'>Gucci duffle bag</p>
                        <p className='text-red-400 mr-2 mt-2'>$960 <span className='text-slate-400'>$1160</span></p>
                    </ul>
                </div>

                {/* items */}
                <div>
                    <ul className='w-[270px] h-[250px] pt-10 px-10 bg-slate-100 rounded-xl flex flex-col items-center relative z-[-100]'>
                        <li className='w-full flex justify-end items-center'>
                            <FontAwesomeIcon icon={faTrash} className='mr-4 text-xl hover:text-red-600 cursor-pointer' />
                        </li>
                        <img src={CartImage2} alt="cart_image" className='w-[150px] mt-10' />
                        <button className='bg-black w-full h-10 rounded absolute bottom-0 text-white hover:bg-slate-700'><FontAwesomeIcon icon={faCartShopping} className='mr-2' /> Add To Cart</button>
                    </ul>
                    <ul>
                        <p className='mt-4'>RGB liquid CPU Cooler</p>
                        <p className='text-red-400 mt-2'>$1960</p>
                    </ul>
                </div>

                {/* items */}
                <div>
                    <ul className='w-[270px] h-[250px] pt-10 px-10 bg-slate-100 rounded-xl flex flex-col items-center relative z-[-100]'>
                        <li className='w-full flex justify-end items-center'>
                            <FontAwesomeIcon icon={faTrash} className='mr-4 text-xl hover:text-red-600 cursor-pointer' />
                        </li>
                        <img src={CartImage3} alt="cart_image" className='w-[150px]' />
                        <button className='bg-black w-full h-10 rounded absolute bottom-0 text-white hover:bg-slate-700'><FontAwesomeIcon icon={faCartShopping} className='mr-2' /> Add To Cart</button>
                    </ul>
                    <ul>
                        <p className='mt-4'>GP11 Shooter USB Gamepad</p>
                        <p className='text-red-400 mr-2 mt-2'>$550</p>
                    </ul>
                </div>

                {/* items */}
                <div>
                    <ul className='w-[270px] h-[250px] pt-10 px-10 bg-slate-100 rounded-xl flex flex-col items-center relative z-[-100]'>
                        <li className='w-full flex justify-end items-center'>
                            <FontAwesomeIcon icon={faTrash} className='mr-4 text-xl hover:text-red-600 cursor-pointer' />
                        </li>
                        <img src={CartImage4} alt="cart_image" className='w-[150px]' />
                        <button className='bg-black w-full h-10 rounded absolute bottom-0 text-white hover:bg-slate-700'><FontAwesomeIcon icon={faCartShopping} className='mr-2' /> Add To Cart</button>
                    </ul>
                    <ul>
                        <p className='mt-4'>Quilted Satin Jacket</p>
                        <p className='text-red-400 mr-2 mt-2'>$750</p>
                    </ul>
                </div>
            </section>

            {/* =============== suggeast section =============== */}
            <section className='container w-[1170px] mt-20'>
                <ul className='w-full flex justify-between'>
                    <p className='bg-red-400 w-5 h-10 rounded z-[-100]'><span className='absolute ml-8 mt-2'>Just For You</span></p>
                    <button className='w-[150px] h-[56px] border-2 hover:translate-y-[-3px] duration-200 hover:bg-red-400 hover:text-white rounded-lg'>See All</button>
                </ul>
            </section>

            <section className='container w-[1170px] mt-[60px] flex justify-between'>
                <div>
                    <ul className='w-[270px] h-[250px] pt-6 px-6 bg-slate-100 rounded-xl flex flex-col items-center relative z-[-100]'>
                        <li className='w-full flex justify-end items-center'>
                            <FontAwesomeIcon icon={faEye} className='mr-4 text-xl hover:text-red-600 cursor-pointer' />
                        </li>
                        <img src={Suggest1} alt="suggest_image" className='w-[120px]' />
                        <button className='bg-black w-full h-10 rounded absolute bottom-0 text-white hover:bg-slate-700'><FontAwesomeIcon icon={faCartShopping} className='mr-2' /> Add To Cart</button>
                    </ul>
                    <ul>
                        <p className='mt-4'>ASUS FHD Gaming Laptop</p>
                        <p className='text-red-400 mr-2 mt-2'>$960</p>
                        <ul className='text-lg mt-2 flex gap-2 w-[180px] relative'>
                            <FontAwesomeIcon icon={faStar} className='text-orange-400'/>
                            <FontAwesomeIcon icon={faStar} className='text-orange-400'/>
                            <FontAwesomeIcon icon={faStar} className='text-orange-400'/>
                            <FontAwesomeIcon icon={faStar} className='text-orange-400'/>
                            <FontAwesomeIcon icon={faStar} className='text-orange-400'/>
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
                            <FontAwesomeIcon icon={faStar} className='text-orange-400'/>
                            <FontAwesomeIcon icon={faStar} className='text-orange-400'/>
                            <FontAwesomeIcon icon={faStar} className='text-orange-400'/>
                            <FontAwesomeIcon icon={faStar} className='text-orange-400'/>
                            <FontAwesomeIcon icon={faStar} className='text-orange-400'/>
                            <p className='text-[20px] absolute top-[-5px] right-0'>(65)</p>
                        </ul>
                    </ul>
                </div>

                <div>
                    <ul className='w-[270px] h-[250px] pt-6 px-6 bg-slate-100 rounded-xl flex flex-col items-center relative z-[-100]'>
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
                            <FontAwesomeIcon icon={faStar} className='text-orange-400'/>
                            <FontAwesomeIcon icon={faStar} className='text-orange-400'/>
                            <FontAwesomeIcon icon={faStar} className='text-orange-400'/>
                            <FontAwesomeIcon icon={faStar} className='text-orange-400'/>
                            <FontAwesomeIcon icon={faStar} className='text-orange-400'/>
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
                            <FontAwesomeIcon icon={faStar} className='text-orange-400'/>
                            <FontAwesomeIcon icon={faStar} className='text-orange-400'/>
                            <FontAwesomeIcon icon={faStar} className='text-orange-400'/>
                            <FontAwesomeIcon icon={faStar} className='text-orange-400'/>
                            <FontAwesomeIcon icon={faStar} className='text-orange-400'/>
                            <p className='text-[20px] absolute top-[-5px] right-0'>(65)</p>
                        </ul>
                    </ul>
                </div>
            </section>

            <Footer/>
        </>
    )
}

export default Whislist