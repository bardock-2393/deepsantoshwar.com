import { Container } from '@/components/layout/Container'
import { PageTitle } from '@/components/layout/PageTitle'
import { ProjectList, projects } from '@/components/projects/ProjectList'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  alternates: {
    canonical: '/projects',
  },
}

export default function ProjectsPage() {
  return (
    <Container>
      <section className="@container/projects">
        <PageTitle className="mb-4">All projects</PageTitle>

        <ProjectList projects={projects} />
      </section>
    </Container>
  )
}
