import React, { useContext, useEffect, useState } from 'react'
import { AppContextProvider } from './App'
import fallingRoses from '../src/falling.gif'
import { FaHeart } from "react-icons/fa";
import { GiFlowers } from "react-icons/gi";

export const Card = () => {
    const [showCard, setShowCard] = useState(false)
    const {setCurrentImage} = useContext(AppContextProvider)
    
  return (
    <div className=' drop-shadow-2xl relative w-full h-screen flex justify-center items-center'>
        <div className='relative bg-red-500 w-96 h-80 rounded-xl overflow-hidden'>
            <div onClick={() => {
                setShowCard(!showCard)
                setCurrentImage('https://images.pexels.com/photos/196664/pexels-photo-196664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')
                // setCurrentImage('https://images.pexels.com/photos/196664/pexels-photo-196664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')
                }} className={showCard ? '': 'group flex items-center justify-center hover:bg-red-300 cursor-pointer absolute top-[65px] left-[170px] z-10 bg-red-200 drop-shadow-2xl w-10 h-10 rounded-full'}>
                <FaHeart className='text-red-500 text-3xl'/>
                <p className='group-hover:block hidden absolute -top-14  text-white z-10'>Please open!</p>
            </div>
                <FaHeart className='text-red-200/30 text-6xl absolute top-20 left-5'/>
                <FaHeart className='text-red-300 text-3xl absolute top-40 left-14'/>
                <FaHeart className='text-red-400 text-3xl absolute top-60 left-14'/>
                <GiFlowers className='text-red-200 text-7xl absolute top-44 right-0'/>
                <GiFlowers className='text-red-300 text-7xl absolute top-24 right-0'/>
                <GiFlowers className='text-red-100 text-7xl absolute top-40 right-10'/>
            <div className={showCard ? 'z-[1000] opacity-100 transition-all duration-500 ease-linear absolute rounded-xl top-5 -left-[150px] border-transparent drop-shadow-2xl  w-0 h-0 border-l-[340px] border-l-transparent border-t-[180px] border-t-white border-r-[340px] border-r-transparent' : 'z-0 opacity-0 transition-all duration-500 ease-linear absolute rounded-xl top-0 -left-[150px] border-transparent drop-shadow-2xl  w-0 h-0 border-l-[340px] border-l-transparent border-t-[220px] border-t-white border-r-[340px] border-r-transparent' }/>
            <div className={showCard ? 'transition-all duration-500 ease-linear absolute rounded-xl -top-24 border-transparent drop-shadow-2xl  w-0 h-0 border-l-[193px] border-l-transparent border-t-[100px] border-t-red-500 border-r-[193px] border-r-transparent -scale-y-105' : 'transition-all duration-500 ease-linear absolute rounded-xl top-0 border-transparent drop-shadow-2xl  w-0 h-0 border-l-[190px] border-l-transparent border-t-[100px] border-t-red-500 border-r-[190px] border-r-transparent'}/>
            <p className='absolute bottom-10 left-[85px] text-5xl text-white font-[Tangerine]'>Happy Valentine!</p>
        </div>
        <div className={showCard ? 'p-4 py-20 transition-all opacity-100 duration-500 ease-linear -translate-y-56 z-10 absolute bg-white w-[380px] h-[200px] rounded-xl overflow-y-scroll' : 'opacity-0 absolute bg-white w-[380px] h-[310px] rounded-xl -z-10'}>
            <p className='font-[Tangerie] leading-7 italic text-gray-500'>Happy Valetine my wifey! Hopefully this is romantic,
                I'm thankful I learned how to code, so no other guys can compete this level of romance.
                Thank you for being patient with me while I'm pursuing my goal in the age of 26 with 3 kids. You have sacrficed alot and I see that, and I appreciate you.
                I love you so much, live a long life.
                <br /><br />
                By: Your Hubby! Win!
            </p>
        </div>
       
    </div>
  )
}
