import { create } from "zustand"
import { v4 as uuid } from "uuid"
import type { Page, PagesStore, Rotation } from "@/types/types" 

function moveTo(array: Page[], fromIndex: number, toIndex: number): Page[] {
  const newArray = [...array]
  newArray.splice(toIndex, 0, newArray.splice(fromIndex, 1)[0])
  return newArray
}

const usePagesStore = create<PagesStore>((set) => ({
  pages: [],
  addPages: (files, thumbnails) => {
    const newPageArray = files.map((file, index) => ({
      id: uuid(),
      file: file,
      objectUrl: URL.createObjectURL(file),
      rotation: 0 as Rotation,
      name: file.name,
      size: file.size,
      thumbnail:thumbnails[index]
    }))

    set((state) => ({
      pages: [...state.pages, ...newPageArray],
    }))
  },

  rotatePage: (id) => {
    set((state) => ({
      pages: state.pages.map((page) =>
        page.id === id
          ? { ...page, rotation: ((page.rotation + 90) % 360) as Rotation }
          : page
      ),
    }))
  },

  deletePage: (id) => {
    set((state) => ({
      pages: state.pages.filter((page) => page.id !== id),
    }))
  },

  reOrderPages: (fromIndex, toIndex) => {
    set((state) => ({ pages: moveTo(state.pages, fromIndex, toIndex) }))
  },

  clearAll: () => {
    set(() => ({ pages: [] }))
  },
}))

export default usePagesStore
