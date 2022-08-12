"use strict";(self.webpackChunkbrave_wallet_docs=self.webpackChunkbrave_wallet_docs||[]).push([[775],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5637:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return p},toc:function(){return d},default:function(){return f}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={sidebar_position:4},l="Events",s={unversionedId:"solana/provider-api/events",id:"solana/provider-api/events",title:"Events",description:"connect",source:"@site/docs/solana/provider-api/events.md",sourceDirName:"solana/provider-api",slug:"/solana/provider-api/events",permalink:"/solana/provider-api/events",editUrl:"https://github.com/brave/brave-wallet-docs/edit/main/docs/solana/provider-api/events.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Properties",permalink:"/solana/provider-api/properties"},next:{title:"Errors",permalink:"/solana/provider-api/errors"}},p={},d=[{value:"<code>connect</code>",id:"connect",level:2},{value:"<code>disconnect</code>",id:"disconnect",level:2},{value:"<code>accountChanged</code>",id:"accountchanged",level:2}],u={toc:d};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"events"},"Events"),(0,a.kt)("h2",{id:"connect"},(0,a.kt)("inlineCode",{parentName:"h2"},"connect")),(0,a.kt)("p",null,"The provider emits ",(0,a.kt)("inlineCode",{parentName:"p"},"connect")," with ",(0,a.kt)("a",{parentName:"p",href:"https://solana-labs.github.io/solana-web3.js/classes/PublicKey.html"},"solanaWeb3.PublicKey"),"\nwhen ",(0,a.kt)("inlineCode",{parentName:"p"},"solana.connect")," succeeds."),(0,a.kt)("h2",{id:"disconnect"},(0,a.kt)("inlineCode",{parentName:"h2"},"disconnect")),(0,a.kt)("p",null,"The provider emits ",(0,a.kt)("inlineCode",{parentName:"p"},"disconnect")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," when ",(0,a.kt)("inlineCode",{parentName:"p"},"solana.disconnect")," is\ncalled."),(0,a.kt)("h2",{id:"accountchanged"},(0,a.kt)("inlineCode",{parentName:"h2"},"accountChanged")),(0,a.kt)("p",null,"The provider emits ",(0,a.kt)("inlineCode",{parentName:"p"},"accountChanged")," when selected account changed."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"If selected account is connected,\n",(0,a.kt)("a",{parentName:"li",href:"https://solana-labs.github.io/solana-web3.js/classes/PublicKey.html"},"solanaWeb3.PublicKey"),"\nwill be emitted."),(0,a.kt)("li",{parentName:"ol"},"If selected account is deleted or disconnected, ",(0,a.kt)("inlineCode",{parentName:"li"},"null")," will be emitted.")))}f.isMDXComponent=!0}}]);