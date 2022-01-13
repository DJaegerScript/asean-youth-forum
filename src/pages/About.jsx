import React from "react"

export const About = () => {
  return (
    <section className="w-full py-28 flex flex-col gap-6 justify-center items-center">
      <h1 className="font-bold text-5xl">About Us</h1>
      <div className="w-full flex">
        <div className="w-2/5 h-[192px] flex justify-center items-end relative">
          <p className="bg-[#FFB038] font-bold w-[286px] h-max mb-8 pl-4">
            About Us <br /> Jake founded Burton Snowboards out of a Vermont barn
            in 1977 and dedicated the rest of his life to snowboarding. He was
            our founder, the soul of snowboarding,
          </p>
          <div className="w-[286px] h-[142px] bg-[#FFD000] absolute -z-10 top-0 right-40"></div>
        </div>
        <div className="w-3/5 relative flex justify-center bg-[#FFD000] py-3">
          <img src="banner.jpg" alt="banner" />
        </div>
      </div>
      <div className="w-full flex px-24">
        <div className="w-3/5">
          <p className="font-bold text-2xl">
            The Burton Team&apos;s work embodies the Burton life. Yes,
            they&apos;re world <br /> champions, innovators and leaders in the
            sport, but they&apos;re also the <br /> perfect ambassadors for all
            things Burton. Providing crucial feedback on <br /> all our products
            while traveling the globe, they&apos;re our experts at making <br />{" "}
            the most out of every day.
          </p>
        </div>
        <div className="w-2/5 flex justify-center">
          <img src="about1.jpg" alt="about" className="w-[360px] h-[180px]" />
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 justify-center items-center">
        <h1 className="font-bold text-[28px]">Team</h1>
        <h2 className="text-lg">The Team who make this website</h2>
        <div className="w-full flex gap-20 justify-center items-center">
          <img src="team.jpg" alt="team" className="w-[152px] h-[130px]" />
          <img src="team.jpg" alt="team" className="w-[152px] h-[130px]" />
          <img src="team.jpg" alt="team" className="w-[152px] h-[130px]" />
          <img src="team.jpg" alt="team" className="w-[152px] h-[130px]" />
        </div>
      </div>
    </section>
  )
}
