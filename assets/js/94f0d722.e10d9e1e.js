"use strict";(self.webpackChunkbrave_wallet_docs=self.webpackChunkbrave_wallet_docs||[]).push([[990],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||o;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9859:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),s=["components"],i={sidebar_position:3},c="Sending transactions",u={unversionedId:"ethereum/use-cases/sending-transactions",id:"ethereum/use-cases/sending-transactions",isDocsHomePage:!1,title:"Sending transactions",description:"Sites can request that a transaction be signed / sent by using the eth_sendTransaction method.",source:"@site/docs/ethereum/use-cases/sending-transactions.md",sourceDirName:"ethereum/use-cases",slug:"/ethereum/use-cases/sending-transactions",permalink:"/ethereum/use-cases/sending-transactions",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/ethereum/use-cases/sending-transactions.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Connecting your site",permalink:"/ethereum/use-cases/connecting-your-site"},next:{title:"Signing data",permalink:"/ethereum/use-cases/signing-data"}},p=[],l={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sending-transactions"},"Sending transactions"),(0,o.kt)("p",null,"Sites can request that a transaction be signed / sent by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"eth_sendTransaction")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async function sendTransaction() {\n  const accounts = await window.ethereum.request({\n    id: '191',\n    method: 'eth_accounts',\n    params: [],\n  })\n  if (accounts.length === 0) {\n    console.log('No accounts allowed')\n    return\n  }\n  const from = accounts[0]\n  const params = [{\n    from,\n    // Change this to a different address\n    to: from,\n    value: '0x16345785D8A0000'\n    // data: '0x...'\n    //\n    // Gas propeties are not needed, but if you specify them,\n    // you can use either:\n    // `maxPriorityFeePerGas`\n    // `maxFeePerGas`\n    // or\n    // `gasPrice`\n  }]\n\n  return await window.ethereum.request({\n    method: 'eth_sendTransaction',\n    params\n  })\n}\nconsole.log(await sendTransaction())\n")),(0,o.kt)("p",null,"For more information, see: ",(0,o.kt)("a",{parentName:"p",href:"https://eth.wiki/json-rpc/API#eth_sendtransaction"},"https://eth.wiki/json-rpc/API#eth_sendtransaction")))}d.isMDXComponent=!0}}]);