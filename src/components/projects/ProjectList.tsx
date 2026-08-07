import Link from 'next/link'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { LogoAirblander } from '@/components/logos/LogoAirblander'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent, CardHeader, CardIndicator, CardTitle } from '@/components/ui/Card'
import { Icon } from '@/components/ui/Icon'
import { links } from '@/data/links.json'
import type { BadgeVariant } from '@/components/ui/Badge'

export type Project = {
  slug: string
  name: string
  description: string
  /** Longer copy for the project page. Falls back to `description`. */
  about?: string
  tags: string[]
  github?: string
  /** Omitted when the demo is no longer hosted. */
  live?: string
  /** YouTube video id, rendered as an embed on the project page. */
  video?: string
  image?: string
  status?: 'active'
  icon?: React.ReactNode
}

export const projects: Project[] = [
  {
    slug: 'airblander',
    name: 'Airblander',
    description: 'Claude Code plugin that prevents AI agents from writing outdated SDK code.',
    about:
      'A Claude Code plugin that gates code generation behind a documentation check: before an agent writes against a tracked SDK, it has to fetch that SDK’s current docs. It ships a per-project watchlist, scanned from your dependency manifests, so the agent stops hallucinating APIs that were removed two versions ago.',
    tags: ['Claude Code', 'Plugin', 'Developer Tools'],
    github: links.projects.airblander,
    live: 'https://airblander.vercel.app',
    status: 'active',
    icon: <LogoAirblander />,
  },
  {
    slug: 'soniquedna',
    name: 'SoniqueDNA',
    description:
      "Cultural intelligence music discovery built for the Qloo Global Hackathon, pairing Gemini 2.0 Flash with Qloo's Taste AI.",
    about:
      'SoniqueDNA breaks genre bubbles by treating taste as cultural rather than acoustic. It combines Gemini 2.0 Flash with Qloo’s Taste AI to connect music to lifestyle, mood, and location, and exposes it all through a natural language chat interface with cross-domain recommendations.',
    tags: ['Gemini 2.0 Flash', 'Qloo Taste AI', 'React', 'Hackathon'],
    github: 'https://github.com/bardock-2393/SoniqueDNA',
    video: 'lFe6X9--bQE',
  },
  {
    slug: 'mantra-r-1',
    name: 'Mantra-R-1',
    description:
      'Visual understanding chat assistant that processes video, recognises events, and holds context-aware conversations.',
    about:
      'Built for the Mantra Hackathon, Mantra-R-1 is an agentic video analysis system: it ingests video, detects and summarises events, and then answers follow-up questions with the full context of what it saw. Aimed at traffic analysis, workplace safety, and performance review scenarios.',
    tags: ['Video AI', 'Agents', 'Python', 'Hackathon'],
    github: 'https://github.com/bardock-2393/Mantra-R-1',
    image: '/projects/mantra-r-1.png',
  },
  {
    slug: 'brandguard-ai',
    name: 'BrandGuard AI',
    description:
      'Adobe Express add-on that catches logo, colour, and font violations against brand guidelines in real time.',
    about:
      'BrandGuard AI is an Adobe Express add-on that keeps every design on-brand. Powered by Google Gemini, it detects logo misuse, colour violations, and font inconsistencies as you design, giving real-time feedback without interrupting the creative flow. Built with the Adobe Express SDK, React, and TypeScript.',
    tags: ['Adobe Express SDK', 'Google Gemini', 'React', 'TypeScript'],
    github: 'https://github.com/bardock-2393/brandgurad-ai',
    live: 'https://adobesparkpost.app.link',
    video: 'ocQnB3jEzDE',
  },
  {
    slug: 'promptcraft',
    name: 'PromptCraft',
    description:
      'Chrome extension that scores and optimises prompts in real time across ChatGPT, Gemini, and Claude.',
    about:
      'A minimalist prompt optimizer that lives in the browser. PromptCraft shows a floating quality score as you type, suggests improvements through the Gemini API, and works across ChatGPT, Gemini, Claude, and other chat interfaces.',
    tags: ['Chrome Extension', 'Gemini API', 'JavaScript'],
    live: 'https://promptcraft-nine.vercel.app/',
  },
  {
    slug: 'joypost',
    name: 'JoyPost',
    description:
      'Instagram-inspired social MVP landing page built for a client, focused on a clean onboarding experience.',
    about:
      'A minimal, Instagram-inspired MVP landing page delivered for a client. The brief was authentic connection over vanity metrics: simple UI, fast load, and an onboarding flow that gets someone to their first post without friction.',
    tags: ['Client Work', 'Landing Page', 'React'],
    live: 'https://joyful-micro-landing-page-53.vercel.app/',
    image: '/projects/joypost.png',
  },
]

export const statusLabels: Record<'active', { label: string; variant: BadgeVariant }> = {
  active: { label: 'Active', variant: 'emerald' },
} as const

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-4 @xl/projects:grid-cols-2">
      {projects.map((project) => (
        <Card key={project.slug} render={<article />}>
          <CardHeader>
            <div className="flex items-center gap-2">
              {project.icon && (
                <div className="shrink-0 rounded-sm border border-border bg-muted/50 p-0.75 *:size-4">
                  {project.icon}
                </div>
              )}

              <CardTitle>
                <Link className="after:absolute after:inset-0" href={`/projects/${project.slug}`}>
                  {project.name}
                </Link>
              </CardTitle>

              {project.status && (
                <Badge variant={statusLabels[project.status].variant} size="sm">
                  {statusLabels[project.status].label}
                </Badge>
              )}
            </div>
          </CardHeader>

          <CardContent>
            <p>{project.description}</p>
          </CardContent>

          <CardIndicator>
            <Icon icon={ArrowRight01Icon} />
          </CardIndicator>
        </Card>
      ))}
    </div>
  )
}
