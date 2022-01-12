import React from "react"

export const RecommendedIssue = () => {
  return (
    <div className="w-full h-max px-12 flex justify-center py-16">
      <div className="w-3/12 h-full flex flex-col gap-4 border-black border-r-2">
        <article className="h-4/6 w-full flex px-6 flex-col items-center gap-6  border-b-2 border-black">
          <h1 className="font-bold text-4xl">
            Kabar Terkini Calon Avanza Baru, Meluncur Akhir Tahun dan Pakai FWD
          </h1>
          <p className="text-xl font-semibold">
            Kehadiran Toyota Avanza baru tampaknya mulai mendekati kenyataan.
            Rumors ini menguat setelah muncul gambar render yang viral di
            internet beberapa waktu lalu
          </p>
        </article>
        <article className="h-2/6 w-full flex px-6 flex-col items-center gap-6  ">
          <h1 className="font-bold text-4xl">
            Daftar Harga Mobil Toyota Setelah PPnBM 25 Persen Berlaku
          </h1>
          <p className="text-xl font-semibold">
            Perubahan sasis ini turut mengubah dapur pacunya. Namun urusan mesin
            sebetulnya tidak sepenuhnya baru.
          </p>
        </article>
      </div>
      <div className="w-6/12 gap-32 px-20 flex flex-col justify-between items-center">
        <article className="flex flex-col gap-4">
          <img
            src="recommended_issue.jpg"
            alt="recommended issue"
            className="w-[600px] h-[320px]"
          />
          <h1 className="font-bold text-4xl">
            Kabar Terkini Calon Avanza Baru, Meluncur Akhir Tahun dan Pakai FWD
          </h1>
          <p className="text-xl font-semibold">
            Kehadiran Toyota Avanza baru tampaknya mulai mendekati kenyataan.
            Rumors ini menguat setelah muncul gambar render yang viral di
            internet beberapa waktu lalu
          </p>
        </article>
        <span className="border-b-2 border-black w-max">
          See all recomended
        </span>
      </div>
      <div className="w-3/12 h-full flex flex-col gap-4 border-black border-l-2">
        <article className="h-4/6 w-full flex px-6 flex-col items-center gap-6">
          <h1 className="font-bold text-4xl">
            Kabar Terkini Calon Avanza Baru, Meluncur Akhir Tahun dan Pakai FWD
          </h1>
          <p className="text-xl font-semibold">
            Kehadiran Toyota Avanza baru tampaknya mulai mendekati kenyataan.
            Rumors ini menguat setelah muncul gambar render yang viral di
            internet beberapa waktu lalu
          </p>
        </article>
        <article className="h-2/6 w-full flex px-6 flex-col items-center gap-6">
          <h1 className="font-bold text-4xl">
            Daftar Harga Mobil Toyota Setelah PPnBM 25 Persen Berlaku
          </h1>
          <p className="text-xl font-semibold">
            Perubahan sasis ini turut mengubah dapur pacunya. Namun urusan mesin
            sebetulnya tidak sepenuhnya baru.
          </p>
        </article>
      </div>
    </div>
  )
}
