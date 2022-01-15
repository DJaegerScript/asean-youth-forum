import axios from "axios"
import React, { useEffect, useState } from "react"
import { v4 as uuid } from "uuid"

export const Issue = () => {
  const [issues, setIssues] = useState([])

  useEffect(() => {
    const getIssues = async () => {
      const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/issue`)
      setIssues(data)
    }

    getIssues()
  }, [])

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
        {issues.map(({ imageUrl, label, categoryId }) => (
          <a
            href={`/issue/${categoryId}`}
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
