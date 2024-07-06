import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function Sidebar(props) {
  return (
    <>
     <aside >
        <div className={`sidebar w-72 h-screen  ${props.mode ? 'duration-300 ease-in-out oipacity-100 left-0':'duration-300 ease-in-out opacity-0 -left-96'} bg-dark overflow-auto fixed z-[9999999] top-0 py-16 px-10 `}>
            <div className="search text-center relative">
                <label htmlFor="" className='text-3xl text-white absolute top-0 right-0'><IoIosSearch/></label>
                <input type="text"  className='w-52 bg-transparent text-white border-b text-lg font-roboto font-normal '/>
            </div>
            <div className="menus">
                <ul className='flex flex-col  py-10 text-center space-y-4'>
                    <li><Link className='font-roboto uppercase text-white text-sm font-normal ' to="/">Home</Link></li>
                    <li><Link className='font-roboto uppercase text-white text-sm font-normal ' to={'/single-room'}>Room</Link></li>
                    <li><a className='font-roboto uppercase text-white text-sm font-normal ' href="#">Portfolio</a></li>
                    <li><a className='font-roboto uppercase text-white text-sm font-normal ' href="#">Blog</a></li>
                    <li><a className='font-roboto uppercase text-white text-sm font-normal ' href="#">Shop</a></li>
                    <li><a className='font-roboto uppercase text-white text-sm font-normal ' href="#">Accordions</a></li>
                    <li><a className='font-roboto uppercase text-white text-sm font-normal ' href="#">Countries</a></li>
                    <li><a className='font-roboto uppercase text-white text-sm font-normal ' href="#">Tabs</a></li>
                </ul>
                <ul className='flex py-5 text-center space-x-3 justify-center'>
                     <a className='w-10 h-10 inline-block bg-third flex justify-center items-center' href="#"><FaFacebookF className='inline-block text-lg text-white'/></a>
                     <a className='w-10 h-10 inline-block bg-third flex justify-center items-center' href="#"><FaInstagram className='inline-block text-lg text-white'/></a>
                     <a className='w-10 h-10 inline-block bg-third flex justify-center items-center' href="#"><FaLinkedinIn className='inline-block text-lg text-white'/></a>
                     <a className='w-10 h-10 inline-block bg-third flex justify-center items-center' href="#"><BsTwitterX className='inline-block text-lg text-white'/></a>
                </ul>
                <p className='font-roboto text-sm font-normal text-white pb-4 text-center'>7 Rue Caulaincourt, 75018 Paris, France</p>
                <p className='font-roboto text-sm font-normal text-white pb-4 text-center'>+1 800 603 6035 (Viber, WhatsApp)</p>
                <p className='font-roboto text-sm font-normal text-third pb-4 text-center'>mail@company.com</p>
            </div>
        </div>
     </aside>
    </>
  )
}
