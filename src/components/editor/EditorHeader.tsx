
export default function EditorHeader() {
  return (
    <div className="fixed flex w-full justify-center mt-5">
      <header className="z-50 w-7xl rounded-full   border-white/30 bg-white px-5 py-2.5 shadow-lg backdrop-blur-lg backdrop-saturate-150">
        <div className="flex items-center justify-start gap-4">
          <div className="h-11.5 w-11.5 rounded-full">
            
            <img
              src="logo1.svg"
              alt="brand-logo"
              className="h-full w-full rounded-full"
            />
          </div>
          <h1 className="text-xl font-semibold text-black">ThePdfGuy</h1>
        </div>
      </header>
    </div>
  )
}
