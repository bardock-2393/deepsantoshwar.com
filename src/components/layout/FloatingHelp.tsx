import Link from 'next/link'
import { HelpCircleIcon } from '@hugeicons/core-free-icons'
import { Icon } from '@/components/ui/Icon'
import { links } from '@/data/links.json'

export function FloatingHelp() {
  return (
    <Link
      href={`mailto:${links.email}`}
      className="fixed right-8 bottom-8 z-[99999] flex size-12 items-center justify-center rounded-full border border-gray-200 bg-white text-black shadow-[0_8px_30px_rgb(0,0,0,0.24)] transition-transform hover:scale-110 active:scale-95"
      aria-label="Contact me"
    >
      <Icon icon={HelpCircleIcon} className="size-6" />
    </Link>
  )
}
