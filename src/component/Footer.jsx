import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <>
            <footer className='w-full mt-[140px] pt-[80px] bg-[#030406]'>
                <main className='container w-[1170px] flex justify-between text-white'>
                    <ul className='w-[218px] flex flex-col gap-4'>
                        <li className='text-2xl font-bold'>Exclusive</li>
                        <li>Subscribe</li>
                        <li>Get 10% off your first order</li>
                        <li className='relative'>
                            <input type="text" placeholder='Enter your email' className='w-[250px] rounded-lg bg-transparent outline-none border-2 py-3 pl-3 ' />
                            <FontAwesomeIcon icon={faLocationArrow} className='absolute top-[20px] right-[-10px]'/>
                        </li>
                    </ul>
                    <ul className='w-[175px] flex flex-col gap-4'>
                        <li className='text-xl font-medium'>Support</li>
                        <li>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
                        <li>exclusive@gmail.com</li>
                        <li>+88015-88888-9999</li>
                    </ul>
                    <ul className='w-[125px] flex flex-col gap-4'>
                        <li className='text-xl font-medium'>Account</li>
                        <li>My Account</li>
                        <li>Login / Register</li>
                        <li>Cart</li>
                        <li>Wishlist</li>
                        <li>Shop</li>
                    </ul>
                    <ul className='w-[110px] flex flex-col gap-4'>
                        <li className='text-xl font-medium'>Quick Link</li>
                        <li>Privacy Policy</li>
                        <li>Terms Of Use</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                    <ul className='w-[200px] flex flex-col gap-4'>
                        <li className='text-xl font-medium'>Download App</li>
                        <li className='font-medium text-[12px] mt-1'>Save $3 with App New User Only
                            <ul className='pt-[10px] flex'>
                                <img src="" alt="Qr_code" />
                                <ul>
                                    <a href="#"><img src="/GooglePlay.png" alt="google_play" className='hover:scale-105' /></a>
                                    <a href="#"><img src="/AppStore.png" alt="apple_store" className='hover:scale-105' /></a>
                                </ul>
                            </ul>
                        </li>
                        <ul className='mt-6 flex justify-between text-[30px] '>
                            <li><a href="#" className='hover:text-blue-400'><FontAwesomeIcon icon={faFacebookF} /></a></li>
                            <li><a href="#" className='hover:text-sky-400'><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a href="#" className='hover:text-purple-400'><FontAwesomeIcon icon={faInstagram} /></a></li>
                            <li><a href="#" className='hover:text-blue-700'><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                        </ul>
                    </ul>
                </main>
                <p className='text-white opacity-70 text-center mt-[76px] pb-[24px]'>©️ Copyright Rimel 2022. All right reserved</p>
            </footer>
        </>
    )
}

export default Footer