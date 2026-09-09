'use client';
import {useEffect,useRef} from 'react';
import './chapter-transition.css';

export default function ChapterTransition({number,label}:{number:string;label:string}){
 const ref=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  const element=ref.current;if(!element)return;
  const observer=new IntersectionObserver(entries=>{for(const entry of entries){element.classList.toggle('is-entering',entry.isIntersecting)}},{threshold:.5});
  observer.observe(element);return()=>observer.disconnect();
 },[]);
 return <div ref={ref} className="chapter-transition" aria-hidden="true"><span className="chapter-transition-line"/><span className="chapter-transition-label">{number} <span>{label}</span></span><span className="chapter-transition-line"/><span className="chapter-transition-dot"/></div>;
}
