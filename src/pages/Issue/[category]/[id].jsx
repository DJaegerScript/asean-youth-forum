import React from "react"
import { useLocation } from "react-router-dom"

export const Blog = () => {
  const location = useLocation()
  console.log(location)
  return (
    <>
      <section className="w-full h-max flex flex-col justify-center items-center py-40 px-32">
        <div className="w-full flex">
          <div className="w-2/6 flex">
            <div className="flex flex-col gap-8 w-[344px] ">
              <span className="font-bold text-lg bg-[#C4C4C426]">
                Jakarta, CNN Indonesia -- Rerata harga daging ayam di pasar
                tradisional di seluruh Indonesia naik 0,88 persen ke Rp34.250
                per Kilogram (Kg) pada awal pekan ini Selain Ayam, bahan baku
                lain seperti daging sapi, cabai rawit dan cabai rawit merah pun
                ikut naik
              </span>
              <div className="flex flex-col gap-4">
                <img
                  src="https://res.cloudinary.com/dohqh8twm/image/upload/v1642214973/economy1_carha7.jpg"
                  alt="economy"
                />
                <span className="font-bold text-lg">
                  Harga daging ayam dan daging sapi di pasar tradisional naik
                  pada awal pekan ini, Senin (6/9). Ilustrasi
                </span>
              </div>
            </div>
          </div>
          <div className="w-4/6 flex-col flex gap-8">
            <div className="w-full flex justify-center items-center">
              <h1 className="font-bold text-5xl">
                Harga Daging Ayam Naik Pada Awal Pekan Ini
              </h1>
            </div>
            <div className="w-full flex">
              <div className="w-1/2 p-4">
                <span className="text-lg font-bold">
                  Jakarta, CNN Indonesia -- Rerata harga daging ayam di pasar
                  tradisional di seluruh Indonesia naik 0,88 persen ke Rp34.250
                  per Kilogram (Kg) pada awal pekan ini. <br /> Berdasarkan
                  Pusat Informasi Harga Pangan Strategis (PIHPS), Senin (6/9),
                  harga daging ayam tertinggi mencapai Rp57.500 per Kg di
                  Kabupaten Sumba Timur, Nusa Tenggara Timur (NTT). Sementara,
                  harga terendah Rp23 ribu per Kg tercatat di Kota Mamuju,
                  Sulawesi Barat <br /> <br /> Kenaikan harga juga terjadi pada
                  daging sapi kualitas 1 sebesar 0,08 persen menjadi Rp127.700
                  per Kg. Harga paling tinggi, Rp150 ribu per Kg, tercatat di
                  Kabupaten Sintang, Kalimantan Barat. <br /> <br /> Sedangkan
                  harga terendah tercatat di Kota Kupang, Nusa Tenggara Timur
                  (NTT), sebesar Rp98 ribu per Kg.
                </span>
              </div>
              <div className="w-1/2 p-4 flex flex-col gap-4">
                <span className="text-lg font-bold">
                  Di sisi lain, sebagian besar harga pangan turun pada awal
                  pekan ini. Penurunan terbesar dialami oleh komoditas cabai
                  rawit. Tercatat, cabai rawit merah turun sebesar 16,58 persen
                  ke Rp30.950 per Kg dan cabai rawit hijau merosot 11,74 persen
                  ke Rp30.450 per Kg. <br /> <br />
                  Kenaikan harga juga terjadi pada daging sapi kualitas 1
                  sebesar 0,08 persen menjadi Rp127.700 per Kg. Harga paling
                  tinggi, Rp150 ribu per Kg, tercatat di Kabupaten Sintang,
                  Kalimantan Barat. <br /> <br />
                  Sedangkan harga terendah tercatat di Kota Kupang, Nusa
                  Tenggara Timur (NTT), sebesar Rp98 ribu per Kg. <br /> <br />{" "}
                  Di sisi lain, sebagian besar harga pangan turun pada awal
                  pekan ini. Penurunan terbesar dialami oleh komoditas cabai
                  rawit. Tercatat, cabai rawit merah turun sebesar 16,58 persen
                  ke Rp30.950 per Kg dan cabai rawit hijau merosot 11,74 persen
                  ke Rp30.450 per Kg.
                </span>
                <div className="flex gap-2 bg-[#C4C4C4] w-max p-2">
                  <span className="font-bold text-2xl">Translate</span>
                  <img src="../../translate.jpg" alt="translate" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between py-8 items-center">
          <div className="flex gap-4 bg-[#C4C4C4] p-2">
            <div className="flex gap-2 items-center">
              <img src="../../star.png" alt="star" />
              <span className="font-bold text-lg">4,5/5</span>
            </div>
            <img src="../../warning.jpg" alt="warning" />
            <img src="../../share.png" alt="share" />
            <img src="../../save.png" alt="save" />
          </div>
          <div className="flex gap-4 bg-[#C4C4C4] p-2">
            <div className="flex gap-2 items-center">
              <img src="../../emot1.png" alt="emot1" />
              <span className="font-bold text-lg">95</span>
            </div>
            <div className="flex gap-2 items-center">
              <img src="../../emot2.png" alt="emot2" />
              <span className="font-bold text-lg">78</span>
            </div>
            <div className="flex gap-2 items-center">
              <img src="../../emot3.png" alt="emot3" />
              <span className="font-bold text-lg">60</span>
            </div>
            <img src="../../add.png" alt="add" />
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full py-8">
        <div className="bg-gray-400 h-1"></div>
        <div className="flex justify-between px-16 py-4">
          <span className="font-bold text-5xl">Comment</span>
          <img src="../../setting.png" alt="setting" />
        </div>
        <div className="flex flex-col w-full gap-9 px-24">
          <div className="w-full flex gap-2 px-12 py-2 border-2 border-black">
            <img src="../../you.png" alt="avatar" className="rounded-full" />
            <div className="flex flex-col justify-between">
              <span className="font-bold text-2xl">You</span>
              <span className="font-bold text-2xl text-[#6F6363]">
                Write a Comment.....
              </span>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="w-full flex gap-2 px-12 py-2 border-2 border-black items-center">
              <img
                src="../../kim_jong_un.png"
                alt="avatar"
                className="rounded-full"
              />
              <div className="w-full justify-between flex items-center">
                <div className="flex flex-col justify-between">
                  <span className="font-bold text-2xl">Kim Jong Un</span>
                  <span className="font-bold text-2xl text-[#6F6363]">
                    Pemerintah harus segera membenahi ini, kalau tidak rakyat
                    makin sengsara.
                  </span>
                </div>
                <img
                  src="../../translate.jpg"
                  alt="translate"
                  className="h-max ml-48"
                />
              </div>
            </div>
            <div className="px-44">
              <span className="text-2xl font-bold">Reply</span>
            </div>
          </div>
          <div className="w-full pl-44">
            <div className="w-full flex gap-2 px-12 py-2 border-2 border-black items-center">
              <img
                src="../../tiara_andinii.png"
                alt="avatar"
                className="rounded-full"
              />
              <div className="flex justify-between items-center w-full">
                <div className="flex flex-col justify-between">
                  <span className="font-bold text-2xl">Tiara Andini</span>
                  <span className="font-bold text-2xl text-[#6F6363]">
                    Iya bener, udah susah cari kerja, bahan baku malah pada naik
                  </span>
                </div>
                <img
                  src="../../translate.jpg"
                  alt="translate"
                  className="h-max "
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="w-full flex gap-2 px-12 py-2 border-2 border-black items-center">
              <img
                src="../../magneto.png"
                alt="avatar"
                className="rounded-full"
              />
              <div className="flex justify-between w-full items-center">
                <div className="flex flex-col justify-between">
                  <span className="font-bold text-2xl">Magneto</span>
                  <span className="font-bold text-2xl text-[#6F6363]">
                    Sedih banget... :(
                  </span>
                </div>
                <img
                  src="../../translate.jpg"
                  alt="translate"
                  className="h-max"
                />
              </div>
            </div>
            <div className="px-44">
              <span className="text-2xl font-bold">Reply</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
