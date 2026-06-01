export interface Project {
  slug: string
  title: string
  label: string
  coverImage: string
  tags: string[]
  year: number
  featured: boolean
  description?: string
  role?: string
}
