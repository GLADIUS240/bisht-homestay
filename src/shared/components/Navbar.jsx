import React from 'react'

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-[100vw] h-16 flex items-center p-1
    justify-center text-brand bg-white text-center gap-[12vw] top-0 z-10">
        <img 
            src="./favicon.svg" 
            alt="logo" 
            className=" w-20 h-20 "
        />
        <div className="flex font-roboto
        items-center justify-center font-normal text-sm
        gap-8 text-tracking-normal text-leading-none">
            <a href="/">HOME</a>
            <a href="/experiences">EXPERIENCES</a>
            <a href="/amenities">AMENITIES</a>
            <a href="/rooms">ROOMS</a>
            <a href="/about">ABOUT</a>
            <a href="/contact">CONTACT US</a>
            <div>
            <button 
            className="py-2 px-4 w-fit bg-accent hover:bg-brand text-white font-light ">
            Login/Register
            </button>
            <button 
            className="p-2 w-fit bg-secondary hover:bg-primary text-white font-light ">
            Make a Reservation
            </button>
        </div>
        </div>
        
    </div>
  )
}

export default Navbar