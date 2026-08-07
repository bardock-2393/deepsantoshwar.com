import { ContributionList, getContributions } from '@/components/contributions/ContributionList'
import { Container } from '@/components/layout/Container'
import { PageTitle } from '@/components/layout/PageTitle'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Open source',
  alternates: {
    canonical: '/open-source',
  },
}

export default async function OpenSourcePage() {
  const contributions = await getContributions()

  return (
    <Container>
      <section>
        <PageTitle className="mb-4">Open source contributions</PageTitle>

        {contributions.length === 0 ? (
          <p>No contributions to show right now.</p>
        ) : (
          <ContributionList contributions={contributions} />
        )}
      </section>
    </Container>
  )
}
