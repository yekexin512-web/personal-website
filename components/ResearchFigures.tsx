'use client';
import {useRef, useState, useEffect} from 'react';
import './research-figures.css';

const figures = [
 {src:'/research/parallel-trends.png',title:'Parallel Trends Test',description:'Event-study estimates for 2013–2023, with 2016 as the reference year.',alt:'Published event-study chart with coefficient estimates and confidence intervals for 2013 through 2023.'},
 {src:'/research/placebo-test.png',title:'Placebo Test',description:'500 randomized assignments assess whether the estimated effect could arise by chance.',alt:'Published histogram of placebo coefficients clustered near zero, with a dashed line marking the baseline estimate.'}
];

export default function ResearchFigures(){
 const [active,setActive]=useState<number|null>(null);
 const dialog=useRef<HTMLDialogElement>(null);
 const opener=useRef<HTMLButtonElement|null>(null);
 useEffect(()=>{if(active===null)return;dialog.current?.showModal();const previous=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.body.style.overflow=previous}},[active]);
 const close=()=>{dialog.current?.close();setActive(null);opener.current?.focus()};
 return <div className="research-figures"><div className="research-figures-grid">{figures.map((figure,index)=><figure key={figure.src}><button aria-label={'Enlarge '+figure.title} onClick={event=>{opener.current=event.currentTarget;setActive(index)}}><img src={figure.src} alt={figure.alt} loading="lazy"/><span aria-hidden="true">↗</span></button><figcaption><strong>{figure.title}</strong><p>{figure.description}</p></figcaption></figure>)}</div><p className="research-figure-source">Figures 1–2 · China Prices, 2025, Issue 5, p. 45 · Original figures</p><dialog ref={dialog} className="research-figure-dialog" aria-labelledby="research-figure-title" onCancel={event=>{event.preventDefault();close()}} onClick={event=>{if(event.target===event.currentTarget)close()}}>{active!==null&&<div><header><h3 id="research-figure-title">{figures[active].title}</h3><button autoFocus onClick={close} aria-label="Close figure">×</button></header><img src={figures[active].src} alt={figures[active].alt}/><p>{figures[active].description}</p></div>}</dialog></div>
}
