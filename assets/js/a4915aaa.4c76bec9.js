"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5863],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},i=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,u=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),f=l(r),m=a,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||u;return r?n.createElement(d,o(o({ref:t},i),{},{components:r})):n.createElement(d,o({ref:t},i))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=r.length,o=new Array(u);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<u;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},33883:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>u,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const u={},o=void 0,c={unversionedId:"features/futures/curve/curve",id:"features/futures/curve/curve",title:"curve",description:"Display futures curve. [Source: YahooFinance]",source:"@site/terminal/features/futures/curve/curve.md",sourceDirName:"features/futures/curve",slug:"/features/futures/curve/",permalink:"/docs/terminal/features/futures/curve/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/futures/curve/curve.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"select",permalink:"/docs/terminal/features/forex/select/"},next:{title:"historical",permalink:"/docs/terminal/features/futures/historical/"}},s={},l=[],i={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"usage: curve [-t Futures symbol] [-h] [--export EXPORT] [--raw]\n")),(0,a.kt)("p",null,"Display futures curve. ","[Source: YahooFinance]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"optional arguments:\n  -t Futures symbol, --ticker Futures symbol\n                        Future curve to be selected (default: )\n  -h, --help            show this help message (default: False)\n  --export EXPORT       Export raw data into csv, json, xlsx (default: )\n  --raw                 Flag to display raw data (default: False)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"2022 Oct 18, 19:17 (\ud83e\udd8b) /futures/ $ curve BLK\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/25267873/196562734-b3fe1c41-c103-4527-a081-5cf7dae62cce.png",alt:"Figure_1dd"})))}p.isMDXComponent=!0}}]);