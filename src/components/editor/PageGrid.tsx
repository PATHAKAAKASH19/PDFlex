import usePageManager from "@/hooks/usePageManager"
import { DragDropProvider } from "@dnd-kit/react"
import { isSortable } from "@dnd-kit/react/sortable"
import { Button } from "../ui/button"
import PageCard from "./PageCard"

export default function PageGrid() {
  const { pages, deletePage, reOrderPages, rotatePage, clearAll } = usePageManager()

  return (
    <>
       { pages.length >0&&<Button onClick={clearAll}>Clear All</Button>}
      <div className='gap-4" grid grid-cols-6'>
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
