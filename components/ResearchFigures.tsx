'use client';
import {useRef, useState, useEffect} from 'react';
import './research-figures.css';
import {assetPath} from '@/lib/base-path';

const figures = [
 {src:'/research/baseline-results.png',title:'Baseline Results',description:'Table 1 · p. 45. The estimated policy effect on green total factor productivity is positive and statistically significant with and without controls.',alt:'Original baseline regression table reporting a policy coefficient of 0.0037 in both specifications.'},
 {src:'/research/investor-mechanism.png',title:'Green Investor Mechanism',description:'Table 3 · p. 46. Mechanism and two-part models examine how the policy supports green investor entry.',alt:'Original mechanism table showing green investor entry and the participation and quantity models.'},
 {src:'/research/heterogeneity-results.png',title:'Differences Across Firms',description:'Table 4 · p. 47. Subgroup estimates are larger for state-owned firms and firms in highly polluting industries.',alt:'Original heterogeneity table comparing ownership types and pollution intensity.'},
 {src:'/research/parallel-trends.png',title:'Parallel Trends Test',description:'Event-study estimates for 2013–2023, with 2016 as the reference year.',alt:'Published event-study chart with coefficient estimates and confidence intervals for 2013 through 2023.'},
 {src:'/research/placebo-test.png',title:'Placebo Test',description:'Figure 2 · p. 45. 500 randomized assignments assess whether the estimated effect could arise by chance.',alt:'Published histogram of placebo coefficients clustered near zero, with a dashed line marking the baseline estimate.'},
 {src:'/research/dml-results.png',title:'Machine Learning Robustness',description:'Table 2 · p. 46. Positive estimates persist using random forests, gradient boosting and Lasso with cross-validation.',alt:'Original double machine learning table comparing three estimation methods.'}
];

export default function ResearchFigures(){
 const [active,setActive]=useState<number|null>(null);
 const dialog=useRef<HTMLDialogElement>(null);
 const opener=useRef<HTMLButtonElement|null>(null);
 useEffect(()=>{if(active===null)return;dialog.current?.showModal();const previous=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.body.style.overflow=previous}},[active]);
 const close=()=>{dialog.current?.close();setActive(null);opener.current?.focus()};
 return <div className="research-figures"><p className="research-gallery-heading">RESEARCH EVIDENCE <span>Click any preview to enlarge ↗</span></p><div className="research-figures-grid">{figures.map((figure,index)=><figure key={figure.src}><button aria-label={'Enlarge '+figure.title} onClick={event=>{opener.current=event.currentTarget;setActive(index)}}><img src={assetPath(figure.src)} alt={figure.alt} loading="lazy"/><span aria-hidden="true">↗</span></button><figcaption><strong>{figure.title}</strong></figcaption></figure>)}</div><p className="research-figure-source">Tables 1–4 & Figures 1–2 · China Prices, 2025, Issue 5, pp. 45–47 · Original exhibits</p><dialog ref={dialog} className="research-figure-dialog" aria-labelledby="research-figure-title" onCancel={event=>{event.preventDefault();close()}} onClick={event=>{if(event.target===event.currentTarget)close()}}>{active!==null&&<div><header><h3 id="research-figure-title">{figures[active].title}</h3><button autoFocus onClick={close} aria-label="Close figure">×</button></header><img src={assetPath(figures[active].src)} alt={figures[active].alt}/><p>{figures[active].description}</p></div>}</dialog></div>
}
