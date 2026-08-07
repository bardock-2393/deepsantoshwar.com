import Link from 'next/link'
import { ContributionList, getContributions } from '@/components/contributions/ContributionList'
import {
  SectionHeader,
  SectionHeaderText,
  SectionHeaderTitle,
} from '@/components/layout/SectionHeader'

export async function HomeContributions() {
  const contributions = await getContributions()

  if (contributions.length === 0) {
    return null
  }

  return (
    <section className="@container/contributions">
      <SectionHeader>
        <SectionHeaderTitle>Open source</SectionHeaderTitle>
        <SectionHeaderText>
          Pull requests I have contributed to other people&apos;s projects:
        </SectionHeaderText>
      </SectionHeader>

      <ContributionList contributions={contributions.slice(0, 5)} />

      {contributions.length > 5 && (
        <Link
          href="/open-source"
          className="mt-4 inline-block text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          See all {contributions.length} contributions →
        </Link>
      )}
    </section>
  )
}
