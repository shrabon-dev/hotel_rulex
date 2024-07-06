import React, { useEffect, useRef, useState } from 'react'
import title_line from '../../assets/images/title_line.svg'
import room1 from '../../assets/images/room/1920x832_bg1.jpg'
import room2 from '../../assets/images/room/1920x832_bg2.jpg'
import room3 from '../../assets/images/room/1920x832_bg3.jpg'
import { TfiAngleRight } from "react-icons/tfi";
import { TfiAngleLeft } from "react-icons/tfi";
import Slider from "react-slick";


function SampleNextArrow(props) {
    const { className, style, onClick,position } = props;
    return (
        <div  style={{ ...style, left: position.x, top: position.y }} onClick={onClick} className="prev  hover:opacity-100 duration-300 ease-in-out cursor-pointer w-20 h-20 border rounded-full border-white text-white !flex justify-center items-center absolute  "> <TfiAngleLeft className='inline-block text-3xl' /> </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick,position } = props;
    return (
        <div style={{ ...style, left: position.x, top: position.y }} onClick={onClick} className="next  hover:opacity-100 duration-300 ease-in-out cursor-pointer w-20 z-[999] h-20 border rounded-full border-white text-white !flex justify-center items-center absolute "> <TfiAngleRight className='inline-block text-3xl' /> </div>
    );
  }


