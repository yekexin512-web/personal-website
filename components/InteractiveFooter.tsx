'use client';
import {useEffect,useRef} from 'react';
import './interactive-footer.css';
export default function InteractiveFooter(){
 const canvas=useRef<HTMLCanvasElement>(null);
 useEffect(()=>{
  const c=canvas.current!,ctx=c.getContext('2d');if(!ctx)return;
  const motion=matchMedia('(prefers-reduced-motion: reduce)');
  let w=0,h=0,frame=0,last=0,visible=false;
  let balls:{x:number;y:number;vx:number;vy:number;ox:number;oy:number;r:number;blue:boolean}[]=[];
  const pointer={x:-9999,y:-9999};
  const draw=(time:number)=>{
   frame=0;const dt=Math.min((time-last)/1000||.016,.032);last=time;
   ctx.clearRect(0,0,w,h);
   balls.forEach((b,i)=>{
    if(!motion.matches){
     const dx=b.x-pointer.x,dy=b.y-pointer.y,d=Math.hypot(dx,dy);
     const force=Math.max(0,1-d/130)*950;
     b.vx+=((b.ox-b.x)*8+dx/Math.max(d,1)*force)*dt;
     b.vy+=((b.oy+Math.sin(time*.0007+i)*5-b.y)*8+dy/Math.max(d,1)*force)*dt;
     b.vx*=Math.exp(-5*dt);b.vy*=Math.exp(-5*dt);
     b.x=Math.max(b.r,Math.min(w-b.r,b.x+b.vx*dt));
     b.y=Math.max(b.r,Math.min(h-b.r,b.y+b.vy*dt));
    }
    const g=ctx.createRadialGradient(b.x-b.r*.35,b.y-b.r*.4,b.r*.03,b.x,b.y,b.r);
    g.addColorStop(0,'rgba(255,255,255,.95)');g.addColorStop(.25,b.blue?'rgba(152,188,222,.65)':'rgba(255,255,255,.5)');
    g.addColorStop(.75,b.blue?'rgba(53,91,143,.55)':'rgba(183,196,204,.38)');g.addColorStop(1,b.blue?'rgba(40,71,116,.7)':'rgba(138,156,170,.5)');
    ctx.beginPath();ctx.arc(b.x,b.y,b.r,0,Math.PI*2);ctx.fillStyle=g;ctx.fill();
    ctx.strokeStyle='rgba(255,255,255,.65)';ctx.lineWidth=1;ctx.stroke();
   });
   if(visible&&!motion.matches)frame=requestAnimationFrame(draw);
  };
  const start=()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(draw)};
  const resize=()=>{
   w=c.clientWidth;h=c.clientHeight;const ratio=Math.min(devicePixelRatio,2);c.width=w*ratio;c.height=h*ratio;ctx.setTransform(ratio,0,0,ratio,0,0);
   const count=w<600?55:95;
   balls=Array.from({length:count},(_,i)=>{
    const seed=(n:number)=>{const v=Math.sin(n*127.1)*43758.5453;return v-Math.floor(v)};
    const r=12+seed(i+2)*25,ox=w*(.12+seed(i+6)*.76),oy=h*(.2+seed(i+90)*.6);
    return{x:ox,y:oy,ox,oy,vx:0,vy:0,r,blue:i%5===0};
   });start();
  };
  const move=(e:PointerEvent)=>{const rect=c.getBoundingClientRect();pointer.x=e.clientX-rect.left;pointer.y=e.clientY-rect.top};
  const leave=()=>{pointer.x=pointer.y=-9999};
  const ro=new ResizeObserver(resize);ro.observe(c);
  const io=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;if(visible)start();else cancelAnimationFrame(frame)});io.observe(c);
  c.addEventListener('pointermove',move);c.addEventListener('pointerdown',move);c.addEventListener('pointerleave',leave);c.addEventListener('pointerup',leave);c.addEventListener('pointercancel',leave);motion.addEventListener('change',start);resize();
  return()=>{cancelAnimationFrame(frame);ro.disconnect();io.disconnect();c.removeEventListener('pointermove',move);c.removeEventListener('pointerdown',move);c.removeEventListener('pointerleave',leave);c.removeEventListener('pointerup',leave);c.removeEventListener('pointercancel',leave);motion.removeEventListener('change',start)};
 },[]);
return <section id="next-adventure" className="next-adventure"><div className="section-mark"><span>06 /</span> NEXT JOURNEY</div><h2>Next journey.</h2><p>Looking forward to be with you.</p><span className="adventure-hint">Move your cursor or touch the bubbles ↓</span><canvas ref={canvas} aria-hidden="true"/><footer><a className="adventure-name" href="#about">KEXIN YE</a><div><a href="mailto:yekexin512@gmail.com">Email ↗</a><a href="https://www.linkedin.com/in/kexin-ye-ab02ba377" target="_blank" rel="noreferrer">LinkedIn ↗</a></div><small>© {new Date().getFullYear()} KEXIN YE</small></footer></section>;
}
