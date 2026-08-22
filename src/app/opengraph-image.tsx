import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { siteMetadata } from '@/data/metadata.json'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const avatar = await readFile(join(process.cwd(), 'public/avatar.jpg'))
  const avatarSrc = `data:image/jpeg;base64,${avatar.toString('base64')}`

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 96,
        background: '#ffffff',
        fontFamily: 'monospace',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 40 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={avatarSrc}
          width={96}
          height={96}
          style={{ borderRadius: '50%', objectFit: 'cover' }}
          alt=""
        />
        <div style={{ display: 'flex', fontSize: 24, color: '#f97316', fontWeight: 700 }}>//</div>
      </div>
      <div style={{ display: 'flex', fontSize: 72, fontWeight: 700, color: '#111111' }}>
        {siteMetadata.title}
      </div>
      <div style={{ display: 'flex', fontSize: 32, color: '#6b7280', marginTop: 16 }}>
        {siteMetadata.description}
      </div>
    </div>,
    { ...size }
  )
}
