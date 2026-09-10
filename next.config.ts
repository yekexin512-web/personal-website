import type { NextConfig } from 'next';
const repository=process.env.GITHUB_REPOSITORY?.split('/')[1];
const basePath=process.env.GITHUB_ACTIONS==='true'&&repository?`/${repository}`:'';
const config: NextConfig = {output:'export',trailingSlash:true,basePath,assetPrefix:basePath||undefined,env:{NEXT_PUBLIC_BASE_PATH:basePath},images:{unoptimized:true},poweredByHeader:false};
export default config;
