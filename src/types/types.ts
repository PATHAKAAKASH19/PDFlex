type Rotation = 0 | 90 | 180 | 270

type Page = {
  id: string
  file: File
  objectUrl: string
  rotation: Rotation
  name: string
  size: number
  thumbnail: string
}

type PagesStore = {
  pages: Page[]
  addPages: (files: File[], thumbnails: string[]) => void
  rotatePage: (id: string) => void
  deletePage: (id: string) => void
  reOrderPages: (fromIndex: number, toIndex: number) => void
  clearAll: () => void
}

export type {Rotation, Page, PagesStore}