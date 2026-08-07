import Link from 'next/link'
import { notFound } from 'next/navigation'
import { GithubIcon, LinkSquare02Icon } from '@hugeicons/core-free-icons'
import { Container } from '@/components/layout/Container'
import { PageTitle } from '@/components/layout/PageTitle'
import { projects, statusLabels } from '@/components/projects/ProjectList'
import { Badge } from '@/components/ui/Badge'
import { buttonVariants } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<'/projects/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    notFound()
  }

  return {
    title: project.name,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
  }
}

export default async function ProjectPage({ params }: PageProps<'/projects/[slug]'>) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <Container>
      <article>
        <header className="mb-6">
          <div className="mb-4 flex items-center gap-2">
            <PageTitle>{project.name}</PageTitle>

            {project.status && (
              <Badge variant={statusLabels[project.status].variant} size="sm">
                {statusLabels[project.status].label}
              </Badge>
            )}
          </div>

          <div className="mb-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-medium">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {project.github && (
              <Link
                className={cn(buttonVariants({ variant: 'default' }))}
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon={GithubIcon} />
                Source
              </Link>
            )}

            {project.live && (
              <Link
                className={cn(buttonVariants({ variant: 'secondary' }))}
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon={LinkSquare02Icon} />
                Live demo
              </Link>
            )}
          </div>
        </header>

        {project.video && (
          <div className="mb-6 aspect-video w-full overflow-hidden rounded-md border border-border">
            <iframe
              className="size-full"
              src={`https://www.youtube-nocookie.com/embed/${project.video}`}
              title={`${project.name} demo`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        {!project.video && project.image && (
          <img
            src={project.image}
            alt={`${project.name} screenshot`}
            className="mb-6 w-full rounded-md border border-border"
          />
        )}

        <p className="leading-relaxed text-pretty text-muted-foreground">
          {project.about ?? project.description}
        </p>

        <Link
          href="/projects"
          className="mt-8 inline-block text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          ← All projects
        </Link>
      </article>
    </Container>
  )
}
