import React, { useRef, useState } from 'react';
import { SlCalender } from "react-icons/sl";
import { TfiAngleUp, TfiAngleDown } from "react-icons/tfi";
import { IoCheckmarkSharp } from "react-icons/io5";

export default function Check_Availibity() {
    
    let [adult,setAdult] = useState(0)
    let [children,setChildren] = useState(0)

    let [aminities,setAminities] = useState({
        air:true,
        tv:true,
        wardrop:true,
        shope:true,
        table:true,
        parking:true,
        smoke:true,
    })

    return (
        <div className="Check_Availibity bg-card p-6 w-full md:w-[48%] lg:w-full">
            <h6 className='font-anglecia text-2xl font-normal text-white flex gap-5 items-center'>
                <SlCalender className='inline-block text-3xl'/> Check <br /> Availibity
            </h6>
            <form action="#">
                <div className="inp pt-4">
                    <p className='font-roboto text-xs tracking-[1px] font-normal text-gray-300 uppercase'>arrival Date</p>
                    <label   htmlFor="arrival_date" className='font-roboto text-lg pt-2 font-normal text-white tracking-[1px] relative'>
                        <div className='flex items-center gap-5 font-anglecia font-normal border-b border-white w-full'>
                            <span className='text-lg font-anglecia'>
                                Friday, 25 July
                            </span>
                        </div>
                        <span className='text-xs absolute right-1 top-2'><TfiAngleDown/></span>
                    </label>
                    <input 
                        type="date" 
                        id='arrival_date' 
                        
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            width: '100%',
                            height: '100%',
                            opacity: 0,
                            cursor: 'pointer'
                        }}
                    />
                </div>
                <div className="inp pt-4">
                    <p className='font-roboto text-xs tracking-[1px] font-normal text-gray-300 uppercase'>Departure Date</p>
                    <label   htmlFor="arrival_date" className='font-roboto text-lg pt-2 font-normal text-white tracking-[1px] relative'>
                        <div className='flex items-center gap-5 font-anglecia font-normal border-b border-white w-full'>
                            <span className='text-lg font-anglecia'>
                                Friday, 25 July
                            </span>
                        </div>
                        <span className='text-xs absolute right-1 top-2'><TfiAngleDown/></span>
                    </label>
                    <input 
                        type="date" 
                        id='arrival_date' 
                        
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            width: '100%',
                            height: '100%',
                            opacity: 0,
                            cursor: 'pointer'
                        }}
                    />
                </div>
                <div className="inp pt-4">
                    <p className='font-roboto text-xs tracking-[1px] font-normal text-gray-300 uppercase'>Room</p>
                    <select  className='font-roboto text-lg pt-2 font-normal text-white tracking-[1px] relative w-full bg-transparent border-b border-white' name="" id="">
                        <option className='bg-main text-white border-b border-dark rounded-none py-2' value="">1 room</option>
                        <option className='bg-main text-white border-b border-dark rounded-none py-2' value="">2 room</option>
                        <option className='bg-main text-white border-b border-dark rounded-none py-2' value="">3 room</option>
                        <option className='bg-main text-white border-b border-dark rounded-none py-2' value="">4 room</option>
                    </select>
                </div>
                <div className="inp pt-4">
                <div className="flex gap-10">
                  <div className="w-1/2">
                    <p   className='font-roboto text-xs tracking-[1px] font-normal text-gray-300 uppercase'>Adults</p>
                    <label htmlFor="" className='font-roboto text-lg font-normal text-white uppercase'>
                      <div className='flex items-center justify-between gap-5  font-anglecia ont-normal border-b border-white w-full'>
                         <span className='block text-xl'>{adult}</span>
                         <span className='block text-lg flex flex-col'>
                          <span onClick={()=>setAdult(++adult)}><TfiAngleUp/></span>
                          <span onClick={()=>setAdult(--adult)}><TfiAngleDown/></span>
                         </span>
                        
                      </div>
                    </label>
                    <input type="text" name="" id="" placeholder='' className='bg-transparent w-full border-b border-white hidden' />
                  </div>
                  <div className="w-1/2">
                    <p   className='font-roboto text-xs tracking-[1px] font-normal text-gray-300 uppercase'>Childrens</p>
                    <label htmlFor=" " className='font-roboto text-lg font-normal text-white uppercase'>
                      <div className='flex items-center justify-between gap-5  font-anglecia ont-normal border-b border-white w-full'>
                         <span className='block text-xl'>{children}</span>
                         <span className='block text-lg flex flex-col'>
                          <span onClick={()=>setChildren(++children)}><TfiAngleUp/></span>
                          <span onClick={()=>setChildren(--children)}><TfiAngleDown/></span>
                         </span>
                        
                      </div>
                    </label>
                    <input type="text" name=""  placeholder='' className='bg-transparent w-full border-b border-white hidden' />
                  </div>
                </div>
                </div>
                <div className="inp pt-4">
                    <p className='font-roboto text-xs tracking-[1px] font-normal text-gray-300 uppercase'>Range</p>
                    <input type="range" name="" id="" className='w-full h-2'/>
                    <p className='font-anglecia flex justify-between items-center text-lg tracking-[1px] font-normal text-white uppercase'><span>$10</span> <span>$1000</span></p>
                </div>
                <div className="inp pt-4">
                    <p className='font-roboto text-xs tracking-[1px] font-normal text-gray-300 uppercase'>Aminities</p>
                    <div className="py-3">
                        <input type="checkbox" name="" id="air" className='' hidden /> 
                        <label onClick={()=>setAminities({...aminities,air:!aminities.air})} htmlFor='air' className='font-anglecia  flex gap-3 items-center text-lg tracking-[1px] font-normal text-white '> <div className="check w-6 h-6 border border-white flex justify-center items-center text-white text-lg">{aminities.air && <IoCheckmarkSharp />}</div> Air Condition</label>
                    </div>
                    <div className="py-3">
                        <input type="checkbox" name="" id="air" className='' hidden /> 
                        <label onClick={()=>setAminities({...aminities,tv:!aminities.tv})} htmlFor='air' className='font-anglecia  flex gap-3 items-center text-lg tracking-[1px] font-normal text-white '> <div className="check w-6 h-6 border border-white flex justify-center items-center text-white text-lg">{aminities.tv && <IoCheckmarkSharp />}</div> LED Tv</label>
                    </div>
                    <div className="py-3">
                        <input type="checkbox" name="" id="air" className='' hidden /> 
                        <label onClick={()=>setAminities({...aminities,smoke:!aminities.smoke})} htmlFor='air' className='font-anglecia  flex gap-3 items-center text-lg tracking-[1px] font-normal text-white '> <div className="check w-6 h-6 border border-white flex justify-center items-center text-white text-lg">{aminities.smoke && <IoCheckmarkSharp />}</div> No Smoke</label>
                    </div>
                    <div className="py-3">
                        <input type="checkbox" name="" id="air" className='' hidden /> 
                        <label onClick={()=>setAminities({...aminities,wardrop:!aminities.wardrop})} htmlFor='air' className='font-anglecia  flex gap-3 items-center text-lg tracking-[1px] font-normal text-white '> <div className="check w-6 h-6 border border-white flex justify-center items-center text-white text-lg">{aminities.wardrop && <IoCheckmarkSharp />}</div> Wardrop</label>
                    </div>
                    <div className="py-3">
                        <input type="checkbox" name="" id="air" className='' hidden /> 
                        <label onClick={()=>setAminities({...aminities,shope:!aminities.shope})} htmlFor='air' className='font-anglecia  flex gap-3 items-center text-lg tracking-[1px] font-normal text-white '> <div className="check w-6 h-6 border border-white flex justify-center items-center text-white text-lg">{aminities.shope && <IoCheckmarkSharp />}</div> Shope</label>
                    </div>
                    <div className="py-3">
                        <input type="checkbox" name="" id="air" className='' hidden /> 
                        <label onClick={()=>setAminities({...aminities,table:!aminities.table})} htmlFor='air' className='font-anglecia  flex gap-3 items-center text-lg tracking-[1px] font-normal text-white '> <div className="check w-6 h-6 border border-white flex justify-center items-center text-white text-lg">{aminities.table && <IoCheckmarkSharp />}</div> Table</label>
                    </div>
                    <div className="py-3">
                        <input type="checkbox" name="" id="air" className='' hidden /> 
                        <label onClick={()=>setAminities({...aminities,parking:!aminities.parking})} htmlFor='air' className='font-anglecia  flex gap-3 items-center text-lg tracking-[1px] font-normal text-white '> <div className="check w-6 h-6 border border-white flex justify-center items-center text-white text-lg">{aminities.parking && <IoCheckmarkSharp />}</div> Parking</label>
                    </div>

                </div>
                <button className='font-roboto  text-sm mt-5 font-normal text-white bg-btn py-4 tracking-[1px] uppercase px-4  text-center w-full' href="#">Check Availability</button>
            </form>
        </div>
    );
}
