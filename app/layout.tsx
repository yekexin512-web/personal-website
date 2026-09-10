import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import './typography.css';
import {assetPath} from '@/lib/base-path';
const serif=localFont({src:'../public/fonts/dm-serif-regular.ttf',variable:'--font-dm-serif',display:'swap'});
const mono=localFont({src:'../public/fonts/ibm-plex-mono.ttf',variable:'--font-ibm-mono',display:'swap'});
const site=process.env.NEXT_PUBLIC_SITE_URL||'https://yekexin512-web.github.io/personal-website/';
export const metadata: Metadata = {icons:{icon:assetPath('/icon.svg')},metadataBase:new URL(site),title:'Kexin Ye — AI, Product, Research & Communication',description:'Portfolio of Kexin Ye, working across AI, product strategy, data, research, vibe coding and communication.',openGraph:{title:'Kexin Ye — Enter Kexin Ye’s world',description:'Policy-trained. Product-minded. Data-driven.',images:[new URL('social-cover.png',site).toString()]},twitter:{card:'summary_large_image',images:[new URL('social-cover.png',site).toString()]}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en" className={`${serif.variable} ${mono.variable}`}><body>{children}</body></html>}

