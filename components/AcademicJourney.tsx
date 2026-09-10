'use client';
import {useEffect,useRef} from 'react';
import './academic-journey.css';
const nodes=[
 {year:'2021',city:'Beijing',title:'Policy foundations',place:'Renmin University of China (RUC)',story:'The genesis',image:'ruc-admission.jpg',alt:'Kexin Ye’s Renmin University admission notice',copy:'At Mingde College, I built a foundation in public administration and empirical research, and began developing my quantitative research toolkit.',skills:'PUBLIC ADMINISTRATION · QUANTITATIVE METHODS',shape:'portrait'},
 {year:'2023',city:'Beijing',title:'Rigor & recognition',place:'Tsinghua Case Competition',story:'Ideas, put to the test',image:'tsinghua.jpg',alt:'Kexin Ye presenting at the Tsinghua public policy case competition',copy:'I tackled real policy challenges, led data modelling and presented our findings under pressure. A National Scholarship recognised the academic rigor behind this journey from research to delivery.',skills:'DATA MODELLING · PUBLIC PRESENTATION · NATIONAL SCHOLARSHIP',shape:'split'},
 {year:'2024',city:'Beijing',title:'Grit & resilience',place:'RUC Women’s Football Team',story:'Stronger, together',image:'football.jpg',alt:'RUC women’s football team on the pitch',copy:'On the pitch, I learned to coordinate tactics, compete under pressure and keep going. Football strengthened my resilience and taught me how individual commitment becomes collective progress.',skills:'TEAMWORK · TACTICAL THINKING · RESILIENCE',shape:'split'},
 {year:'2025',city:'London',title:'Global social policy',place:'London School of Economics (LSE)',story:'A wider lens',image:'lse.jpg',alt:'Kexin Ye in a graduation gown beside the LSE letters',copy:'I deepened my comparative research in cross-country health policy and health economics, expanding both my international perspective and my empirical toolkit.',skills:'COMPARATIVE RESEARCH · HEALTH ECONOMICS',shape:'portrait'},
 {year:'2026+',city:'Shanghai',title:'Connecting the dots',place:'Fudan University (IGPP)',story:'The next chapter',image:'fudan.jpg',alt:'Kexin Ye beside a world map at an academic gathering',copy:'Bringing local depth into conversation with global perspectives, I am beginning a new chapter in public policy research at the Institute for Global Public Policy.',skills:'GLOBAL PUBLIC POLICY · RESEARCH SYNTHESIS',shape:'split'}
];
export default function AcademicJourney(){
 const root=useRef<HTMLDivElement>(null);
 const jump=useRef<(i:number)=>void>(()=>{});
 useEffect(()=>{
  const el=root.current!,stage=el.querySelector<HTMLElement>('.aj-stage')!,rail=el.querySelector<HTMLElement>('.aj-rail')!;
  const slides=Array.from(el.querySelectorAll<HTMLElement>('.aj-node'));
  const cursor=el.querySelector<HTMLElement>('.aj-indicator')!;
  const buttons=Array.from(el.querySelectorAll<HTMLButtonElement>('.aj-years button'));
  const media=matchMedia('(prefers-reduced-motion: reduce)');
  let distance=0,step=0,frame=0;
  const paint=()=>{
   frame=0;if(media.matches)return;
   const p=Math.max(0,Math.min(1,-el.getBoundingClientRect().top/Math.max(1,distance)));
   rail.style.transform='translate3d('+(-p*distance)+'px,0,0)';
   slides.forEach((slide,i)=>{const offset=i-p*4;slide.style.setProperty('--depth',String(Math.min(1,Math.abs(offset))));slide.style.setProperty('--drift',offset*18+'px')});
   cursor.style.left=p*100+'%';
   buttons.forEach((b,i)=>b.setAttribute('aria-current',Math.round(p*4)===i?'step':'false'));
  };
  const request=()=>{if(!frame)frame=requestAnimationFrame(paint)};
  const measure=()=>{step=slides[1].offsetLeft-slides[0].offsetLeft;distance=step*4;el.style.height=media.matches?'auto':distance+stage.offsetHeight+'px';paint()};
  jump.current=(i)=>{if(media.matches){slides[i].scrollIntoView({behavior:'instant',block:'center'});return}window.scrollTo({top:scrollY+el.getBoundingClientRect().top+i*step,behavior:'smooth'})};
  const observer=new ResizeObserver(measure);observer.observe(stage);measure();
  addEventListener('scroll',request,{passive:true});media.addEventListener('change',measure);
  return()=>{observer.disconnect();cancelAnimationFrame(frame);removeEventListener('scroll',request);media.removeEventListener('change',measure)};
 },[]);
 return <div id="timeline" className="aj-root" ref={root} aria-label="Academic journey">
  <div className="aj-stage">
   <header className="aj-heading"><span>01 / ACADEMIC JOURNEY</span><h2>Grounded in rigor.<br/><span>Open to the world.</span></h2><p>Five moments. An evolving perspective.</p></header>
   <div className="aj-window"><div className="aj-rail">{nodes.map((n,i)=><article className={'aj-node aj-node-'+i} key={n.year}>
    <div className="aj-photo-group">{i===0&&<img className="aj-campus" src="/journey/ruc-campus.png" alt="Renmin University campus entrance"/>}<figure className={'aj-photo aj-'+n.shape}><div className="aj-image"><img src={'/journey/'+n.image} alt={n.alt} decoding="async"/></div><figcaption><span>{n.year} / {n.city}</span><i>{n.story}</i></figcaption></figure></div>
    <div className="aj-copy"><span className="aj-index">0{i+1} /</span><h3>{n.title}</h3><p className="aj-place">{n.year} · {n.place}</p><p className="aj-description">{n.copy}</p><p className="aj-skills">{n.skills}</p></div>
   </article>)}</div></div>
   <footer className="aj-timeline"><div className="aj-track"><span className="aj-indicator"/></div><div className="aj-years">{nodes.map((n,i)=><button key={n.year} onClick={()=>jump.current(i)} aria-label={'Go to '+n.year+' '+n.title}>{n.year}<span>{n.city}</span></button>)}</div><p>SCROLL DOWN TO JOURNEY FORWARD ↓</p></footer>
  </div>
 </div>;
}
