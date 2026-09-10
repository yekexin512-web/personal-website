import type { Metadata } from 'next';
import './globals.css';
import './typography.css';
export const metadata: Metadata = { icons:{icon:'/icon.svg'},metadataBase:new URL((process.env.NEXT_PUBLIC_SITE_URL || 'https://kexin-ye.yekexin512.chatgpt.site')),title:'Kexin Ye — AI, Product, Research & Communication', description:'Portfolio of Kexin Ye, working across AI, product strategy, data, research, vibe coding and communication.',openGraph:{title:'Kexin Ye — Enter Kexin Ye’s world',description:'Policy-trained. Product-minded. Data-driven.',images:['/social-cover.png']},twitter:{card:'summary_large_image',images:['/social-cover.png']} };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}

