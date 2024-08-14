import React from 'react'
import QrCode from '../assets/Qr Code.png'
import FooterGooglePlay from '../assets/GooglePlay.png'
import FooterApple from '../assets/AppStore.png'

const Footer = () => {
    return (
        <>
            <footer className='w-full mt-[140px] pt-[80px] bg-[#030406]'>
                <main className='container w-[1170px] flex justify-between text-white'>
                    <ul className='w-[218px] flex flex-col gap-4'>
                        <li className='text-2xl font-bold'>Exclusive</li>
                        <li>Subscribe</li>
                        <li>Get 10% off your first order</li>
                        <input type="text" placeholder='Enter your email' className='rounded-lg bg-transparent border-white py-3 pl-3'/>
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
                                <img src={QrCode} alt="Qr_code" />
                                <ul>
                                    <a href="#"><img src={FooterGooglePlay} alt="google_play" className='hover:scale-105'/></a>
                                    <a href="#"><img src={FooterApple} alt="apple_store" className='hover:scale-105' /></a>
                                </ul>
                            </ul>
                        </li>
                        <ul className='mt-6 flex gap-6 '>
                            <li><a href="#">f</a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                        </ul>
                    </ul>
                </main>
                <p className='text-white opacity-70 text-center mt-[76px] pb-[24px]'>©️ Copyright Rimel 2022. All right reserved</p>
            </footer>
        </>
    )
}

export default Footer