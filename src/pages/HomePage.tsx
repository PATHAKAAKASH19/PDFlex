import React from "react"
import { useNavigate } from "react-router-dom"
import Footer from "../components/layout/Footer"
import FAQ from "@/components/landing/FAQ"
import { IconFile, IconCloudUpload } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const navigate = useNavigate()

  const handleNavigate = (route: string) => {
    navigate(route)
  }

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center dark:bg-black">
      <div className="fixed inset-0 -z-10 dark:bg-black">
        <img
          src="bg1.jpg"
          alt="preview"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 w-7xl rounded-2xl bg-white dark:bg-black">
        <header className="fixed z-50 flex w-7xl items-center justify-between bg-transparent px-5 py-5 shadow-md backdrop-blur-sm">
          <div className="flex items-center gap-3 rounded-2xl">
            <div className="round h-10 w-10">
              <img src="logo1.svg" className="h-full w-full rounded-full"></img>
            </div>
            <h1 className="text-[20px] font-semibold italic">PDF_BRO</h1>
          </div>
          <div>
            <ul className="flex w-2xs items-center justify-between gap-3">
              <li>Features</li>
              <li>FAQ</li>
              <li>How it Works</li>
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-2xl bg-[#D9ED92] px-3 py-2 text-black">
              Generate Pdf
            </button>
            <button className="rounded-2xl bg-black px-3 py-2 text-[#D9ED92] dark:bg-white dark:text-black">
              Compress Pdf
            </button>
          </div>
        </header>

        <div className="flex w-full flex-col items-center justify-center gap-20 bg-gray-50 pt-40 shadow-2xl">
          <div className="flex h-80 flex-col items-center justify-end">
            <h1 className="relative text-center text-[60px] leading-tight">
              Create, Compress, Merge
              <span className="block text-[#D9ED92]">Perfect PDF</span>{" "}
            </h1>
            <h2 className="max-w-2xl px-4 text-center text-[20px] text-gray-500/80 dark:text-white/80">
              Free, private, and entirely in your browser. No account needed,
              ever.
            </h2>

            <button
              type="button"
              className="mt-9 cursor-pointer rounded-full bg-[#D9ED92] px-5 py-3 text-black transition-colors hover:bg-[#c9dd82]"
              onClick={() => handleNavigate(`/pdf-editor`)}
            >
              Generate Pdf
            </button>
          </div>

          <div className="mt-30 flex w-full flex-col items-center justify-center border pt-5">
            <div>
              <h1 className="text-center text-3xl">
                Built for simplicity.
                <span className="block text-3xl">Packed with features.</span>
              </h1>
             
            </div>

            <div className="grid w-full grid-cols-3 place-items-center gap-5 px-5 py-8">
              <div className="flex w-full flex-col items-center rounded-2xl border-2 bg-[#D9ED92]/50 px-8 py-6 text-center">
                <div className="rounded-2xl bg-white px-2 py-2">
                  <IconCloudUpload color="black"></IconCloudUpload>
                </div>
                <h1 className="pt-2 text-[20px] text-black">
                  Drag & Drop upload
                </h1>
                <h2 className="pt-2 text-[15px] text-gray-700">
                  Drop as many images as you need at once. JPG, PNG and WEBP all
                  supported out of the box.
                </h2>
              </div>
              <div className="flex w-full flex-col items-center rounded-2xl border-2 bg-[#D9ED92]/50 px-8 py-6 text-center">
                <div className="rounded-2xl bg-white px-2 py-2">
                  <IconCloudUpload color="black"></IconCloudUpload>
                </div>
                <h1 className="pt-2 text-[20px] text-black">
                  Drag & Drop upload
                </h1>
                <h2 className="pt-2 text-[15px] text-gray-700">
                  Drop as many images as you need at once. JPG, PNG and WEBP all
                  supported out of the box.
                </h2>
              </div>
              <div className="flex w-full flex-col items-center rounded-2xl border-2 bg-[#D9ED92]/50 px-8 py-6 text-center">
                <div className="rounded-2xl bg-white px-2 py-2">
                  <IconCloudUpload color="black"></IconCloudUpload>
                </div>
                <h1 className="pt-2 text-[20px] text-black">
                  Drag & Drop upload
                </h1>
                <h2 className="pt-2 text-[15px] text-gray-700">
                  Drop as many images as you need at once. JPG, PNG and WEBP all
                  supported out of the box.
                </h2>
              </div>
              <div className="flex w-full flex-col items-center rounded-2xl border-2 bg-[#D9ED92]/50 px-8 py-6 text-center">
                <div className="rounded-2xl bg-white px-2 py-2">
                  <IconCloudUpload color="black"></IconCloudUpload>
                </div>
                <h1 className="pt-2 text-[20px] text-black">
                  Drag & Drop upload
                </h1>
                <h2 className="pt-2 text-[15px] text-gray-700">
                  Drop as many images as you need at once. JPG, PNG and WEBP all
                  supported out of the box.
                </h2>
              </div>
              <div className="flex w-full flex-col items-center rounded-2xl border-2 bg-[#D9ED92]/50 px-8 py-6 text-center">
                <div className="rounded-2xl bg-white px-2 py-2">
                  <IconCloudUpload color="black"></IconCloudUpload>
                </div>
                <h1 className="pt-2 text-[20px] text-black">
                  Drag & Drop upload
                </h1>
                <h2 className="pt-2 text-[15px] text-gray-700">
                  Drop as many images as you need at once. JPG, PNG and WEBP all
                  supported out of the box.
                </h2>
              </div>
              <div className="flex w-full flex-col items-center rounded-2xl border-2 bg-[#D9ED92]/50 px-8 py-6 text-center">
                <div className="rounded-2xl bg-white px-2 py-2">
                  <IconCloudUpload color="black"></IconCloudUpload>
                </div>
                <h1 className="pt-2 text-[20px] text-black">
                  Drag & Drop upload
                </h1>
                <h2 className="pt-2 text-[15px] text-gray-700">
                  Drop as many images as you need at once. JPG, PNG and WEBP all
                  supported out of the box.
                </h2>
              </div>
            </div>
          </div>

          <FAQ></FAQ>
          <div className="flex h-50 w-full flex-col items-center justify-center gap-5 border-y bg-gray-50">
            <h2 className="text-3xl">Wants to Generate Unlimited Pdf Now ??</h2>
            <button className="rounded-2xl bg-[#D9ED92] px-4 py-2 hover:bg-[#c9dd82]">
              Generate Pdf
            </button>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

//  ;<div className="relative z-10 flex flex-col items-center justify-center rounded-2xl">
//    <div className="flex w-7xl flex-col items-center rounded-2xl bg-white pt-50">
//      <div className="sticky top-0 z-50 flex w-full justify-center rounded-2xl pt-6">
//        <header className="flex w-7xl items-center justify-between rounded-full border-white/30 px-5 py-1 shadow-2xs">
//          <div className="flex items-center justify-start gap-2">
//            <div className="h-11.5 w-11.5 rounded-full">
//              <img
//                src="logo1.svg"
//                alt="brand-logo"
//                className="h-full w-full rounded-full"
//              />
//            </div>
//            <h1 className="text-xl font-semibold text-white">ThePdfGuy</h1>
//          </div>
//          <div>
//            <ul className="flex gap-8 text-[18px]">
//              <li>Home</li>
//              <li>Features</li>
//              <li>Faq</li>
//            </ul>
//          </div>
//        </header>
//      </div>
//      <h1 className="relative text-center text-[60px]">
//        Turn any image into a{" "}
//        <span className="font-semibold text-[#D9ED92]">Perfect PDF</span>
//      </h1>
//      <h2 className="max-w-2xl px-4 text-center text-[22px] text-white/80">
//        Free, private, and entirely in your browser. No account needed, ever.
//      </h2>

//      <button
//        type="button"
//        className="mt-9 cursor-pointer rounded-full bg-[#D9ED92] px-5 py-3 font-medium text-black transition-colors hover:bg-[#c9dd82]"
//        onClick={() => handleNavigate(`/pdf-editor`)}
//      >
//        Create Instant Pdf
//      </button>

//      <div className="flex w-7xl flex-col border-2">
//        <div>
//          <h1>Features</h1>
//        </div>
//        <div className="grid grid-cols-3">
//          <div className="w-full">
//            <div>
//              <IconFile></IconFile>
//            </div>
//            <h1>Akash Pathak</h1>
//          </div>

//          <div></div>
//          <div></div>
//        </div>

//        <div className="mb-5 flex justify-center">
//
//        </div>
//      </div>
//    </div>

//    <div></div>
//  </div>
