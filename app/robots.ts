import type { MetadataRoute } from 'next';
export const dynamic='force-static';
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:'*',allow:'/'},sitemap:'https://kexin-ye.yekexin512.chatgpt.site/sitemap.xml'}}

