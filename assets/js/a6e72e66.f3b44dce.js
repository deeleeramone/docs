"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89173],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,m=f["".concat(i,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},65028:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={},s=void 0,c={unversionedId:"features/stocks/gov/histcont/histcont",id:"features/stocks/gov/histcont/histcont",title:"histcont",description:"Shows the value of quarterly-contracts granted by the US governement. [Source: www.quiverquant.com]",source:"@site/terminal/features/stocks/gov/histcont/histcont.md",sourceDirName:"features/stocks/gov/histcont",slug:"/features/stocks/gov/histcont/",permalink:"/docs/terminal/features/stocks/gov/histcont/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/stocks/gov/histcont/histcont.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"gtrades",permalink:"/docs/terminal/features/stocks/gov/gtrades/"},next:{title:"lastcontracts",permalink:"/docs/terminal/features/stocks/gov/lastcontracts/"}},i={},u=[],l={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"usage: histcont [--raw] [-h] [--export {csv,json,xlsx,png,jpg,pdf,svg}]\n")),(0,o.kt)("p",null,"Shows the value of quarterly-contracts granted by the US governement. ","[Source: www.quiverquant.com]"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"optional arguments:\n  --raw                 Print raw data. (default: False)\n  -h, --help            show this help message (default: False)\n  --export {csv,json,xlsx,png,jpg,pdf,svg}\n                        Export raw data into csv, json, xlsx and figure into png, jpg, pdf, svg (default: )\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154263545-a210b65d-5dac-45df-b378-692563a5c950.png",alt:"histcont"})))}p.isMDXComponent=!0}}]);