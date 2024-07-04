import React from 'react'
import logo from '../../images/logo.png'
import arrow from '../../images/arrow_menu.svg'
import award1 from '../../images/award/160x160_award1.png'
import award2 from '../../images/award/160x160_award3.png'
import award3 from '../../images/award/160x160_award7.png'

export default function Footer() {
  return (
    <>
    <footer className='bg-main py-20'>
      <div className="container_box">
     
        <div className="flex justify-between">
          <div className="col_one">
          <div className="logo text-center pb-4">
              <picture className='text-center'>
                  <img className='mx-auto' src={logo} alt={logo} />
              </picture>
          </div>
            <p className='font-roboto font-normal text-base pb-1 text-white'>7 Rue Caulaincourt, 75018 Paris, France</p>
            <p className='font-roboto font-normal text-base pb-1 text-white'><b>Phone:</b> +1 800 603 6035 (Viber, WhatsApp)</p>
            <p className='font-roboto font-normal text-base pb-1 text-white'><b>Fax:</b> +1 800 889 9898</p>
            <p className='font-roboto font-normal text-base pb-1 text-white'><b>Email</b><span className='text-btn'> info@gmail.com</span></p>
          </div>
          <div className="col_one">
            <h2 className='font-anglecia text-2xl font-bold text-white pb-6'>Menu</h2>
            <ul>
              <li><a href="#" className='font-roboto text-base text-btn pb-3 inline-block flex items-center gap-2'> <span className='w-10 inline-block overflow-hidden' ><img className='w-20' src={arrow} alt={arrow} /></span> About</a></li>
              <li><a href="#" className='font-roboto text-base text-btn pb-3 inline-block flex items-center gap-2'> <span className='w-10 inline-block overflow-hidden' ><img className='w-20' src={arrow} alt={arrow} /></span> Special Offers</a></li>
              <li><a href="#" className='font-roboto text-base text-btn pb-3 inline-block flex items-center gap-2'> <span className='w-10 inline-block overflow-hidden' ><img className='w-20' src={arrow} alt={arrow} /></span> News</a></li>
              <li><a href="#" className='font-roboto text-base text-btn pb-3 inline-block flex items-center gap-2'> <span className='w-10 inline-block overflow-hidden' ><img className='w-20' src={arrow} alt={arrow} /></span> Contact Us</a></li>
            </ul>
          </div>
          <div className="col_one">
          <h2 className='font-anglecia text-2xl font-bold text-white pb-6'>Rooms & Suits</h2>
          <ul>
              <li><a href="#" className='font-roboto text-base text-btn pb-3 inline-block flex items-center gap-2'> <span className='w-10 inline-block overflow-hidden' ><img className='w-20' src={arrow} alt={arrow} /></span> Classic</a></li>
              <li><a href="#" className='font-roboto text-base text-btn pb-3 inline-block flex items-center gap-2'> <span className='w-10 inline-block overflow-hidden' ><img className='w-20' src={arrow} alt={arrow} /></span> Superior</a></li>
              <li><a href="#" className='font-roboto text-base text-btn pb-3 inline-block flex items-center gap-2'> <span className='w-10 inline-block overflow-hidden' ><img className='w-20' src={arrow} alt={arrow} /></span> Deluxe</a></li>
              <li><a href="#" className='font-roboto text-base text-btn pb-3 inline-block flex items-center gap-2'> <span className='w-10 inline-block overflow-hidden' ><img className='w-20' src={arrow} alt={arrow} /></span> Master</a></li>
            </ul>
          </div>
          <div className="col_one">
          <h2 className='font-anglecia text-2xl font-bold text-white pb-6'>Stay Connected</h2>
            <ul>
              <li><a href="#" className='font-roboto text-base text-btn pb-3 inline-block flex items-center gap-2'> <span className='w-10 inline-block overflow-hidden' ><img className='w-20' src={arrow} alt={arrow} /></span> Facebook</a></li>
              <li><a href="#" className='font-roboto text-base text-btn pb-3 inline-block flex items-center gap-2'> <span className='w-10 inline-block overflow-hidden' ><img className='w-20' src={arrow} alt={arrow} /></span> Instagram</a></li>
              <li><a href="#" className='font-roboto text-base text-btn pb-3 inline-block flex items-center gap-2'> <span className='w-10 inline-block overflow-hidden' ><img className='w-20' src={arrow} alt={arrow} /></span> Twitter</a></li>
              <li><a href="#" className='font-roboto text-base text-btn pb-3 inline-block flex items-center gap-2'> <span className='w-10 inline-block overflow-hidden' ><img className='w-20' src={arrow} alt={arrow} /></span> Tripadvisor</a></li>
            </ul>
          </div>
          <div className="col_one">
          <h2 className='font-anglecia text-2xl font-bold text-white pb-6'>Our Awards</h2>
             <div className="flex gap-5">
              <picture>
                <img className='w-24' src={award1} alt={award1} />
              </picture>
              <picture>
                <img className='w-24' src={award3} alt={award3} />
              </picture>
              <picture>
                <img className='w-24' src={award2} alt={award2} />
              </picture>
             </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
