import { useSortable } from "@dnd-kit/react/sortable"
import {
  Card,
  // CardAction,
  // CardContent,
  // CardDescription,
  // CardFooter,
  // CardHeader,
  // CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { IconTrash, IconRotate } from "@tabler/icons-react"
import type { Page } from "../../types/types"
// import { AspectRatio } from "../ui/aspect-ratio"

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
    
    <Card className="h-fit w-fit" ref={ref}>
      <div>
        <Button onClick={() => deletePage(page.id)}>
          <IconTrash />
        </Button>
        <Button onClick={() => rotatePage(page.id)}>
          <IconRotate />
        </Button>
      </div>

      <img
        src={`${page.thumbnail}`}
        alt={`${page.name}`}
        className="h-full w-full rounded-lg object-contain"
      />
    </Card>
  )
}
