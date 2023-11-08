import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { FcIcons8Cup } from 'react-icons/fc'

import {FaBars, FaXmark} from 'react-icons/fa6'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMenuSticky, setIsMenuSticky] = useState(false)


    // sticky menu bar when scroll down
    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY > 100){
                setIsMenuSticky(true)
            }else{
                setIsMenuSticky(false)
            }
        }
        window.addEventListener('scroll',handleScroll)

        return ()=>{
            window.addEventListener("scroll",handleScroll)
        }
    })

    //toggle menu
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen)
    }

    //navigations items 
    const navItems = [
        {link:"Home", path: "home"},
        {link:"Service", path: "service"},
        {link:"About", path: "about"},
        {link:"Product", path: "product"},
        {link:"Testimonial", path: "testimonial"},
        {link:"FAQ", path: "faq"},
    ]



  return (
    <header className='w-full bg-white fixed top-0 left-0 right-0'>
    <nav className={`py-4 w-10/12 m-auto ${isMenuSticky ? "sticky top-0 left-0 right-0 duration-300" : ""}`}>
        <div className='flex justify-between items-center text-base gap-8'>
            <a href='' className='text-2xl font-semibold flex items-center space-x-3'>
                <FcIcons8Cup className='text-5xl'/>
            </a>
            {/** nav items for large devices */}
            <ul className='md:flex space-x-12 hidden'>
            {
                navItems.map(({link,path})=> <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-xl font-semibold text-textGrey hover:text-brandPrimary first:font-medium'>{link}</Link>)
            }
            </ul>

            {/** button for large devices */}
            <div className='space-x-12 hidden lg:flex items-center'>
            <a href='/' className='hidden lg:flex items-center text-brandPrimary hover:text-emerald-700 text-xl font-semibold'>Login</a>
            <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-emerald-600 text-xl font-semibold'>Sign up</button>
            </div>
            {/** menu button for large devices */}
            <div className='md:hidden'>
            <button
            onClick={toggleMenu}
            className='focus:outline-none focus:text-emerald-500'>
                {
                    isMenuOpen? (<FaXmark className='h-6 w-6 text-brandPrimary'/>) : (<FaBars className='h-6 w-6 text-brandPrimary'/>)
                }
            </button>
            </div>
        </div>
        {/** nav item for responsive */}
        <div className={`space-y-4 px-4 py-6 mt-16 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 left-0 right-0":"hidden"}`}>
        {
                navItems.map(({link,path})=> <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-white hover:text-gray-900 first:font-medium'>{link}</Link>)
            }
        </div>
    </nav>
    </header>
  )
}

export default Navbar