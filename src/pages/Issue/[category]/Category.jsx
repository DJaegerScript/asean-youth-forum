import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { v4 as uuid } from "uuid"
import { Eye } from "../../../components"

export const Category = () => {
  const location = useLocation()

  const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1)

  const category = location.pathname.split("/")[2]
  const categoryName = category
    .split("-")
    .reduce((prev, curr) => capitalize(prev) + " " + capitalize(curr))

  const [trendings, setTrendings] = useState([])
  const [populars, setPopulars] = useState([])

  useEffect(() => {
    const getCategories = async category => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/category/${category}`
      )
      setTrendings(data.trendingTopics)
      setPopulars(data.popularTopics)
    }
    getCategories(category)
  }, [])

  return (
    <section className="w-full h-max flex flex-col justify-center items-center py-20">
      <div className="w-full px-12 py-12 flex">
        <div className="w-2/3 flex items-center">
          <h1 className="font-bold text-5xl">{categoryName}</h1>
        </div>
        <div className="w-1/3 flex justify-center items-center">
          <div className="w-max absolute">
            <input
              type="text"
              className="placeholder:text-center placeholder-black placeholder:font-bold placeholder:text-2xl py-3 px-2 outline rounded-xl"
              placeholder="search"
            />
            <img
              src="../search.svg"
              alt="icon"
              className="top-1 left-1 absolute"
            />
          </div>
        </div>
      </div>
      <img src="../category_banner.jpg" alt="banner" className="w-full " />
      <div className="w-full flex flex-col">
        <div className="w-full flex">
          <div className="w-4/6 p-12 gap-14 flex flex-col ">
            {trendings.map(({ imageUrl, title, description }, index) => (
              <Link
                to={`/issue/${category}/1`}
                key={uuid()}
                className={`flex gap-2 w-[900px] bg-[#F4F4F4] ${
                  index % 2 !== 0 && "flex-row-reverse"
                }`}
              >
                <img src={imageUrl} alt="news_image" />
                <div className="flex flex-col gap-4">
                  <h1 className="font-bold text-4xl">{title}</h1>
                  <p className="font-light text-2xl">
                    {description}
                    <span className="text-slate-300 border-b-2 border-slate-300">
                      Lihat Selengkapnya
                    </span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="w-2/6 flex flex-col gap-5 p-12">
            <h1 className="font-bold text-2xl">Terpopuler</h1>
            <div className="flex flex-col gap-3">
              {populars.map(({ imageUrl, title, viewers }) => (
                <div key={uuid()} className="flex gap-4">
                  <img src={imageUrl} alt="popular" />
                  <div className="flex flex-col justify-between">
                    <h1 className="font-bold text-lg">{title}</h1>
                    <span className="flex gap-2 text-sm font-bold items-center">
                      <Eye size="w-[24px] h-[24px]" fill="fill-black" />
                      {viewers} Views
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <span className="font-light text-4xl border-b-2 border-black">
            Lihat Semua Issue
          </span>
        </div>
      </div>
    </section>
  )
}
