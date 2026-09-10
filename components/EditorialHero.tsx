'use client';
import {useEffect,useState} from 'react';
import {assets} from '@/lib/content';
import './editorial-hero.css';

const introduction='I explore ideas before I fully understand them, and build from curiosity, data, and real-world questions. My background in public policy shapes how I think about systems, people, and impact, while my work across AI, product, research, and communication pushes me to turn messy problems into thoughtful, practical solutions.';

export default function EditorialHero(){
 const [length,setLength]=useState(introduction.length);
 useEffect(()=>{
  const motion=matchMedia('(prefers-reduced-motion: reduce)');
  let timer:ReturnType<typeof setTimeout>;
  let position=0;
  const type=()=>{
   position++;setLength(position);
   if(position<introduction.length)timer=setTimeout(type,/[,.]/.test(introduction[position-1])?180:36);
  };
  const start=()=>{
   clearTimeout(timer);
   if(motion.matches){setLength(introduction.length);return}
   position=0;setLength(0);timer=setTimeout(type,500);
  };
  start();motion.addEventListener('change',start);
  return()=>{clearTimeout(timer);motion.removeEventListener('change',start)};
 },[]);
 return <div className="editorial-cover">
  <div className="editorial-cover-copy">
   <h1>Hello,<br/>I’m Kexin Ye</h1>
   <div className="editorial-intro">
    <p className="editorial-intro-reserve">{introduction}</p>
    <p className="editorial-intro-typed" aria-hidden="true">{introduction.slice(0,length)}<span className={'editorial-caret'+(length===introduction.length?' is-complete':'')}/></p>
   </div>
   <ul className="editorial-tags" aria-label="Personal descriptors">{['POLICY-MINDED','PRODUCT-DRIVEN','AI-CURIOUS','DATA-DRIVEN'].map(tag=><li key={tag}>{tag}</li>)}</ul>
   <a className="editorial-story-link" href="#timeline">START THE STORY <span aria-hidden="true">→</span></a>
  </div>
  <figure className="editorial-portrait"><img src={assets.portrait} alt="Kexin Ye at a live event" width="2160" height="2896" loading="eager" fetchPriority="high"/></figure>
 </div>;
}