export default function RoomAndSuits() {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [showPrev, setShowPrev] = useState(false);
    const [showNext, setShowNext] = useState(false);

  
    useEffect(() => {
      setNav1(sliderRef1);
      setNav2(sliderRef2);
    }, []);

    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, width } = currentTarget.getBoundingClientRect();
        const xPos = clientX - left;
    

        setCursorPos({ x: e.screenX - 30 , y: e.screenY - 30 });

        if (xPos < width / 2) {
            setShowPrev(true);
            setShowNext(false);
        } else {
            setShowPrev(false);
            setShowNext(true);
        }
    };

    const bg1 = {
        backgroundImage: `url(${room1})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const bg2 = {
        backgroundImage: `url(${room2})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const bg3 = {
        backgroundImage: `url(${room3})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: showNext && <SampleNextArrow position={cursorPos} />,
        prevArrow: showPrev && <SamplePrevArrow position={cursorPos} />
      };
    const settings_bg = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <>
        <section id='roomandsuits' onMouseMove={handleMouseMove}>
                    <div className="title text-center">
                        <h4 className='font-roboto font-normal text-center text-lg uppercase flex items-center justify-center gap-5 text-secondary tracking-[5px]'><picture><img   src={title_line} alt={title_line} /></picture> ACCOMMODATION</h4>
                    </div>
                    <h1 className='font-anglecia font-normal text-[32px] md:text-[56px] text-dark text-center pb-4'>Rooms & Suits </h1>
                    <p className='font-roboto font-normal text-lg text-dark text-center pb-5 md:max-w-[730px] mx-auto'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit agna, endrerit sit amet.</p>
            <div className="content relative text-center" >
                {/* Images Slider Start */}
                <div className="img_box w-full h-[70dvh] sm:h-[100dvh]">
                <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)} {...settings_bg}>
                 <div>
                    <div style={bg2} className="bg_img h-[70dvh] sm:h-[100dvh]">
                        <div className="overlay bg-dark/70 h-[100dvh]">
                        </div>
                    </div>
                 </div>
                 <div>
                    <div style={bg1} className="bg_img h-[70dvh] sm:h-[100dvh]">
                        <div className="overlay bg-dark/70 h-[100dvh] ">
                        
                        </div>
                    </div>
                 </div>
                 <div>
                    <div style={bg3} className="bg_img h-[70dvh] sm:h-[100dvh]">
                        <div className="overlay bg-dark/70 h-[100dvh]">
                        
                        </div>
                    </div>
                 </div>
                </Slider>
                {/* <div style={bg2} className="bg_img h-[100dvh]">
                    <div className="overlay bg-dark/55 h-[100dvh] ">
                    sdfsdf
                    </div>
                 </div> */}
                </div>
                {/* Info Slider Start */}
                <div className="info_box absolute top-1/2 md:top-1/2 -translate-y-1/2 w-full text-center">
                <Slider asNavFor={nav1}  ref={slider => (sliderRef2 = slider)} {...settings}> 
                    <div className="info">
                        <h3 className='font-anglecia font-medium text-2xl md:text-6xl text-white text-center pb-8'>Superior Single Room</h3>
                        <p className='font-roboto font-normal text-base md:text-lg text-white text-center pb-10 max-w-[620px] mx-auto'> Donec porta diam eu massa. Quisque diam lorem, interdum
                            vitae, dapibus ac, scelerisque vitae, pede. Donec eget
                            tellus non erat lacinia fermentum. Donec in velit vel
                            ipsum auctor pulvinar. Vestibulum iaculis lacinia est.</p>
                            <div className="btn text-center">
                                <a className='font-roboto hover:bg-third  duration-300 ease-in-out text-base   md:text-lg font-normal text-white bg-btn py-3 tracking-[1px] uppercase px-4 w-36 ml-2 text-center inline-block' href="#">Book Now</a>
                                <a className='font-roboto hover:bg-third  duration-300 ease-in-out text-base   md:text-lg font-normal text-white bg-[#866C56] tracking-[1px] uppercase py-3 px-4 w-36 ml-4 text-center inline-block' href="#">Details</a>
                            </div>
                    </div>
                    <div className="info">
                        <h3 className='font-anglecia font-medium text-2xl md:text-6xl text-white text-center pb-8'>Superior Single Room</h3>
                        <p className='font-roboto font-normal text-base md:text-lg text-white text-center pb-10 max-w-[620px] mx-auto'> Donec porta diam eu massa. Quisque diam lorem, interdum
                            vitae, dapibus ac, scelerisque vitae, pede. Donec eget
                            tellus non erat lacinia fermentum. Donec in velit vel
                            ipsum auctor pulvinar. Vestibulum iaculis lacinia est.</p>
                            <div className="btn text-center">
                                <a className='font-roboto hover:bg-third  duration-300 ease-in-out text-base   md:text-lg font-normal text-white bg-btn py-3 tracking-[1px] uppercase px-4 w-36 ml-2 text-center inline-block' href="#">Book Now</a>
                                <a className='font-roboto hover:bg-third  duration-300 ease-in-out text-base   md:text-lg font-normal text-white bg-[#866C56] tracking-[1px] uppercase py-3 px-4 w-36 ml-4 text-center inline-block' href="#">Details</a>
                            </div>
                    </div>
                    <div className="info">
                        <h3 className='font-anglecia font-medium text-2xl md:text-6xl text-white text-center pb-8'>Superior Single Room</h3>
                        <p className='font-roboto font-normal text-base md:text-lg text-white text-center pb-10 max-w-[620px] mx-auto'> Donec porta diam eu massa. Quisque diam lorem, interdum
                            vitae, dapibus ac, scelerisque vitae, pede. Donec eget
                            tellus non erat lacinia fermentum. Donec in velit vel
                            ipsum auctor pulvinar. Vestibulum iaculis lacinia est.</p>
                            <div className="btn text-center">
                                <a className='font-roboto hover:bg-third  duration-300 ease-in-out text-base   md:text-lg font-normal text-white bg-btn py-3 tracking-[1px] uppercase px-4 w-36 ml-2 text-center inline-block' href="#">Book Now</a>
                                <a className='font-roboto hover:bg-third  duration-300 ease-in-out text-base   md:text-lg font-normal text-white bg-[#866C56] tracking-[1px] uppercase py-3 px-4 w-36 ml-4 text-center inline-block' href="#">Details</a>
                            </div>
                    </div>
                </Slider>
                </div>
                
            </div>
        </section>
    </>
  )
}
