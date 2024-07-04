import React, { useEffect, useState } from 'react'
import logo from '../../images/logo.png'
import { MdOutlineCall } from "react-icons/md";
import Sidebar from '../sidebar';


export default function Navs() {
    let [sidebar,setSidebar] = useState(false)
    const [bgColor, setBgColor] = useState('bg-transparent');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setBgColor('bg-main');
            } else {
                setBgColor('bg-transparent');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
    <>
      <nav className={`${bgColor} fixed top-0 w-full text-white py-12 z-[999999]`}>
        <div className="container_box">
            <div className="flex justify-between items-center ">
                <div className="left_menus w-1/3">
                    {/* <ul className='flex gap-5'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home</a></li>
                    </ul> */}
                    <div className={`flex items-center gap-5 ${sidebar && 'translate-x-72 duration-300 ease-in-out'} duration-300`} >
                        <div onClick={()=>setSidebar(!sidebar)} className="menu_icon flex flex-col cursor-pointer group">
                            <span className={`w-6 h-[1px] bg-white mb-1 block group-hover:-rotate-[50deg] group-hover:translate-y-[2px] duration-300 ease-in-out ${sidebar && '-rotate-[50deg] translate-y-[2px] duration-300 ease-in-out'}`}></span>
                            {!sidebar &&  <span className='w-4 group-hover:opacity-0 duration-300 ease-in-out h-[1px] bg-white mb-1 block'></span> }
                            <span className={`w-6 h-[1px] bg-white block group-hover:rotate-45 group-hover:translate-y-[-3px] duration-300 ease-in-out ${sidebar && 'rotate-45 translate-y-[-3px] duration-300 ease-in-out'}`}></span>
                        </div>
                        <div className="lang ml-5">
                            <select name="" id="" className='bg-transparent w-16 py-1 select_box font-roboto text-sm font-normal'>
                                <option value="en" selected >EN</option>
                                <option value="en" >FR</option>
                                <option value="en" >DE</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="logo w-1/3 text-center">
                    <picture>
                        <img className='mx-auto' src={logo} alt={logo} />
                    </picture>
                </div>
                <div className="right_menus w-1/3 text-right">
                    {/* <ul className='flex gap-5'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home</a></li>
                    </ul> */}

                    {/* Phone and Booking Btn Start  */}
                    <div className="flex justify-end">
                        <div className="phone flex items-center gap-2 font-roboto font-sm font-bold">
                            <MdOutlineCall className='text-lg'/> <span>+880 17896532</span>
                        </div>
                        <div className="booking_btn ml-10">
                             <a href="#" className='font-roboto font-normal text-sm bg-btn py-4 px-8 uppercase'>Book Now</a>
                        </div>
                    </div>
                   {/* Phone and Booking Btn End  */}

                </div>
            </div>
        </div>
      </nav>
     <Sidebar mode={sidebar} /> 
    </>
  )
}
