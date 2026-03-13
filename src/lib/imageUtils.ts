import imageCompression from "browser-image-compression"

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"] as const
const MAX_SIZE_MB = 50
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024

function validateImageFile(file: File): boolean {
  const isValidType = ALLOWED_TYPES.includes(
    file.type as (typeof ALLOWED_TYPES)[number]
  )
  const isValidSize = file.size <= MAX_SIZE_BYTES
  return isValidType && isValidSize
}

function generateThumbnail(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    const tempUrl = URL.createObjectURL(file)
    img.src = tempUrl

    img.onload = () => {
      const MAX = 200
      const ratio = Math.min(MAX / img.width, MAX / img.height)
      const scaledWidth = img.width * ratio
      const scaledHeight = img.height * ratio

      const canvas = document.createElement("canvas")
      canvas.width = scaledWidth
      canvas.height = scaledHeight

      const ctx = canvas.getContext("2d")
      if (!ctx) {
        URL.revokeObjectURL(tempUrl)
        reject(new Error("canvas context not available"))
        return
      }

      ctx.drawImage(img, 0, 0, scaledWidth, scaledHeight)

      const dataUrl = canvas.toDataURL("image/jpeg", 0.7)
      URL.revokeObjectURL(tempUrl)
      resolve(dataUrl)
    }

    img.onerror = () => {
      URL.revokeObjectURL(tempUrl)
      reject(new Error(`Failed to load image: ${file.name}`))
    }
  })
}

async function compressImage(file: File): Promise<File> {
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 2480,
    useWebWorker: true,
    fileType: file.type,
  }

  const compressedFile = await imageCompression(file, options)
  return compressedFile
}


function revokeObjectURL(url:string):void {
    
 if (url.startsWith('blob:')) {
    URL.revokeObjectURL(url)
  }
}

export { validateImageFile, compressImage, generateThumbnail, revokeObjectURL }
