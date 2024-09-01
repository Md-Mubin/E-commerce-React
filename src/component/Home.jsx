// ===================== All Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faCheck, faHeadphonesSimple, faShield, faStar, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { faEye, faHeart } from '@fortawesome/free-regular-svg-icons'
import React       from 'react'
import Navbar      from './Navbar'
import Footer      from './Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <banner className='container w-[1170px] flex justify-between mt-10'>

                {/* ============= Banner Left Section ============= */}
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

                {/* ========== Banner Image ========== */}
                <img src="/Banner_Image.jpg" alt="banner_image" />
            </banner>

            {/* ========== Flash Sale Section ========== */}
            <section className='mt-[140px]'>
                <main className="container w-[1170px] flex relative">
                    <div className='w-[212px] flex flex-col'>
                        <box className='w-5 h-10 bg-[#db4444] rounded-[4px] absolute'></box>
                        <p className='absolute top-0 ml-8 text-[16px] font-semibold text-[#db4444]'>Today's</p>
                        <h3 className='text-4xl font-semibold mt-12'>Flash Sales</h3>
                    </div>

                    {/* ========== Flash time part ========== */}
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

            {/* ========== Flash Products ========== */}
            <section className='w-[1170px] container mt-10 flex justify-between'>

                {/* items */}
                <div>
                    <ul className='w-[270px] h-[250px] pt-6 px-6 bg-slate-100 rounded-xl flex flex-col items-center relative'>
                        <li className='w-full flex justify-end items-center'>
                            <FontAwesomeIcon icon={faEye} className='mr-4 text-xl hover:text-red-600 cursor-pointer' />
                        </li>
                        <img src="/Suggest3.png" alt="suggest_image" className='w-[120px]' />
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

                {/* items */}
                <div>
                    <ul className='w-[270px] h-[250px] pt-6 px-6 bg-slate-100 rounded-xl flex flex-col items-center relative z-[-100]'>
                        <li className='w-full flex justify-end items-center'>
                            <FontAwesomeIcon icon={faEye} className='mr-4 text-xl hover:text-red-600 cursor-pointer' />
                        </li>
                        <img src="/Suggest4.png" alt="suggest_image" className='w-[120px] mt-4' />
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

                {/* items */}
                <div>
                    <ul className='w-[270px] h-[250px] pt-6 px-6 bg-slate-100 rounded-xl flex flex-col items-center relative z-[-100]'>
                        <li className='w-full flex justify-end items-center'>
                            <FontAwesomeIcon icon={faEye} className='mr-4 text-xl hover:text-red-600 cursor-pointer' />
                        </li>
                        <img src="/Suggest2.png" alt="suggest_image" className='w-[120px] mt-4' />
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
                        <img src="/Chair.png" alt="suggest_image" className='w-[100px]' />
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

            {/* ========== Cetagory ========== */}
            <section className='container w-[1170px] relative z-[-100]'>
                <div className='w-[400px] flex flex-col'>
                    <box className='w-5 h-10 bg-[#db4444] rounded-[4px] absolute'></box>
                    <p className='absolute top-2 ml-8 text-[16px] font-semibold text-[#db4444]'>This Month</p>
                    <h3 className='text-4xl font-semibold mt-12'>Browse By Category</h3>
                    <button className='w-[160px] h-[56px] bg-red-400 rounded-lg text-white hover:bg-red-500 absolute right-0 bottom-0'>View All</button>
                </div>
            </section>

            {/* ========== cetagory products ========== */}
            <section className='container w-[1170px] mt-[60px] flex justify-between'>
                
                {/* items */}
                <div>
                    <ul className='w-[270px] h-[250px] pt-6 px-6 bg-slate-100 rounded-xl flex flex-col items-center relative'>
                        <li className='w-full flex justify-end items-center'>
                            <FontAwesomeIcon icon={faEye} className='mr-4 text-xl hover:text-red-600 cursor-pointer' />
                        </li>
                        <img src="/redShirt.png" alt="suggest_image" className='w-[150px]' />
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

                {/* items */}
                <div>
                    <ul className='w-[270px] h-[250px] pt-6 px-6 bg-slate-100 rounded-xl flex flex-col items-center relative'>
                        <li className='w-full flex justify-end items-center'>
                            <FontAwesomeIcon icon={faEye} className='mr-4 text-xl hover:text-red-600 cursor-pointer' />
                        </li>
                        <img src="/Cart1.png" alt="suggest_image" className='w-[150px]' />
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

                {/* items */}
                <div>
                    <ul className='w-[270px] h-[250px] pt-6 px-6 bg-slate-100 rounded-xl flex flex-col items-center relative'>
                        <li className='w-full flex justify-end items-center'>
                            <FontAwesomeIcon icon={faEye} className='mr-4 text-xl hover:text-red-600 cursor-pointer' />
                        </li>
                        <img src="/Cart2.png" alt="suggest_image" className='w-[150px] mt-8' />
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

                {/* items */}
                <div>
                    <ul className='w-[270px] h-[250px] pt-6 px-6 bg-slate-100 rounded-xl flex flex-col items-center relative'>
                        <li className='w-full flex justify-end items-center'>
                            <FontAwesomeIcon icon={faEye} className='mr-4 text-xl hover:text-red-600 cursor-pointer' />
                        </li>
                        <img src="/desk.png" alt="suggest_image" className='w-[150px]' />
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

            {/* ========== music ecperience part ========== */}
            <section className='container w-[1170px] mt-[140px] relative'>
                <img src="/expImage.png" alt="expImage" />
                <div className='absolute top-[70px] left-[56px]'>
                    <a href="#" className='text-base font-semibold text-[#00ff66]'>Categories</a>
                    <h4 className='text-[48px] font-semibold text-white w-[445px] mt-8'>Enhance Your Music Experience</h4>
                    <ul className='mt-8 flex gap-6'>
                        <li className='w-[62px] h-[62px] rounded-full bg-white flex flex-col justify-center items-center text-base font-semibold'>23 <span className='text-[11px] font-normal'>Hours</span></li>
                        <li className='w-[62px] h-[62px] rounded-full bg-white flex flex-col justify-center items-center text-base font-semibold'>05 <span className='text-[11px] font-normal'>Days</span></li>
                        <li className='w-[62px] h-[62px] rounded-full bg-white flex flex-col justify-center items-center text-base font-semibold'>59 <span className='text-[11px] font-normal'>Minutes</span></li>
                        <li className='w-[62px] h-[62px] rounded-full bg-white flex flex-col justify-center items-center text-base font-semibold'>35 <span className='text-[11px] font-normal'>Seconds</span></li>
                    </ul>
                    <button className='w-[170px] h-[56px] bg-[#00ff66] mt-10 rounded-lg hover:bg-green-600 hover:text-white hover:translate-y-[-2px] duration-200'>Buy Now</button>
                </div>
            </section>

            <section className='container w-[1170px] relative z-[-100] mt-[70px]'>
                <div className='w-[400px] flex flex-col'>
                    <box className='w-5 h-10 bg-[#db4444] rounded-[4px] absolute'></box>
                    <p className='absolute top-2 ml-8 text-[16px] font-semibold text-[#db4444]'>Our Products</p>
                    <h3 className='text-4xl font-semibold mt-12'>Explore Our Products</h3>
                </div>
            </section>

            <section className='container w-[1170px] mt-[60px] flex flex-wrap gap-[30px]'>

                {/* items */}
                <div>
                    <ul className='w-[270px] h-[250px] pt-6 px-6 bg-slate-100 rounded-xl flex flex-col items-center relative'>
                        <li className='w-full flex flex-col items-end justify-center gap-2'>
                            <FontAwesomeIcon icon={faHeart} className='mr-4 text-xl hover:text-red-600 cursor-pointer' />
                            <FontAwesomeIcon icon={faEye} className='mr-4 text-xl hover:text-red-600 cursor-pointer' />
                        </li>
                        <img src="/bearchoc.png" alt="suggest_image" className='w-[100px]' />
                        <button className='bg-black w-full h-10 rounded absolute bottom-0 text-white hover:bg-slate-700'><FontAwesomeIcon icon={faCartShopping} className='mr-2' /> Add To Cart</button>
                    </ul>
                    <ul>
                        <p className='mt-4'>Breed Dry Dog Food</p>
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
                    <ul className='w-[270px] h-[250px] pt-6 px-6 bg-slate-100 rounded-xl flex flex-col items-center relative'>
                        <li className='w-full flex flex-col items-end justify-center gap-2'>
                            <FontAwesomeIcon icon={faHeart} className='mr-4 text-xl hover:text-red-600 cursor-pointer' />
                            <FontAwesomeIcon icon={faEye} className='mr-4 text-xl hover:text-red-600 cursor-pointer' />
                        </li>
                        <img src="/camera.png" alt="suggest_image" className='w-[100px]' />
                        <button className='bg-black w-full h-10 rounded absolute bottom-0 text-white hover:bg-slate-700'><FontAwesomeIcon icon={faCartShopping} className='mr-2' /> Add To Cart</button>
                    </ul>
                    <ul>
                        <p className='mt-4'>CANON EOS DSLR Camera</p>
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
                    <ul className='w-[270px] h-[250px] pt-6 px-6 bg-slate-100 rounded-xl flex flex-col items-center relative'>
                        <li className='w-full flex flex-col items-end justify-center gap-2'>
                            <FontAwesomeIcon icon={faHeart} className='mr-4 text-xl hover:text-red-600 cursor-pointer' />
                            <FontAwesomeIcon icon={faEye} className='mr-4 text-xl hover:text-red-600 cursor-pointer' />
                        </li>
                        <img src="/Suggest1.png" alt="suggest_image" className='w-[100px]' />
                        <button className='bg-black w-full h-10 rounded absolute bottom-0 text-white hover:bg-slate-700'><FontAwesomeIcon icon={faCartShopping} className='mr-2' /> Add To Cart</button>
                    </ul>
                    <ul>
                        <p className='mt-4'>ASUS FHD Gaming Laptop</p>
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
                    <ul className='w-[270px] h-[250px] pt-6 px-6 bg-slate-100 rounded-xl flex flex-col items-center relative'>
                        <li className='w-full flex flex-col items-end justify-center gap-2'>
                            <FontAwesomeIcon icon={faHeart} className='mr-4 text-xl hover:text-red-600 cursor-pointer' />
                            <FontAwesomeIcon icon={faEye} className='mr-4 text-xl hover:text-red-600 cursor-pointer' />
                        </li>
                        <img src="/cosmetics.png" alt="suggest_image" className='w-[100px]' />
                        <button className='bg-black w-full h-10 rounded absolute bottom-0 text-white hover:bg-slate-700'><FontAwesomeIcon icon={faCartShopping} className='mr-2' /> Add To Cart</button>
                    </ul>
                    <ul>
                        <p className='mt-4'>Curology Product Set </p>
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
                <div className='mt-[60px]'>
                    <ul className='w-[270px] h-[250px] pt-6 px-6 bg-slate-100 rounded-xl flex flex-col items-center relative'>
                        <li className='w-full flex flex-col items-end justify-center gap-2'>
                            <FontAwesomeIcon icon={faHeart} className='mr-4 text-xl hover:text-red-600 cursor-pointer' />
                            <FontAwesomeIcon icon={faEye} className='mr-4 text-xl hover:text-red-600 cursor-pointer' />
                        </li>
                        <img src="/car.png" alt="suggest_image" className='w-[100px]' />
                        <button className='bg-black w-full h-10 rounded absolute bottom-0 text-white hover:bg-slate-700'><FontAwesomeIcon icon={faCartShopping} className='mr-2' /> Add To Cart</button>
                    </ul>
                    <ul>
                        <p className='mt-4'>Kids Electric Car </p>
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
                <div className='mt-[60px]'>
                    <ul className='w-[270px] h-[250px] pt-6 px-6 bg-slate-100 rounded-xl flex flex-col items-center relative'>
                        <li className='w-full flex flex-col items-end justify-center gap-2'>
                            <FontAwesomeIcon icon={faHeart} className='mr-4 text-xl hover:text-red-600 cursor-pointer' />
                            <FontAwesomeIcon icon={faEye} className='mr-4 text-xl hover:text-red-600 cursor-pointer' />
                        </li>
                        <img src="/shoes.png" alt="suggest_image" className='w-[100px]' />
                        <button className='bg-black w-full h-10 rounded absolute bottom-0 text-white hover:bg-slate-700'><FontAwesomeIcon icon={faCartShopping} className='mr-2' /> Add To Cart</button>
                    </ul>
                    <ul>
                        <p className='mt-4'>Jr. Zoom Soccer Cleats</p>
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
                <div className='mt-[60px]'>
                    <ul className='w-[270px] h-[250px] pt-6 px-6 bg-slate-100 rounded-xl flex flex-col items-center relative'>
                        <li className='w-full flex flex-col items-end justify-center gap-2'>
                            <FontAwesomeIcon icon={faHeart} className='mr-4 text-xl hover:text-red-600 cursor-pointer' />
                            <FontAwesomeIcon icon={faEye} className='mr-4 text-xl hover:text-red-600 cursor-pointer' />
                        </li>
                        <img src="/Cart3.png" alt="suggest_image" className='w-[100px]' />
                        <button className='bg-black w-full h-10 rounded absolute bottom-0 text-white hover:bg-slate-700'><FontAwesomeIcon icon={faCartShopping} className='mr-2' /> Add To Cart</button>
                    </ul>
                    <ul>
                        <p className='mt-4'>GP11 Shooter USB Gamepad</p>
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
                <div className='mt-[60px]'>
                    <ul className='w-[270px] h-[250px] pt-6 px-6 bg-slate-100 rounded-xl flex flex-col items-center relative'>
                        <li className='w-full flex flex-col items-end justify-center gap-2'>
                            <FontAwesomeIcon icon={faHeart} className='mr-4 text-xl hover:text-red-600 cursor-pointer' />
                            <FontAwesomeIcon icon={faEye} className='mr-4 text-xl hover:text-red-600 cursor-pointer' />
                        </li>
                        <img src="/Cart4.png" alt="suggest_image" className='w-[100px]' />
                        <button className='bg-black w-full h-10 rounded absolute bottom-0 text-white hover:bg-slate-700'><FontAwesomeIcon icon={faCartShopping} className='mr-2' /> Add To Cart</button>
                    </ul>
                    <ul>
                        <p className='mt-4'>Quilted Satin Jacket</p>
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

            <ul className='container w-[1170px] flex justify-center mt-[60px]'>
                <button className='w-[235px] h-[56px] bg-red-400 text-white rounded-lg hover:bg-red-500'>View All Products</button>
            </ul>

            <section className='container w-[1170px] relative mt-[140px]'>
                <div className='w-[400px] flex flex-col'>
                    <box className='w-5 h-10 bg-[#db4444] rounded-[4px] absolute'></box>
                    <p className='absolute top-2 ml-8 text-[16px] font-semibold text-[#db4444]'>Features</p>
                    <h3 className='text-4xl font-semibold mt-12'>New Arrival </h3>
                </div>
            </section>

            {/* ========== New arrival part ========== */}
            <section className='container w-[1170px] flex justify-between mt-[60px]'>

                {/* items */}
                <colgroup className='relative'>
                    <img src="/ps5.png" alt="PS5_image" />
                    <h5 className='absolute  text-white text-2xl font-semibold bottom-[124px] ml-6'>PlayStation 5</h5>
                    <p className='absolute text-white bottom-[56px] ml-6 text-sm font-normal w-[255px]'>Black and White version of the PS5 coming out on sale.</p>
                    <a href="#" className='absolute text-white text-base font-medium bottom-6 ml-6 group/shopps'>Shop Now
                    <span className='absolute w-full h-[1px] bg-white bottom-[-5px] left-0 scale-0 group-hover/shopps:scale-125 transition duration-300 '></span>
                    </a>
                </colgroup>

                {/* items */}
                <colgroup className='flex flex-col gap-8'>

                {/* women item */}
                    <ul className='relative'>
                        <img src='/woman.png' alt="woman_image" />
                        <h5 className='absolute  text-white text-2xl font-semibold bottom-[124px] ml-6'>Women's Collections</h5>
                        <p className='absolute text-white bottom-[56px] ml-6 w-[255px] text-sm font-normal'>Featured woman collections that give you another vibe.</p>
                        <a href="#" className='absolute text-white text-base font-medium bottom-6 ml-6 group/shopw'>Shop Now
                        <span className='absolute w-full h-[1px] bg-white bottom-[-5px] left-0 scale-0 group-hover/shopw:scale-125 transition duration-300 '></span>
                        </a>
                    </ul>
                    
                    <ul className='flex gap-[30px]'>

                        {/* speakers */}
                        <li className='relative'>
                            <img src="/speaker.png" alt="speaker_image" />
                            <h5 className='absolute  text-white text-2xl font-semibold bottom-[85px] ml-6'>Speakers</h5>
                            <p className='absolute text-white bottom-[56px] ml-6 text-sm font-normal'>Amazon wireless speakers</p>
                            <a href="#" className='absolute text-white text-base font-medium bottom-6 ml-6 group/shops'>Shop Now
                            <span className='absolute w-full h-[1px] bg-white bottom-[-5px] left-0 scale-0 group-hover/shops:scale-125 transition duration-300 '></span>
                            </a>
                        </li>

                        {/* perfume */}
                        <li className='relative'>
                            <img src="/perfume.png" alt="perfume_image" />
                            <h5 className='absolute  text-white text-2xl font-semibold bottom-[85px] ml-6'>Perfume</h5>
                            <p className='absolute text-white bottom-[56px] ml-6 text-sm font-normal'>GUCCI INTENSE OUD EDP</p>
                            <a href="#" className='absolute text-white text-base font-medium bottom-6 ml-6 group/shopp'>Shop Now
                                <span className='absolute w-full h-[1px] bg-white bottom-[-5px] left-0 scale-0 group-hover/shopp:scale-125 transition duration-300 '></span>
                            </a>
                        </li>
                    </ul>
                </colgroup>
            </section>

            {/* ============= Supports ============= */}
            <section className='container w-[1170px] mt-[180px] flex justify-evenly'>

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
                        <FontAwesomeIcon icon={faCheck} className='absolute' />
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

export default Home