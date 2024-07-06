import React from 'react'
import title_line from '../../assets/images/title_line.svg'
import bg_img from '../../assets/images/footer_4_bg_img.svg'

export default function Newsletter() {
    let bg = {
        background:`url(${bg_img})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'center',
       }
  return (
    <>
    <section id='newsletter'  style={bg}>
       <div className="overlay bg-[#664831]/95 py-32">
        <div className="container_box">
            <div className="title pb-4 text-center">
                <h4 className='font-roboto font-normal text-center text-base md:text-lg uppercase flex items-center justify-center gap-5 text-white tracking-[5px]'><picture><img   src={title_line} alt={title_line} /></picture> JOIN OUR MAILING LIST</h4>
            </div>
            <h1 className='font-anglecia font-normal text-[30px] md:text-[72px] text-white text-center pb-[28px]'>Newsletter Sign Up</h1>
            <div className="email_input ">
                 <form action="">
                    <div className="md:flex justify-center items-center gap-5 text-center">
                        <div className="input  ">
                            <label htmlFor="" className='block font-roboto text-xs text-left text-gray-300 tracking-[1px] font-normal mb-4'>SIGN UP FOR NEWS AND SPECIAL OFFERS </label>
                            <input className='h-10 bg-transparent border-b border-b-2 border-white w-full md:w-[500px] lg:w-[650px] font-anglecia text-lg placeholder:font-anglecia placeholder:text-lg placeholder:text-white  focus:!border-white  text-white font-normal' type="text" placeholder='Enter Email Address' />
                        </div>
                        <button className='py-3 md:py-5   px-16 md:px-14 mt-5 md:mt-0 bg-btn text-white font-roboto font-normal uppercase text-lg'>Subscribe</button>
                    </div>
                 </form>
            </div>
        </div>
       </div>
    </section>
    </>
  )
}
