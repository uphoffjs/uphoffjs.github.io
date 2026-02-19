import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'
export const alt = 'Lorem Ipsum | Dolor Sit Amet'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: 'linear-gradient(135deg, #030712 0%, #0a0f1e 100%)',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif',
        position: 'relative',
      }}
    >
      {/* Decorative border */}
      <div
        style={{
          position: 'absolute',
          inset: '24px',
          border: '1px solid rgba(34, 197, 94, 0.2)',
          borderRadius: '16px',
        }}
      />

      {/* Content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        {/* Name */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 700,
            background: 'linear-gradient(90deg, #4ade80, #10b981)',
            backgroundClip: 'text',
            color: 'transparent',
            letterSpacing: '-1px',
          }}
        >
          Lorem Ipsum
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '32px',
            color: '#9ca3af',
            fontWeight: 400,
          }}
        >
          Dolor Sit Amet Consectetur
        </div>

        {/* Divider */}
        <div
          style={{
            width: '80px',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #22c55e, transparent)',
            margin: '8px 0',
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: '20px',
            color: '#6b7280',
            maxWidth: '700px',
            textAlign: 'center',
          }}
        >
          Ipsum · Dolor · Consectetur · Adipiscing
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  )
}
