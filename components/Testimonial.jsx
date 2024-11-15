import React, { useState, useCallback} from 'react';
import {ImQuotesLeft} from "react-icons/im";
import {FiArrowLeft, FiArrowRight} from "react-icons/fi";

// Import Swiper react component
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper Styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import {Autoplay} from "swiper/modules";

import AnimatedText from './AnimatedText';
import Image from 'next/image';

// Simple Data for project with Various Categories

const slides = [
  {
    img: "/assets/testimonial/img-1.png",
    name: "Emma Johnson",
    message: "The Sercie was fantastic Highly recommend it to anyone looking for top noth design."
  },
  {
    img: "/assets/testimonial/img-2.png",
    name: "Sophia Martinezs",
    message: "I couldn't be happier with the results. The website is both beautiful and functional."
  },
  {
    img: "/assets/testimonial/img-3.png",
    name: "James Smith",
    message: "Excellent work! The project was handled professionally from start to finish."
  },
  {
    img: "/assets/testimonial/img-4.png",
    name: "Olivia Willsams",
    message: "Everything was delivered on time, and the design exceeded my expectations."
  },
  {
    img: "/assets/testimonial/img-5.png",
    name: "Isabella Brown",
    message: "Amazing attention to the details. My site looks professional and user-friendly."
  },
  {
    img: "/assets/testimonial/img-6.png",
    name: "Liam Davis",
    message: "The team truly understand my need. Website is looks great, Thanks Zia!"
  },
];


const Testimonial = () => {
  const [swiperRef, setSwiperRef] = useState(null);
// State to store the active slide index
const [activeSlide, setActiveSlide] = useState(0);

const handlePrevious = useCallback(() => {
  swiperRef?.slidePrev();
}, [swiperRef]);

const handleNext = useCallback(() => {
  swiperRef?.slideNext();
}, [swiperRef]);

  return (
    <div className='py-24 overflow-hidden'>
      <div className='container mx-auto'>
        <AnimatedText text="What Clients Say" textStyles="h2 mb-[30px] xl:mb-[60px] text-center"/>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Slider Info */}
        <div className='w-max xl:w-[600px] flex flex-col justify-center xl:items-start text-center xl:text-left mx-auto xl:mx-0'>
          <ImQuotesLeft className='text-9xl text-accent/20 leading-none mb-4' />
          <h3 className='h3 mb-2'>{slides[activeSlide].name}
         </h3>
         <p className='mb-8 max-w-[360px]'>{slides[activeSlide].message}</p>
         <div className='flex items-center justify-center gap-3'>
          <button onClick={handleNext} className='text-2xl bg-accent w-[48px] h-[48px] text-white rounded-full flex items-center justify-center hover:bg-accent-hover transition-all duration-300'><FiArrowLeft />
          </button>
          
          <button onClick={handlePrevious} className='text-2xl bg-accent w-[48px] h-[48px] text-white rounded-full flex items-center justify-center hover:bg-accent-hover transition-all duration-300'><FiArrowRight />
          </button>
         </div>
        </div>
          {/* Slide */}
          <Swiper slidesPerView={1}
          spaceBetween={30}
          loop={true}
          onSwiper={setSwiperRef}
          breakpoints={{
            640: {slidesPerView: 1},
            768: {slidesPerView: 2},
            1024: {slidesPerView: 3},
            1280: {slidesPerView: 4},
          }}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          // Active slide index
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className='w-full h-[400px] xl:h-[500px]'>
            {slides.map((slide, index) => {
              return (
              <SwiperSlide key={index} className='h-full select-none'>
                <div className='w-full h-full flex items-end'>
                  <div className={`${activeSlide === index ? "max-h-max" : "h-[240px]"} flex items-end rounded-2xl overflow-hidden transition-all duration-500 relative w-full`}>
                    <img src={slide.img} 
                    className="object-cover object-top" 
                    quality={100} 
                    fill 
                    alt='' />
                  </div>
                </div>
              </SwiperSlide>
            )
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Testimonial; 