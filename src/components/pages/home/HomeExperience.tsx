'use client'

import { ArrowDown01Icon } from '@hugeicons/core-free-icons'
import {
  SectionHeader,
  SectionHeaderText,
  SectionHeaderTitle,
} from '@/components/layout/SectionHeader'
import { Badge } from '@/components/ui/Badge'
import { Icon } from '@/components/ui/Icon'

const experiences = [
  {
    title: 'Software Engineer (Contract)',
    company: 'Bildory (Stealth)',
    logo: '/logos/bildory.png',
    date: 'January 2026 - Present',
    location: 'Dubai, UAE',
    description:
      'Building a stealth-mode AI presentation platform in the same space as Gamma. Developing Python and FastAPI services with CrewAI-based multi-agent workflows for slide generation, backed by MongoDB, with a React front end deployed on AWS.',
    tags: ['Python', 'FastAPI', 'CrewAI', 'AI Agents', 'MongoDB', 'React', 'AWS'],
  },
  {
    title: 'Software Engineer, Backend (Contract)',
    company: 'AIApply',
    logo: '/logos/aiapply.png',
    date: 'December 2025 - Present',
    location: 'United Kingdom',
    description: (
      <>
        Building backend services in Python and FastAPI on GCP with PostgreSQL for{' '}
        <a
          href="https://aiapply.co/interview-answer-buddy"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline-offset-4 hover:underline dark:text-blue-400"
        >
          Interview Buddy
        </a>
        . Designing and shipping AI agent systems — tool calling, retrieval, and multi-step
        workflows — along with the APIs, data models, and async pipelines behind them.
      </>
    ),
    tags: ['FastAPI', 'Python', 'PostgreSQL', 'GCP', 'AI Agents'],
    url: 'https://aiapply.co/interview-answer-buddy',
  },
  {
    title: 'Software Developer',
    company: 'Exhibit BBC Top Gear',
    logo: '/logos/topgear.png',
    date: 'April 2025 - October 2025',
    location: 'Mumbai, India',
    description: (
      <>
        Architected{' '}
        <a
          href="https://app.exhibit.social"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline-offset-4 hover:underline dark:text-blue-400"
        >
          Exhibit Social
        </a>
        , an end-to-end influencer marketing platform built in PHP and Laravel on PostgreSQL and
        GCP, with AI workflows and comprehensive web scraping systems. Managed production server
        infrastructure and engineered a scalable voting system for the InfluencerX India 7th Fashion
        Awards.
      </>
    ),
    tags: ['PHP', 'Laravel', 'PostgreSQL', 'AI Workflows', 'GCP', 'React', 'Vite', 'Nginx'],
    url: 'https://app.exhibit.social',
  },
  {
    title: 'Jr. DevOps Engineer',
    company: 'Pristine IT Code Pvt Ltd',
    logo: '/logos/pristine.png',
    date: 'April 2024 - April 2025',
    location: 'Mumbai, India',
    description:
      'Orchestrated the deployment of monolithic applications on AWS EC2 with 98.8% uptime. Engineered CI/CD pipelines using GitHub Actions and configured ELK stack for log analysis. Spearheaded cloud migration initiatives.',
    tags: ['AWS EC2', 'GitHub Actions', 'ELK Stack', 'CI/CD'],
  },
  {
    title: 'Big Data & Cloud Apprentice',
    company: 'Abzooba (UST)',
    logo: '/logos/abzooba.png',
    date: 'July 2023 - December 2023',
    description:
      'Architected AWS Batch data pipelines integrating MongoDB, API, Lambda, EventBridge, S3, Glue, and DynamoDB. Constructed end-to-end eCommerce data pipeline with PySpark and Kafka.',
    tags: ['AWS Batch', 'PySpark', 'Kafka', 'MongoDB', 'Redshift'],
  },
  {
    title: 'IoT & Cloud Intern',
    company: 'Electromotion',
    logo: '/logos/evidyut.png',
    date: 'May 2022 - July 2022',
    description: (
      <>
        Built the data pipeline behind{' '}
        <a
          href="https://evidyut.in/products/diagnostix"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline-offset-4 hover:underline dark:text-blue-400"
        >
          Diagnostix
        </a>
        , collecting IoT sensor data from an Android app over Bluetooth and streaming it to AWS
        servers for real-time analytics. Optimized DynamoDB expenses by 90% leveraging S3. Launched
        real-time analytics dashboards using Grafana and Power BI.
      </>
    ),
    tags: ['Python', 'Android', 'AWS IoT Core', 'DynamoDB', 'S3', 'Grafana', 'Power BI'],
    url: 'https://evidyut.in/products/diagnostix',
  },
] as const

export function HomeExperience() {
  return (
    <section className="@container/experience">
      <SectionHeader>
        <SectionHeaderTitle>Experience & Impact</SectionHeaderTitle>
        <SectionHeaderText>
          Key achievements and systems I have engineered throughout my career:
        </SectionHeaderText>
      </SectionHeader>

      <div className="flex flex-col border-t border-border">
        {experiences.map((exp) => (
          <details key={exp.title} className="group border-b border-border">
            <summary className="flex cursor-pointer items-center justify-between py-4 font-medium transition-colors outline-none marker:content-[''] hover:text-primary [&::-webkit-details-marker]:hidden">
              <div className="flex items-center gap-3">
                <div className="flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-sm border border-border bg-white p-1">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="h-full w-full object-contain"
                    onError={(e) => {
                      ;(e.target as HTMLImageElement).src =
                        `https://ui-avatars.com/api/?name=${encodeURIComponent(exp.company)}&background=random&color=fff&bold=true`
                    }}
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span>{exp.title}</span>
                  <span className="text-xs font-normal text-muted-foreground">
                    {'url' in exp ? (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noreferrer"
                        className="underline-offset-4 hover:text-primary hover:underline"
                      >
                        {exp.company}
                      </a>
                    ) : (
                      exp.company
                    )}{' '}
                    • {exp.date}
                    {'location' in exp ? ` • ${exp.location}` : null}
                  </span>
                </div>
              </div>
              <Icon
                icon={ArrowDown01Icon}
                className="size-4 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
              />
            </summary>

            <div className="pb-4 pl-11 text-sm text-muted-foreground">
              <p className="leading-relaxed">{exp.description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {exp.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="font-medium">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
