"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59425],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),p=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return o.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},f=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(t),m=n,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||a;return t?o.createElement(d,i(i({ref:r},c),{},{components:t})):o.createElement(d,i({ref:r},c))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},88271:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=t(87462),n=(t(67294),t(3905));const a={},i=void 0,s={unversionedId:"features/portfolio/rsort/rsort",id:"features/portfolio/rsort/rsort",title:"rsort",description:"Show rolling sortino portfolio vs benchmark",source:"@site/terminal/features/portfolio/rsort/rsort.md",sourceDirName:"features/portfolio/rsort",slug:"/features/portfolio/rsort/",permalink:"/docs/terminal/features/portfolio/rsort/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/portfolio/rsort/rsort.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rsharpe",permalink:"/docs/terminal/features/portfolio/rsharpe/"},next:{title:"rvol",permalink:"/docs/terminal/features/portfolio/rvol/"}},l={},p=[],c={toc:p};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"usage: rsort [-p {3m,6m,1y,3y,5y,10y}] [-r RISK_FREE_RATE] [-h] [--export EXPORT]\n")),(0,n.kt)("p",null,"Show rolling sortino portfolio vs benchmark"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"optional arguments:\n  -p {3m,6m,1y,3y,5y,10y}, --period {3m,6m,1y,3y,5y,10y}\n                        Period to apply rolling window (default: 1y)\n  -r RISK_FREE_RATE, --rfr RISK_FREE_RATE\n                        Set risk free rate for calculations. (default: 0.0)\n  -h, --help            show this help message (default: False)\n  --export EXPORT       Export raw data into csv, json, xlsx and figure into png, jpg, pdf, svg (default: )\n")),(0,n.kt)("img",{width:"1428",alt:"Screenshot 2022-05-18 at 01 03 39",src:"https://user-images.githubusercontent.com/25267873/168931383-f9a61791-7a14-48fb-b538-0177657d50ed.png"}))}u.isMDXComponent=!0}}]);