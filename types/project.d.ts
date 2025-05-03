
import { Technology } from "./technology"

export interface Project {
  id: string
  image: {
    src: string
    alt: string
    width?: number
    height?: number
  }
  url: string
  technologies: Technology['id'][]
  date: {
    start: string
    end?: string
    isCurrent?: boolean
  }
  // SEO Metadata
  meta?: {
    keywords?: string[]
  }
}

export interface ProjectI18n extends Project{
  title: string
  description: string
  contribution: string
}