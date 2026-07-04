import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './HomeBanner2.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { defaultHomeBannerWorkouts } from '@/lib/workoutDefaults'


const HomeBanner2 = () => {
  const [workouts, setWorkouts] = React.useState(defaultHomeBannerWorkouts)

  const getworkouts = async () => {
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/workoutcategories', {
        credentials: 'include',
      })
      const data = await res.json()
      if (data.ok && Array.isArray(data.data) && data.data.length > 0) {
        setWorkouts(
          data.data.map((c: { displayName: string; type: string; imageUrl: string; durationInMin: number }) => ({
            type: c.displayName || c.type,
            imageUrl: c.imageUrl,
            durationInMin: c.durationInMin,
          }))
        )
      }
    } catch {
      /* keep built-in defaults */
    }
  }
  React.useEffect(() => {
    getworkouts()
  }, [])

  return (
    <div>
      <h1 className='mainhead1'>Workouts</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          workouts.map((item, index) => {
            return (
              <SwiperSlide key={index} >
                <div key={index} className='swiper-slide'
                  style={{
                    backgroundImage: `url(${item.imageUrl})`,
                  }}
                  onClick={() => {
                    window.location.href = `/workout/${item.type}`
                  }}
                >
                  <div className='swiper-slide-content'>
                    <h2>{item.type}</h2>
                    <p>{item.durationInMin} min</p>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </div>
  )
}

export default HomeBanner2
