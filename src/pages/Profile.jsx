import React from "react"
import { Camera } from "../components"

export const Profile = () => {
  return (
    <section className="px-28 py-32 w-full h-screen flex gap-24 justify-center">
      <div className="h-full flex flex-col items-end">
        <div className="h-2/6">
          <div className="h-max w-[180px] py-6 px-4 bg-[#C4C4C4] rounded-3xl flex items-center gap-4">
            <Camera
              size="w-[48px] h-[48px]"
              stroke="stroke-black"
              fill="fill-transparent"
            />
            <span className="font-bold text-2xl">User</span>
          </div>
        </div>
        <div className="h-4/6 ">
          <div className="h-max w-[180px] py-6 px-4 bg-[#C4C4C4] rounded-3xl flex flex-col items-center gap-4 justify-center">
            <div className="flex w-full gap-4">
              <div className="flex flex-col">
                <img src="archive.svg" alt="icon" />
                <span className="font-bold text-lg">Archive</span>
              </div>
              <div className="flex flex-col">
                <img src="history.svg" alt="icon" />

                <span className="font-bold text-lg">History</span>
              </div>
            </div>
            <span className="font-bold text-3xl border-b-2 border-black">
              Log Out
            </span>
          </div>
        </div>
      </div>
      <div className=" h-full">
        <div className="bg-[#C4C4C4] w-[500px] h-max rounded-[30px] flex flex-col divide-y-2 divide-black py-4 px-8 gap-4">
          <h1 className="font-bold text-4xl">Profile</h1>
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-4">
              <div className="flex w-full">
                <div className="flex-col flex w-1/2">
                  <span className="font-bold text-3xl">Name</span>
                  <span className="text-2xl">user</span>
                </div>
                <div className="flex-col flex w-1/2">
                  <span className="font-bold text-3xl">Email</span>
                  <span className="text-2xl">User@gmail.com</span>
                </div>
              </div>
              <div className="flex w-full">
                <div className="flex-col flex w-1/2">
                  <span className="font-bold text-3xl">Birth</span>
                  <span className="text-2xl">01/01/2001</span>
                </div>
                <div className="flex-col flex w-1/2">
                  <span className="font-bold text-3xl">Phone Number</span>
                  <span className="text-2xl">123456</span>
                </div>
              </div>
              <div className="flex w-full">
                <div className="flex-col flex w-1/2">
                  <span className="font-bold text-3xl">Gender</span>
                  <span className="text-2xl">Male</span>
                </div>
                <div className="flex-col flex w-1/2">
                  <span className="font-bold text-3xl">Interest</span>
                  <span className="text-2xl">Education, Social</span>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="rounded-3xl bg-[#F3CE27] font-bold px-14 py-2">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
