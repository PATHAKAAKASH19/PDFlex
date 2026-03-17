import React from "react"
import EmptyState from "@/components/editor/EmptyState"
import usePagesStore from "@/store/usePagesStore"

export default function PDFEditorPage() {
  const pages = usePagesStore((state) => state.pages)
  return (
    <div className="h-dvh w-full">
      <EmptyState></EmptyState>
      <h2>Akash</h2>

      {pages.length > 0 ? (
        pages.map((page) => (
          <div id={page.id}>
            <img src={`${page.thumbnail}`} alt="" />
          </div>
        ))
      ) : (
        <div>empty</div>
      )}
    </div>
  )
}
