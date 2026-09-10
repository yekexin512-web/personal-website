'use client';
import {useEffect,useRef,useState} from 'react';
import './tiktok-case-study.css';
import {assetPath} from '@/lib/base-path';

const stages=[['INTRO','Opening'],['01','Market'],['02','Product'],['03','Data'],['04','Impact']];
const outcomes=[{value:200,prefix:'',suffix:'%+',label:'GMV GROWTH'},{value:20,prefix:'3% → ',suffix:'%+',label:'PENETRATION'},{value:60,prefix:'+',suffix:'%',label:'AVERAGE ORDER VALUE'},{value:150,prefix:'+',suffix:'%',label:'SELLER COUNT'}];

export default function TikTokCaseStudy(){
 const root=useRef<HTMLElement>(null),viewport=useRef<HTMLDivElement>(null),track=useRef<HTMLDivElement>(null),video=useRef<HTMLVideoElement>(null);
 const navigate=useRef<(index:number)=>void>(()=>{});
 const [active,setActive]=useState(0),[playing,setPlaying]=useState(false),[sound,setSound]=useState(false);
 useEffect(()=>{
  const el=root.current!,view=viewport.current!,rail=track.current!;
  const panels=Array.from(rail.querySelectorAll<HTMLElement>('.tk-panel'));
  const numbers=Array.from(el.querySelectorAll<HTMLElement>('[data-outcome]'));
  const impact=panels[panels.length-1];
  const metricGroups=Array.from(impact.querySelectorAll<HTMLElement>('.tk-outcomes>div'));
  const impactTitle=impact.querySelector<HTMLElement>('h3')!;
  const impactAfter=Array.from(impact.querySelectorAll<HTMLElement>(':scope>p,.tk-growth-loop,.tk-explore'));
  const mobile=matchMedia('(max-width: 900px)'),reduced=matchMedia('(prefers-reduced-motion: reduce)');
  let distance=0,frame=0,disposed=false;
  const animateImpact=(raw:number)=>{
   const base=reduced.matches?1:Math.max(0,Math.min(1,raw));
   const depths=[650,500,400,550],xOffsets=[-22,20,-16,18];
   const headline=Math.max(0,Math.min(1,base/.28));
   impactTitle.style.opacity=String(headline);
   impactTitle.style.transform='translateY('+(20*(1-headline))+'px)';
   metricGroups.forEach((group,i)=>{
    const t=Math.max(0,Math.min(1,(base-i*.085)/.72));
    const approach=1-Math.pow(1-t,3);
    const scale=t<=.82?.45+.59*(1-Math.pow(1-t/.82,3)):1.04-.04*((t-.82)/.18);
    const number=group.querySelector<HTMLElement>('strong')!,label=group.querySelector<HTMLElement>('span')!;
    number.style.transform='translate3d('+(xOffsets[i]*(1-approach))+'px,'+((38+i*3)*(1-approach))+'px,'+(-depths[i]*(1-approach))+'px) scale('+scale+')';
    number.style.opacity=String(Math.min(1,t/.28));
    number.style.filter='blur('+(6*(1-approach))+'px)';
    const labelProgress=Math.max(0,Math.min(1,(base-(.25+i*.085))/.23));
    label.style.opacity=String(labelProgress);
    label.style.transform='translateY('+(11*(1-labelProgress))+'px)';
   });
   const quiet=Math.max(0,Math.min(1,(base-.78)/.18));
   impactAfter.forEach(node=>{node.style.opacity=String(quiet);node.style.transform='translateY('+(12*(1-quiet))+'px)'});
  };
  const paint=()=>{
   frame=0;
   if(mobile.matches||reduced.matches){
    rail.style.transform='none';
    const rect=impact.getBoundingClientRect();
    animateImpact(reduced.matches?1:(innerHeight-rect.top)/(innerHeight*.72));
    return;
   }
   const elapsed=Math.max(0,-el.getBoundingClientRect().top);
   const x=Math.min(distance,elapsed);
   rail.style.transform='translate3d('+(-x)+'px,0,0)';
   let current=0;
   panels.forEach((panel,i)=>{
    const left=panel.offsetLeft-x;
    if(left<view.clientWidth*.45)current=i;
    const reveal=Math.max(0,Math.min(1,(view.clientWidth-left)/(view.clientWidth*.55)));
    panel.style.setProperty('--tk-reveal',String(reveal));
    if(i===panels.length-1){
     animateImpact((view.clientWidth-left)/(view.clientWidth*.78));
    }
   });
   setActive(current);
  };
  const schedule=()=>{if(!frame)frame=requestAnimationFrame(paint)};
  const measure=()=>{
   if(disposed)return;
   distance=Math.max(0,rail.scrollWidth-view.clientWidth);
   el.style.height=mobile.matches||reduced.matches?'auto':distance+view.offsetHeight+100+'px';
   paint();
  };
  navigate.current=(i)=>{
   if(mobile.matches||reduced.matches){panels[i].scrollIntoView({behavior:reduced.matches?'instant':'smooth',block:'start'});return}
   window.scrollTo({top:scrollY+el.getBoundingClientRect().top+Math.min(distance,panels[i].offsetLeft),behavior:'smooth'});
  };
  const resize=new ResizeObserver(measure);resize.observe(view);resize.observe(rail);
  window.addEventListener('scroll',schedule,{passive:true});mobile.addEventListener('change',measure);reduced.addEventListener('change',measure);
  document.fonts.ready.then(measure);measure();
  return()=>{disposed=true;resize.disconnect();cancelAnimationFrame(frame);window.removeEventListener('scroll',schedule);mobile.removeEventListener('change',measure);reduced.removeEventListener('change',measure)};
 },[]);
 useEffect(()=>{
  const v=video.current!,motion=matchMedia('(prefers-reduced-motion: reduce)');
  let visible=false;
  const update=()=>{if(visible&&!motion.matches&&document.visibilityState==='visible')v.play().catch(()=>{});else v.pause()};
  const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;update()},{threshold:.3});observer.observe(v);
  motion.addEventListener('change',update);document.addEventListener('visibilitychange',update);
  return()=>{observer.disconnect();v.pause();motion.removeEventListener('change',update);document.removeEventListener('visibilitychange',update)};
 },[]);
 return <section id="experience" className="tk-case" ref={root} aria-label="TikTok UK LIVE Auction case study">
  <div className="tk-viewport" ref={viewport}>
   <div className="tk-track" ref={track}>
    <article id="tk-film" className="tk-panel tk-opening">
     <div className="tk-opening-left">
      <div className="tk-opening-copy"><span className="tk-label">02 / EXPERIENCE</span><h2>Reading the market.<br/>Shaping the product.</h2><div className="tk-opening-role"><span className="tk-label">ROLE / LOCATION / PERIOD</span><p>Operations &amp; Strategy Intern<br/>London · Feb–May 2026</p></div><p className="tk-project-name">TIKTOK UK</p></div>
      <div className="tk-film-copy"><h3>A new format,<br/>already in motion.</h3><p>The real LIVE Auction experience sat at the centre of the work: a fast-moving interaction between sellers, buyers, products and bidding mechanics.</p></div>
     </div>
     <div className="tk-phone-scene"><div className="tk-phone"><div className="tk-phone-speaker" aria-hidden="true"/><video ref={video} poster={assetPath("/experience/auction-poster.jpg")} autoPlay muted loop playsInline preload="auto" onPlay={()=>setPlaying(true)} onPause={()=>setPlaying(false)} aria-label="Provided TikTok LIVE Auction video"><source src={assetPath("/experience/tiktok-live-auction-new.mp4")} type="video/mp4"/></video><div className="tk-video-controls"><button onClick={()=>{const v=video.current!;if(v.paused)v.play().catch(()=>{});else v.pause()}} aria-label={playing?'Pause auction video':'Play auction video'}>{playing?'PAUSE':'PLAY'}</button><button onClick={()=>{const v=video.current!;v.muted=!v.muted;setSound(!v.muted)}} aria-label={sound?'Mute video':'Enable video sound'}>{sound?'SOUND ON':'MUTED'}</button></div></div><span className="tk-video-caption">LIVE AUCTION / ORIGINAL FOOTAGE</span></div>
    </article>
    <article id="tk-market" className="tk-panel tk-market">
     <div className="tk-market-story"><div><span className="tk-label">01 / FIND THE OPPORTUNITY</span><h3>Finding where a global format<br/>could become a local opportunity.</h3><p>I benchmarked live-auction platforms and compared UK and US market structures to identify priority categories, seller patterns and product gaps.</p></div><div className="tk-kinetic" aria-label="Global benchmark leads to local opportunity"><span className="tk-kinetic-left">GLOBAL BENCHMARK</span><i aria-hidden="true"/><span className="tk-kinetic-right">LOCAL OPPORTUNITY</span><small>WHAT CHANGED</small></div></div>
    </article>
    <article id="tk-product" className="tk-panel tk-product">
     <header><span className="tk-label">02 / TURN INSIGHT INTO PRODUCT</span><h3>Turning insight<br/>into product.</h3><p>I translated market findings into seller-side and buyer-side product requirements, auction mechanics, UX priorities and incentive ideas.</p></header>
     <div className="tk-product-workspace"><div className="tk-flow-column"><span className="tk-label">SELLER WORKFLOW</span><div>Set up the auction</div><b>↓</b><div>Upload before LIVE<br/><small>or quick upload during LIVE</small></div><b>↓</b><div>Launch & adapt</div></div><div className="tk-product-details"><span className="tk-label">BUYER EXPERIENCE</span><h4>Make the next bid<br/>feel effortless.</h4><p>Swipe-to-bid · Custom max bid</p><div className="tk-mechanics"><span>AUCTION MECHANICS</span><p>Countdown / Sudden death<br/>Randomizer</p></div><span className="tk-label">GROWTH LEVERS</span><p>Merchant incentives<br/>Category expansion</p></div></div><div className="tk-process">INSIGHT <span>→</span> FEATURE <span>→</span> EXPERIMENT</div>
    </article>
    <article id="tk-data" className="tk-panel tk-data">
     <header><span className="tk-label">03 / MEASURE & ITERATE</span><h3>Turning launch signals<br/>into the next iteration.</h3><p>I analysed GMV, supply, seller performance, campaign impact and auction penetration to identify what was working and what needed to change.</p></header>
     <div className="tk-measurement"><div className="tk-measurement-heading"><span>DATA ARCHITECTURE & BI MONITORING</span><span>DAILY / WEEKLY</span></div><div className="tk-data-lenses"><div><span>01 / GROWTH</span><h4>Is traction<br/>building?</h4><p>GMV · Auction penetration<br/>Average order value</p></div><div><span>02 / SUPPLY</span><h4>What drives<br/>participation?</h4><p>Seller count · Seller tiers<br/>LIVE hours · Active accounts</p></div><div><span>03 / PERFORMANCE</span><h4>Where to<br/>act next?</h4><p>Category performance<br/>Seller contribution · Campaign uplift</p></div></div><div className="tk-process">DATA <span>→</span> DECISION <span>→</span> ITERATION</div></div>
    </article>
    <article id="tk-impact" className="tk-panel tk-impact"><span className="tk-label">THE IMPACT / TOGETHER, THE WORK HELPED DRIVE</span><h3>What changed.</h3><div className="tk-outcomes">{outcomes.map(m=><div key={m.label}><strong data-outcome>{m.prefix}{m.value}{m.suffix}</strong><span>{m.label}</span></div>)}</div><p>Three workstreams.<br/>One growth loop.</p><div className="tk-growth-loop"><span>MARKET</span><b>→</b><span>PRODUCT</span><b>→</b><span>DATA</span><b>↺</b></div><a href="#research" className="tk-explore">NEXT CHAPTER / RESEARCH ↓</a></article>
   </div>
   <nav className="tk-navigation" aria-label="Case-study stages">{stages.map(([number,label],i)=><button key={label} onClick={()=>navigate.current(i)} aria-current={active===i?'step':undefined}><span>{number}</span>{label}</button>)}</nav>
  </div>
 </section>;
}
