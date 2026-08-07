import Link from 'next/link'
import { LinkSquare02Icon } from '@hugeicons/core-free-icons'
import {
  SectionHeader,
  SectionHeaderText,
  SectionHeaderTitle,
} from '@/components/layout/SectionHeader'
import { Icon } from '@/components/ui/Icon'
import { articles } from '@/data/articles.json'

// ponytail: cast because the seeded list is empty; drop it once articles.json has entries.
const items = articles.items as { title: string; url: string; publisher: string }[]

export function HomeArticles() {
  return (
    <section className="@container/articles">
      <SectionHeader>
        <SectionHeaderTitle>Articles</SectionHeaderTitle>
        <SectionHeaderText>{articles.summary}</SectionHeaderText>
      </SectionHeader>

      <div className="flex flex-col border-t border-border">
        {items.map((article) => (
          <Link
            key={article.url}
            href={article.url}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between gap-4 border-b border-border py-4 transition-colors hover:text-primary"
          >
            <div className="flex flex-col text-left">
              <span className="text-sm font-medium">{article.title}</span>
              <span className="text-xs text-muted-foreground">{article.publisher}</span>
            </div>

            <Icon
              icon={LinkSquare02Icon}
              className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
            />
          </Link>
        ))}
      </div>

      <Link
        href={articles.profile}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        See my GeeksforGeeks profile →
      </Link>
    </section>
  )
}
