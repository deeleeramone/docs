"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[50745],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>T});var s=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,s)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,s,r=function(n,e){if(null==n)return{};var t,s,r={},a=Object.keys(n);for(s=0;s<a.length;s++)t=a[s],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(s=0;s<a.length;s++)t=a[s],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var l=s.createContext({}),c=function(n){var e=s.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},u=function(n){var e=c(n.components);return s.createElement(l.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return s.createElement(s.Fragment,{},e)}},p=s.forwardRef((function(n,e){var t=n.components,r=n.mdxType,a=n.originalType,l=n.parentName,u=i(n,["components","mdxType","originalType","parentName"]),p=c(t),T=r,E=p["".concat(l,".").concat(T)]||p[T]||d[T]||a;return t?s.createElement(E,o(o({ref:e},u),{},{components:t})):s.createElement(E,o({ref:e},u))}));function T(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var a=t.length,o=new Array(a);o[0]=p;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=n,i.mdxType="string"==typeof n?n:r,o[1]=i;for(var c=2;c<a;c++)o[c]=t[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9155:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=t(87462),r=(t(67294),t(3905));const a={},o=void 0,i={unversionedId:"features/stocks/ins/view/view",id:"features/stocks/ins/view/view",title:"view",description:"View available presets under presets folder. [Source: OpenInsider]",source:"@site/terminal/features/stocks/ins/view/view.md",sourceDirName:"features/stocks/ins/view",slug:"/features/stocks/ins/view/",permalink:"/docs/terminal/features/stocks/ins/view/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/stocks/ins/view/view.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"topt",permalink:"/docs/terminal/features/stocks/ins/topt/"},next:{title:"load",permalink:"/docs/terminal/features/stocks/load/"}},l={},c=[],u={toc:c};function d(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,s.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"usage: view\n            [-p {Gold-Silver,Personal-Credit,Business-Services,Furniture,Mining,Brokers,Wholesale-Trade,Manufacturing,Nondurable-Goods,Legal,template,Construction,Retail-Trade,Hotels,Professional-Services,Guided-Missiles,Durable-Goods,Insurance-Agents,whales,Building-Materials,Closed-End-Funds,Utility-Communications,Ground-Freight,Lumber,Grocery,Electronics,Tobacco,Agriculture,Real-Estate,Agro-Chemicals,Credit-Industry,Railroads,Retail-Stores,Apparel,Insurance-Carriers,Investment-Offices,Banks,Restaurants,Pharmaceuticals,Health,Air-Transportation,Utility-Gas,Mortgages}]\n            [-h]\n")),(0,r.kt)("p",null,"View available presets under presets folder. ","[Source: OpenInsider]"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"optional arguments:\n  -p {Gold-Silver,Personal-Credit,Business-Services,Furniture,Mining,Brokers,Wholesale-Trade,Manufacturing,Nondurable-Goods,Legal,template,Construction,Retail-Trade,Hotels,Professional-Services,Guided-Missiles,Durable-Goods,Insurance-Agents,whales,Building-Materials,Closed-End-Funds,Utility-Communications,Ground-Freight,Lumber,Grocery,Electronics,Tobacco,Agriculture,Real-Estate,Agro-Chemicals,Credit-Industry,Railroads,Retail-Stores,Apparel,Insurance-Carriers,Investment-Offices,Banks,Restaurants,Pharmaceuticals,Health,Air-Transportation,Utility-Gas,Mortgages}, --preset {Gold-Silver,Personal-Credit,Business-Services,Furniture,Mining,Brokers,Wholesale-Trade,Manufacturing,Nondurable-Goods,Legal,template,Construction,Retail-Trade,Hotels,Professional-Services,Guided-Missiles,Durable-Goods,Insurance-Agents,whales,Building-Materials,Closed-End-Funds,Utility-Communications,Ground-Freight,Lumber,Grocery,Electronics,Tobacco,Agriculture,Real-Estate,Agro-Chemicals,Credit-Industry,Railroads,Retail-Stores,Apparel,Insurance-Carriers,Investment-Offices,Banks,Restaurants,Pharmaceuticals,Health,Air-Transportation,Utility-Gas,Mortgages}\n                        View specific preset\n  -h, --help            show this help message\n")),(0,r.kt)("p",null,"See available options:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2022 Feb 16, 08:27 (\u2728) /stocks/ins/ $ view\n\nPRESET: Gold-Silver\nGold and Silver Producers - Last 3 Months - All Transactions\n\nPRESET: Personal-Credit\nPersonal Credit - Last 3 Months - All Transactions\n\nPRESET: Business-Services\nB2B Services Industry - Last 3 Months - All Transactions\n\nPRESET: Furniture\nFurniture Producers - Last 3 Months - All Transactions\n\nPRESET: Mining\nMining Industry - Last 3 Months - All Transactions\n\nPRESET: Brokers\nSecurity and Commodity Brokers - Last 3 Months - All Transactions\n\nPRESET: Wholesale-Trade\nWhosesale Trade Industry - Last 3 Months - All Transactions\n\nPRESET: Manufacturing\nManufacturing Industry - Last 3 Months - All Transactions\n\nPRESET: Nondurable-Goods\nNondurable Goods Producers - Last 3 Months - All Transactions\n\nPRESET: Legal\nLegal Services Industry - Last 3 Months - All Transactions\n\nPRESET: template\nThe user that adds the preset can add a description for what type of insiders this is meant.\n\nPRESET: Construction\nConstruction Industry - Last 3 Months - All Transactions\n\nPRESET: Retail-Trade\nRetail Trade - Last 3 Months - All Transactions\n\nPRESET: Hotels\nHotel Industry - Last 3 Months - All Transactions\n\nPRESET: Professional-Services\nProfessional Services - Last 3 Months - All Transactions\n\nPRESET: Guided-Missiles\nGuided Missile Industry - Last 3 Months - All Transactions\n\nPRESET: Durable-Goods\nDurable Goods Producers - Last 3 Months - All Transactions\n\nPRESET: Insurance-Agents\nInsurance Agents - Last 3 Months - All Transactions\n\nPRESET: whales\nTries to catch whales that have traded a minimum of 100M$ with a stock with a minimum share price of 20$ in the past 2 weeks.\n\nPRESET: Building-Materials\nBuilding Materials Industry - Last 3 Months - All Transactions\n\nPRESET: Closed-End-Funds\nClosed-End Funds - Last 3 Months - All Transactions\n\nPRESET: Utility-Communications\nCommunications Utilities - Last 3 Months - All Transactions\n\nPRESET: Ground-Freight\nGround Freight - Last 3 Months - All Transactions\n\nPRESET: Lumber\nLumber Industry - Last 3 Months - All Transactions\n\nPRESET: Grocery\nGrocery Industry - Last 3 Months - All Transactions\n\nPRESET: Electronics\nElectronics Components Producers - Last 3 Months - All Transactions\n\nPRESET: Tobacco\nTobacco Industry - Last 3 Months - All Transactions\n\nPRESET: Agriculture\nAgriculture Services Industry - Last 3 Months - All Transactions\n\nPRESET: Real-Estate\nReal Estate - Last 3 Months - All Transactions\n\nPRESET: Agro-Chemicals\nAgriculture Services Industry - Last 3 Months - All Transactions\n\nPRESET: Credit-Industry\nCredit Industry - Last 3 Months - All Transactions\n\nPRESET: Railroads\nRailroads - Last 3 Months - All Transactions\n\nPRESET: Retail-Stores\nRetail Stores - Last 3 Months - All Transactions\n\nPRESET: Apparel\nApparel Industry - Last 3 Months - All Transactions\n\nPRESET: Insurance-Carriers\nInsurance Carriers - Last 3 Months - All Transactions\n\nPRESET: Investment-Offices\nInvestment Offices - Last 3 Months - All Transactions\n\nPRESET: Banks\nBanks - Last 3 Months - All Transactions\n\nPRESET: Restaurants\nRestaurants - Last 3 Months - All Transactions\n\nPRESET: Pharmaceuticals\nPharmaceuticals - Last 3 Months - All Transactions\n\nPRESET: Health\nHealth Services Industry - Last 3 Months - All Transactions\n\nPRESET: Air-Transportation\nAir Transportation - Last 3 Months - All Transactions\n\nPRESET: Utility-Gas\nGas Utilities - Last 3 Months - All Transactions\n\nPRESET: Mortgages\nMortgage Industry - Last 3 Months - All Transactions\n")))}d.isMDXComponent=!0}}]);