import React, { useState } from 'react'
import bg_img from '../../images/1920x1064_bg.jpg'
import title_line from '../../images/title_line.svg'
import { IoMdPlay } from "react-icons/io";
import { TfiAngleUp } from "react-icons/tfi";
import { TfiAngleDown } from "react-icons/tfi";


export default function Hero() {
  let [adult,setAdult] = useState(0)
  let [children,setChildren] = useState(0)
  let bg = {
  background:`url(${bg_img})`,
  backgroundRepeat:'no-repeat',
  backgroundSize:'cover',
  backgroundPosition:'center',
  }

  return (
    <>
     <section id='home' style={bg}>
        <div className="overlay bg-dark/45 pt-72">
          <div className="container_box">
            <div className="title text-center">
              <h4 className='font-roboto font-normal text-center text-lg uppercase flex items-center justify-center gap-5 text-white tracking-[5px]'><picture><img   src={title_line} alt={title_line} /></picture> Time to reconnect </h4>
            </div>
            <h1 className='font-anglecia font-normal text-[72px] text-white text-center pb-[28px]'>A New Vision Of Comfort</h1>
            <div className="play_btn text-center">
              <span className='w-20 h-20 mx-auto inline-block border flex justify-center items-center rounded-full border-white'>
                 <IoMdPlay className='inline-block text-white text-4xl' />
              </span>
              <p className='font-roboto font-normal text-xs tracking-[2px] uppercase text-white pt-2'>WATCH THE FILM</p>
            </div>
          </div>
          <div className="booking_form bg-black/60 py-20 mt-52">
            <div className="container_box">
            <div className="flex  flex-wrap">
              <div className="w-full sm:w-1/2 p-5 xxl:w-1/4">
                <p   className='font-roboto text-sm tracking-[1px] font-normal text-gray-300 uppercase'>arrival Date</p>
                <label htmlFor="arrival_date" className='font-roboto text-lg font-normal text-white uppercase relative'>
                  <div className='flex items-center gap-5  font-anglecia ont-normal border-b border-white w-full'> <span className='block text-6xl'>25</span>
                    <span className='text-base'>
                       Julay 2024,
                       <span className='block font-roboto font-normal text-base'>Friday</span>
                    </span>
                  </div>
                  <button className=' text-3xl absolute right-0 top-0' ><TfiAngleUp/></button>
                </label>
                <input type="date" name="" id="arrival_date" placeholder='' className='bg-transparent w-full border-b border-white hidden' />
              </div>
              <div className="w-full sm:w-1/2 p-5 xxl:w-1/4">
                <p   className='font-roboto text-sm tracking-[1px] font-normal text-gray-300 uppercase'>Departure Date</p>
                <label htmlFor="arrival_date" className='font-roboto text-lg relative font-normal text-white uppercase'>
                  <div className='flex items-center gap-5  font-anglecia ont-normal border-b border-white w-full'> <span className='block text-6xl'>25</span>
                    <span className='text-base'>
                       Julay 2024,
                       <span className='block font-roboto font-normal text-base'>Friday</span>
                    </span>
                  </div>
                  <button className=' text-3xl absolute right-0 top-0' ><TfiAngleUp/></button>
                </label>
                <input type="date" name="" id="arrival_date" placeholder='' className='bg-transparent w-full border-b border-white hidden' />
              </div>
              <div className="w-full sm:w-1/2 p-5 xxl:w-1/4">
                <div className="flex gap-10">
                  <div className="w-1/2">
                    <p   className='font-roboto text-sm tracking-[1px] font-normal text-gray-300 uppercase'>Adults</p>
                    <label htmlFor="arrival_date" className='font-roboto text-lg font-normal text-white uppercase'>
                      <div className='flex items-center justify-between gap-5  font-anglecia ont-normal border-b border-white w-full'>
                         <span className='block text-6xl'>{adult}</span>
                         <span className='block text-3xl flex flex-col'>
                          <button onClick={()=>setAdult(++adult)}><TfiAngleUp/></button>
                          <button onClick={()=>setAdult(--adult)}><TfiAngleDown/></button>
                         </span>
                        
                      </div>
                    </label>
                    <input type="date" name="" id="arrival_date" placeholder='' className='bg-transparent w-full border-b border-white hidden' />
                  </div>
                  <div className="w-1/2">
                    <p   className='font-roboto text-sm tracking-[1px] font-normal text-gray-300 uppercase'>Childrens</p>
                    <label htmlFor="arrival_date" className='font-roboto text-lg font-normal text-white uppercase'>
                      <div className='flex items-center justify-between gap-5  font-anglecia ont-normal border-b border-white w-full'>
                         <span className='block text-6xl'>{children}</span>
                         <span className='block text-3xl flex flex-col'>
                          <button onClick={()=>setChildren(++children)}><TfiAngleUp/></button>
                          <button onClick={()=>setChildren(--children)}><TfiAngleDown/></button>
                         </span>
                        
                      </div>
                    </label>
                    <input type="date" name="" id="arrival_date" placeholder='' className='bg-transparent w-full border-b border-white hidden' />
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 p-5 xxl:w-1/4">
              <button className='font-roboto  text-lg font-normal text-white bg-btn py-6 tracking-[1px] uppercase px-4 w-36 ml-2 text-center w-full' href="#">Check Availability</button>

              </div>
       
            </div>
            </div>
          </div>
        </div>
     </section>
    </>
  )
}
