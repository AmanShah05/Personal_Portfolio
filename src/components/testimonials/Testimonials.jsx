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
    name:  'Matthew Kelly',
    position: 'Controls Engineering Software Design Supervisor at Eclipse Automation',
    review: 'Aman was hired as a Controls Software Design Co-op with Eclipse Automation. Aman immediately impressed us with his passion for the automation industry and overall excitement about this learning opportunity. He took a professional approach to his work and quickly integrated himself into his project team. Working alongside numerous other Controls Designers, Aman was able to take on new challenges, work though them effectively and provide a complete solution for the team. He is hard working, charismatic and was not afraid to go above and beyond to make sure his deadlines were met. Aman has a bright career in this industry and would make a great addition to any team.'
  },
  {
    name:  'Mary Olsen',
    position: 'Co-Founder at Brand Intelligence',
    review: 'I have known Aman for ten years, and throughout that decade of his growth and maturity, he is making a generational impact and has defined a new level of leadership. Aman is a focused, high achieving student, a visionary teen entrepreneur, and a naturally skilled communicator. I worked with Aman as he envisioned and co-founded Teenager Startups. Teenager Startups evolved as an immersive media, education, and networking platform and app that connects pre-teen and teen entrepreneurs and empowers their future.'
  },
  {
    name:  'Sheena Gosse',
    position: 'Program Manager at Junior Achivment',
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
          data.map(({position, name, review}, index) => {
            return(
              <SwiperSlide key={index} className='testimonials'>
              <h3 className='client_name'>{name}</h3>
              <h5 className='client_name'>{position}</h5>
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