import React from 'react'
import single_room_img from '../../assets/images/single_room.jpg'
import { BsBox } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { MdOutlineBedroomParent } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";



export default function Single_Room_Hero() {
  let bg = {
    background:`url(${single_room_img})`,
    backgroundSize:`cover`,
    backgroundPosition:`center`,
    backgroundRepeat:`no-repeat`,
  }
  return (
    <>
    <section id='single_room' style={bg}>
      <div className="overlay bg-main/35 h-screen">
        <div className=" h-full">
         <div className="h-full w-full flex   items-end">
         <div className="room_info bg-secondary md:bg-transparent py-6 md:py-0 w-full">
          <div className="container_box">
            <div className="flex flex-wrap justify-between items-center">
              <div className="left w-full md:w-3/4">
                <h2 className='font-anglecia font-normal pb-4 text-[32px] md:text-[52px] xl:text-[72px] font-normal text-white'>Superior Single Room</h2>
                <div className="flex items-baseline flex-wrap md:flex-nowrap md:gap-10 space-y-3 pb-10 w-full">
                  <div className="w-1/2 md:w-auto">
                    <p className='text-white font-roboto text-lg md:text-xl font-normal flex gap-3 md:gap-5 flex items-center '><span className='text-2xl md:text-5xl' ><BsBox/></span> 30 Sqm</p>
                  </div>
                  <div className="w-1/2 md:w-auto">
                    <p className='text-white font-roboto text-lg md:text-xl font-normal flex gap-3 md:gap-5 flex items-center '><span className='text-2xl md:text-5xl' ><GoPeople/></span> 3 Adults</p>
                  </div>
                  <div className="w-1/2 md:w-auto">
                    <p className='text-white font-roboto text-lg md:text-xl font-normal flex gap-3 md:gap-5 flex items-center '><span className='text-2xl md:text-5xl' ><MdOutlineBedroomParent/></span> 4 Bedsroom</p>
                  </div>
                  <div className="w-1/2 md:w-auto">
                    <p className='text-white font-roboto text-lg md:text-xl font-normal flex gap-3 md:gap-5 flex items-center '><span className='text-2xl md:text-5xl' ><CiImageOn/></span> Gerdan Views</p>
                  </div>
                </div>
              </div>
              <div className="right flex lg:block justify-between items-center gap-5 w-full md:w-auto">
              <div className=" inline-block md:block">
                <p className='font-anglecia font-normal text-lg text-white'>From</p>
                <div className="price pb-4 font-anglecia font-normal text-lg text-white">
                  <span className='text-6xl '>$96/</span>night
                </div>
              </div>
              <div className="btn inline-block md:block">
                <button  className='font-roboto hover:bg-third duration-300 ease-in-out text-xs md:text-lg font-normal text-white bg-btn py-3 tracking-[1px] uppercase px-2 md:px-4 md:w-52 ml-2 text-center inline-block'>Book This Room</button>
              </div>
              </div>
            </div>
          </div>
          </div>
         </div>
        </div>
      </div>
    </section>
    </>
  )
}
