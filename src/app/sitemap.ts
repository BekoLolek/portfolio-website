import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://bekololek.vercel.app', lastModified: new Date() }];
}
