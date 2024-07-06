import React from 'react'
import promot from '../../assets/images/promotion/576x528_img1.jpg'
import promot2 from '../../assets/images/promotion/576x528_img5.jpg'
export default function Promotion() {
 
  return (
    <>
        <div className="promotion w-full md:w-[48%] lg:w-full relative h-[50dvh] mt-10 ">
       
            <img className='w-full h-full z-[5] absolute top-0 left-0' src={promot} alt={promot} />
            <img className='w-full h-full z-[4] absolute top-0 left-0' src={promot2} alt={promot2} />
            <div className="ovarlay absolute top-0 z-[7]  left-0 w-full h-full bg-dark/50 group ">
                <div className="pmtn_info overflow-hidden absolute  top-0   h-[90%] px-5 m-5 flex flex-col items-center justify-center after:absolute after:w-full after:content-[''] after:h-full after:border-2 after:border-white after:top-0 after:right-0 after:z-[-1]   before:absolute before:w-[90%] before:content-[''] before:h-[93%] before:border before:border-white before:top-3   before:right-3 before:z-[-2]">
                    <h6 className='font-anglecia font-bold text-4xl mt-6 text-white '>Offer Packaging</h6>
                    <a href='#' className='font-roboto font-roboto hover:bg-third  duration-300 ease-in-out text-sm mt-5 font-normal text-white h-0 group-hover:h-12 group-hover:opacity-100 opacity-0 duration-300 ease-in-out bg-btn py-4 tracking-[1px] uppercase px-4  text-center w-full uppercase' >Explore More</a>
                </div>
           </div>
        </div>
    </>
  )
}
