import React from "react"
import { v4 as uuid } from "uuid"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

SwiperCore.use([Navigation])

export const Activities = () => {
  const activities = [
    { imageUrl: "activity2.jpg", title: "Webinar" },
    { imageUrl: "activity1.jpg", title: "Campaign" },
    { imageUrl: "activity3.jpg", title: "Discussion" },
  ]
  return (
    <section className="h-screen w-full flex justify-center items-center">
      <div className="flex flex-col w-full gap-12 h-full justify-center items-center">
        <h1 className="font-bold text-7xl">OUR ACTIVITIES</h1>
        <div className="px-32 w-full">
          <Swiper
            slidesPerView={3}
            spaceBetween={155}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            className="w-full"
          >
            {activities.map(({ imageUrl, title }) => (
              <SwiperSlide key={uuid()}>
                <div className="flex flex-col items-center">
                  <img src={imageUrl} alt="test" className="w-[340px] h-96" />
                  <span className="font-bold text-2xl">{title}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
