import React from "react"
import { useLocation } from "react-router-dom"
import { v4 as uuid } from "uuid"
import { Eye } from "../../../components"

export const Category = () => {
  const location = useLocation()
  const category = location.pathname.split("/")[2]

  const blogs = [
    {
      imageUrl: "../economy1.jpg",
      title: "Harga Daging Ayam Naik Pada Awal Pekan Ini",
      description:
        "Jakarta, Rerata harga daging ayam di pasar tradisional di seluruh Indonesia naik 0,88 persen ke Rp34.250 per Kilogram (Kg) pada awal pekan ini.",
    },
    {
      imageUrl: "../economy3.jpg",
      title: "Transaksi UMKM dan BUMN, Tembus 10,9 T Lewat PaDi",
      description:
        "Jakarta,  Menteri Badan Usaha Milik Negara (BUMN) Erick Thohir mengatakan nilai transaksi yang dihasilkan antara Usaha Mikro, Kecil, dan Menengah.",
    },
    {
      imageUrl: "../economy2.jpg",
      title: "Pendaftaran Kartu Prakerja Gelombang 20 Di Umumkan Pekan Ini",
      description:
        "Jakarta, CNN Indonesia -- Manajemen Kartu Prakerja (PMO) akan membuka kembali program Kartu Prakerja bagi 800 ribu orang pada gelombang ke-20.",
    },
  ]

  const populars = [
    {
      imageUrl: "../popular1.jpg",
      title: "Rupiah Gagah Ke 14.222 Akibat Data Ekonomi AS",
      viewers: "2.876",
    },
    {
      imageUrl: "../popular2.jpg",
      title: "Uang Kripto Kompak Menghijau, Bitcoin-Dogecoin Paling Segar",
      viewers: "2.098",
    },
    {
      imageUrl: "../popular3.jpg",
      title: "Leasing Bisa Sita Baramg Kredit Tanpa Pengadlilan",
      viewers: "2.021",
    },
    {
      imageUrl: "../popular4.jpg",
      title: "IHSG Macet Pada Hari Ini, 6 September",
      viewers: "1.902",
    },
  ]
  return (
    <section className="w-full h-max flex flex-col justify-center items-center py-20">
      <div className="w-full px-12 py-12 flex">
        <div className="w-2/3 flex items-center">
          <h1 className="font-bold text-5xl">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h1>
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
            {blogs.map(({ imageUrl, title, description }, index) => (
              <a
                href={`/issue/${category}/1`}
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
                    <a className="text-slate-300 border-b-2 border-slate-300">
                      Lihat Selengkapnya
                    </a>
                  </p>
                </div>
              </a>
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
