import { vercel } from '@t3-oss/env-core/presets-zod'
import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

// Vercel exposes the deployment host but not a full URL, so fall back to it
// when NEXT_PUBLIC_BASE_URL is not configured for the project.
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ?? (vercelUrl ? `https://${vercelUrl}` : 'http://localhost:3000')

export const env = createEnv({
  extends: [vercel()],
  server: {},
  client: {
    NEXT_PUBLIC_BASE_URL: z.url().min(1),
    // Analytics is optional: without a key PostHog simply stays disabled.
    NEXT_PUBLIC_POSTHOG_HOST: z.url().optional(),
    NEXT_PUBLIC_POSTHOG_KEY: z.string().min(1).optional(),
  },
  // Destructure client variables (Next.js >= 13.4.4):
  experimental__runtimeEnv: {
    NEXT_PUBLIC_BASE_URL: baseUrl,
    NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
  },
})
