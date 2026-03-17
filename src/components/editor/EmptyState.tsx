import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { IconCloud } from "@tabler/icons-react"
import useImageUpload from "@/hooks/useImageUpload"
import { useDropzone } from "react-dropzone"
import usePagesStore from "@/store/usePagesStore"

export default function EmptyState() {
  const { onDrop, isProcessing } = useImageUpload()
  const pages = usePagesStore((state) => state.pages)
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
      "image/webp": [".webp"],
    },
    multiple: true,
    disabled: isProcessing,
  
  })

    
    
  return (
    <Empty className="h-full w-full border border-dashed" {...getRootProps()}>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconCloud />
        </EmptyMedia>
        <EmptyTitle>Cloud Storage Empty</EmptyTitle>
        <EmptyDescription>
          Upload files to your cloud storage to access them anywhere.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          <input type="file" {...getInputProps()}></input>
          Upload Files
        </Button>
      </EmptyContent>
    </Empty>
  )
}
