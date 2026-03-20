import usePageManager from "@/hooks/usePageManager"
import { DragDropProvider } from "@dnd-kit/react"
import { isSortable } from "@dnd-kit/react/sortable"
import { Button } from "../ui/button"
import PageCard from "./PageCard"
import usePdfExports from "@/hooks/usePdfExport"
import ProgressBar from "./ProgressBar"

export default function PageGrid() {
  const { pages, deletePage, reOrderPages, rotatePage, clearAll } =
    usePageManager()

  const { error, progress, isExporting, exportPdf } = usePdfExports()

  return (
    <>
      {pages.length > 0 && (
        <div className="my-5 flex flex-wrap gap-3">
          <Button onClick={clearAll} variant="outline">
            Clear All
          </Button>
          <Button onClick={exportPdf}>Generate PDF</Button>
        </div>
      )}

      {isExporting && <ProgressBar progress={progress} />}

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6">
        <DragDropProvider
          onDragEnd={(event) => {
            if (event.canceled) return

            const { source } = event.operation

            if (isSortable(source)) {
              const { initialIndex, index } = source

              if (initialIndex !== index) {
                reOrderPages(initialIndex, index)
              }
            }
          }}
        >
          {pages.length > 0 &&
            pages.map((page, index) => (
              <PageCard
                key={page.id}
                index={index}
                page={page}
                deletePage={deletePage}
                rotatePage={rotatePage}
              />
            ))}
        </DragDropProvider>
      </div>

     
    </>
  )
}
