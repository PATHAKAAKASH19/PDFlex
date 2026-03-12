import { create } from "zustand"
import { v4 as uuid } from "uuid"

type Rotation = 0 | 90 | 180 | 270

type Page = {
  id: string
  file: File
  objectUrl: string
  rotation: Rotation
  name: string
  size: number
}

type PagesStore = {
  pages: Page[]
  addPages: (files: File[]) => void
  rotatePage: (id: string) => void
  deletePage: (id: string) => void
  reOrderPages: (fromIndex: number, toIndex: number) => void
  clearAll: () => void
}

function moveTo(array: Page[], fromIndex: number, toIndex: number): Page[] {
  const newArray = [...array]
  newArray.splice(toIndex, 0, newArray.splice(fromIndex, 1)[0])
  return newArray
}

const usePagesStore = create<PagesStore>((set) => ({
  pages: [],
  addPages: (files: File[]) => {
    const newPageArray = files.map((file: File) => ({
      id: uuid(),
      file: file,
      objectUrl: URL.createObjectURL(file),
      rotation: 0 as Rotation,
      name: file.name,
      size: file.size,
    }))

    set((state) => ({
      pages: [...state.pages, ...newPageArray],
    }))
  },

  rotatePage: (id: string) => {
    set((state) => ({
      pages: state.pages.map((page) =>
        page.id === id
          ? { ...page, rotation: ((page.rotation + 90) % 360) as Rotation }
          : page
      ),
    }))
  },

  deletePage: (id: string) => {
    set((state) => ({
      pages: state.pages.filter((page: Page) => page.id !== id),
    }))
  },

  reOrderPages: (fromIndex: number, toIndex: number) => {
    set((state) => ({ pages: moveTo(state.pages, fromIndex, toIndex) }))
  },

  clearAll: () => {
    set(() => ({ pages: [] }))
  },
}))

export default usePagesStore
