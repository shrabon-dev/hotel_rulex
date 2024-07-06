import React from 'react'
import room from '../../assets/images/room/1.jpg'
import room2 from '../../assets/images/room/2.jpg'
import room3 from '../../assets/images/room/3.jpg'
import room4 from '../../assets/images/room/1920x832_bg1.jpg'
import Slider from 'react-slick'


export default function Related_Room() {
    const settings = {
        dots: false,
        infinite: true,
        arrows:false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 760,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <>
    <section id='related_room' className='py-20'>
        <div className="container_box">
            <h3 className='font-anglecia font-bold pb-10 md:pb-14 lg:pb-10 text-3xl md:text-[52px]  lg:text-[72px] text-black'>Related Rooms</h3>
            <div className="">
               <Slider {...settings}>
               <div>
               <div className="room group  md:mr-10 border-third relative border overflow-hidden">
                    <img className='group-hover:scale-[1.3] duration-300' src={room} alt={room} />
                    <div className="room_info py-6 w-5/6 -left-[35%] translate-x-1/2 absolute bottom-0 bg-white ">
                    <h5 className='font-anglecia font-bold text-[22px] text-center text-black'>Deluxe Double Room</h5>
                    <div className="right">
                    <div className="price pb-4 text-center py-4 font-anglecia font-normal text-lg text-black">From 
                         <span className='text-4xl '> $96/</span> night
                    </div>
                    <div className="btn h-0 overflow-hidden group-hover:h-32 opacity-0 group-hover:opacity-100 duration-300 ease-in-out text-center">
                        <button  className='font-roboto text-lg font-normal text-white bg-btn py-3 tracking-[1px] uppercase   w-48 ml-2 text-center inline-block'>Book Now</button>
                        <button  className='font-roboto text-lg font-normal text-white bg-dark mt-4 py-3 tracking-[1px] uppercase  w-48 ml-2 text-center inline-block'>Details</button>
                    </div>
                    </div>
                    </div>
                </div>
               </div>
               <div>
               <div className="room group  md:mr-10 border-third relative border overflow-hidden">
                    <img className='group-hover:scale-[1.3] duration-300' src={room3} alt={room3} />
                    <div className="room_info py-6 w-5/6 -left-[35%] translate-x-1/2 absolute bottom-0 bg-white ">
                    <h5 className='font-anglecia font-bold text-[22px] text-center text-black'>Deluxe Double Room</h5>
                    <div className="right">
                    <div className="price pb-4 text-center py-4 font-anglecia font-normal text-lg text-black">From 
                         <span className='text-4xl '> $96/</span> night
                    </div>
                    <div className="btn h-0 overflow-hidden group-hover:h-32 opacity-0 group-hover:opacity-100 duration-300 ease-in-out text-center">
                        <button  className='font-roboto text-lg font-normal text-white bg-btn py-3 tracking-[1px] uppercase   w-48 ml-2 text-center inline-block'>Book Now</button>
                        <button  className='font-roboto text-lg font-normal text-white bg-dark mt-4 py-3 tracking-[1px] uppercase  w-48 ml-2 text-center inline-block'>Details</button>
                    </div>
                    </div>
                    </div>
                </div>
               </div>
               <div>
               <div className="room group  md:mr-10 border-third relative border overflow-hidden">
                    <img className='group-hover:scale-[1.3] duration-300' src={room} alt={room} />
                    <div className="room_info py-6 w-5/6 -left-[35%] translate-x-1/2 absolute bottom-0 bg-white ">
                    <h5 className='font-anglecia font-bold text-[22px] text-center text-black'>Deluxe Double Room</h5>
                    <div className="right">
                    <div className="price pb-4 text-center py-4 font-anglecia font-normal text-lg text-black">From 
                         <span className='text-4xl '> $96/</span> night
                    </div>
                    <div className="btn h-0 overflow-hidden group-hover:h-32 opacity-0 group-hover:opacity-100 duration-300 ease-in-out text-center">
                        <button  className='font-roboto text-lg font-normal text-white bg-btn py-3 tracking-[1px] uppercase   w-48 ml-2 text-center inline-block'>Book Now</button>
                        <button  className='font-roboto text-lg font-normal text-white bg-dark mt-4 py-3 tracking-[1px] uppercase  w-48 ml-2 text-center inline-block'>Details</button>
                    </div>
                    </div>
                    </div>
                </div>
               </div>
               <div>
               <div className="room group  md:mr-10 border-third relative border overflow-hidden">
                    <img className='group-hover:scale-[1.3] duration-300' src={room2} alt={room2} />
                    <div className="room_info py-6 w-5/6 -left-[35%] translate-x-1/2 absolute bottom-0 bg-white ">
                    <h5 className='font-anglecia font-bold text-[22px] text-center text-black'>Deluxe Double Room</h5>
                    <div className="right">
                    <div className="price pb-4 text-center py-4 font-anglecia font-normal text-lg text-black">From 
                         <span className='text-4xl '> $96/</span> night
                    </div>
                    <div className="btn h-0 overflow-hidden group-hover:h-32 opacity-0 group-hover:opacity-100 duration-300 ease-in-out text-center">
                        <button  className='font-roboto text-lg font-normal text-white bg-btn py-3 tracking-[1px] uppercase   w-48 ml-2 text-center inline-block'>Book Now</button>
                        <button  className='font-roboto text-lg font-normal text-white bg-dark mt-4 py-3 tracking-[1px] uppercase  w-48 ml-2 text-center inline-block'>Details</button>
                    </div>
                    </div>
                    </div>
                </div>
               </div>
               <div>
               <div className="room group  md:mr-10 border-third relative border overflow-hidden">
                    <img className='group-hover:scale-[1.3] duration-300' src={room} alt={room} />
                    <div className="room_info py-6 w-5/6 -left-[35%] translate-x-1/2 absolute bottom-0 bg-white ">
                    <h5 className='font-anglecia font-bold text-[22px] text-center text-black'>Deluxe Double Room</h5>
                    <div className="right">
                    <div className="price pb-4 text-center py-4 font-anglecia font-normal text-lg text-black">From 
                         <span className='text-4xl '> $96/</span> night
                    </div>
                    <div className="btn h-0 overflow-hidden group-hover:h-32 opacity-0 group-hover:opacity-100 duration-300 ease-in-out text-center">
                        <button  className='font-roboto text-lg font-normal text-white bg-btn py-3 tracking-[1px] uppercase   w-48 ml-2 text-center inline-block'>Book Now</button>
                        <button  className='font-roboto text-lg font-normal text-white bg-dark mt-4 py-3 tracking-[1px] uppercase  w-48 ml-2 text-center inline-block'>Details</button>
                    </div>
                    </div>
                    </div>
                </div>
               </div>
            
               </Slider>
            </div>
        </div>
    </section>
    </>
  )
}

