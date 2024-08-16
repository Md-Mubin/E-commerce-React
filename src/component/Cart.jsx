import React from 'react'
import Navbar from './Navbar'
import Suggest2 from "../assets/Suggest2.png";
import Suggest3 from "../assets/Suggest3.png";
import Footer from './Footer';

const Cart = () => {
    return (
        <>
            <Navbar />

            <p className='container w-[1170px] font-normal text-[14px] text-slate-400 mt-20'>Home / <span className='opacity-100 text-black font-bold ml-2'>Cart</span></p>

            <section className='container w-[1170px] mt-20 px-10'>
                <ul className='flex justify-between text-base font-normal'>
                    <li>Product</li>
                    <li>Price</li>
                    <li>Quantity</li>
                    <li>Subtotal</li>
                </ul>

                <ul className='mt-10 flex justify-between items-center'>
                    <li className='flex items-center'><img src={Suggest2} alt="monitor_image" className='w-[40px]' /><span className='ml-16 mb-2 absolute'>LCD Monitor</span></li>
                    <li className='ml-2'>$650</li>
                    <li><input type="number" className='border-2 w-[50px] mr-3 outline-none pl-2' /></li>
                    <li className='w-[40px]'>$650</li>
                </ul>

                <ul className='mt-[80px] flex justify-between items-center'>
                    <li className='flex items-center'><img src={Suggest3} alt="controller_image" className='w-[40px]' /><span className='ml-16 mb-2 absolute'>H1 Gamepad</span></li>
                    <li className='ml-2'>$550</li>
                    <li><input type="number" className='border-2 w-[50px] mr-3 outline-none pl-2' /></li>
                    <li className='w-[40px]'>$1100</li>
                </ul>

                <ul className='mt-[64px] flex justify-between'>
                    <button className='w-[256px] h-[56px] rounded-lg border-2 border-slate-300 hover:bg-red-400 hover:text-white hover:border-none transition duration-200'>Return To Shop</button>
                    <button className='w-[256px] h-[56px] rounded-lg border-2 border-slate-300 hover:bg-red-400 hover:text-white hover:border-none transition duration-200'>Update Cart</button>
                </ul>
            </section>

            <section className='container w-[1170px] mt-20 flex justify-between'>
                <ul className='flex gap-4'>
                    <input type="text" placeholder='Cuppon Code' className='w-[300px] h-[56px] outline-none border-2 border-slate-200 pl-5 rounded-lg' />
                    <button className='w-[210px] h-[56px] bg-red-400 rounded-lg text-white hover:bg-red-500'>Apply Coupon</button>
                </ul>
                <ul className='w-[470px] py-8 px-6 border-2 border-black rounded-xl'>
                    <h2 className='text-xl font-medium'>Cart Total</h2>
                    <ul className='mt-6 flex justify-between'>
                        <li>Subtotal:</li>
                        <li>$1750</li>
                    </ul>
                    <button className='w-full h-[2px] mt-4 bg-slate-200'></button>
                    <ul className='mt-6 flex justify-between'>
                        <li>Shipping:</li>
                        <li>Free</li>
                    </ul>
                    <button className='w-full h-[2px] mt-4 bg-slate-200'></button>
                    <ul className='mt-6 flex justify-between'>
                        <li>Total:</li>
                        <li>$1750</li>
                    </ul>
                    <ul className='mt-4 w-full flex justify-center'>
                        <button className='w-[260px] h-[56px] bg-red-400 rounded-lg text-white hover:bg-red-500'>Procees to checkout</button>
                    </ul>
                </ul>
            </section>

            <section className=''>

            </section>

            <Footer />
        </>
    )
}

export default Cart