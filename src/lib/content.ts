import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDir = path.join(process.cwd(), 'content')

export interface NewsPost {
  _sys: { filename: string }
  title: string
  date: string
  featuredImage?: string
  featuredImageAlt?: string
  excerpt?: string
  body: string
  carousel?: Array<{ src: string; alt: string }>
  published?: boolean
  featured?: boolean
}

export interface TeamMember {
  _sys: { filename: string }
  name: string
  credentials?: string
  role: string
  image: string
  bio: string
  socialLinks?: {
    linkedin?: string
    github?: string
    twitter?: string
    orcid?: string
    googleScholar?: string
    email?: string
  }
  order: number
}

export interface Alumni {
  _sys: { filename: string }
  name: string
  role: string
  yearsActive: string
  affiliation?: string
  image?: string
  bio?: string
  currentPosition?: string
  socialLinks?: {
    linkedin?: string
    github?: string
  }
  isFeatured?: boolean
  order?: number
}

export interface ResearchProject {
  _sys: { filename: string }
  title: string
  heading: string
  description: string
  figure?: {
    src: string
    alt: string
    caption?: string
    isAnimated?: boolean
  }
  layout: 'image-left' | 'image-right'
  order: number
  isActive?: boolean
}

export interface FundingSource {
  _sys: { filename: string }
  projectTitle: string
  programTitle: string
  fundingSource: string
  fundingSourceUrl?: string
  logo: string
  logoSize?: 'small' | 'medium' | 'large'
  principalInvestigator: string
  coPrincipalInvestigator?: string
  description: string
  status: 'active' | 'past' | 'pending'
  order: number
}

function getMdxFiles(dir: string): string[] {
  const fullPath = path.join(contentDir, dir)
  if (!fs.existsSync(fullPath)) return []
  return fs.readdirSync(fullPath).filter(file => file.endsWith('.mdx'))
}

function readMdxFile<T>(dir: string, filename: string): T | null {
  const filePath = path.join(contentDir, dir, filename)
  if (!fs.existsSync(filePath)) return null

  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  return {
    _sys: { filename: filename.replace('.mdx', '') },
    ...data,
    body: content,
    bio: content,
    description: content,
    content: content,
  } as T
}

// News Posts
export function getAllNewsPosts(): NewsPost[] {
  const files = getMdxFiles('news')
  return files
    .map(file => readMdxFile<NewsPost>('news', file))
    .filter((post): post is NewsPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getNewsPost(slug: string): NewsPost | null {
  return readMdxFile<NewsPost>('news', `${slug}.mdx`)
}

export function getNewsSlugs(): string[] {
  return getMdxFiles('news').map(file => file.replace('.mdx', ''))
}

// Team Members
export function getAllTeamMembers(): TeamMember[] {
  const files = getMdxFiles('team')
  return files
    .map(file => readMdxFile<TeamMember>('team', file))
    .filter((member): member is TeamMember => member !== null)
    .sort((a, b) => (a.order || 0) - (b.order || 0))
}

// Alumni
export function getAllAlumni(): Alumni[] {
  const files = getMdxFiles('alumni')
  return files
    .map(file => readMdxFile<Alumni>('alumni', file))
    .filter((alumni): alumni is Alumni => alumni !== null)
    .sort((a, b) => (a.order || 0) - (b.order || 0))
}

export function getAlumniList(): Array<{ name: string; role: string; yearsActive: string; affiliation?: string }> {
  const listPath = path.join(contentDir, 'alumni', 'alumni-list.json')
  if (!fs.existsSync(listPath)) return []
  const content = fs.readFileSync(listPath, 'utf-8')
  const data = JSON.parse(content)
  return data.alumni || []
}

// Research Projects
export function getAllResearchProjects(): ResearchProject[] {
  const files = getMdxFiles('research')
  return files
    .map(file => readMdxFile<ResearchProject>('research', file))
    .filter((project): project is ResearchProject => project !== null && project.isActive !== false)
    .sort((a, b) => (a.order || 0) - (b.order || 0))
}

export interface ResearchOverviewSection {
  type: 'text' | 'figure' | 'text-with-figure'
  content?: string
  figure?: {
    src: string
    alt: string
    caption?: string
    position?: 'left' | 'right' | 'full-width'
    credit?: string
  }
  src?: string
  alt?: string
  caption?: string
  position?: 'left' | 'right' | 'full-width'
  credit?: string
}

export interface ResearchOverviewData {
  title: string
  sections: ResearchOverviewSection[]
}

export function getResearchOverview(): ResearchOverviewData | null {
  const filePath = path.join(contentDir, 'research-overview', 'overview.mdx')
  if (!fs.existsSync(filePath)) return null

  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data } = matter(fileContent)

  return {
    title: data.title || 'Research Overview',
    sections: data.sections || [],
  }
}

// Funding Sources
export function getAllFundingSources(): FundingSource[] {
  const files = getMdxFiles('funding')
  return files
    .map(file => readMdxFile<FundingSource>('funding', file))
    .filter((source): source is FundingSource => source !== null)
    .sort((a, b) => (a.order || 0) - (b.order || 0))
}

// Global Settings
export function getGlobalSettings() {
  const settingsPath = path.join(contentDir, 'global', 'settings.json')
  if (!fs.existsSync(settingsPath)) return null
  const content = fs.readFileSync(settingsPath, 'utf-8')
  return JSON.parse(content)
}
