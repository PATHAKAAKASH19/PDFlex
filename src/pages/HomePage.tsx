import React from "react"
import { useNavigate } from "react-router-dom"
import Footer from "../components/layout/Footer"
import FAQ from "@/components/landing/FAQ"

export default function HomePage() {
  const navigate = useNavigate()

  const handleNavigate = (route: string) => {
    navigate(route)
  }

  return (
    <div className="relative min-h-screen w-full">
      <div
        className="fixed inset-0 -z-10"
        style={
          {
            backgroundColor: `hsla(73,71%,75%,1)`,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 3000 3000' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"),radial-gradient(circle at 50% 0%, hsla(198,71%,36%,1) 49.15975941515135%,transparent 102.23193813062571%)`,
            backgroundBlendMode: `overlay,normal`,
          } as React.CSSProperties
        }
      >
        <img
          src="bg1.jpg"
          alt="preview"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 flex flex-col">
        <div className="sticky top-0 z-50 flex w-full justify-center pt-6 ">
          <header className="flex justify-between items-center shadow-2xs w-7xl rounded-full border-white/30 px-5 py-1">
            <div className="flex items-center justify-start gap-2">
              <div className="h-11.5 w-11.5 rounded-full">
                <img
                  src="logo1.svg"
                  alt="brand-logo"
                  className="h-full w-full rounded-full"
                />
              </div>
              <h1 className="text-xl font-semibold text-white">ThePdfGuy</h1>
            </div>
            <div>
              <ul className="flex gap-8 text-[18px]">
                <li>Home</li>
                <li>Features</li>
                <li>Faq</li>
              </ul>
            </div>
        
          </header>
        </div>

        <div className="flex h-screen w-full flex-col items-center pt-50">
          <h1 className="relative text-center text-[60px] ">
            Turn any image into a{" "}
            <span className="font-semibold text-[#D9ED92]">Perfect PDF</span>
          </h1>
          <h2 className="max-w-2xl px-4 text-center text-[22px] text-white/80">
            Free, private, and entirely in your browser. No account needed,
            ever.
          </h2>

          <button
            type="button"
            className="mt-9 rounded-full bg-[#D9ED92] px-5 py-3 font-medium text-black transition-colors hover:bg-[#c9dd82] cursor-pointer"
            onClick={() => handleNavigate(`/pdf-editor`)}
          >
            Create Instant Pdf
          </button>
        </div>


        <div className="flex justify-center mb-5">
          <Footer />
        </div>
      </div>
    </div>
  )
}
// ;<div
 
// />

// ;<div
//   style={
//     {
//       backgroundColor: `hsla(222,100%,83%,1)`,
//       backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 3000 3000' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"),radial-gradient(circle at 50% 0%, hsla(218,63%,95%,1) 49.15975941515135%,transparent 102.23193813062571%)`,
//       backgroundBlendMode: `overlay,normal`,
//     } as React.CSSProperties
//   }
// />
