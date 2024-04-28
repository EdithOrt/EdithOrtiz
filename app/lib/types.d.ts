export interface ProjectImage {
  url: string
  id: string
  title: string
}

export interface TechnologiesType {
  name: string
  id: string
}
export interface Project {
  title: string
  description: string
  id: string
  url: string
  isDashboard: boolean
  technologies: Array<TechnologiesType>
}

export interface Skill {
  name: string
  id: string
}
