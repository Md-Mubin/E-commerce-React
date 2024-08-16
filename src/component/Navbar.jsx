// ===================== All Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faHeart, faPenToSquare, faStar, faUser } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightFromBracket, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React       from 'react'
import { Link }    from "react-router-dom";
import Scrolltotop from './Scrolltotop';

const Navbar = () => {
    return (
        <>
            {/* for scroll top */}
            <Scrolltotop />

            {/* =========== top navbar part =========== */}

            <header className='w-full h-12 bg-black flex justify-center items-center gap-2 sticky top-0 z-[100]'>
                <p className='text-sm text-white'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                <a className='text-sm text-white font-semibold font-poppins'>ShopNow</a>
            </header>

            {/* =========== top navbar end =========== */}

            {/* =========== navbar part start =========== */}

            <nav className='w-full px-[365px] bg-white h-10 pt-12 pb-12 flex justify-between items-center sticky top-12 border-b-2 z-[100]'>

                {/* =========== for logo =========== */}
                <logo><Link to="/" className='text-2xl font-bold text-black'>Exclusive</Link></logo>

                {/* =========== for page links =========== */}
                <ul className='flex justify-center items-center gap-12'>
                    <li className='font-normal text-[16px] relative group/home hover:scale-110'><Link to="/">Home</Link>
                        <span className='absolute w-full scale-0 h-[1px] bg-black bottom-[-5px] left-0 group-hover/home:scale-125 transition duration-200 '></span>
                    </li>
                    <li className='font-normal text-[16px] group/contact relative hover:scale-110'><Link to="/Contact">Contact</Link>
                        <span className='absolute w-full scale-0 h-[1px] bg-black bottom-[-5px] left-0 group-hover/contact:scale-125 transition duration-200 '></span>
                    </li>
                    <li className='font-normal text-[16px] relative group/about hover:scale-110'><Link to="/About">About</Link>
                        <span className='absolute w-full scale-0 h-[1px] bg-black bottom-[-5px] left-0 group-hover/about:scale-125 transition duration-200 '></span>
                    </li>
                    <li className='font-normal text-[16px] group/sign relative hover:scale-110'><Link to="/Sign_Up">Sign Up</Link>
                        <span className='absolute w-full scale-0 h-[1px] bg-black bottom-[-5px] left-0 group-hover/sign:scale-125 transition duration-200 '></span>
                    </li>
                </ul>

                {/* =========== for extra =========== */}
                <ul className='w-[380px] h-[38px] flex items-center justify-between'>

                    {/* =========== for search =========== */}
                    <li className='w-60 h-10 bg-[#f5f5f5] pl-5 pr-3 flex justify-between items-center'>
                        <input placeholder='What are you looking for?' className='text-xs bg-transparent border-transparent outline-none' />
                        <search className='cursor-pointer hover:text-red-400'><FontAwesomeIcon icon={faMagnifyingGlass} /></search>
                    </li>

                    {/* =========== for icon =========== */}
                    <li className='text-[22px] cursor-pointer hover:text-red-400'><FontAwesomeIcon icon={faHeart} /></li>
                    <li className='text-[22px] hover:text-red-400'><Link to="/Cart"><FontAwesomeIcon icon={faCartShopping} /></Link></li>
                    <li className='w-8 h-8 rounded-full flex justify-center items-center hover:bg-red-400 hover:text-white relative group/profile'><FontAwesomeIcon icon={faUser} />
                        <ul className='w-[225px] h-[210px] bg-[#83889cab] backdrop-blur-md absolute top-[32px] right-0 rounded-lg p-5 scale-0 group-hover/profile:scale-100 transition duration-200 origin-top-right flex flex-col gap-2'>
                            <Link to='/My_Account' className='text-white w-full h-7 flex justify-start pl-2 items-center rounded-xl hover:bg-[#454750ab]'><FontAwesomeIcon icon = {faUser} className='mr-2 '/> Manage My Account</Link>
                            <Link to='/Whislist' className='text-white w-full h-7 flex justify-start pl-2 items-center rounded-xl hover:bg-[#454750ab]'><FontAwesomeIcon icon = {faPenToSquare} className='mr-2 '/> My Whislist</Link>
                            <a href='#' className='text-white w-full h-7 flex justify-start pl-2 items-center rounded-xl hover:bg-[#454750ab]'><FontAwesomeIcon icon = {faCircleXmark} className='mr-2 '/> My Cancellations</a>
                            <a href='#' className='text-white w-full h-7 flex justify-start pl-2 items-center rounded-xl hover:bg-[#454750ab]'><FontAwesomeIcon icon = {faStar} className='mr-2 '/> My Reviews</a>
                            <a href='#' className='text-white w-full h-7 flex justify-start pl-2 items-center rounded-xl hover:bg-[#454750ab]'><FontAwesomeIcon icon = {faArrowRightFromBracket} className='mr-2 '/> Logout</a>
                        </ul>
                    </li>
                </ul>
            </nav>

            {/* =========== navbar part end =========== */}
        </>
    )
}

export default Navbar