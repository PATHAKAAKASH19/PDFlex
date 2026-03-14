import { useState } from "react"
import usePagesStore from "@/store/usePagesStore"
import { validateImageFile, generateThumbnail } from "@/lib/imageUtils"
import { toast } from "sonner"

function useImageUpload() {
  const [isProcessing, setIsProcessing] = useState(false)
  const addPages = usePagesStore((state) => state.addPages)

  const onDrop = async (files: File[]) => {
    const validatedFiles = files.filter((file) => validateImageFile(file))
    const inValidatedFiles = files.filter(
      (file: File) => !validateImageFile(file)
    )

    if (inValidatedFiles.length > 0) {
      toast.error(
        `${inValidatedFiles.length} file(s) rejected — JPG, PNG, WEBP under 50MB only`
      )
    }

    if (validatedFiles.length === 0) return
    try {
      setIsProcessing(true)

      const thumbnails = await Promise.all(
        validatedFiles.map((file: File) => generateThumbnail(file))
      )

      addPages(validatedFiles, thumbnails)

      toast.success(
        `${validatedFiles.length} image${validatedFiles.length > 1 ? "s" : ""} added successfully`
      )
    } catch (error: unknown) {
      toast.error("Something went wrong while processing images")
    } finally {
      setIsProcessing(false)
    }
  }

  return { isProcessing, onDrop }
}

export default useImageUpload
