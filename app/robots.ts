import type { MetadataRoute } from 'next';
export const dynamic='force-static';
export default function robots():MetadataRoute.Robots{const site=process.env.NEXT_PUBLIC_SITE_URL||'https://yekexin512-web.github.io/personal-website/';return {rules:{userAgent:'*',allow:'/'},sitemap:new URL('sitemap.xml',site).toString()}}

