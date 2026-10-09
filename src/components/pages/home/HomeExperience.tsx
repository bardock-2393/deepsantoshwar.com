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
    title: 'Software Engineer, Backend (Contract)',
    company: 'AIApply',
    logo: '/logos/aiapply.png',
    date: 'December 2025 - Present',
    location: 'United Kingdom',
    description: (
      <>
        Developed core AI features of{' '}
        <a
          href="https://aiapply.co/interview-answer-buddy"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline-offset-4 hover:underline dark:text-blue-400"
        >
          Interview Answer Buddy
        </a>
        , a cross-platform Electron desktop app used by 2M+ job seekers, giving candidates real-time
        AI assistance during live interviews. Engineered a real-time pipeline streaming live speech
        transcription (AssemblyAI) into streamed LLM answers with model routing and fallback via
        OpenRouter, served by FastAPI on Docker and AWS, powering 10,000+ interview sessions.
        Integrated Sentry and PostHog for production monitoring.
      </>
    ),
    tags: ['FastAPI', 'Python', 'Electron', 'AssemblyAI', 'OpenRouter', 'Docker', 'AWS'],
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
        Built{' '}
        <a
          href="https://app.exhibit.social"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline-offset-4 hover:underline dark:text-blue-400"
        >
          Exhibit Social
        </a>
        , an influencer campaign management SaaS managing 1M+ global influencers and 2,000+ brands,
        using PHP Laravel, Python, PostgreSQL, React+Vite, and AWS. Created a 2-agent LangGraph
        reporting workflow (analyst agent for campaign data, writer agent for reports) with RAG on
        ChromaDB and LangSmith tracing, generating performance summaries and ROI analytics.
        Delivered a high-traffic voting system for the InfluencerX Fashion Awards with Nginx load
        balancing, and a web scraper for BBC Top Gear India.
      </>
    ),
    tags: [
      'PHP',
      'Laravel',
      'Python',
      'PostgreSQL',
      'AWS',
      'React',
      'Vite',
      'LangGraph',
      'ChromaDB',
      'LangSmith',
      'Nginx',
    ],
    url: 'https://app.exhibit.social',
  },
  {
    title: 'Jr. DevOps Engineer',
    company: 'Pristine IT Code Pvt Ltd',
    logo: '/logos/pristine.png',
    date: 'April 2024 - April 2025',
    location: 'Mumbai, India',
    description:
      'Automated CI/CD pipelines with GitHub Actions, cutting deployment time by 40%, and set up ELK dashboards that improved log analysis by 30%. Managed four production apps on AWS EC2 with uptime monitoring, and led a cloud migration that cut operational costs by 20%.',
    tags: ['AWS EC2', 'GitHub Actions', 'ELK Stack', 'CI/CD'],
  },
  {
    title: 'Big Data & Cloud Apprentice',
    company: 'Abzooba (UST)',
    logo: '/logos/abzooba.png',
    date: 'July 2023 - December 2023',
    description:
      'Built data pipelines on AWS (Batch, Lambda, Glue, S3, DynamoDB) and an eCommerce pipeline with Kafka and Redshift, improving MySQL integration efficiency by 30%.',
    tags: ['AWS Batch', 'Lambda', 'Glue', 'Kafka', 'Redshift', 'MySQL'],
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
