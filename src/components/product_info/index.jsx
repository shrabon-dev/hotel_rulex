import React from 'react'
import { PiBowlSteam } from "react-icons/pi";
import { LiaBedSolid } from "react-icons/lia";
import { VscRemoteExplorer } from "react-icons/vsc";
import { CiWifiOn } from "react-icons/ci";
import { GiLoincloth } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";
import { GiSlippers } from "react-icons/gi";
import { BsSunrise } from "react-icons/bs";
import { TfiAngleLeft,TfiAngleRight,TfiAngleDown } from "react-icons/tfi";

import { BsSafe2 } from "react-icons/bs";
import { FaShower   } from "react-icons/fa";
import { LiaShopware } from "react-icons/lia";
import plan from '../../assets/images/plan.png'
import galOne from '../../assets/images/gallery/1.jpg'
import galTwo from '../../assets/images/gallery/2.jpg'
import galThree from '../../assets/images/gallery/3.jpg'
import galFour from '../../assets/images/gallery/4.jpg'
import person from '../../assets/images/reviews/1.jpg'
import person2 from '../../assets/images/reviews/2.jpg'
import Slider from 'react-slick';
import { RiStarFill } from "react-icons/ri";
import Check_Availibity from '../check_availibity';
import Promotion from '../promotion';


