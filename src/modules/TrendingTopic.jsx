import React from "react"
import { v4 as uuid } from "uuid"
import { Eye } from "../components"

export const TrendingTopic = () => {
  const trendingTopics = [
    {
      imageUrl: "/trending_topic1.jpg",
      title: "Kesenjangan Ekonomi di negara Myanmar",
      viewers: "12.821",
    },
    {
      imageUrl: "/trending_topic2.jpg",
      title: "Akar konflik berkepanjangan di Vietnam",
      viewers: "10.100",
    },
    {
      imageUrl: "/trending_topic3.jpg",
      title: "Isu HAM di Papua Masalah Serius",
      viewers: "9.021",
    },
    {
      imageUrl: "/trending_topic4.jpg",
      title: "Stop Asian Hate Meluas, Pemerintah AS diimbau  Lindungi Warga",
      viewers: "8.921",
    },
    {
      imageUrl: "/trending_topic5.jpg",
      title: "Tuntut PM Mundur, Warga Thailand Demo di kala Lockdown ",
      viewers: "8.780",
    },
    {
      imageUrl: "/trending_topic6.jpg",
      title:
        "Masih Tinggi, Kasus tembus 20 ribuCovid-19 di Malaysia tembus 20 ribu",
      viewers: "8.023",
    },
  ]
  return (
    <div className="w-full flex flex-wrap px-12 py-4 gap-24 justify-center">
      {trendingTopics.map(({ imageUrl, title, viewers }) => (
        <div key={uuid()} className="relative">
          <img src={imageUrl} alt="trending topic" />
          <div className="bg-white bg-opacity-50 h-1/3 absolute bottom-0 w-full p-4">
            <span className="text-white font-bold text-2xl">{title}</span>
          </div>
          <div className="w-full flex justify-end">
            <span className="flex gap-2">
              <Eye size="w-[24px] h-[24px]" fill="fill-black" />
              {viewers} Views
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
