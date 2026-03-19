import EmptyState from "@/components/editor/EmptyState"
import EditorHeader from "@/components/editor/EditorHeader"
import PageGrid from "@/components/editor/PageGrid"
import Footer from "@/components/layout/Footer"

export default function PDFEditorPage() {

  return (
    <div
      className="flex w-full justify-center"
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
        className="pointer-events-none absolute top-1/2 left-1/2 z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 opacity-20"
      />
      <EditorHeader></EditorHeader>

      <div className="flex w-7xl flex-col justify-center gap-10">
        <div className="mt-30">
          <EmptyState></EmptyState>
          <PageGrid></PageGrid>
        </div>
        <div className="relative bottom-0 flex w-full justify-center">
          <Footer />
        </div>
      </div>
    </div>
  )
}
