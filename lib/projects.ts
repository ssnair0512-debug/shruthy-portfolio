import { readFileSync, readdirSync } from 'fs'
import path from 'path'
import type { Project } from '@/types/project'

const projectsDir = path.join(process.cwd(), 'content/projects')

export function getProjects(): Project[] {
  const files = readdirSync(projectsDir).filter(f => f.endsWith('.json'))
  return files
    .map(file => JSON.parse(readFileSync(path.join(projectsDir, file), 'utf8')) as Project)
    .sort((a, b) => b.year - a.year)
}

export function getProject(slug: string): Project | null {
  try {
    const content = readFileSync(path.join(projectsDir, `${slug}.json`), 'utf8')
    return JSON.parse(content) as Project
  } catch {
    return null
  }
}
