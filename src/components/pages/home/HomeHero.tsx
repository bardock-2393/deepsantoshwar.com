import Image from 'next/image'
import Link from 'next/link'
import { AndroidIcon, AppleIcon, Calendar03Icon, CloudIcon, Mail01Icon, PuzzleIcon, ServerStack01Icon } from '@hugeicons/core-free-icons'
import { IconFlagIndia } from '@/components/icons/IconFlagIndia'
import { IconMicrosoft } from '@/components/icons/IconMicrosoft'
import { PageTitle } from '@/components/layout/PageTitle'
import { buttonVariants } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { links } from '@/data/links.json'
import { cn } from '@/lib/utils'

export function HomeHero(props: React.ComponentProps<'section'>) {
  return (
    <section {...props}>
      <Image
        className="mb-5 size-16 rounded-full"
        src="/avatar.jpg"
        alt="Deep Santoshwar"
        width={64}
        height={64}
        loading="eager"
      />

      <PageTitle className="mb-4">
        Hey, I&apos;m <span className="border-b-[0.09375rem] border-primary">Deep Santoshwar</span>!
      </PageTitle>

      <div className="mb-5 space-y-3 leading-relaxed text-pretty text-foreground sm:space-y-2">
        <p>
          A software engineer based in India
          <IconFlagIndia
            className={cn(
              'ml-2 inline-block h-2.25 w-3 shrink-0 -translate-y-0.5 rounded-xs',
              'drop-shadow-[0_0_1px_rgba(0,0,0,0.1)]'
            )}
          />
        </p>

        <p>I build my own products and work as a freelance consultant.</p>
      </div>

      <div className="flex items-center gap-4">
        <Link
          className={cn(buttonVariants({ variant: 'default' }))}
          href={links.calcom}
          target="_blank"
          rel="noreferrer"
        >
          <Icon icon={Calendar03Icon} />
          Book call
        </Link>

        <Link
          className={cn(buttonVariants({ variant: 'secondary' }))}
          href={`mailto:${links.email}`}
        >
          <Icon icon={Mail01Icon} />
          Send email
        </Link>
      </div>

      <div className="mt-8 flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-4">
        <span className="font-medium text-foreground">I build:</span>
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <li className="flex items-center gap-1.5">
            <Icon icon={AndroidIcon} className="size-4 text-[#3DDC84]" />
            <Icon icon={AppleIcon} className="size-4 text-foreground" />
            <span>Apps</span>
          </li>
          <li className="flex items-center gap-1.5">
            <Icon icon={AppleIcon} className="size-4 text-foreground" />
            <IconMicrosoft className="size-4" />
            <span>Desktop</span>
          </li>
          <li className="flex items-center gap-1.5">
            <Icon icon={PuzzleIcon} className="size-4 text-[#8b5cf6]" />
            <span>Extensions</span>
          </li>
          <li className="flex items-center gap-1.5">
            <Icon icon={CloudIcon} className="size-4 text-[#0ea5e9]" />
            <span>SaaS</span>
          </li>
          <li className="flex items-center gap-1.5">
            <Icon icon={ServerStack01Icon} className="size-4 text-[#14b8a6]" />
            <span>Infra</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
