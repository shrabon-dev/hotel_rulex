import React from 'react'
import title_line from '../../assets/images/title_line.svg'
import welcome from '../../assets/images/welcome.jpg'
import arrow from '../../assets/images/arrow_menu.svg'

export default function Welcome() {
  return (
    <>
    <section id='welcome'>
        <div className="md:flex py-32">
            <div className="w-full md:w-1/2">
            <div className="container_box relative z-[99] md:-right-16 px-0">
                <div className="welcome_info lg:pl-20 relative bg-white after:absolute after:w-full after:content-[''] after:h-full after:border after:border-dark after:top-10 after:-left-8 md:after:-right-8 after:z-[-1]  pt-20 before:absolute before:w-full before:content-[''] before:h-full before:border before:border-secondary before:top-12 before:-left-10 md:before:-right-10 before:z-[-2]">
                <div className="title pb-4 text-left">
                    <h4 className='font-roboto font-normal text-center text-lg uppercase flex items-center justify-start gap-5 text-secondary tracking-[5px]'><picture><img   src={title_line} alt={title_line} /></picture> Welcome </h4>
                </div>
                <h2 className='font-anglecia pb-10 font-normal leading-[1.7] text-dark_title text-4xl block'><span className='block text-6xl'>Luxury Hotel </span>
                 Near The Montmartre, <span className='block'>Paris</span></h2>
                 <p className='text-lg pb-4 font-roboto font-bold text-dark_title leading-[1.7] justify md:w-[450px] '>Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit..</p>
                 <p className='text-lg font-roboto font-normal text-dark_title  leading-[1.7] justify md:w-[450px]'>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus.</p>
                    <a href="#" className='font-roboto py-10 md:pb-0 md:pt-10 text-lg text-third font-medium tracking-[1px] flex items-center gap-10'>
                      Explore More <span className='w-14 inline-block overflow-hidden' ><img className='w-20' src={arrow} alt={arrow} /></span>
                    </a>
                </div>
            </div>
            </div>
            <div className="w-full md:w-1/2">
            <div className="welcome_img">
                <picture>
                    <img src={welcome} alt={welcome} />
                </picture>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}
