'use client';
import {useEffect,useRef,useState} from 'react';
import {createPortal} from 'react-dom';
import './cinematic-chapters.css';

export default function CinematicChapters(){
 const [mounted,setMounted]=useState(false);
 const overlay=useRef<HTMLDivElement>(null);
 useEffect(()=>setMounted(true),[]);
 useEffect(()=>{
  if(!mounted)return;
  const sections=['about','experience','research','vibe-coding','communication','next-adventure'].map(id=>document.getElementById(id));
  const bodySelectors=['.editorial-intro,.editorial-tags,.editorial-story-link','.tk-opening-copy>p,.tk-opening-role','.canvas-background','.project-title,.browser-mockup','.communication-body,.communication-controls','.next-adventure>p,.next-adventure canvas'];
  const motion=matchMedia('(prefers-reduced-motion: reduce)');
  let frame=0,last=-1,generation=0,animations:Animation[]=[];
  const stop=()=>{generation++;animations.forEach(animation=>animation.cancel());animations=[];if(overlay.current)overlay.current.style.visibility='hidden'};
  const play=(index:number)=>{
   stop();if(motion.matches||document.querySelector('dialog[open]'))return;
   const layer=overlay.current,section=sections[index];if(!layer||!section)return;
   const run=generation;layer.style.visibility='visible';
   const ease='cubic-bezier(0.77,0,0.175,1)';
   const panels=Array.from(layer.children);
   const wipes=panels.map((panel,i)=>panel.animate([
    {transform:'translateY(102%)',offset:0},
    {transform:'translateY(0)',offset:.38},
    {transform:'translateY(0)',offset:.48},
    {transform:'translateY(-102%)',offset:1}
   ],{duration:480,delay:i*16,easing:ease,fill:'both'}));
   animations.push(...wipes);
   const number=section.querySelector<HTMLElement>('.section-mark,.hero-kicker');
   const title=section.querySelector<HTMLElement>('h1,h2');
   const groups=[number?[number]:[],title?[title]:[],Array.from(section.querySelectorAll<HTMLElement>(bodySelectors[index]))];
   groups.forEach((elements,group)=>elements.forEach(element=>{
    animations.push(element.animate([{opacity:0,transform:'translateY(20px)'},{opacity:1,transform:'translateY(0)'}],{duration:280,delay:200+group*100,easing:'cubic-bezier(.22,1,.36,1)',fill:'backwards'}));
   }));
   Promise.all(wipes.map(animation=>animation.finished)).then(()=>{if(run===generation){layer.style.visibility='hidden';wipes.forEach(animation=>animation.cancel())}}).catch(()=>{});
  };
  const update=()=>{frame=0;let index=0;sections.forEach((section,i)=>{if(section&&section.getBoundingClientRect().top<innerHeight*.5)index=i});if(index!==last){last=index;play(index)}};
  const schedule=()=>{if(!frame)frame=requestAnimationFrame(update)};
  addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);motion.addEventListener('change',stop);update();
  return()=>{cancelAnimationFrame(frame);stop();removeEventListener('scroll',schedule);removeEventListener('resize',schedule);motion.removeEventListener('change',stop)};
 },[mounted]);
 return mounted?createPortal(<div ref={overlay} className="curtain-chapter-layer" aria-hidden="true">{[0,1,2,3,4].map(panel=><span key={panel}/>)}</div>,document.body):null;
}
