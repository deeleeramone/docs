"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13239],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),y=u(n),d=r,p=y["".concat(i,".").concat(d)]||y[d]||m[d]||o;return n?a.createElement(p,l(l({ref:t},c),{},{components:n})):a.createElement(p,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=y;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},2687:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={},l=void 0,s={unversionedId:"features/economy/treasury/treasury",id:"features/economy/treasury/treasury",title:"treasury",description:"Obtain any set of U.S. treasuries and plot them together. These can be a range of maturities for nominal, inflation-adjusted (on long term average of inflation adjusted) and secondary markets over a lengthy period. Note: 3-month and",source:"@site/terminal/features/economy/treasury/treasury.md",sourceDirName:"features/economy/treasury",slug:"/features/economy/treasury/",permalink:"/docs/terminal/features/economy/treasury/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/economy/treasury/treasury.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"spread",permalink:"/docs/terminal/features/economy/spread/"},next:{title:"valuation",permalink:"/docs/terminal/features/economy/valuation/"}},i={},u=[],c={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"usage: treasury [-m MATURITY [MATURITY ...]] [-sm] [--freq {annually,monthly,weekly,daily}] [-t {nominal,inflation,average,secondary} [{nominal,inflation,average,secondary} ...]] [-s START_DATE] [-e END_DATE] [-st] [-h]\n                [--export {csv,json,xlsx}] [--raw] [-l LIMIT]\n")),(0,r.kt)("p",null,"Obtain any set of U.S. treasuries and plot them together. These can be a range of maturities for nominal, inflation-adjusted (on long term average of inflation adjusted) and secondary markets over a lengthy period. Note: 3-month and\n10-year treasury yields for other countries are available via the command 'macro' and parameter 'M3YD' and 'Y10YD'. ","[Source: EconDB / FED]"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"optional arguments:\n  -m MATURITY [MATURITY ...], --maturity MATURITY [MATURITY ...]\n                        The preferred maturity which is dependent on the type of the treasury (default: ['1y'])\n  -sm, --show_maturities\n                        Show the maturities available for every instrument. (default: False)\n  --freq {annually,monthly,weekly,daily}\n                        The frequency, this can be annually, monthly, weekly or daily (default: monthly)\n  -t {nominal,inflation,average,secondary} [{nominal,inflation,average,secondary} ...], --type {nominal,inflation,average,secondary} [{nominal,inflation,average,secondary} ...]\n                        Whether to select nominal, inflation indexed, average inflation indexed or secondary market treasury rates (default: ['nominal'])\n  -s START_DATE, --start_date START_DATE\n                        The start date of the data (format: YEAR-MONTH-DAY, i.e. 2010-12-31) (default: 1934-01-31)\n  -e END_DATE, --end_date END_DATE\n                        The end date of the data (format: YEAR-DAY-MONTH, i.e. 2021-06-02) (default: 2022-03-15)\n  -st, --store          Store the data to be used for plotting with the 'plot' command. (default: False)\n  -h, --help            show this help message (default: False)\n  --export {csv,json,xlsx}\n                        Export raw data into csv, json, xlsx (default: )\n  --raw                 Flag to display raw data (default: False)\n  -l LIMIT, --limit LIMIT\n                        Number of entries to show in data. (default: 10)\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2022 Mar 15, 07:33 (\u2728) /economy/ $ treasury -sm\n               Maturity options per instrument\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503 Instrument \u2503 Maturities                                    \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 nominal    \u2502 1m, 3m, 6m, 1y, 2y, 3y, 5y, 7y, 10y, 20y, 30y \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 inflation  \u2502 5y, 7y, 10y, 20y, 30y                         \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 average    \u2502 Defined by function                           \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 secondary  \u2502 4w, 3m, 6m, 1y                                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"2022 Mar 15, 07:33 (\u2728) /economy/ $ treasury -m 1y,3y,5y,10y,30y\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/158575884-8ec4e1dc-fb5b-4440-be4b-5e1dcd6d2a5e.png",alt:"3y 5y 10y 30y nominal"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"2022 Mar 15, 07:35 (\u2728) /economy/ $ treasury -m 5y -t nominal,inflation,average -s 2005-01-01\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/158575921-ff7c387c-8eb6-4716-80c4-f4c5121633f2.png",alt:"5y nominal inflation average"})))}m.isMDXComponent=!0}}]);