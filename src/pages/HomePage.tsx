import { motion } from "motion/react"
import { useNavigate } from "react-router-dom"
import Footer from "../components/layout/Footer"
import FAQ from "@/components/landing/FAQ"
import {
  IconCloudUpload,
  IconLock,
  IconWorldOff,
  IconUserCancel,
  IconArrowMerge,
  IconFold,
  IconBrandGithub,
  IconMoon,
  IconSun,
} from "@tabler/icons-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useSound } from "@/hooks/use-sound"
import { click001Sound } from "@/lib/click-001"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"




export default function HomePage() {
  const navigate = useNavigate()
  const {theme, setTheme} = useTheme()

  
  const [play] = useSound(click001Sound)
  const handleNavigate = (route: string) => {
    play()
    navigate(route)
  }

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center dark:bg-black/30">
      <div className="fixed inset-0 -z-10 dark:bg-black">
        <img
          src="bg1.jpg"
          alt="preview"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20 dark:opacity-14"
        />
      </div>

      <div className="relative z-10 w-7xl rounded-2xl bg-white dark:bg-gray-500">
        <header className="fixed z-50 flex w-7xl items-center justify-between bg-transparent px-5 py-5 shadow-md backdrop-blur-sm dark:border-b">
          <div className="flex items-center gap-3 rounded-2xl">
            <div className="round h-10 w-10">
              <img src="logo1.svg" className="h-full w-full rounded-full"></img>
            </div>
            <h1 className="text-[20px] font-semibold italic">PDF_BRO</h1>
          </div>
          <div>
            <ul className="flex w-2xs items-center justify-between gap-3">
              <li className="cursor-pointer text-[17px] transition-transform duration-300 ease-in-out hover:scale-110">
                Features
              </li>
              <li className="cursor-pointer text-[17px] transition-transform duration-300 ease-in-out hover:scale-110">
                FAQ
              </li>
              <li className="cursor-pointer text-[17px] transition-transform duration-300 ease-in-out hover:scale-110">
                How it Works
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <IconSun
                    className={`h-5 w-5 ${theme === "dark" ? "hidden" : ""}`}
                  />
                  <IconMoon
                    className={`h-5 w-5 ${theme === "dark" ? "" : "hidden"}`}
                  />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <motion.button>
              <IconBrandGithub />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer rounded-2xl border border-black/50 bg-[#D9ED92] px-3 py-2 text-black shadow-lg hover:bg-[#ecfdac]"
              onClick={() => handleNavigate("/pdf-editor")}
            >
              Generate Pdf
            </motion.button>
          </div>
        </header>

        <div className="flex w-full flex-col items-center justify-center gap-20 bg-gray-50 pt-40 shadow-2xl dark:border-x dark:bg-[#17151c]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex h-90 w-full flex-col items-center justify-end"
          >
            <h1 className="relative text-center text-[60px] leading-tight italic">
              Create, Compress, Merge
              <span className="block font-semibold text-[#b9d84b] italic">
                Perfect PDF
              </span>{" "}
            </h1>
            <h2 className="max-w-2xl px-4 text-center text-[20px] text-gray-500/80 dark:text-white/80">
              Free, private, and entirely in your browser. No account needed,
              ever.
            </h2>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              className="mt-9 cursor-pointer rounded-full border border-black bg-[#D9ED92] px-5 py-3 text-black shadow-lg transition-colors hover:bg-[#ecfdac] dark:shadow-gray-500"
              onClick={() => handleNavigate(`/pdf-editor`)}
            >
              Generate Pdf
            </motion.button>
          </motion.div>

          <div className="mt-30 flex w-full flex-col items-center justify-center border py-20 dark:bg-[#17151c]/90">
            <div>
              <h1 className="text-center text-3xl">
                Built for simplicity.
                <span className="block text-3xl">Packed with features.</span>
              </h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid w-full grid-cols-3 place-items-center gap-5 px-5 py-8"
            >
              <div className="flex w-full flex-col items-center rounded-2xl border-2 bg-[#D9ED92]/50 px-8 py-6 text-center dark:bg-[#D9ED92]">
                <div className="rounded-2xl bg-white px-2 py-2">
                  <IconCloudUpload color="black"></IconCloudUpload>
                </div>
                <h1 className="pt-2 text-[20px] text-black">Image to Pdf</h1>
                <h2 className="pt-2 text-[15px] text-gray-700">
                  Create Pdf from Images. JPG, PNG and WEBP all supported out of
                  the box.
                </h2>
              </div>
              <div className="flex w-full flex-col items-center rounded-2xl border-2 bg-[#D9ED92]/50 px-8 py-6 text-center dark:bg-[#D9ED92]">
                <div className="rounded-2xl bg-white px-2.5 py-2">
                  <IconLock color="black"></IconLock>
                </div>
                <h1 className="pt-2 text-[20px] text-black">100% private</h1>
                <h2 className="pt-2 text-[15px] text-gray-700">
                  Your files never leave your device. No uploads to any server,
                  ever. Close the tab and they are gone.
                </h2>
              </div>
              <div className="flex w-full flex-col items-center rounded-2xl border-2 bg-[#D9ED92]/50 px-8 py-6 text-center dark:bg-[#D9ED92]">
                <div className="rounded-2xl bg-white px-2.5 py-2">
                  <IconWorldOff color="black"></IconWorldOff>
                </div>
                <h1 className="pt-2 text-[20px] text-black">Works offline</h1>
                <h2 className="pt-2 text-[15px] text-gray-700">
                  Once the page loads, you do not need internet. Create PDFs
                  anywhere, even on a plane.
                </h2>
              </div>
              <div className="flex w-full flex-col items-center rounded-2xl border-2 bg-[#D9ED92]/50 px-8 py-6 text-center dark:bg-[#D9ED92]">
                <div className="rounded-2xl bg-white px-2 py-2">
                  <IconUserCancel color="black"></IconUserCancel>
                </div>
                <h1 className="pt-2 text-[20px] text-black">No Login</h1>
                <h2 className="pt-2 text-[15px] text-gray-700">
                  Drop as many images as you need at once. JPG, PNG and WEBP all
                  supported out of the box.
                </h2>
              </div>
              <div className="flex w-full flex-col items-center rounded-2xl border-2 bg-[#D9ED92]/50 px-8 py-6 text-center dark:bg-[#D9ED92]">
                <div className="rounded-2xl bg-white px-2 py-2">
                  <IconArrowMerge color="black"></IconArrowMerge>
                </div>
                <h1 className="pt-2 text-[20px] text-black">Merge Pdf</h1>
                <h2 className="pt-2 text-[15px] text-gray-700">
                  Combine multiple PDF files into one. Upload, arrange and
                  export as a single unified document.
                </h2>
              </div>
              <div className="flex w-full flex-col items-center rounded-2xl border-2 bg-[#D9ED92]/50 px-8 py-6 text-center dark:bg-[#D9ED92]">
                <div className="rounded-2xl bg-white px-2 py-2">
                  <IconFold color="black"></IconFold>
                </div>
                <h1 className="pt-2 text-[20px] text-black">Compress Pdf</h1>
                <h2 className="pt-2 text-[15px] text-gray-700">
                  Reduce your PDF file size without losing quality. Perfect for
                  uploading to size-limited platforms.
                </h2>
              </div>
            </motion.div>
          </div>

          <FAQ></FAQ>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex h-50 w-full flex-col items-center justify-center gap-5 border-y dark:bg-[#17151c]"
          >
            <h2 className="text-3xl">Wants to Generate Unlimited Pdf Now ??</h2>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer rounded-2xl border border-black bg-[#D9ED92] px-4 py-2 shadow-lg hover:bg-[#ecfdac] dark:text-black"
              onClick={() => handleNavigate("/pdf-editor")}
            >
              Generate Pdf
            </motion.button>
          </motion.div>
          <Footer />
        </div>
      </div>
    </div>
  )
}


