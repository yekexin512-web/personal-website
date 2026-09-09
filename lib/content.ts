export const chapters = [ ['about','About','The person behind the projects'], ['experience','Experience','Learning by doing'], ['research','Research','Questions that matter'], ['vibe-coding','Vibe Coding','Ideas into useful things'], ['communication','Communication','Making ideas travel'], ['beyond','Beyond','A little more human'] ] as const;
export const identities = [ ['BUILDER','Turning repetitive problems into useful tools.','vibe-coding'], ['PRODUCT THINKER','From user pain points to metrics, workflows and iteration.','experience'], ['RESEARCHER','From global health systems to firm-level green productivity.','research'], ['COMMUNICATOR','Making complex ideas clear, visual and shareable.','communication'], ['F1 FAN','Strategy, speed, marginal gains — and Ferrari.','beyond'] ];
export const experience = [
{company:'TIKTOK UK',role:'Operations & Strategy Intern',location:'London',period:'Feb–May 2026',metric:'200%+',label:'GMV GROWTH',secondary:[['3% → 20%+','Penetration'],['+60%','Average order value'],['+150%','Seller count']],process:['BENCHMARK','PRD','LAUNCH','MEASURE'],copy:'Building momentum from a cold start. Competitive benchmarking, seller and buyer product development, and incentive design for UK LIVE Auction across 5+ verticals.',detail:'Connected data architecture and BI monitoring with R&D and operations to turn launch signals into the next iteration.'},
{company:'MEITUAN',role:'Business Analysis Intern',location:'Beijing',period:'Nov 2024–Mar 2025',metric:'+40%',label:'INTENT RECOGNITION ACCURACY',secondary:[['+80%','Usage'],['+15%','Order volume'],['+12%','GMV']],process:['ANALYSIS TOOL','BI DASHBOARD','BA-COPILOT','ITERATE'],copy:'Bringing business questions closer to useful answers. Cross-business analysis and a BA-Copilot shaped by real user queries.',detail:'AI · PRODUCT · BI · ANALYTICS'},
{company:'BAIDU',role:'Data Analysis Intern',location:'Beijing',period:'Mar–Jun 2024',metric:'−30%',label:'RESPONSE & PROCESSING TIME',secondary:[['5+','Core monitoring metrics']],process:['MONITOR','DETECT','DRILL DOWN','GOVERN'],copy:'Making signals actionable. A monitoring system connecting anomaly analysis, risk tiers and cross-team reporting.',detail:'From detecting a change to understanding its cause — and getting the right team involved.'}
];
export const timeline = [
{name:'Renmin University of China',short:'RUC',start:2021.67,end:2025.5,lane:'Education',detail:'Beijing · BSc Public Administration · GPA 3.82/4.0'},
{name:'LSE',short:'LSE',start:2025.67,end:2027.5,lane:'Education',detail:'London · MA International Social and Public Policy · Double degree'},
{name:'Fudan University',short:'FUDAN',start:2025.67,end:2027.5,lane:'Education',detail:'Shanghai · LSE–Fudan double degree · 2025–2027'},
{name:'Baidu',short:'BAIDU',start:2024.17,end:2024.5,lane:'Experience',detail:'Beijing · Data Analysis Intern · −30% response / processing time'},
{name:'Meituan',short:'MEITUAN',start:2024.83,end:2025.25,lane:'Experience',detail:'Beijing · Business Analysis Intern · +40% intent recognition accuracy'},
{name:'TikTok UK',short:'TIKTOK UK',start:2026.08,end:2026.42,lane:'Experience',detail:'London · Operations & Strategy Intern · 200%+ GMV growth'}
];
export const research = {health:{title:'GLOBAL CHILDHOOD CANCER',subtitle:'Health financing',stats:[['194','COUNTRIES'],['19','INDICATORS'],['6','DEEP DIVES']],topics:['Financial protection','Access to care','Cross-country health systems','WHO / national databases','Comparative policy analysis','Visualization & reporting']},paper:{title:'GREEN FINANCE × GREEN TFP',journal:'China Prices · AMI Core',period:'2013–2023',method:'Double Machine Learning',copy:'Green Finance Reform and Innovation Pilot Zones → firm-level green productivity.'}};
export const project = {title:'UN MONITOR',url:'https://yekexin512-web.github.io/un-monitor/outputs/unmonitor-v2/',stats:[['600+','LISTINGS'],['10+','ORGANIZATIONS'],['DAILY','AUTO UPDATES'],['−70%','MANUAL SEARCH TIME']],modules:['Job Discovery','Data Dashboard','Resume Workspace'],pipeline:['SCRAPE','STRUCTURE','CATEGORIZE','FILTER','TRACK','UPDATE']};
export const communication = [
{name:'Tanzania Development Trust',short:'TDT',type:'IMPACT',copy:'Turning field information into stories people can understand — and act on.',stats:[['£20K+','Fundraising supported'],['10+','Project summaries']],tags:['MAILCHIMP','CANVA','SOCIAL IMPACT','FUNDRAISING','CAMPAIGN STRATEGY'],cards:['Field stories','Newsletter','Fundraising','Project summaries','Campaigns']},
{name:'Xiaohongshu',short:'Xiaohongshu',type:'AUDIENCE',copy:'A personal content lab for learning what makes people stop, read, save and share.',stats:[['2,767','Followers'],['82K+','Likes & saves']],tags:['AUDIENCE INSIGHT','CONTENT STRATEGY','STORYTELLING','ITERATION'],cards:['London life','LSE notes','Career stories','Formula 1','Audience insights']}
];
// Add supplied assets here. Null entries never produce broken images or dead links.
export const assets:{portrait:string;aboutPhotos:(string|null)[];f1:string|null;monitor:string|null;communication:string[][];email:string|null;linkedin:string|null;resume:string|null;paper:string|null}={portrait:'/kexin-ye-portrait.jpg',aboutPhotos:[null,null],f1:null,monitor:null,communication:[[],[]],email:null,linkedin:null,resume:null,paper:null};

export const communicationGalleries = [
 [
  {title:'Information Management',subtitle:'Organizing the story',images:[{src:'/communication/tdt-information.png',caption:'Shared information and content asset library'}]},
  {title:'Content to Attract Audiences',subtitle:'Making people care',images:[{src:'/communication/tdt-water.png',caption:'Women & Water — audience-facing campaign content'},{src:'/communication/tdt-values.png',caption:'Communicating TDT’s values through social content'}]},
  {title:'Fundraising Results',subtitle:'Turning attention into impact',images:[{src:'/communication/tdt-fundraising.png',caption:'The campaign raised £21,725 — fundraising supported through communication'}]}
 ],
 [
  {title:'Graduation Stories',subtitle:'Creative transitions',images:[{src:'/communication/xhs-graduation.png',caption:'Graduation transition post — 4,252 likes in the supplied screenshot'},{src:'/communication/xhs-ruc.png',caption:'From admission to graduation — 1,514 likes in the supplied screenshot'}]},
  {title:'LSE Life',subtitle:'A new chapter in London',images:[{src:'/communication/xhs-lse.png',caption:'LSE first-term vlog — 139 likes in the supplied screenshot'}]},
  {title:'My Content Lab',subtitle:'2,767 followers · 82K+ likes & saves',images:[{src:'/communication/xhs-profile.jpg',caption:'Xiaohongshu profile — audience snapshot supplied by Kexin Ye'}]},
  {title:'Fudan Admission',subtitle:'Milestones worth sharing',images:[{src:'/communication/xhs-fudan.png',caption:'Fudan admission unboxing — 569 likes in the supplied screenshot'}]}
 ]
];
