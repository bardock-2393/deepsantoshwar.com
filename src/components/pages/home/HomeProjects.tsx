import Link from 'next/link'
import {
  SectionHeader,
  SectionHeaderText,
  SectionHeaderTitle,
} from '@/components/layout/SectionHeader'
import { ProjectList, projects } from '@/components/projects/ProjectList'

const shown = 2
const remaining = projects.length - shown

export function HomeProjects() {
  return (
    <section className="@container/projects">
      <SectionHeader>
        <SectionHeaderTitle>Projects</SectionHeaderTitle>
        <SectionHeaderText>
          These are my personal projects, both past and ongoing:
        </SectionHeaderText>
      </SectionHeader>

      <ProjectList projects={projects.slice(0, shown)} />

      {remaining > 0 && (
        <Link
          href="/projects"
          className="mt-4 inline-block text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          See other {remaining} {remaining === 1 ? 'project' : 'projects'} →
        </Link>
      )}
    </section>
  )
}
