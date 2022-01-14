import React from "react"
import { v4 as uuid } from "uuid"
import { Link } from "react-router-dom"
import { menus } from "./constant"

export const Navbar = () => {
  return (
    <nav className="w-full flex jsutify-center py-6 px-8 items-center fixed bg-white z-10">
      <div className="w-full flex gap-32 justify-center">
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
    </nav>
  )
}
