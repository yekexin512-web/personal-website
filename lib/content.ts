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
{name:'Tanzania Development Trust',short:'TDT',type:'IMPACT',copy:'I turn field information into clear visual stories: designing campaign graphics, editing social content and communicating ideas that attract audiences and support fundraising.',stats:[['£20K+','Fundraising supported'],['10+','Project summaries']],tags:['GRAPHIC DESIGN','VISUAL COMMUNICATION','CANVA','CONTENT EDITING','FUNDRAISING'],cards:['Field stories','Newsletter','Fundraising','Project summaries','Campaigns']},
{name:'Xiaohongshu',short:'Xiaohongshu',type:'AUDIENCE',copy:'Selected visual work. Video editing and content editing independently by Kexin Ye.',stats:[],tags:['VIDEO EDITING','CONTENT EDITING','VISUAL STORYTELLING'],cards:['Selected work']}
];
// Add supplied assets here. Null entries never produce broken images or dead links.
export const assets:{portrait:string;aboutPhotos:(string|null)[];f1:string|null;monitor:string|null;communication:string[][];email:string|null;linkedin:string|null;resume:string|null;paper:string|null}={portrait:'/kexin-ye-portrait.jpg',aboutPhotos:[null,null],f1:null,monitor:null,communication:[[],[]],email:null,linkedin:null,resume:null,paper:'/research/green-finance-kexin-ye.pdf'};
export const academicPaper = {
 title:'绿色金融对企业绿色全要素生产率提升的影响研究——基于绿色投资者进入视角',
 journal:'China Prices / 中国物价 · 2025, Issue 5 · pp. 42–47',
 authors:'焦之坚 · 卢思诺 · 叶可昕（通讯作者）',
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
  {title:'Selected Work 01',subtitle:'Independent editing',images:[{src:'/communication/xhs-graduation.png',caption:'Selected video work · edited by Kexin Ye'}]},
  {title:'Selected Work 02',subtitle:'Independent editing',images:[{src:'/communication/xhs-lse.png',caption:'Selected video work · edited by Kexin Ye'}]},
  {title:'Selected Work 03',subtitle:'Independent editing',images:[{src:'/communication/xhs-ruc.png',caption:'Selected video work · edited by Kexin Ye'}]},
  {title:'Selected Work 04',subtitle:'Independent editing',images:[{src:'/communication/xhs-fudan.png',caption:'Selected video work · edited by Kexin Ye'}]}
 ]
];
