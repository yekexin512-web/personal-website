import type { MetadataRoute } from 'next';
export const dynamic='force-static';
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:'*',allow:'/'},sitemap:'https://casey-ye-world.ardent-mite-3633.chatgpt.site/sitemap.xml'}}
