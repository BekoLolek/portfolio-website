import { ImageResponse } from 'next/og';
import { portfolioData } from '@/data/portfolio';

export const alt = `${portfolioData.name}, ${portfolioData.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: 80,
          background: '#f5f3ee',
          color: '#17171a',
          borderBottom: '24px solid #c2410c',
        }}
      >
        <div style={{ fontSize: 30, color: '#55534e' }}>{`${portfolioData.role} · ${portfolioData.location}`}</div>
        <div style={{ fontSize: 120, fontWeight: 800, letterSpacing: -4, marginTop: 16 }}>{portfolioData.name}</div>
        <div style={{ fontSize: 34, color: '#55534e', marginTop: 24 }}>
          TypeScript · React · Java/Spring Boot · PostgreSQL
        </div>
      </div>
    ),
    size
  );
}
