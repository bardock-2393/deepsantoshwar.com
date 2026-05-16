import { ArrowDown01Icon, Briefcase02Icon } from '@hugeicons/core-free-icons'
import {
  SectionHeader,
  SectionHeaderText,
  SectionHeaderTitle,
} from '@/components/layout/SectionHeader'
import { Badge } from '@/components/ui/Badge'
import { Icon } from '@/components/ui/Icon'

const clients = [
  {
    name: 'Bildory',
    description: 'AI generation PPT platform (better than Gamma).',
    tags: ['SaaS', 'Dubai'],
  },
  {
    name: 'Interview Buddy',
    description: 'Interview assistance for job seekers.',
    tags: ['Desktop', 'Mac', 'Windows', 'UK'],
  },
  {
    name: 'Qualia',
    description: "WhatsApp & call automation for enterprise clients (Wipro, Honda, Tata).",
    tags: ['SaaS', 'Infra', 'Automation', 'India'],
  },
] as const

export function HomeClients() {
  return (
    <section className="@container/clients">
      <SectionHeader>
        <SectionHeaderTitle>Current Clients</SectionHeaderTitle>
        <SectionHeaderText>
          Here are some of the fantastic companies and platforms I am currently working with:
        </SectionHeaderText>
      </SectionHeader>

      <div className="flex flex-col border-t border-border">
        {clients.map((client) => (
          <details key={client.name} className="group border-b border-border">
            <summary className="flex cursor-pointer items-center justify-between py-4 font-medium transition-colors hover:text-primary outline-none marker:content-[''] [&::-webkit-details-marker]:hidden">
              <div className="flex items-center gap-3">
                <div className="shrink-0 rounded-sm bg-muted/50 p-1.5 text-primary">
                  <Icon icon={Briefcase02Icon} className="size-4" />
                </div>
                <span>{client.name}</span>
              </div>
              <Icon 
                icon={ArrowDown01Icon} 
                className="size-4 text-muted-foreground transition-transform duration-200 group-open:rotate-180" 
              />
            </summary>

            <div className="pb-4 pl-11 text-sm text-muted-foreground">
              <p className="leading-relaxed">{client.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {client.tags.map((tag) => (
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
