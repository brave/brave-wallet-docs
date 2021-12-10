"use strict";(self.webpackChunkbrave_wallet_docs=self.webpackChunkbrave_wallet_docs||[]).push([[550],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,h=s["".concat(c,".").concat(d)]||s[d]||m[d]||l;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4003:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},Add:function(){return m},default:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={sidebar_position:3},c="Custom chains",u={unversionedId:"ethereum/custom-chains",id:"ethereum/custom-chains",isDocsHomePage:!1,title:"Custom chains",description:"<span",source:"@site/docs/ethereum/custom-chains.md",sourceDirName:"ethereum",slug:"/ethereum/custom-chains",permalink:"/ethereum/custom-chains",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/ethereum/custom-chains.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Built-in chains",permalink:"/ethereum/builtin-chains"},next:{title:"Local development environment",permalink:"/ethereum/use-cases/local-development-environment"}},p=[],m=function(e){e.children;var t=e.chainId,n=e.decimals,r=e.symbol,a=e.chainName,o=e.rpcUrl,i=e.blockExplorerUrl;return(0,l.kt)("span",{style:{backgroundColor:"#25c2a0",borderRadius:"20px",color:"#fff",padding:"10px",cursor:"pointer"},onClick:function(){var e=[{chainId:t,chainName:a,nativeCurrency:{name:name,symbol:r,decimals:n},rpcUrls:[o],iconUrls:[],blockExplorerUrls:[i]}];window.ethereum.request({method:"wallet_addEthereumChain",params:e})}},"Add")},s={toc:p,Add:m};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"custom-chains"},"Custom chains"),(0,l.kt)("p",null,"Other chains can be added to Brave through a site like\n",(0,l.kt)("a",{parentName:"p",href:"https://chainlist.org"},"chainlist.org")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Chain ID"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Native currency"),(0,l.kt)("th",{parentName:"tr",align:null},"Decimals"),(0,l.kt)("th",{parentName:"tr",align:null},"Add"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0x89"),(0,l.kt)("td",{parentName:"tr",align:null},"Polygon Mainnet"),(0,l.kt)("td",{parentName:"tr",align:null},"MATIC"),(0,l.kt)("td",{parentName:"tr",align:null},"18"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(m,{decimals:18,chainId:"0x89",symbol:"MATIC",chainName:"Polygon",rpcUrl:"https://polygon-rpc.com/",blockExplorerUrl:"https://polygonscan.com/",mdxType:"Add"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0xA86A"),(0,l.kt)("td",{parentName:"tr",align:null},"Avalanche Mainnet"),(0,l.kt)("td",{parentName:"tr",align:null},"AVAX"),(0,l.kt)("td",{parentName:"tr",align:null},"18"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(m,{decimals:18,chainId:"0xA86A",symbol:"AVAX",chainName:"Avalanche",rpcUrl:"https://api.avax.network/ext/bc/C/rpc",blockExplorerUrl:"https://snowtrace.io/",mdxType:"Add"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0x38"),(0,l.kt)("td",{parentName:"tr",align:null},"Binance Smart Chain"),(0,l.kt)("td",{parentName:"tr",align:null},"BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"18"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(m,{decimals:18,chainId:"0x38",symbol:"BNB",chainName:"Binance Smart Chain",rpcUrl:"https://bsc-dataseed1.binance.org",blockExplorerUrl:"https://bscscan.com",mdxType:"Add"}))))))}d.isMDXComponent=!0}}]);