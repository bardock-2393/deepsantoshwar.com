import Link from 'next/link'
import { ContributionList, getContributions } from '@/components/contributions/ContributionList'
import {
  SectionHeader,
  SectionHeaderText,
  SectionHeaderTitle,
} from '@/components/layout/SectionHeader'

const shown = 5

export async function HomeContributions() {
  const contributions = await getContributions()
  const remaining = contributions.length - shown

  if (contributions.length === 0) {
    return null
  }

  return (
    <section className="@container/contributions">
      <SectionHeader>
        <SectionHeaderTitle>Open source</SectionHeaderTitle>
        <SectionHeaderText>
          Pull requests I have opened on other people&apos;s projects:
        </SectionHeaderText>
      </SectionHeader>

      <ContributionList contributions={contributions.slice(0, shown)} />

      {remaining > 0 && (
        <Link
          href="/open-source"
          className="mt-4 inline-block text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          See other {remaining} {remaining === 1 ? 'contribution' : 'contributions'} →
        </Link>
      )}
    </section>
  )
}
