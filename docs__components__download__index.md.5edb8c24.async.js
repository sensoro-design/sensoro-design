(self["webpackChunk_sensoro_sensoro_design"]=self["webpackChunk_sensoro_sensoro_design"]||[]).push([[8397],{66148:function(){},95818:function(){},18573:function(e,t,n){"use strict";n.d(t,{m:function(){return r.m}});var r=n(34306);n(27482)},74100:function(e,t,n){"use strict";n.r(t);var r=n(59496),a=n(4553),l=n(16419),o=n(33833),i=r.memo((e=>{var t=e.demos,n=t["download-simple"].component,i=t["download-promise"].component;return r.createElement(r.Fragment,null,r.createElement(r.Fragment,null,r.createElement("div",{className:"markdown"},r.createElement("h1",{id:"download-\u4e0b\u8f7d"},r.createElement(a.AnchorLink,{to:"#download-\u4e0b\u8f7d","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"Download \u4e0b\u8f7d"),r.createElement("p",null,"\u4e0b\u8f7d\u6587\u4ef6 (v1.1.1)"),r.createElement("p",null,"\u6ce8\u610f: \u7531\u4e8e\u6d4f\u89c8\u5668\u9650\u5236\uff08\u6b64\u7ec4\u4ef6\u53ea\u652f\u6301\u8c37\u6b4c\u548c\u706b\u72d0\uff0c\u4e14\u4e0d\u53ef\u4e0b\u8f7d\u6d4f\u89c8\u5668\u76f4\u63a5\u53ef\u6253\u5f00\u7684\u6587\u4ef6\uff0c\u6bd4\u5982\uff1a\u56fe\u7247\u3001PDF\uff09"),r.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},r.createElement(a.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),r.createElement("h2",{id:"\u7b80\u5355\u4f7f\u7528"},r.createElement(a.AnchorLink,{to:"#\u7b80\u5355\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"\u7b80\u5355\u4f7f\u7528")),r.createElement(l.default,t["download-simple"].previewerProps,r.createElement(n,null)),r.createElement("div",{className:"markdown"},r.createElement("h2",{id:"\u5f02\u6b65\u83b7\u53d6\u5730\u5740"},r.createElement(a.AnchorLink,{to:"#\u5f02\u6b65\u83b7\u53d6\u5730\u5740","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"\u5f02\u6b65\u83b7\u53d6\u5730\u5740")),r.createElement(l.default,t["download-promise"].previewerProps,r.createElement(i,null)),r.createElement("div",{className:"markdown"},r.createElement("h2",{id:"api"},r.createElement(a.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"API"),r.createElement(o.Z,null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"\u53c2\u6570"),r.createElement("th",null,"\u8bf4\u660e"),r.createElement("th",null,"\u7c7b\u578b"),r.createElement("th",null,"\u9ed8\u8ba4\u503c"),r.createElement("th",null,"\u7248\u672c"))),r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null,"children"),r.createElement("td",null,"\u5b50\u7ec4\u4ef6"),r.createElement("td",null,"ReactNode"),r.createElement("td",null,"--"),r.createElement("td",null,"--")))),r.createElement("p",null,"\u4f7f\u7528\u8bf7\u5728\u5b50\u7ec4\u4ef6\u4e0a\u7ed1\u5b9a ",r.createElement("code",null,"onClick")," \u8fd4\u56de\u6587\u4ef6\u8def\u5f84\u5373\u53ef;"))))}));t["default"]=e=>{var t=r.useContext(a.context),n=t.demos;return r.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.createElement(i,{demos:n})}},16419:function(e,t,n){"use strict";n.r(t);var r=n(59496),a=n(48637),l=n(18573),o=n(4553),i=n(23632);n(66148);function c(e,t){return f(e)||m(e,t)||d(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done);o=!0)if(l.push(r.value),t&&l.length===t)break}catch(c){i=!0,a=c}finally{try{o||null==n["return"]||n["return"]()}finally{if(i)throw a}}return l}}function f(e){if(Array.isArray(e))return e}function E(e,t){var n,r=null===(n=e.match(/\.(\w+)$/))||void 0===n?void 0:n[1];return r||(r=t.tsx?"tsx":"jsx"),r}var v=function(e){var t,n,u,d=(0,r.useRef)(),s=(0,r.useContext)(o.context),m=s.locale,f=(0,o.useLocaleProps)(m,e),v=(0,o.useDemoUrl)(f.identifier),p=f.demoUrl||v,h=(null===l.m||void 0===l.m?void 0:l.m.location.hash)==="#".concat(f.identifier),b=1===Object.keys(f.sources).length,y=(0,o.useCodeSandbox)((null===(t=f.hideActions)||void 0===t?void 0:t.includes("CSB"))?null:f),_=(0,o.useRiddle)((null===(n=f.hideActions)||void 0===n?void 0:n.includes("RIDDLE"))?null:f),w=(0,o.useMotions)(f.motions||[],d.current),k=c(w,2),g=k[0],N=k[1],A=(0,o.useCopy)(),S=c(A,2),x=S[0],C=S[1],L=(0,r.useState)((function(){return f.sources._?"_":Object.keys(f.sources)[0]})),I=c(L,2),j=I[0],O=I[1],R=(0,r.useState)(E(j,f.sources[j])),P=c(R,2),T=P[0],M=P[1],U=(0,r.useState)(Boolean(f.defaultShowCode)),D=c(U,2),$=D[0],Z=D[1],B=(0,r.useState)(Math.random()),F=c(B,2),z=F[0],J=F[1],W=f.sources[j][T]||f.sources[j].content,X=(0,o.useTSPlaygroundUrl)(m,W),G=(0,r.useRef)(),H=(0,o.usePrefersColor)(),K=c(H,1),q=K[0];function Q(e){O(e),M(E(e,f.sources[e]))}return(0,r.useEffect)((function(){J(Math.random())}),[q]),r.createElement("div",{style:f.style,className:[f.className,"__dumi-default-previewer",h?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:f.identifier,"data-debug":f.debug||void 0,"data-iframe":f.iframe||void 0},f.iframe&&r.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),r.createElement("div",{ref:d,className:"__dumi-default-previewer-demo",style:{transform:f.transform?"translate(0, 0)":void 0,padding:f.compact||f.iframe&&!1!==f.compact?"0":void 0,background:f.background}},f.iframe?r.createElement("iframe",{title:"dumi-previewer",style:{height:String(f.iframe).replace(/(\d)$/,"$1px")},key:z,src:p,ref:G}):f.children),r.createElement("div",{className:"__dumi-default-previewer-desc","data-title":f.title},f.title&&r.createElement(o.AnchorLink,{to:"#".concat(f.identifier)},f.title),f.description&&r.createElement("div",{dangerouslySetInnerHTML:{__html:f.description}})),r.createElement("div",{className:"__dumi-default-previewer-actions"},y&&r.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:y}),_&&r.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:_}),f.motions&&r.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:N,onClick:function(){return g()}}),f.iframe&&r.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return J(Math.random())}}),!(null===(u=f.hideActions)||void 0===u?void 0:u.includes("EXTERNAL"))&&r.createElement(o.Link,{target:"_blank",to:p},r.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),r.createElement("span",null),r.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":C,onClick:function(){return x(W)}}),"tsx"===T&&$&&r.createElement(o.Link,{target:"_blank",to:X},r.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),r.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat($?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return Z(!$)}})),$&&r.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!b&&r.createElement(a.Z,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:j,onChange:Q},Object.keys(f.sources).map((function(e){return r.createElement(a.J,{tab:"_"===e?"index.".concat(E(e,f.sources[e])):e,key:e})}))),r.createElement("div",{className:"__dumi-default-previewer-source"},r.createElement(i.Z,{code:W,lang:T,showCopy:!1}))))};t["default"]=v},33833:function(e,t,n){"use strict";var r=n(59496),a=n(30826),l=n.n(a);n(95818);function o(e,t){return s(e)||d(e,t)||c(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,t){if(e){if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done);o=!0)if(l.push(r.value),t&&l.length===t)break}catch(c){i=!0,a=c}finally{try{o||null==n["return"]||n["return"]()}finally{if(i)throw a}}return l}}function s(e){if(Array.isArray(e))return e}var m=function(e){var t=e.children,n=(0,r.useRef)(),a=(0,r.useState)(!1),i=o(a,2),c=i[0],u=i[1],d=(0,r.useState)(!1),s=o(d,2),m=s[0],f=s[1];return(0,r.useEffect)((function(){var e=n.current,t=l()((function(){u(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),r.createElement("div",{className:"__dumi-default-table"},r.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":c||void 0,"data-right-folded":m||void 0},r.createElement("table",null,t)))};t["Z"]=m}}]);