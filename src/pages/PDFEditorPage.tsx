import EmptyState from "@/components/editor/EmptyState"
import EditorHeader from "@/components/editor/EditorHeader"
import PageGrid from "@/components/editor/PageGrid"

export default function PDFEditorPage() {

  return (
    <div className="w-full flex flex-col">

      <EditorHeader></EditorHeader>
      <div className="h-fit w-full">
        <EmptyState></EmptyState>
      </div>
      <PageGrid></PageGrid>
    </div>
  )
}
