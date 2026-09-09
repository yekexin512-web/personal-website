import type { Metadata } from 'next';
import '@fontsource/anton/latin-400.css';
import '@fontsource/instrument-serif/latin-400-italic.css';
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-500.css';
import '@fontsource/space-mono/latin-400.css';
import './globals.css';
export const metadata: Metadata = { icons:{icon:'/icon.svg'},metadataBase:new URL('https://casey-ye-world.ardent-mite-3633.chatgpt.site'),title:'Kexin Ye — AI, Product, Research & Communication', description:'Portfolio of Kexin Ye, working across AI, product strategy, data, research, vibe coding and communication.',openGraph:{title:'Kexin Ye — Enter Casey’s world',description:'Policy-trained. Product-minded. Data-driven.',images:['/social-cover.png']},twitter:{card:'summary_large_image',images:['/social-cover.png']} };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
