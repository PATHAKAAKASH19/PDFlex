import { PDFDocument, PDFPage, degrees } from "pdf-lib"
import { compressImage } from "./imageUtils"
import type { Rotation, Page } from "@/types/types"


async function convertWebpToJpeg(file: File): Promise<Uint8Array> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    const imgUrl = URL.createObjectURL(file)
    img.src = imgUrl

    img.onload = () => {
      const canvas = document.createElement("canvas")

      canvas.width = img.width
      canvas.height = img.height

      const ctx = canvas.getContext("2d")

      if (!ctx) {
        URL.revokeObjectURL(imgUrl)
        reject(new Error("Canvas context not available"))
        return
      }

      ctx.drawImage(img, 0, 0)
      URL.revokeObjectURL(imgUrl)

      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error("Failed to convert webp to jpeg"))
            return
          }

          blob.arrayBuffer().then((buffer) => {
            resolve(new Uint8Array(buffer))
          })
        },
        "image/jpeg",
        0.9
      )
    }

    img.onerror = () => {
      URL.revokeObjectURL(imgUrl)
      reject(new Error("Failed to load webp image"))
    }
  })
}

async function embedImage(
  pdfDoc: PDFDocument,
  file: File,
  rotation: Rotation
) : Promise<void>{

    let embededImage
    
    if (file.type === `image/jpeg`) {
        const imageBytes = new Uint8Array(await file.arrayBuffer())
        embededImage = await pdfDoc.embedJpg(imageBytes)

    } else if (file.type === `image/png`) {
        const imageBytes = new Uint8Array(await file.arrayBuffer())
        embededImage = await pdfDoc.embedPng(imageBytes)
    } else if (file.type === `image/webp`) {
        const jpegBytes = await convertWebpToJpeg(file);
        embededImage = await pdfDoc.embedJpg(jpegBytes)
    } else {
        throw new Error(`Unsupported image type: ${file.type}`)
    }

    const { width, height } = embededImage
    const page = pdfDoc.addPage([width, height])

    page.drawImage(embededImage, {
        x: 0,
        y: 0,
        width,
        height
    })
    
    applyRotation(page, rotation)
}

function applyRotation(page: PDFPage, rotation: Rotation): void {
  if (rotation === 0) return
  page.setRotation(degrees(rotation))
}

async function createPDF(pages: Page[], onProgress?: (progess: number) => void): Promise<Uint8Array> {
    

    const pdfDoc = await PDFDocument.create()

    for (let i = 0; i < pages.length; i++){
        const page = pages[i]

        const compressedFile = await compressImage(page.file)

        await embedImage(pdfDoc, compressedFile, page.rotation)

        if (onProgress) {
            const progess = Math.round(((i + 1) / pages.length) * 100)
            
            onProgress(progess)
        }
    }

    const pdfBytes = await pdfDoc.save()

    return pdfBytes
}


function downloadPdf(bytes: Uint8Array<ArrayBuffer>, fileName: string = 'document.pdf'): void {
    
    const blob = new Blob([bytes], { type: 'application/pdf' })
    
    const blobUrl = URL.createObjectURL(blob)

    const anchor = document.createElement('a')
    anchor.href = blobUrl
    anchor.download = fileName

    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)

    URL.revokeObjectURL(blobUrl)
}


export {createPDF, downloadPdf}