import React from "react"
import { v4 as uuid } from "uuid"

export const Issue = () => {
  const cardData = [
    { imageUrl: "social.jpg", label: "Social", url: "issue/social" },
    { imageUrl: "economy.jpg", label: "Economy", url: "issue/economy" },
    {
      imageUrl: "human_right.jpg",
      label: "Human Right",
      url: "issue/human-right",
    },
    { imageUrl: "culture.jpg", label: "Culture", url: "issue/culture" },
    { imageUrl: "health.jpg", label: "Health", url: "issue/health" },
    { imageUrl: "education.jpg", label: "Education", url: "issue/education" },
    { imageUrl: "law.jpg", label: "Law", url: "issue/law" },
    { imageUrl: "military.jpg", label: "Military", url: "issue/military" },
    { imageUrl: "crime.jpg", label: "Crime", url: "issue/crime" },
    { imageUrl: "sport.jpg", label: "Sport", url: "issue/sport" },
    {
      imageUrl: "automotive.jpg",
      label: "Automotive",
      url: "issue/automotive",
    },
    {
      imageUrl: "environment.jpg",
      label: "Environment",
      url: "issue/environment",
    },
  ]

  return (
    <section className="w-full h-max flex flex-col justify-center items-center py-32">
      <div className="w-full px-12 py-12 flex">
        <div className="w-1/3 flex justify-center items-center">
          <div className="w-max absolute">
            <input
              type="text"
              className="placeholder:text-center placeholder-black placeholder:font-bold placeholder:text-2xl py-3 px-2 outline rounded-xl"
              placeholder="search"
            />
            <img
              src="search.svg"
              alt="icon"
              className="top-1 left-1 absolute"
            />
          </div>
        </div>
        <div className="w-2/3 flex items-center">
          <h1 className="font-bold text-5xl">Choose Your Favorite Topic!</h1>
        </div>
      </div>
      <div className="w-full flex flex-wrap px-24 gap-28 justify-center">
        {cardData.map(({ imageUrl, label, url }) => (
          <a
            href={url}
            key={uuid()}
            className="relative flex flex-col w-max h-max"
          >
            <img src={imageUrl} alt="issue" className="w-48 h-40" />
            <div className="w-48 h-32 bg-[#E0DEDE]"></div>
            <div className="absolute w-full flex justify-center top-[48%]">
              <div className="font-bold text-lg py-2 px-4 rounded-full bg-[#CD5555] w-max text-white ">
                {label}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