export default function Product_Info() {
    const settings = {
        dots: false,
        infinite: true,
        arrows:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
       
      };
  return (
    <>
     <div className='pdct_info_navs bg-main mb-10 sticky top-[120px] md:top-[150px] z-[999999]'>
       <div className="container_box">
       <ul className='pdct_navs  overflow-x-auto whitespace-nowrap'>
            <li className='inline-block '><a className='font-anglecia  text-center w-full font-medium text-lg lg:text-2xl text-white py-2 md:py-4 px-6 md:px-12 hover:bg-dark duration-300 ease-in-out inline-block bg-dark' href="#description">Description</a></li>
            <li className='inline-block '><a className='font-anglecia  text-center w-full font-medium text-lg lg:text-2xl text-white py-2 md:py-4 px-6 md:px-12 hover:bg-dark duration-300 ease-in-out inline-block bg-transparent' href="#room_facilities">Room Facilities</a></li>
            <li className='inline-block '><a className='font-anglecia  text-center w-full font-medium text-lg lg:text-2xl text-white py-2 md:py-4 px-6 md:px-12 hover:bg-dark duration-300 ease-in-out inline-block bg-transparent' href="#floor_plan">Floor Plan</a></li>
            <li className='inline-block '><a className='font-anglecia  text-center w-full font-medium text-lg lg:text-2xl text-white py-2 md:py-4 px-6 md:px-12 hover:bg-dark duration-300 ease-in-out inline-block bg-transparent' href="#photo_gallery">Photo Gallery</a></li>
            <li className='inline-block '><a className='font-anglecia  text-center w-full font-medium text-lg lg:text-2xl text-white py-2 md:py-4 px-6 md:px-12 hover:bg-dark duration-300 ease-in-out inline-block bg-transparent' href="#rates">Rates</a></li>
            <li className='inline-block '><a className='font-anglecia  text-center w-full font-medium text-lg lg:text-2xl text-white py-2 md:py-4 px-6 md:px-12 hover:bg-dark duration-300 ease-in-out inline-block bg-transparent' href="">Availability</a></li>
            <li className='inline-block '><a className='font-anglecia  text-center w-full font-medium text-lg lg:text-2xl text-white py-2 md:py-4 px-6 md:px-12 hover:bg-dark duration-300 ease-in-out inline-block bg-transparent' href="#reservation_form">Reservation Form</a></li>
            <li className='inline-block '><a className='font-anglecia  text-center w-full font-medium text-lg lg:text-2xl text-white py-2 md:py-4 px-6 md:px-12 hover:bg-dark duration-300 ease-in-out inline-block bg-transparent' href="#reviews">Reviews</a></li>
        </ul>
       </div>
     </div>
      {/* Product Info Start */}
      <div className="container_box">
        <div className="flex flex-wrap">
                <div className="w-full lg:w-4/5">
                <section id='description' className='pb-10'> 
                    <h3 className='font-anglecia font-semibold text-2xl text-dark pb-6'>Description</h3>
                    <p className='font-roboto text-lg font-normal text-black'>Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus.Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi. Aenean nec eros.</p>
                </section>
                <section id='room_facilities' className='pb-10'> 
                    <h3 className='font-anglecia font-semibold text-2xl text-dark pb-6'>Room Facilities</h3>
                     <ul className='text-lg flex flex-wrap font-roboto space-y-4 font-normal text-black'>
                        <li className='w-full lg:w-1/3 flex gap-3 items-center'><span className='text-third text-3xl'><PiBowlSteam/></span>Kettle, tea & coffee</li>
                        <li className='w-full lg:w-1/3 flex gap-3 items-center'><span className='text-third text-3xl'><LiaBedSolid/></span>Comfortable beds</li>
                        <li className='w-full lg:w-1/3 flex gap-3 items-center'><span className='text-third text-3xl'><VscRemoteExplorer/></span>Flat screen TV</li>
                        <li className='w-full lg:w-1/3 flex gap-3 items-center'><span className='text-third text-3xl'><CiWifiOn/></span>Free Wi-Fi</li>
                        <li className='w-full lg:w-1/3 flex gap-3 items-center'><span className='text-third text-3xl'><GiLoincloth/></span>Wardrobe</li>
                        <li className='w-full lg:w-1/3 flex gap-3 items-center'><span className='text-third text-3xl'><TbAirConditioning/></span>Air conditioner</li>
                        <li className='w-full lg:w-1/3 flex gap-3 items-center'><span className='text-third text-3xl'><GiSlippers/></span>Bathrobe & slippers</li>
                        <li className='w-full lg:w-1/3 flex gap-3 items-center'><span className='text-third text-3xl'><BsSunrise/></span>Balcony or terrace with garden view</li>
                        <li className='w-full lg:w-1/3 flex gap-3 items-center'><span className='text-third text-3xl'><BsSafe2/></span>Safe</li>
                        <li className='w-full lg:w-1/3 flex gap-3 items-center'><span className='text-third text-3xl'><FaShower/></span>Shower-bathtub combination</li>
                        <li className='w-full lg:w-1/3 flex gap-3 items-center'><span className='text-third text-3xl'><LiaShopware/></span>Shampoo and soap</li>
                     </ul>
                </section>
                <section id='floor_plan' className='pb-10'> 
                    <h3 className='font-anglecia font-semibold text-2xl text-dark pb-6'>Floor Plan</h3>
                    <picture>
                        <img src={plan} alt={plan} />
                    </picture>
                </section>
                <section id='photo_gallery' className='pb-10'> 
                    <h3 className='font-anglecia font-semibold text-2xl text-dark pb-6'>Photo Gallery</h3>
                    <div className="gallery_slider">
                        <Slider {...settings}>
                        <picture>
                            <img className='w-full block' src={galOne} alt={galOne} />
                        </picture>
                        <picture>
                            <img className='w-full block' src={galTwo} alt={galTwo} />
                        </picture>
                        <picture>
                            <img className='w-full block' src={galThree} alt={galThree} />
                        </picture>
                        <picture>
                            <img className='w-full block' src={galFour} alt={galFour} />
                        </picture>
                        <picture>
                            <img className='w-full block' src={galTwo} alt={plan} />
                        </picture>
                        </Slider>
                    </div>
                    <h3 className='font-anglecia font-semibold text-2xl text-dark py-6'>Terms and Conditions</h3>
                    <p className='font-roboto text-lg font-normal text-black'>Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus.Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi. Aenean nec eros.</p>


                </section>
                <section id='rates' className='pb-10 '> 
                    <h3 className='font-anglecia font-semibold text-2xl text-dark pb-6'>Rates</h3>
                    {/* Rates Table Start */}
                    <div className="overflow-x-auto">
                    <table className='rates_table '>
                        <tr className='tr'>
                            <th className='th'>Price pre room <span className='block text-lg'>in USD</span></th>
                            <th className='th'>Season 1 <span className='block text-base'>06.01-31.03, <span className='block'>01.11-23.12</span></span></th> 
                            <th className='th'>Season 1 <span className='block text-base'>06.01-31.03, <span className='block'>01.11-23.12</span></span></th> 
                            <th className='th'>Season 1 <span className='block text-base'>06.01-31.03, <span className='block'>01.11-23.12</span></span></th> 
                            <th className='th'>Season 1 <span className='block text-base'>06.01-31.03, <span className='block'>01.11-23.12</span></span></th> 
                            <th className='th'>Season 1 <span className='block text-base'>06.01-31.03, <span className='block'>01.11-23.12</span></span></th> 
                        </tr>
                        <tr  className='tr'>
                            <td className='td'><span className='block'>Sunday -</span> Thursday</td>
                            <td className='td'> $ 99</td>
                            <td className='td'> $ 99</td>
                            <td className='td'> $ 99</td>
                            <td className='td'> $ 99</td>
                            <td className='td'> $ 99</td>
                        </tr>
                        <tr  className='tr'>
                            <td className='td'><span className='block'>Sunday -</span> Thursday</td>
                            <td className='td'> $ 99</td>
                            <td className='td'> $ 99</td>
                            <td className='td'> $ 99</td>
                            <td className='td'> $ 99</td>
                            <td className='td'> $ 99</td>
                        </tr>
                    </table>
                    </div>
                    <p className='font-roboto text-base font-normal text-gray-500  pt-4'>All prices are in USD per night and exclusive of GST. 15% Goods and Services tax is applvicable above the standard rates.</p>
                    {/* Rates Table End */}
                </section>
                <section id='availability' className='pb-10 hidden md:block'> 
                    <h3 className='font-anglecia font-semibold text-2xl text-dark pb-6'>Availability</h3>
                    {/* Availability Table Start */}
                    <div className="md:px-0 px-6"> 
                    <div className="top w-full">
                        <thead className="bg-[#856a54] flex justify-between items-center py-5 px-5">
                        <TfiAngleLeft className="text-white" />
                        <th className="text-red-300">
                            <h2 className="text-white text-lg font-anglecia uppercase">Today</h2>
                        </th>
                        <TfiAngleRight className="text-white" />
                        </thead>
                    </div>
                    <div className="md:flex gap-x-6  w-full box-border">
                        <div className="md:mb-0 mb-6 w-full md:w-[49%]">
                        {/* Frist calendar  */}
                        <div className="header bg-[#856a54] mt-3 py-4">
                            <thead className="flex justify-between px-7 text-white">
                            <div className="flex gap-x-4 items-center">
                                <h4 className="font-anglecia font-normal text-lg text-white">September</h4>
                            <TfiAngleDown/>
                            </div>
                            <div className="flex gap-x-4 items-center">
                                <h4 className="font-anglecia font-normal text-lg text-[#fff]">2024</h4>
                                <TfiAngleDown/>
                            </div>
                            </thead>
                        </div>
                        {/* Second calendar  */}
                        <div className="header bg-[#a38c7a] py-4">
                            <thead className="flex justify-between px-7 text-white">
                            <th>SUN</th>
                            <th>MOU</th>
                            <th>YUE</th>
                            <th>WED</th>
                            <th>THU</th>
                            <th>FRI</th>
                            <th>SAT</th>
                            </thead>
                        </div>
                        <div className="tablebody bg-white flex">
                            <table className="border-r-2 ">
                            <li className="px-8 list-none py-6">30</li>
                            <li className="px-8 list-none py-6">6</li>
                            <li className="px-8 list-none py-6">13</li>
                            <li className="px-8 list-none py-6 bg-[#7d9e36] text-white">
                                20
                            </li>
                            <li className="px-8 list-none py-6 bg-[#7d9e36] text-white">
                                27
                            </li>
                            </table>
                            <table className="border-r-2 ">
                            <li className="md:px-[31px] px-4 list-none py-6">30</li>
                            <li className="md:px-[31px] px-4 list-none py-6">6</li>
                            <li className="md:px-[31px] px-4 list-none py-6">13</li>
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                20
                            </li>
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                27
                            </li>
                            </table>
                            <table className="border-r-2 ">
                            <li className="md:px-[31px] px-4 list-none py-6">30</li>
                            <li className="md:px-[31px] px-4 list-none py-6">6</li>
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                13
                            </li>
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                20
                            </li>
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                27
                            </li>
                            </table>
                            <table className="border-r-2 ">
                            <li className="md:px-[31px] px-4 list-none py-6">30</li>
                            <li className="md:px-[31px] px-4 list-none py-6">6</li>
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                13
                            </li>
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                20
                            </li>
                            <li className="md:px-[31px] list-none py-6 bg-[#7d9e36] text-white">
                                27
                            </li>
                            </table>
                            <table className="border-r-2 ">
                            <li className="md:px-[31px] px-4 list-none py-6">30</li>
                            <li className="md:px-[31px] px-4 list-none py-6">6</li>
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                13
                            </li>
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                20
                            </li>
                            <li className="md:px-[31px] px-4 list-none py-6">27</li>
                            </table>
                            <table className="border-r-2 ">
                            <li className="md:px-[31px] px-4 list-none py-6">30</li>
                            <li className="md:px-[31px] px-4 list-none py-6">6</li>
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                13
                            </li>
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                20
                            </li>
                            <li className="md:px-[31px] px-4 list-none py-6">27</li>
                            </table>{" "}
                            <table className=" ">
                            <li className="md:px-[31px] px-4 list-none py-6">30</li>
                            <li className="md:px-[31px] px-4 list-none py-6">6</li>
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                13
                            </li>
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                20
                            </li>
                            <li className="md:px-[31px] px-4 list-none py-6">27</li>
                            </table>
                        </div>
                        </div>
                        <div className="md:mb-0 mb-6 w-full md:w-[49%]">
                        <div className="header bg-[#856a54] mt-3 py-4">
                            <thead className="flex justify-center px-7 text-white">
                            <h4 className="font-anglecia font-normal text-lg text-white">Octobar 2021</h4>
                            </thead>
                        </div>
                        <div className="header bg-[#a38c7a] py-4">
                            <thead className="flex justify-between px-7 text-white">
                            <th>SUN</th>
                            <th>MOU</th>
                            <th>YUE</th>
                            <th>WED</th>
                            <th>THU</th>
                            <th>FRI</th>
                            <th>SAT</th>
                            </thead>
                        </div>
                        <div className="tablebody bg-white flex ">
                            <table className="border-r-2 ">
                            <li className="md:px-[31px] px-4 list-none py-6 ">30</li>
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                6
                            </li>
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                13
                            </li>
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                20
                            </li>
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                27
                            </li>
                            </table>
                            <table className="border-r-2 ">
                            <li className="md:px-[31px] px-4 list-none py-6 ">30</li>
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                6
                            </li>
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                13
                            </li>
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                20
                            </li>
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                27
                            </li>
                            </table>
                            <table className="border-r-2 ">
                            <li className="md:px-[31px] px-4 list-none py-6">30</li>
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                6
                            </li>
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                13
                            </li>
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                20
                            </li>
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                27
                            </li>
                            </table>
                            <table className="border-r-2 ">
                            <li className="md:px-[31px] px-4 list-none py-6 ">30</li>
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                6
                            </li>
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                13
                            </li>
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                20
                            </li>
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                27
                            </li>
                            </table>
                            <table className="border-r-2 ">
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                30
                            </li>
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                6
                            </li>
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                13
                            </li>
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                20
                            </li>
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                27
                            </li>
                            </table>
                            <table className="border-r-2 ">
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                30
                            </li>
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                6
                            </li>
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                13
                            </li>
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                20
                            </li>
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                27
                            </li>
                            </table>{" "}
                            <table className=" ">
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                30
                            </li>
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                6
                            </li>
                            <li className="md:px-[31px] px-8 list-none py-6 bg-[#7d9e36] text-white">
                                13
                            </li>
                            <li className="md:px-[31px] px-4 list-none py-6 bg-[#7d9e36] text-white">
                                20
                            </li>
                            <li className="md:px-[31px] px-8 list-none py-6 bg-[#7d9e36] text-white">
                                27
                            </li>
                            </table>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* Availability Table End */}
                </section>
                <section id='reservation_form' className='pb-10'> 
                    <h3 className='font-anglecia font-semibold text-2xl text-dark pb-6'>Reservation Form</h3>
                    {/* Rates Table Start */}
                     <p className='font-roboto text-base text-gray-500 font-normal'>Required fields are followed by *</p>

                     <form action="">
                       <div className="flex flex-wrap md:gap-5 items-end">
                            <div className="inp w-full md:w-[48%]">
                                <label htmlFor="" className='block font-roboto text-xs text-gray-500 pt-3 tracking-[1px]'>CHECK-IN DATE *</label>
                                <input type="date" name="" id="" className='block w-full border-2 p-4 mt-2 border-dark '/>
                            </div>
                            <div className="inp w-full md:w-[48%]">
                                <label htmlFor="" className='block font-roboto text-xs text-gray-500 pt-3 tracking-[1px]'>CHECK-OUT DATE *</label>
                                <input type="date" name="" id="" className='block w-full border-2 p-4 mt-2 border-dark '/>
                            </div>
                            <div className="w-full md:w-[48%] flex flex-wrap gap-5 md:gap-3 xl:gap-4 items-baseline">
                            <div className="inp w-full md:w-[48%]">
                                <label htmlFor="" className='block font-roboto text-xs text-gray-500 pt-3 tracking-[1px]'>ADULTS </label>
                                <select name="" id="" className='block w-full border-2 p-4 mt-2 border-dark '>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select>
                            </div>
                            <div className="inp w-full md:w-[48%]">
                                <label htmlFor="" className='block font-roboto text-xs text-gray-500  tracking-[1px]'>CHILDREN</label>
                                <select name="" id="" className='block w-full border-2 p-4 mt-2 border-dark '>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select>
                            </div>
                            </div>
                            <div className="inp w-full mt-6 md:w-[48%]">
                            <button className='font-roboto font-roboto hover:bg-third duration-300 ease-in-out text-base font-normal text-white bg-btn py-4 tracking-[1px] uppercase px-4  text-center w-full' href="#">Check Availability</button>
                            </div>
                          
                       </div>
                     </form>
                    {/* Rates Table End */}
                </section>
                <section id='reviews' className='pb-10'> 
                    <h3 className='font-anglecia font-medium  text-2xl text-dark pb-6'>Reviews</h3>
                    <div className="flex flex-wrap gap-5 md:gap-0 pb-6">
                        <div className="w-full md:w-1/4">
                        <div className="grade bg-[#F5F0EB] py-10 flex justify-center items-center">
                            <div className="grade">
                            <div className="point font-anglecia font-normal text-[62px] md:text-[56px] lg:text-[96px] leading-[.9] text-third ">
                                5.00
                            </div>
                            <p className="font-anglecia font-normal text-center text-[36px] text-black ">Best</p>
                            </div>
                        </div>
                        </div>
                        <div className="w-full  md:w-3/4">
                         <div className="graph pl-5">
                            <div className="line pb-4">
                                <p className='font-roboto text-base text-black font-normal pb-3 flex justify-between items-center'><span>Accommodation</span> <span>4.8</span></p>
                                <div className="bg_line bg-[#F5F0EB] w-full h-1 relative after:w-5/6 after:h-1 after:absolute after:top-0 after:left-0 after:z-[999] z-[1] after:content-[''] after:bg-third"></div>
                            </div>
                            <div className="line pb-4">
                                <p className='font-roboto text-base text-black font-normal pb-3 flex justify-between items-center'><span>Location</span> <span>3.6</span></p>
                                <div className="bg_line bg-[#F5F0EB] w-full h-1 relative after:w-3/6 after:h-1 after:absolute after:top-0 after:left-0 after:z-[999] z-[1] after:content-[''] after:bg-third"></div>
                            </div>
                            <div className="line pb-4">
                                <p className='font-roboto text-base text-black font-normal pb-3 flex justify-between items-center'><span>Meals</span> <span>4.2</span></p>
                                <div className="bg_line bg-[#F5F0EB] w-full h-1 relative after:w-4/6 after:h-1 after:absolute after:top-0 after:left-0 after:z-[999] z-[1] after:content-[''] after:bg-third"></div>
                            </div>
                            <div className="line pb-4">
                                <p className='font-roboto text-base text-black font-normal pb-3 flex justify-between items-center'><span>Facilities</span> <span>4.9</span></p>
                                <div className="bg_line bg-[#F5F0EB] w-full h-1 relative after:w-[95%] after:h-1 after:absolute after:top-0 after:left-0 after:z-[999] z-[1] after:content-[''] after:bg-third"></div>
                            </div>
                         </div>
                        </div>
                    </div>
                    <h3 className='font-anglecia font-medium  text-2xl text-dark pb-6'>2 Reviews</h3>
                    <div className="review flex flex-wrap md:flex-nowrap gap-5 justify-between items-center pb-10">
                        <div className="img w-62 md:w-[1000px] block lg:w-96 2xl:w-[300px] mx-auto lg:mx-0 h-52 lg:h-32 border-4 rounded-full border-third overflow-hidden">
                            <picture>
                                <img className='w-full h-full block' src={person} alt={person} />
                            </picture>
                        </div>
                        <div className="info w-full md:w-auto">
                            <div className="flex justify-between gap-3 lg:gap-auto items-center"><span className='font-anglecia font-normal text-2xl text-black'>Muhammad Ali</span> <span className='font-roboto font-normal text-xs md:text-sm text-black'>NOVEMBER 23, 2021
                            /<RiStarFill className='inline-block text-third'/><RiStarFill className='inline-block text-third'/><RiStarFill className='inline-block text-third'/><RiStarFill className='inline-block text-third'/><RiStarFill className='inline-block text-third'/></span></div>
                            <p className='font-roboto font-normal text-base pt-3 text-black'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, commodi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, laudantium eligendi, vero sapiente id eveniet exercitationem earum harum esse nostrum laborum enim debitis totam officiis modi qui tempora laboriosam veniam provident error sit? Ea, dignissimos.</p>
                        </div>
                    </div>
                    <div className="review flex flex-wrap md:flex-nowrap gap-5 justify-between items-center pb-10">
                        <div className="img w-62 md:w-[1000px] block lg:w-96  2xl:w-[300px] mx-auto lg:mx-0 h-52 lg:h-32 border-4 rounded-full border-third overflow-hidden">
                            <picture>
                                <img className='w-full h-full block' src={person2} alt={person2} />
                            </picture>
                        </div>
                        <div className="info w-full md:w-auto">
                            <div className="flex justify-between gap-3 lg:gap-auto items-center"><span className='font-anglecia font-normal text-2xl text-black'>Shinthiya Sathi</span> <span className='font-roboto font-normal text-xs md:text-sm text-black'>NOVEMBER 23, 2021
                            /<RiStarFill className='inline-block text-third'/><RiStarFill className='inline-block text-third'/><RiStarFill className='inline-block text-third'/><RiStarFill className='inline-block text-third'/><RiStarFill className='inline-block text-third'/></span></div>
                            <p className='font-roboto font-normal text-base pt-3 text-black'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, commodi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, laudantium eligendi, vero sapiente id eveniet exercitationem earum harum esse nostrum laborum enim debitis totam officiis modi qui tempora laboriosam veniam provident error sit? Ea, dignissimos.</p>
                        </div>
                    </div>
                  
                </section>
                </div>
                <div className="w-full lg:w-1/5">
                 <div className="right_sidebar sticky  top-[200px] z-[9999] h-full 2xl:pl-10 w-full flex lg:block flex-wrap flex-row items-center gap-5 ">
                     <Check_Availibity/>
                     <Promotion/>
                 </div>
                </div>
        </div>
      </div>
      {/* Product Info End */}
    </>
  )
}
