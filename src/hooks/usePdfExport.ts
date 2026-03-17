import { toast } from "sonner"
import usePagesStore from "@/store/usePagesStore"
import { useState } from "react"
import { createPDF, downloadPdf } from "@/lib/pdfGenerator"

export default function usePdfExports() {
  const [isExporting, setIsExporting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)

  const pages = usePagesStore((state) => state.pages)

  const exportPdf = async () => {
    if (pages.length < 1) {
      toast.error("Add at least one image before exporting")
      return
    }

    setIsExporting(true)
    setProgress(0)
    setError(null)
    try {
      const timestamp = new Date().toISOString().split("T")[0]
      const filename = `document-${timestamp}.pdf`

      const pdfBytes = await createPDF(pages, (pageProgress) =>
        setProgress(pageProgress)
      )

      downloadPdf(pdfBytes as Uint8Array<ArrayBuffer>, filename)

      setProgress(100)
      toast.success(
        `PDF exported — ${pages.length} page${pages.length > 1 ? "s" : ""}`
      )
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Export failed"
      toast.error(`${message} — please try again`)
    } finally {
      setTimeout(() => {
        setIsExporting(false)
        setProgress(0)
      }, 600)
    }
  }

  return {
    exportPdf,
    isExporting,
    error,
    progress,
  }
}
