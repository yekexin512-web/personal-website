'use client';
import {useEffect,useRef,useState,type CSSProperties} from 'react';
import {communication,communicationGalleries} from '@/lib/content';
import './communication.css';
import './communication-screen.css';
import './communication-five.css';

export default function Communication(){
 const [project,setProject]=useState(0);
 const [phase,setPhase]=useState(0);
 const [opened,setOpened]=useState<number|null>(null);
 const dialog=useRef<HTMLDialogElement>(null);
 const opener=useRef<HTMLElement|null>(null);
 const gesture=useRef({x:0,y:0,moved:false});
 const wheel=useRef(0);
 const items=communicationGalleries[project];
 const count=items.length;
 const active=((phase%count)+count)%count;
 const current=opened===null?null:items[opened];
 const slot=(index:number)=>{let offset=(index-active+count)%count;if(offset>count/2)offset-=count;return offset};
 const center=(index:number)=>{let steps=(index-active+count)%count;if(steps>count/2)steps-=count;setPhase(p=>p+steps)};
 const close=()=>{dialog.current?.close();setOpened(null);opener.current?.focus()};
 useEffect(()=>{if(opened===null)return;dialog.current?.showModal();const old=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.body.style.overflow=old}},[opened]);
 return <section id="communication" className="communication pad ring-section">
  <header className="communication-heading"><div className="section-mark"><span>05 /</span>COMMUNICATION<span className="mark-line"/></div>
  <h2 className="display-heading">MAKING IDEAS <span>travel.</span></h2>
  <div className="photo-project-tabs" aria-label="Communication projects">{communication.map((p,i)=><button key={p.name} aria-pressed={project===i} onClick={()=>{setProject(i);setPhase(0)}}>{p.name}<span>{p.type}</span></button>)}</div>
  </header><div className="communication-body"><aside className="communication-story"><span className="eyebrow">COMMUNICATION FOR {communication[project].type}</span><p>{communication[project].copy}</p><div className="communication-skills">{communication[project].tags.map(tag=><span key={tag}>{tag}</span>)}</div></aside><div className="ring-carousel" role="region" aria-roledescription="carousel" aria-label={communication[project].name} onKeyDown={e=>{if(e.key==='ArrowRight'){e.preventDefault();setPhase(p=>p+1)}if(e.key==='ArrowLeft'){e.preventDefault();setPhase(p=>p-1)}}}>
   <button className="ring-arrow" aria-label="Previous work" onClick={()=>setPhase(p=>p-1)}>←</button>
   <div className="ring-stage" onWheel={e=>{if(Math.abs(e.deltaX)<15)return;const now=Date.now();if(now-wheel.current<550)return;wheel.current=now;setPhase(p=>p+(e.deltaX>0?1:-1))}} onPointerDown={e=>{gesture.current={x:e.clientX,y:e.clientY,moved:false}}} onPointerUp={e=>{const dx=e.clientX-gesture.current.x,dy=e.clientY-gesture.current.y;if(Math.abs(dx)>35&&Math.abs(dx)>Math.abs(dy)){gesture.current.moved=true;setPhase(p=>p+(dx<0?1:-1))}}} onPointerCancel={()=>{gesture.current.moved=true}}>
   {items.map((item,i)=>{const offset=slot(i);const depth=1-Math.abs(offset)/2;const centered=i===active;return <button key={item.images[0].src} className={'ring-card'+(centered?' is-active':'')} style={{'--position':offset,'--drop':`${(1-depth)*25}px`,'--scale':centered?1.15:.68+.16*(depth+1)/2,'--rotation':`${offset*7}deg`,'--alpha':centered?1:.42+.4*(depth+1)/2,zIndex:Math.round((depth+1)*10)+(centered?10:0)} as CSSProperties} aria-label={centered?'Open '+item.title:'Center '+item.title} aria-current={centered?'true':undefined} data-cursor={centered?'OPEN':'VIEW'} onClick={e=>{if(gesture.current.moved){gesture.current.moved=false;return}if(!centered){center(i);return}opener.current=e.currentTarget;setOpened(i)}}><span className={'ring-image '+(project===1?'work-crop':'')}><img src={item.images[0].src} alt={item.images[0].caption} draggable={false} loading="lazy"/></span><span className="ring-caption"><strong>{item.title}</strong><small>{item.subtitle}</small><span aria-hidden="true">↗</span></span></button>})}
   </div>
   <button className="ring-arrow" aria-label="Next work" onClick={()=>setPhase(p=>p+1)}>→</button>
  </div>
  <aside className="communication-numbers">{communication[project].stats.map(([value,label])=><div key={label}><strong>{value}</strong><span>{label}</span></div>)}</aside></div><footer className="communication-controls"><div className="ring-pagination" aria-label="Choose work in fixed order">{items.map((item,i)=><button key={item.images[0].src} onClick={()=>center(i)} aria-label={'Center '+item.title} aria-pressed={active===i}>{String(i+1).padStart(2,'0')}</button>)}</div>
  <p className="gallery-hint">SWIPE TO BROWSE · CLICK THE CENTER TO OPEN</p>
  </footer>
  <dialog ref={dialog} className="photo-lightbox" aria-labelledby="work-title" onCancel={e=>{e.preventDefault();close()}} onClick={e=>{if(e.target===e.currentTarget)close()}}>{current&&<div className="lightbox-shell"><header><div><span className="eyebrow">{communication[project].name}</span><h3 id="work-title">{current.title}</h3></div><button autoFocus onClick={close} aria-label="Close work">×</button></header><div className={'lightbox-image '+(project===1?'video-work-view':'')}>{project===1?<div className="work-crop"><img src={current.images[0].src} alt={current.images[0].caption}/></div>:<img src={current.images[0].src} alt={current.images[0].caption}/>}</div><div className="lightbox-caption"><p>{current.images[0].caption}</p></div>{project===0&&<a className="original-image-link" href={current.images[0].src} target="_blank" rel="noreferrer">VIEW ORIGINAL IMAGE ↗</a>}</div>}</dialog>
 </section>
}
