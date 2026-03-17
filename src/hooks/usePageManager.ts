import usePagesStore from "@/store/usePagesStore"
import { revokeObjectURL } from "@/lib/imageUtils"
import { toast } from "sonner"

export default function usePageManager() {
  const pages = usePagesStore((state) => state.pages)
  const deletePageFromStore = usePagesStore((state) => state.deletePage)
  const rotatePageInStore = usePagesStore((state) => state.rotatePage)
  const clearAllFromStore = usePagesStore((state) => state.clearAll)
  const reorderPagesInStore = usePagesStore((state) => state.reOrderPages)

  const deletePage = (id: string) => {
    const page = pages.find((p) => p.id === id)
    if (!page) return

    revokeObjectURL(page.objectUrl)
    deletePageFromStore(id)
    toast.success("Page Deleted Successfully")
  }

  const rotatePage = (id: string) => {
    rotatePageInStore(id)
  }
  const clearAll = () => {
    pages.forEach((p) => revokeObjectURL(p.objectUrl))
    clearAllFromStore()
    toast.success("All pages cleared")
  }

  const reOrderPages = (fromIndex: number, toIndex: number) => {
    reorderPagesInStore(fromIndex, toIndex)
  }

  return { pages, deletePage, clearAll, reOrderPages, rotatePage }
}
