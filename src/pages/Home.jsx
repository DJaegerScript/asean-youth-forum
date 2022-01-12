import React, { useState } from "react"
import { v4 as uuid } from "uuid"
import { RecommendedIssue, TrendingTopic, IssueNearUs } from "../modules"

export const Home = () => {
  const [currentTab, setCurrentTab] = useState("tab1")

  const tabs = [
    {
      tabId: "tab1",
      label: "TRENDING TOPIC",
    },
    {
      tabId: "tab2",
      label: "RECOMMENDED ISSUE",
    },
    {
      tabId: "tab3",
      label: "ISSUE NEAR US",
    },
  ]

  const tabSections = {
    tab1: <TrendingTopic />,
    tab2: <RecommendedIssue />,
    tab3: <IssueNearUs />,
  }

  return (
    <>
      <section className="w-full h-full grid grid-cols-12 relative">
        <div className="col-span-3 flex justify-end items-end h-full py-[75px]">
          <div className="w-max flex flex-col gap-2">
            <span className="text-3xl font-semibold">Find your issue !</span>
            <div className="h-1 w-[180px] bg-black"></div>
          </div>
        </div>
        <div className="col-span-6 flex justify-center items-end   h-full">
          <img src="/home_hero.jpg" alt="home hero" className="w-[450px]" />
        </div>
        <div className="col-span-3 flex items-end h-full py-[75px]">
          <div className="w-max flex flex-col gap-2 pr-28">
            <span className="text-3xl font-bold">YOUR ISSUE</span>
            <span className="font-light text-justify">
              merupakan website penyedia informasi aktual dan faktual. Your
              Issue juga merupakan website penampung aspirasi kaum muda.
            </span>
          </div>
        </div>
        <div className="absolute flex flex-col gap-4 top-32 left-44">
          <img src="logo.png" alt="ASEAN YOUTH FORUM" className="w-32 h-28" />
          <h1 className="text-6xl font-bold">
            ASEAN YOUTH <br /> FORUM
          </h1>
        </div>
        <img
          src="eclipse_image.png"
          alt="Index Image"
          className="w-44 h-44 right-96 absolute top-32"
        />
      </section>
      <section className="w-full h-max">
        <div className="w-full h-6 bg-[#F3CE27]"></div>
        <div className="w-full grid grid-cols-12 py-8">
          {tabs.map(({ label, tabId }) => (
            <div key={uuid()} className="col-span-4 flex justify-center ">
              <a
                onClick={() => setCurrentTab(tabId)}
                className={`font-bold text-xl ${
                  tabId === currentTab && "border-b-2"
                } border-black cursor-pointer`}
              >
                {label}
              </a>
            </div>
          ))}
        </div>
        {tabSections[currentTab]}
      </section>
    </>
  )
}
