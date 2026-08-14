import Link from 'next/link'
import { LinkSquare02Icon } from '@hugeicons/core-free-icons'
import { Icon } from '@/components/ui/Icon'
import { links } from '@/data/links.json'

const username = links.social.github.replace('https://github.com/', '')

const query = `author:${username} type:pr -user:${username}`
const searchUrl = `https://api.github.com/search/issues?q=${encodeURIComponent(query)}&sort=created&order=desc&per_page=100`

export type PullRequest = {
  id: number
  title: string
  html_url: string
  created_at: string
  state: 'open' | 'closed'
  repository_url: string
  pull_request?: { merged_at: string | null }
}

export async function getContributions(): Promise<PullRequest[]> {
  try {
    const response = await fetch(searchUrl, {
      headers: { Accept: 'application/vnd.github+json' },
      // ponytail: unauthenticated search, refreshed hourly. Add a token if rate limits bite.
      next: { revalidate: 3600 },
    })

    if (!response.ok) {
      return []
    }

    const data = (await response.json()) as { items?: PullRequest[] }

    // Merged or still open. Closed-without-merge is not a contribution worth showing.
    return (data.items ?? []).filter((pr) => pr.pull_request?.merged_at || pr.state === 'open')
  } catch {
    return []
  }
}

const dateFormat = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'medium',
  timeStyle: 'short',
  timeZone: 'UTC',
})

export function ContributionList({ contributions }: { contributions: PullRequest[] }) {
  return (
    <div className="flex flex-col border-t border-border">
      {contributions.map((pr) => (
        <Link
          key={pr.id}
          href={pr.html_url}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-between gap-4 border-b border-border py-4 transition-colors hover:text-primary"
        >
          <div className="flex flex-col text-left">
            <span className="text-sm font-medium">{pr.title}</span>
            <span className="text-xs text-muted-foreground">
              {pr.repository_url.replace('https://api.github.com/repos/', '')} •{' '}
              {pr.pull_request?.merged_at ? 'Merged' : 'Open'} •{' '}
              {dateFormat.format(new Date(pr.pull_request?.merged_at ?? pr.created_at))}
            </span>
          </div>

          <Icon
            icon={LinkSquare02Icon}
            className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
          />
        </Link>
      ))}
    </div>
  )
}
