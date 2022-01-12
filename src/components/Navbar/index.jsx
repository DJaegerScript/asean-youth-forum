import React from "react"
import { v4 as uuid } from "uuid"
import { Link } from "react-router-dom"
import { menus } from "./constant"
import { User } from "../Icons"

export const Navbar = () => {
  return (
    <nav className="w-full grid grid-cols-12 py-6 px-8 items-center fixed bg-white z-10">
      <div className="col-start-3 col-span-8 flex gap-32 justify-center">
        {menus.map(({ url, label }) => (
          <Link
            key={uuid()}
            to={url}
            className="hover:border-b-2 border-black transition-all duration-100 ease-in-out p-2 text-lg font-bold"
          >
            {label}
          </Link>
        ))}
      </div>
      <div className="col-span-2 flex justify-center">
        <button className="py-3 px-4 flex gap-2 bg-[#FA6845] rounded-xl text-lg font-bold">
          <User size="w-[24px] h-[24px]" fill="fill-black" /> Log in/Sign Up
        </button>
      </div>
    </nav>
  )
}
