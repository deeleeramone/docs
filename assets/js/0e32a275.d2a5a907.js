"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85053],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?i.createElement(h,r(r({ref:t},c),{},{components:n})):i.createElement(h,r({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const o={title:"Introduction to the Options Pricing Submenu",keywords:["Options","stocks","derivatives","puts","calls","oi","vol","greeks","hedge","gamme","delta","theta","rho","vanna","vomma","phi","charm","iv","volatility","implied","realized","price","last","bid","ask","expiry","expiration","chains","chain","put","call"],date:"2022-06-08",type:"guides",status:"publish",excerpt:"This guide introduces the user to the Options Pricing submenu, within the Options menu.",geekdocCollapseSection:!0},r=void 0,s={unversionedId:"features/stocks/options/pricing/pricing",id:"features/stocks/options/pricing/pricing",title:"Introduction to the Options Pricing Submenu",description:"This set of features is for composing hypothetical outcomes through user-defined inputs. There are two columns of inputs:",source:"@site/terminal/features/stocks/options/pricing/pricing.md",sourceDirName:"features/stocks/options/pricing",slug:"/features/stocks/options/pricing/",permalink:"/docs/terminal/features/stocks/options/pricing/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/stocks/options/pricing/pricing.md",tags:[],version:"current",frontMatter:{title:"Introduction to the Options Pricing Submenu",keywords:["Options","stocks","derivatives","puts","calls","oi","vol","greeks","hedge","gamme","delta","theta","rho","vanna","vomma","phi","charm","iv","volatility","implied","realized","price","last","bid","ask","expiry","expiration","chains","chain","put","call"],date:"2022-06-08",type:"guides",status:"publish",excerpt:"This guide introduces the user to the Options Pricing submenu, within the Options menu.",geekdocCollapseSection:!0},sidebar:"tutorialSidebar",previous:{title:"plot",permalink:"/docs/terminal/features/stocks/options/plot/"},next:{title:"add",permalink:"/docs/terminal/features/stocks/options/pricing/add/"}},l={},p=[{value:'Back to <a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/options/" target="_blank">Introduction to the Options Menu</a>',id:"back-to-introduction-to-the-options-menu",level:2},{value:"geekdocCollapseSection: true",id:"geekdoccollapsesection-true",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This set of features is for composing hypothetical outcomes through user-defined inputs. There are two columns of inputs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"price - the price for the underlying at the close on expiration."),(0,a.kt)("li",{parentName:"ul"},"probability - the statistical probability of the outcome, where 1 = 100% & probability always = 1.")),(0,a.kt)("p",null,"The Pricing submenu is accessible after selecting an ",(0,a.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/options/exp/",target:"_blank"},"expiration date")," for the options chain. Type, ",(0,a.kt)("inlineCode",{parentName:"p"},"pricing"),", and press enter for access."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/172729310-dd341d26-c55e-4e29-a190-3e1eea1a6950.png",alt:"The Options Pricing Submenu"})),(0,a.kt)("h2",null,"How to use the Pricing Submenu"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"add")," command to build the list, and use the ",(0,a.kt)("inlineCode",{parentName:"p"},"rmv")," command to take away any entries."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/172732199-cb6f0cc9-0713-4bab-8e0c-5cd3e458f74a.png",alt:"Add and remove"})),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"show")," will print a table of the inputs. Multiple price points can be added, assuming that probability always sums at 100%."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/172732726-09fcdcda-cb2a-46fd-ba0b-23c3b27c6067.png",alt:"Calculated outputs for calls"})),(0,a.kt)("h2",null,"Examples"),(0,a.kt)("p",null,"Adding the optional argument, ",(0,a.kt)("inlineCode",{parentName:"p"},"-p"),", will calculate the puts in the chain. "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/172733009-5a58a7f2-577d-4599-956e-29df2cdb3f91.png",alt:"Calculating for puts"})),(0,a.kt)("p",null,"Removing the risk-free rate variable makes a substantial difference to the calculated value of an option. With monetary policy on the move, this is an important variable to consider as financial conditions change."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/172733137-8588b7a5-6384-4ba4-9d3c-943a10af280d.png",alt:"Puts calculations with RFR = 0"})),(0,a.kt)("p",null,"RFR as 0 for call options"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/172734277-223f855a-8ad1-4f45-ad5b-0a1d92d94290.png",alt:"RFR as 0 for call options"})),(0,a.kt)("h2",{id:"back-to-introduction-to-the-options-menu"},"Back to ",(0,a.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/options/",target:"_blank"},"Introduction to the Options Menu")),(0,a.kt)("p",null,"title: Introduction to the Options Pricing Submenu\nkeywords: ","['Options', 'stocks', 'derivatives', 'puts', 'calls', 'oi', 'vol', 'greeks', 'hedge', 'gamme', 'delta', 'theta', 'rho', 'vanna', 'vomma', 'phi', 'charm', 'iv', 'volatility', 'implied', 'realized', 'price', 'last', 'bid', 'ask', 'expiry', 'expiration', 'chains', 'chain', 'put', 'call']",'\ndate: "2022-06-08"\ntype: guides\nstatus: publish\nexcerpt: "This guide introduces the user to the Options Pricing submenu, within the Options menu."'),(0,a.kt)("h2",{id:"geekdoccollapsesection-true"},"geekdocCollapseSection: true"),(0,a.kt)("p",null,"This set of features is for composing hypothetical outcomes through user-defined inputs. There are two columns of inputs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"price - the price for the underlying at the close on expiration."),(0,a.kt)("li",{parentName:"ul"},"probability - the statistical probability of the outcome, where 1 = 100% & probability always = 1.")),(0,a.kt)("p",null,"The Pricing submenu is accessible after selecting an ",(0,a.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/options/exp/",target:"_blank"},"expiration date")," for the options chain. Type, ",(0,a.kt)("inlineCode",{parentName:"p"},"pricing"),", and press enter for access."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/172729310-dd341d26-c55e-4e29-a190-3e1eea1a6950.png",alt:"The Options Pricing Submenu"})),(0,a.kt)("h2",null,"How to use the Pricing Submenu"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"add")," command to build the list, and use the ",(0,a.kt)("inlineCode",{parentName:"p"},"rmv")," command to take away any entries."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/172732199-cb6f0cc9-0713-4bab-8e0c-5cd3e458f74a.png",alt:"Add and remove"})),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"show")," will print a table of the inputs. Multiple price points can be added, assuming that probability always sums at 100%."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/172732726-09fcdcda-cb2a-46fd-ba0b-23c3b27c6067.png",alt:"Calculated outputs for calls"})),(0,a.kt)("h2",null,"Examples"),(0,a.kt)("p",null,"Adding the optional argument, ",(0,a.kt)("inlineCode",{parentName:"p"},"-p"),", will calculate the puts in the chain. "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/172733009-5a58a7f2-577d-4599-956e-29df2cdb3f91.png",alt:"Calculating for puts"})),(0,a.kt)("p",null,"Removing the risk-free rate variable makes a substantial difference to the calculated value of an option. With monetary policy on the move, this is an important variable to consider as financial conditions change."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/172733137-8588b7a5-6384-4ba4-9d3c-943a10af280d.png",alt:"Puts calculations with RFR = 0"})),(0,a.kt)("p",null,"RFR as 0 for call options"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/172734277-223f855a-8ad1-4f45-ad5b-0a1d92d94290.png",alt:"RFR as 0 for call options"})),(0,a.kt)("p",null,"Back to ",(0,a.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/options/",target:"_blank"},"Introduction to the Options Menu")))}u.isMDXComponent=!0}}]);