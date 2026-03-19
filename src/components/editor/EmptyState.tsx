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


export default function EmptyState() {
  const { onDrop, isProcessing } = useImageUpload()

  
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
    <Empty className="h-88 w-7xl  border-dashed border-4 bg-white " {...getRootProps()}>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconCloud />
        </EmptyMedia>
        <EmptyTitle>Upload File</EmptyTitle>
        <EmptyDescription>
          PNG, JPG, PDF up to 10MB
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button  size="lg">
          <input type="file" {...getInputProps()}></input>
          Upload Files
        </Button>
      </EmptyContent>
    </Empty>
  )
}
