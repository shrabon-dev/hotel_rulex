import React from 'react'
import title_line from '../../images/title_line.svg'
import offerOne from '../../images/offers/880x712_img3.jpg'
import Slider from "react-slick";

export default function Offers() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        centerMode:true,
        centerPadding:'260px',
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <>
    <section id='offers' className='py-32'>

        <div className="title pb-4 text-center">
            <h4 className='font-roboto font-normal text-center text-lg uppercase flex items-center justify-center gap-5 text-[#63462F] tracking-[5px]'><picture><img   src={title_line} alt={title_line} /></picture> Make memories happen </h4>
        </div>
        <h1 className='font-anglecia font-normal text-[72px] text-dark text-center pb-[28px]'>Special Offers</h1>

        <div className="offers_box">
            <Slider {...settings}>
            <div className="offers w-full h-full relative  ">
                <div className="offers_img w-full h-full">
                    <picture>
                         <img className='block h-full w-full' src={offerOne} alt={offerOne} />
                    </picture>
                </div>
                <div className="offers_info absolute  z-[99] left-1/2 -translate-x-1/2 bottom-0">
                    <div className="ofr_card p-10 relative bg-white after:absolute after:w-full after:content-[''] after:h-full after:border after:border-dark after:-top-6 after:-right-8 after:z-[-1]  pt-20 before:absolute before:w-full before:content-[''] before:h-full before:border before:border-secondary before:-top-8 before:-right-10 before:z-[-2] mx-auto w-[615px]">
                        <h4 className='font-anglecia font-normal text-4xl text-dark text-left pb-6'>Stay Longer</h4>
                        <p className='font-roboto font-normal text-10 text-dark text-left pb-6'>Mauris fermentum dictum magna. Sed laoreet aliquam leo.
                        Ut tellus dolor, dapibus eget, elementum vel, cursus
                        eleifend, elit. Aenean auctor wisi et urna.</p>
                        <div className="flex justify-between items-center">
                            <div className="price">
                                <span className='font-anglecia font-normal block text-[16px] text-dark'>From</span>
                                <span className='font-anglecia font-normal block text-[32px] text-dark'>$29/ <span className='text-[16px]'>Stay</span></span>
                            </div>
                            <div className="btn">
                            <a className='font-roboto text-lg font-normal text-white bg-btn py-3 tracking-[1px] uppercase px-4 w-36 ml-2 text-center inline-block' href="#">View Offer</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="offers w-full h-full relative  ">
                <div className="offers_img w-full h-full">
                    <picture>
                         <img className='block h-full w-full' src={offerOne} alt={offerOne} />
                    </picture>
                </div>
                <div className="offers_info absolute  z-[99] left-1/2 -translate-x-1/2 bottom-0">
                    <div className="ofr_card p-10 relative bg-white after:absolute after:w-full after:content-[''] after:h-full after:border after:border-dark after:-top-6 after:-right-8 after:z-[-1]  pt-20 before:absolute before:w-full before:content-[''] before:h-full before:border before:border-secondary before:-top-8 before:-right-10 before:z-[-2] mx-auto w-[615px]">
                        <h4 className='font-anglecia font-normal text-4xl text-dark text-left pb-6'>Stay Longer</h4>
                        <p className='font-roboto font-normal text-10 text-dark text-left pb-6'>Mauris fermentum dictum magna. Sed laoreet aliquam leo.
                        Ut tellus dolor, dapibus eget, elementum vel, cursus
                        eleifend, elit. Aenean auctor wisi et urna.</p>
                        <div className="flex justify-between items-center">
                            <div className="price">
                                <span className='font-anglecia font-normal block text-[16px] text-dark'>From</span>
                                <span className='font-anglecia font-normal block text-[32px] text-dark'>$29/ <span className='text-[16px]'>Stay</span></span>
                            </div>
                            <div className="btn">
                            <a className='font-roboto text-lg font-normal text-white bg-btn py-3 tracking-[1px] uppercase px-4 w-36 ml-2 text-center inline-block' href="#">View Offer</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="offers w-full h-full relative  ">
                <div className="offers_img w-full h-full">
                    <picture>
                         <img className='block h-full w-full' src={offerOne} alt={offerOne} />
                    </picture>
                </div>
                <div className="offers_info absolute  z-[99] left-1/2 -translate-x-1/2 bottom-0">
                    <div className="ofr_card p-10 relative bg-white after:absolute after:w-full after:content-[''] after:h-full after:border after:border-dark after:-top-6 after:-right-8 after:z-[-1]  pt-20 before:absolute before:w-full before:content-[''] before:h-full before:border before:border-secondary before:-top-8 before:-right-10 before:z-[-2] mx-auto w-[615px]">
                        <h4 className='font-anglecia font-normal text-4xl text-dark text-left pb-6'>Stay Longer</h4>
                        <p className='font-roboto font-normal text-10 text-dark text-left pb-6'>Mauris fermentum dictum magna. Sed laoreet aliquam leo.
                        Ut tellus dolor, dapibus eget, elementum vel, cursus
                        eleifend, elit. Aenean auctor wisi et urna.</p>
                        <div className="flex justify-between items-center">
                            <div className="price">
                                <span className='font-anglecia font-normal block text-[16px] text-dark'>From</span>
                                <span className='font-anglecia font-normal block text-[32px] text-dark'>$29/ <span className='text-[16px]'>Stay</span></span>
                            </div>
                            <div className="btn">
                            <a className='font-roboto text-lg font-normal text-white bg-btn py-3 tracking-[1px] uppercase px-4 w-36 ml-2 text-center inline-block' href="#">View Offer</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            </Slider>
        </div>
    </section>
    </>
  )
}
