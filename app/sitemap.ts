import type { MetadataRoute } from 'next';
export const dynamic='force-static';
export default function sitemap():MetadataRoute.Sitemap{return [{url:(process.env.NEXT_PUBLIC_SITE_URL || 'https://kexin-ye.yekexin512.chatgpt.site'),changeFrequency:'monthly',priority:1}]}

