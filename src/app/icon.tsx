import { ImageResponse } from 'next/og';

export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

// Monogram on the accent colour; reads on both light and dark browser tabs.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#c2410c',
          color: '#ffffff',
          fontSize: 34,
          fontWeight: 800,
          letterSpacing: -2,
          borderRadius: 8,
        }}
      >
        LB
      </div>
    ),
    size
  );
}
