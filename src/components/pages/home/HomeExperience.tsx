'use client'

import { ArrowDown01Icon, RocketIcon } from '@hugeicons/core-free-icons'
import {
  SectionHeader,
  SectionHeaderText,
  SectionHeaderTitle,
} from '@/components/layout/SectionHeader'
import { Badge } from '@/components/ui/Badge'
import { Icon } from '@/components/ui/Icon'

const experiences = [
  {
    title: 'Freelancer',
    company: 'Bildory, Interview Buddy, Qualia',
    logo: RocketIcon,
    date: 'October 2025 - Present',
    description: 'Architecting and developing solutions for global clients. Engineering an AI-generation PPT platform (Bildory), an interview assistance application (Interview Buddy), and WhatsApp & call automation tools for enterprise clients (Qualia).',
    tags: ['SaaS', 'AI', 'Automation', 'Full Stack', 'Desktop'],
  },
  {
    title: 'Software Developer',
    company: 'Exhibit BBC Top Gear',
    logo: '/logos/topgear.png',
    date: 'April 2025 - October 2025',
    description: 'Architected end-to-end SaaS platform for Exhibit Social and developed comprehensive web scraping systems. Managed production server infrastructure and engineered a scalable voting system for the InfluencerX India 7th Fashion Awards.',
    tags: ['Laravel', 'React', 'Vite', 'PostgreSQL', 'GCP', 'Nginx'],
  },
  {
    title: 'Jr. DevOps Engineer',
    company: 'Pristine IT Code Pvt Ltd',
    logo: '/logos/pristine.png',
    date: 'April 2024 - April 2025',
    description: 'Orchestrated the deployment of monolithic applications on AWS EC2 with 98.8% uptime. Engineered CI/CD pipelines using GitHub Actions and configured ELK stack for log analysis. Spearheaded cloud migration initiatives.',
    tags: ['AWS EC2', 'GitHub Actions', 'ELK Stack', 'CI/CD'],
  },
  {
    title: 'Big Data & Cloud Apprentice',
    company: 'Abzooba (UST)',
    logo: '/logos/abzooba.png',
    date: 'July 2023 - December 2023',
    description: 'Architected AWS Batch data pipelines integrating MongoDB, API, Lambda, EventBridge, S3, Glue, and DynamoDB. Constructed end-to-end eCommerce data pipeline with PySpark and Kafka.',
    tags: ['AWS Batch', 'PySpark', 'Kafka', 'MongoDB', 'Redshift'],
  },
  {
    title: 'IoT & Cloud Intern',
    company: 'Electromotion',
    logo: '/logos/evidyut.png',
    date: 'May 2022 - July 2022',
    description: 'Created Python scripts to extract IoT sensor data via Bluetooth for real-time analytics. Optimized DynamoDB expenses by 90% leveraging S3. Launched real-time analytics dashboards using Grafana and Power BI.',
    tags: ['Python', 'AWS IoT Core', 'Grafana', 'Power BI', 'S3'],
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
            <summary className="flex cursor-pointer items-center justify-between py-4 font-medium transition-colors hover:text-primary outline-none marker:content-[''] [&::-webkit-details-marker]:hidden">
              <div className="flex items-center gap-3">
                <div className="shrink-0 overflow-hidden rounded-sm bg-white border border-border size-8 flex items-center justify-center p-1">
                  {typeof exp.logo === 'string' ? (
                    <img 
                      src={exp.logo} 
                      alt={exp.company} 
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(exp.company)}&background=random&color=fff&bold=true`
                      }}
                    />
                  ) : (
                    <Icon icon={exp.logo} className="size-full text-primary" />
                  )}
                </div>
                <div className="flex flex-col text-left">
                  <span>{exp.title}</span>
                  <span className="text-xs text-muted-foreground font-normal">{exp.company} • {exp.date}</span>
                </div>
              </div>
              <Icon 
                icon={ArrowDown01Icon} 
                className="size-4 text-muted-foreground transition-transform duration-200 group-open:rotate-180" 
              />
            </summary>

            <div className="pb-4 pl-11 text-sm text-muted-foreground">
              <p className="leading-relaxed">{exp.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-3">
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
