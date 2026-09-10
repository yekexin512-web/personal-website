export const chapters = [ ['about','About','The person behind the projects'], ['experience','Experience','Learning by doing'], ['research','Research','Questions that matter'], ['vibe-coding','Vibe Coding','Ideas into useful things'], ['communication','Communication','Making ideas travel'], ['next-adventure','Next Journey','Looking forward to be with you.'] ] as const;
export const identities = [ ['BUILDER','Turning repetitive problems into useful tools.','vibe-coding'], ['PRODUCT THINKER','From user pain points to metrics, workflows and iteration.','experience'], ['RESEARCHER','From global health systems to firm-level green productivity.','research'], ['COMMUNICATOR','Making complex ideas clear, visual and shareable.','communication'] ];
export const experience = [
{company:'TIKTOK UK',role:'Operations & Strategy Intern',location:'London',period:'Feb–May 2026',metric:'200%+',label:'GMV GROWTH',secondary:[['3% → 20%+','Penetration'],['+60%','Average order value'],['+150%','Seller count']],process:['BENCHMARK','PRD','LAUNCH','MEASURE'],copy:'Building momentum from a cold start. Competitive benchmarking, seller and buyer product development, and incentive design for UK LIVE Auction across 5+ verticals.',detail:'Connected data architecture and BI monitoring with R&D and operations to turn launch signals into the next iteration.'},
];
export const timeline = [
{name:'Renmin University of China',short:'RUC',start:2021.67,end:2025.5,lane:'Education',detail:'Beijing · BSc Public Administration · GPA 3.82/4.0'},
{name:'LSE',short:'LSE',start:2025.67,end:2027.5,lane:'Education',detail:'London · MA International Social and Public Policy · Double degree'},
{name:'Fudan University',short:'FUDAN',start:2025.67,end:2027.5,lane:'Education',detail:'Shanghai · LSE–Fudan double degree · 2025–2027'},
{name:'TikTok UK',short:'TIKTOK UK',start:2026.08,end:2026.42,lane:'Experience',detail:'London · Operations & Strategy Intern · 200%+ GMV growth'}
];
export const research = {health:{title:'GLOBAL CHILDHOOD CANCER',subtitle:'Health financing',stats:[['194','COUNTRIES'],['19','INDICATORS'],['6','DEEP DIVES']],topics:['Financial protection','Access to care','Cross-country health systems','WHO / national databases','Comparative policy analysis','Visualization & reporting']},paper:{title:'GREEN FINANCE × GREEN TFP',journal:'China Prices · AMI Core',period:'2013–2023',method:'Double Machine Learning',copy:'Green Finance Reform and Innovation Pilot Zones → firm-level green productivity.'}};
export const project = {title:'UN MONITOR',url:'https://yekexin512-web.github.io/un-monitor/outputs/unmonitor-v2/',stats:[['600+','LISTINGS'],['10+','ORGANIZATIONS'],['DAILY','AUTO UPDATES'],['−70%','MANUAL SEARCH TIME']],modules:['Job Discovery','Data Dashboard','Resume Workspace'],pipeline:['SCRAPE','STRUCTURE','CATEGORIZE','FILTER','TRACK','UPDATE']};
export const communication = [
{name:'Tanzania Development Trust',short:'TDT',type:'IMPACT',copy:'I turn field information into clear visual stories: designing campaign graphics, editing social content and communicating ideas that attract audiences and support fundraising.',stats:[['£20K+','Fundraising supported'],['10+','Project summaries']],tags:['GRAPHIC DESIGN','VISUAL COMMUNICATION','CANVA','CONTENT EDITING','FUNDRAISING'],cards:['Field stories','Newsletter','Fundraising','Project summaries','Campaigns']},
{name:'Xiaohongshu',short:'Xiaohongshu',type:'AUDIENCE',copy:'Everyday life through daily vlogs and creative transitions. All videos independently edited by Kexin Ye.',stats:[['1M','TOTAL VIEWS'],['80K','TOTAL LIKES']],tags:['DAILY VLOGS','CREATIVE TRANSITIONS','INDEPENDENT EDITING'],cards:['Selected work']}
];
// Add supplied assets here. Null entries never produce broken images or dead links.
export const assets:{portrait:string;aboutPhotos:(string|null)[];f1:string|null;monitor:string|null;communication:string[][];email:string|null;linkedin:string|null;resume:string|null;paper:string|null}={portrait:'/kexin-ye-portrait.jpg',aboutPhotos:[null,null],f1:null,monitor:null,communication:[[],[]],email:null,linkedin:null,resume:null,paper:'/research/green-finance-kexin-ye.pdf'};
export const academicPaper = {
 title:'The Impact of Green Finance on Firms’ Green Total Factor Productivity: Evidence from Green Investor Entry',
 journal:'China Prices · 2025, Issue 5 · pp. 42–47',
 authors:'Zhijian Jiao · Sinuo Lu · Kexin Ye (corresponding author)',
 url:'/research/green-finance-kexin-ye.pdf',
 cover:'/research/green-finance-cover.png',
 summary:'Examining how green finance pilot zones improve firms’ green productivity through the entry of green investors.',
 facts:[['2013–2023','STUDY PERIOD'],['1,395','FIRMS'],['9,691','OBSERVATIONS']],
 methods:'A quasi-natural experiment using difference-in-differences with firm and year fixed effects. Green productivity is measured with Super-SBM; event-study, placebo and double machine learning analyses test robustness.',
 findings:'The paper reports a positive effect on green productivity, with green-investor entry as a mechanism. Effects are more pronounced among state-owned firms and firms in highly polluting industries.'
};

export const communicationGalleries = [
 [
  {title:'Information Management',subtitle:'Organizing the story',images:[{src:'/communication/tdt-information.png',caption:'Shared information and content asset library'}]},
  {title:'Content to Attract Audiences',subtitle:'Making people care',images:[{src:'/communication/tdt-water.png',caption:'Women & Water — audience-facing campaign content'}]},
  {title:'Visual Storytelling',subtitle:'Graphic design · social communication',images:[{src:'/communication/tdt-values.png',caption:'Values campaign — graphic design and visual communication'}]},
  {title:'Campaign Graphics',subtitle:'Designing for communication',images:[{src:'/communication/tdt-campaigns.png',caption:'Newsletter, project themes and fundraising campaign graphics'}]},
  {title:'Fundraising Results',subtitle:'Turning attention into impact',images:[{src:'/communication/tdt-fundraising.png',caption:'The campaign raised £21,725 — fundraising supported through communication'}]}
 ],
 [
  {title:'Creative Transitions',subtitle:'Graduation · Independent editing',images:[{src:'/communication/xhs-graduation.png',caption:'Creative graduation transitions · independently edited by Kexin Ye'}]},
  {title:'Daily Vlogs',subtitle:'Campus life · Independent editing',images:[{src:'/communication/xhs-lse.png',caption:'Daily vlogs sharing university life · independently edited by Kexin Ye'}]},
  {title:'Creative Transitions',subtitle:'Life milestones · Independent editing',images:[{src:'/communication/xhs-ruc.png',caption:'Life milestones told through creative transitions · independently edited by Kexin Ye'}]},
  {title:'Creative Transitions',subtitle:'Unboxing · Independent editing',images:[{src:'/communication/xhs-fudan.png',caption:'An admission-letter unboxing with creative transitions · independently edited by Kexin Ye'}]},
  {title:'Daily Vlogs',subtitle:'Life in London · Independent editing',images:[{src:'/communication/xhs-museum-vlog.png',caption:'A museum ball in London · daily vlog independently edited by Kexin Ye'}]}
 ]
];
