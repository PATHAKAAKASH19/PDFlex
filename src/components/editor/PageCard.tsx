import { useSortable } from "@dnd-kit/react/sortable"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { IconTrash, IconRotate } from "@tabler/icons-react"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import type { Page } from "../../types/types"

type PageCardProps = {
  page: Page
  index: number
  deletePage: (id: string) => void
  rotatePage: (id: string) => void
}

export default function PageCard({
  page,
  index,
  deletePage,
  rotatePage,
}: PageCardProps) {
  
  
  const { ref } = useSortable({ id: page.id, index })




  return (
    <Card
      ref={ref}
      className="group relative aspect-square cursor-move overflow-hidden border-2 transition-colors hover:border-primary"
    >
      <div className="absolute inset-x-0 top-0 z-10 flex justify-center gap-2 bg-gradient-to-b from-black/50 to-transparent p-2 opacity-0 transition-opacity group-hover:opacity-100">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              variant="secondary"
              onClick={(e) => {
                e.stopPropagation()
                deletePage(page.id)
              }}
              className="h-8 w-8 bg-white/90 text-gray-700 hover:bg-white"
            >
              <IconTrash className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Delete</p>
          </TooltipContent>
        </Tooltip>
        <Button
          size="icon"
          variant="secondary"
          onClick={(e) => {
            e.stopPropagation()
            rotatePage(page.id)
          }}
          className="h-8 w-8 bg-white/90 text-gray-700 hover:bg-white"
        >
          <IconRotate className="h-4 w-4" />
        </Button>
      </div>

     
      <div className="relative h-full w-full">
        <img
          src={page.thumbnail}
          alt={`Page ${index + 1}`}
          className="absolute inset-0 h-full w-full object-contain p-1"
        />
      </div>

      <div className="absolute bottom-2 left-2 rounded bg-black/50 px-2 py-1 text-xs text-white">
        {index + 1}
      </div>
    </Card>
  )
}
