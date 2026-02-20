export interface ProjectSection {
  problem: string
  approach: string
  tools: string[]
  results: string
}

export interface Project {
  slug: string
  title: string
  shortDescription: string
  tags: string[]
  content: ProjectSection
  role: string
}

export const projects: Project[] = []
