"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20320],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),b=u(r),m=a,f=b["".concat(c,".").concat(m)]||b[m]||p[m]||o;return r?n.createElement(f,l(l({ref:t},i),{},{components:r})):n.createElement(f,l({ref:t},i))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},97292:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={},l=void 0,s={unversionedId:"features/common/ba/bullbear/bullbear",id:"features/common/ba/bullbear/bullbear",title:"bullbear",description:"Shows the bull/bear sentiment for the loaded ticker based on last 30 messages on the board. Also prints the watchlist_count. Source: Stocktwits",source:"@site/terminal/features/common/ba/bullbear/bullbear.md",sourceDirName:"features/common/ba/bullbear",slug:"/features/common/ba/bullbear/",permalink:"/docs/terminal/features/common/ba/bullbear/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/common/ba/bullbear/bullbear.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ba",permalink:"/docs/terminal/features/common/ba/"},next:{title:"getdd",permalink:"/docs/terminal/features/common/ba/getdd/"}},c={},u=[],i={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"usage: bullbear [-h]\n")),(0,a.kt)("p",null,"Shows the bull/bear sentiment for the loaded ticker based on last 30 messages on the board. Also prints the watchlist_count. Source: ",(0,a.kt)("a",{parentName:"p",href:"https://stocktwits.com"},"Stocktwits")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"optional arguments:\n  -h, --help            show this help message (default: False)\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"2022 Feb 16, 10:07 (\u2728) /stocks/ba/ $ bullbear\nWatchlist count: 381324\n\nLast 16 sentiment messages:\nBullish 87.5%\nBearish 12.5%\n")))}p.isMDXComponent=!0}}]);