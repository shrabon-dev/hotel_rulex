import React from 'react'
import title_line from '../../images/title_line.svg'
import flowOne from '../../images/follow/480x480_img1.jpg'
import flowTwo from '../../images/follow/480x480_img2.jpg'
import flowThree from '../../images/follow/480x480_img3.jpg'
import flowFour from '../../images/follow/480x480_img4.jpg'
import flowFive from '../../images/follow/480x480_img5.jpg'
import { FaInstagram } from "react-icons/fa";

export default function FollowInsta() {
  return (
    <>
    <section id='followInsta'>
        <div className="container_box py-20">
        <div className="title pb-4 text-center">
            <h4 className='font-roboto font-normal text-center text-lg uppercase flex items-center justify-center gap-5 text-secondary tracking-[5px]'><picture><img   src={title_line} alt={title_line} /></picture> #Hotelprive</h4>
        </div>
        <h1 className='font-anglecia font-normal text-[72px] text-dark_title text-center pb-[28px]'>Follow Us on Instagram</h1>
        <div className="follow_card">
            <div className="flex gap-5">
                <div className="w-1/5">
                <div className="card relative group">
                    <div className="overlay opacity-0 group-hover:opacity-100 duration-300 ease-in-out w-full h-full bg-black/25 absolute top-0 left-0 flex justify-center items-center">
                        <FaInstagram className='text-6xl text-gray-300 ' />
                    </div>
                    <picture>
                        <img src={flowOne} alt={flowOne} />
                    </picture>
                </div>
                </div>
                <div className="w-1/5">
                <div className="card relative group">
                    <div className="overlay opacity-0 group-hover:opacity-100 duration-300 ease-in-out w-full h-full bg-black/25 absolute top-0 left-0 flex justify-center items-center">
                        <FaInstagram className='text-6xl text-gray-300 ' />
                    </div>
                    <picture>
                        <img src={flowTwo} alt={flowTwo} />
                    </picture>
                </div>
                </div>
                <div className="w-1/5">
                <div className="card relative group">
                    <div className="overlay opacity-0 group-hover:opacity-100 duration-300 ease-in-out w-full h-full bg-black/25 absolute top-0 left-0 flex justify-center items-center">
                        <FaInstagram className='text-6xl text-gray-300 ' />
                    </div>
                    <picture>
                        <img src={flowThree} alt={flowThree} />
                    </picture>
                </div>
                </div>
                <div className="w-1/5">
                <div className="card relative group">
                    <div className="overlay opacity-0 group-hover:opacity-100 duration-300 ease-in-out w-full h-full bg-black/25 absolute top-0 left-0 flex justify-center items-center">
                        <FaInstagram className='text-6xl text-gray-300 ' />
                    </div>
                    <picture>
                        <img src={flowFour} alt={flowFour} />
                    </picture>
                </div>
                </div>
                <div className="w-1/5 ">
                <div className="card relative group">
                    <div className="overlay opacity-0 group-hover:opacity-100 duration-300 ease-in-out w-full h-full bg-black/25 absolute top-0 left-0 flex justify-center items-center">
                    <FaInstagram className='text-6xl text-gray-300 ' />
                    </div>
                    <picture>
                        <img src={flowFive} alt={flowFive} />
                    </picture>
                </div>
                </div>
            </div>
        </div>
        </div>
    </section>
    </>
  )
}
