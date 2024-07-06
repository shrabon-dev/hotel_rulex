import React, { useState } from 'react'
import image1 from '../../assets/images/services/880x1104_img1.jpg'
import image2 from '../../assets/images/services/880x1104_img2.jpg'
import image3 from '../../assets/images/services/880x1104_img3.jpg'
import image4 from '../../assets/images/services/880x1104_img4.jpg'
import title_line from '../../assets/images/title_line.svg'
import arrow from '../../assets/images/arrow_menu.svg'
let services = [
    {
        title:'Wellness & Spa',
        info:'Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus.',
        link:'https://velikorodnov.com/html/hotel-prive/luxury-city-hotel/index.html#',
        img:image1,
    },
    {
        title:'Restaurants',
        info:'Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus.',
        link:'https://velikorodnov.com/html/hotel-prive/luxury-city-hotel/index.html#',
        img:image2,

    },
    {
        title:'Lounge Bar',
        info:'Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus.',
        link:'https://velikorodnov.com/html/hotel-prive/luxury-city-hotel/index.html#',
        img:image3,

    },
    {
        title:'Confarence Hall',
        info:'Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus.',
        link:'https://velikorodnov.com/html/hotel-prive/luxury-city-hotel/index.html#',
        img:image4,

    }
]
export default function Services() {
    let [isOpen,setIsOpen] = useState(0)
    let [image,setIimage] = useState(image1)

    let handleTabs = (index,img) =>{
        setIsOpen(index)
        setIimage(img)
    }

  return (
    <>
     <section className='bg-[#664831] py-32' id='services'>
        <div className="flex flex-col-reverse md:flex-row flex-wrap md:flex-nowrap">
        <div className="svc_img_box pl-10 w-full md:w-2/3">
            <div className="svc_img">
                <picture>
                    <img className='duration-300 ease-in-out' src={image} alt={image} />
                </picture>
            </div>
            
        </div>
        <div className="svc_info_box relative z-[99] -top-22 md:top-0 md:mt-32 w-full md:w-2/3">
            <div className="svc_info bg-[#664831] pl-6 md:pl-16 relative after:absolute after:w-full after:content-[''] after:h-full after:border after:border-white after:top-10 after:-left-8 after:z-[-1]  pt-20 before:absolute before:w-full before:content-[''] before:h-full before:border before:border-gray-300 before:top-12 before:-left-10 before:z-[-2]">
                <div className="title pb-4 text-left">
                    <h4 className='font-roboto font-normal text-center text-lg uppercase flex items-center justify-start gap-5 text-gray-400 tracking-[5px]'><picture><img   src={title_line} alt={title_line} /></picture> Ficilities and services </h4>
                </div>
                <ul>
                {services.map((item, index) => (
                        <li onClick={()=>handleTabs(index,item.img)} key={index} className='font-anglecia font-medium text-[32px] md:text-[56px] text-[#C2B0A3] pb-5'>  {item.title}
                            <div className={` ${isOpen == index ? 'h-62 ':'h-0' } info  overflow-hidden`}> 
                              <p className='text-lg font-roboto font-normal text-white/90 leading-[1.7] md:w-[450px]'>
                                {item.info}
                              </p>
                              <a href={item.link} className='font-roboto pt-10 text-lg text-third font-medium tracking-[1px] flex items-center gap-10'>
                                Explore More 
                                <span className='w-14 inline-block overflow-hidden'>
                                  <img className='w-20' src={arrow} alt="Arrow" />
                                </span>
                              </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </div>
     </section>
    </>
  )
}

