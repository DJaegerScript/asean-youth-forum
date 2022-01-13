import React from "react"
import { v4 as uuid } from "uuid"

export const Archive = () => {
  const trendingTopics = [
    {
      imageUrl: "/trending_topic6.jpg",
      title:
        "Masih Tinggi, Kasus tembus 20 ribuCovid-19 di Malaysia tembus 20 ribu",
    },
    {
      imageUrl: "/trending_topic4.jpg",
      title: "Stop Asian Hate Meluas, Pemerintah AS diimbau  Lindungi Warga",
    },
    {
      imageUrl: "/trending_topic3.jpg",
      title: "Isu HAM di Papua Masalah Serius",
    },

    {
      imageUrl: "/trending_topic2.jpg",
      title: "Akar konflik berkepanjangan di Vietnam",
    },
    {
      imageUrl: "/trending_topic1.jpg",
      title: "Kesenjangan Ekonomi di negara Myanmar",
    },

    {
      imageUrl: "/trending_topic5.jpg",
      title: "Tuntut PM Mundur, Warga Thailand Demo di kala Lockdown ",
    },
  ]
  return (
    <section className="w-full h-max flex flex-col py-20 relative">
      <h1 className="font-bold text-5xl py-12 px-32">ARCHIVE</h1>
      <div className="w-full">
        <img src="archive_hero.jpg" alt="hero" className="w-full" />
      </div>
      <div className=" w-full -mt-32 px-24 flex flex-wrap justify-center gap-24">
        {trendingTopics.map(({ imageUrl, title }) => (
          <div
            key={uuid()}
            className="flex flex-col gap-4 border-2 border-black bg-[#E5E5E5] rounded-3xl justify-center items-center py-2 px-4"
          >
            <div className="relative">
              <img
                src={imageUrl}
                alt="trending topic"
                className="w-[240px] h-[240px]"
              />
              <div className="bg-white bg-opacity-50 h-1/3 absolute bottom-0 w-full px-4">
                <span className="text-white font-bold text-sm">{title}</span>
              </div>
            </div>
            <button className="bg-[#D2CAA5] px-3 py-1 w-max rounded font-bold text-4xl">
              Baca
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
