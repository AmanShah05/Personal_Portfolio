import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name:  'Mary Olsen',
    review: 'I have known Aman for ten years, and throughout that decade of his growth and maturity, he is making a generational impact and has defined a new level of leadership. Aman is a focused, high achieving student, a visionary teen entrepreneur, and a naturally skilled communicator. I worked with Aman as he envisioned and co-founded Teenager Startups. Teenager Startups evolved as an immersive media, education, and networking platform and app that connects pre-teen and teen entrepreneurs and empowers their future.'
  },
  {
    avatar: AVTR1,
    name:  'Sheena Gosse',
    review: 'Aman was hired for the volunteer & outreach summer student with Junior Achievement of Waterloo Region, and he was a pleasure to work with. He was a hard worker, creative, precise and met deadlines that were set for him. He would be a good addition to any team. Aman was hired for the volunteer & outreach summer student with Junior Achievement of Waterloo Region, and he was a pleasure to work with. He was a hard worker, creative, precise and met deadlines that were set for him. He would be a good addition to any team.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className='testimonials'>
              <div className='client_avatar'>
                <img src={avatar}/>
              </div>
              <h5 className='client_name'>{name}</h5>
              <small className='client_review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials