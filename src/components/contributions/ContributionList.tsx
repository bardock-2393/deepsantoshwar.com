import Link from 'next/link'
import { LinkSquare02Icon } from '@hugeicons/core-free-icons'
import { Icon } from '@/components/ui/Icon'
import { links } from '@/data/links.json'

const username = links.social.github.replace('https://github.com/', '')

const query = `author:${username} type:pr is:merged -user:${username}`
const searchUrl = `https://api.github.com/search/issues?q=${encodeURIComponent(query)}&sort=created&order=desc&per_page=100`

export type PullRequest = {
  id: number
  title: string
  html_url: string
  closed_at: string
  repository_url: string
}

export async function getContributions(): Promise<PullRequest[]> {
  try {
    const response = await fetch(searchUrl, {
      headers: { Accept: 'application/vnd.github+json' },
      // ponytail: unauthenticated search, refreshed daily. Add a token if rate limits bite.
      next: { revalidate: 86400 },
    })

    if (!response.ok) {
      return []
    }

    const data = (await response.json()) as { items?: PullRequest[] }

    return data.items ?? []
  } catch {
    return []
  }
}

const dateFormat = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' })

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
              {dateFormat.format(new Date(pr.closed_at))}
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
