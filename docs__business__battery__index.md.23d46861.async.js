(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"9kvl":function(e,t,a){"use strict";var n=a("FfOG");a.d(t,"a",(function(){return n["b"]}));a("bCY9")},DifQ:function(e,t,a){"use strict";a.r(t);var n=a("1QO0"),r=a.n(n),l=a("Ip/e"),c=a("upm9"),o=a("peP+"),i=r.a.memo((e=>{var t=e.demos,a=t["battery-simple"].component,n=t["battery-color"].component,i=t["battery-charge"].component;return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"battery-\u7535\u6c60"},r.a.createElement(l["AnchorLink"],{to:"#battery-\u7535\u6c60","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Battery \u7535\u6c60"),r.a.createElement("p",null,"\u5c55\u793a\u7535\u6c60\u7535\u91cf\u3002(v1.0.14+)"),r.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},r.a.createElement(l["AnchorLink"],{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),r.a.createElement("h2",{id:"\u7b80\u5355\u4f7f\u7528"},r.a.createElement(l["AnchorLink"],{to:"#\u7b80\u5355\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u7b80\u5355\u4f7f\u7528"),r.a.createElement("p",null,"\u5c55\u793a\u7535\u91cf\u3002")),r.a.createElement(c["default"],t["battery-simple"].previewerProps,r.a.createElement(a,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("p",null,"\u8bbe\u7f6e\u989c\u8272")),r.a.createElement(c["default"],t["battery-color"].previewerProps,r.a.createElement(n,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("p",null,"\u901a\u7535\u72b6\u6001")),r.a.createElement(c["default"],t["battery-charge"].previewerProps,r.a.createElement(i,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"api"},r.a.createElement(l["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"API"),r.a.createElement("p",null,"\u6587\u672c\u94fe\u63a5\u7684\u5c5e\u6027\u8bf4\u660e\u5982\u4e0b\uff1a"),r.a.createElement(o["a"],null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u53c2\u6570"),r.a.createElement("th",null,"\u8bf4\u660e"),r.a.createElement("th",null,"\u7c7b\u578b"),r.a.createElement("th",null,"\u9ed8\u8ba4\u503c"),r.a.createElement("th",null,"\u7248\u672c"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"className"),r.a.createElement("td",null,"\u989d\u5916\u7684\u6837\u5f0f\u7c7b"),r.a.createElement("td",null,"string"),r.a.createElement("td",null,"--"),r.a.createElement("td",null,"--")),r.a.createElement("tr",null,r.a.createElement("td",null,"style"),r.a.createElement("td",null,"\u989d\u5916\u7684\u6837\u5f0f(\u63a7\u5236\u7ec4\u4ef6\u5927\u5c0f\u548c\u989c\u8272)"),r.a.createElement("td",null,"CSSProperties"),r.a.createElement("td",null,"--"),r.a.createElement("td",null,"--")),r.a.createElement("tr",null,r.a.createElement("td",null,"value"),r.a.createElement("td",null,"\u7535\u91cf\u503c (-1 \u8868\u793a\u5145\u7535\u72b6\u6001)"),r.a.createElement("td",null,"number(0 - 100) | -1"),r.a.createElement("td",null,"--"),r.a.createElement("td",null,"--")),r.a.createElement("tr",null,r.a.createElement("td",null,"color"),r.a.createElement("td",null,"\u7ec4\u4ef6\u7684\u989c\u8272"),r.a.createElement("td",null,"string"),r.a.createElement("td",null,"--"),r.a.createElement("td",null,"--")))))))}));t["default"]=e=>{var t=r.a.useContext(l["context"]),a=t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(i,{demos:a})}},KjXW:function(e,t,a){},Z5Qm:function(e,t,a){},"peP+":function(e,t,a){"use strict";var n=a("1QO0"),r=a.n(n),l=a("bIC1"),c=a.n(l);a("Z5Qm");function o(e,t){return s(e)||m(e,t)||u(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function m(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,l=[],c=!0,o=!1;try{for(a=a.call(e);!(c=(n=a.next()).done);c=!0)if(l.push(n.value),t&&l.length===t)break}catch(i){o=!0,r=i}finally{try{c||null==a["return"]||a["return"]()}finally{if(o)throw r}}return l}}function s(e){if(Array.isArray(e))return e}var f=function(e){var t=e.children,a=Object(n["useRef"])(),l=Object(n["useState"])(!1),i=o(l,2),u=i[0],d=i[1],m=Object(n["useState"])(!1),s=o(m,2),f=s[0],E=s[1];return Object(n["useEffect"])((function(){var e=a.current,t=c()((function(){d(e.scrollLeft>0),E(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),r.a.createElement("div",{className:"__dumi-default-table"},r.a.createElement("div",{className:"__dumi-default-table-content",ref:a,"data-left-folded":u||void 0,"data-right-folded":f||void 0},r.a.createElement("table",null,t)))};t["a"]=f},upm9:function(e,t,a){"use strict";a.r(t);var n=a("1QO0"),r=a.n(n),l=a("VqeS"),c=a("9kvl"),o=a("Ip/e"),i=a("/kL3");a("KjXW");function u(e,t){return E(e)||f(e,t)||m(e,t)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return s(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function f(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,l=[],c=!0,o=!1;try{for(a=a.call(e);!(c=(n=a.next()).done);c=!0)if(l.push(n.value),t&&l.length===t)break}catch(i){o=!0,r=i}finally{try{c||null==a["return"]||a["return"]()}finally{if(o)throw r}}return l}}function E(e){if(Array.isArray(e))return e}function b(e,t){var a,n=null===(a=e.match(/\.(\w+)$/))||void 0===a?void 0:a[1];return n||(n=t.tsx?"tsx":"jsx"),n}var p=function(e){var t,a,d,m=Object(n["useRef"])(),s=Object(n["useContext"])(o["context"]),f=s.locale,E=Object(o["useLocaleProps"])(f,e),p=Object(o["useDemoUrl"])(E.identifier),v=E.demoUrl||p,h=(null===c["a"]||void 0===c["a"]?void 0:c["a"].location.hash)==="#".concat(E.identifier),y=1===Object.keys(E.sources).length,_=Object(o["useCodeSandbox"])((null===(t=E.hideActions)||void 0===t?void 0:t.includes("CSB"))?null:E),w=Object(o["useRiddle"])((null===(a=E.hideActions)||void 0===a?void 0:a.includes("RIDDLE"))?null:E),g=Object(o["useMotions"])(E.motions||[],m.current),k=u(g,2),O=k[0],j=k[1],N=Object(o["useCopy"])(),S=u(N,2),A=S[0],C=S[1],x=Object(n["useState"])((function(){return E.sources._?"_":Object.keys(E.sources)[0]})),L=u(x,2),I=L[0],P=L[1],R=Object(n["useState"])(b(I,E.sources[I])),T=u(R,2),M=T[0],Q=T[1],U=Object(n["useState"])(Boolean(E.defaultShowCode)),$=u(U,2),B=$[0],D=$[1],W=Object(n["useState"])(Math.random()),X=u(W,2),F=X[0],J=X[1],K=E.sources[I][M]||E.sources[I].content,z=Object(o["useTSPlaygroundUrl"])(f,K),G=Object(n["useRef"])(),Z=Object(o["usePrefersColor"])(),q=u(Z,1),H=q[0];function V(e){P(e),Q(b(e,E.sources[e]))}return Object(n["useEffect"])((function(){J(Math.random())}),[H]),r.a.createElement("div",{style:E.style,className:[E.className,"__dumi-default-previewer",h?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:E.identifier,"data-debug":E.debug||void 0,"data-iframe":E.iframe||void 0},E.iframe&&r.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),r.a.createElement("div",{ref:m,className:"__dumi-default-previewer-demo",style:{transform:E.transform?"translate(0, 0)":void 0,padding:E.compact||E.iframe&&!1!==E.compact?"0":void 0,background:E.background}},E.iframe?r.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(E.iframe).replace(/(\d)$/,"$1px")},key:F,src:v,ref:G}):E.children),r.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":E.title},E.title&&r.a.createElement(o["AnchorLink"],{to:"#".concat(E.identifier)},E.title),E.description&&r.a.createElement("div",{dangerouslySetInnerHTML:{__html:E.description}})),r.a.createElement("div",{className:"__dumi-default-previewer-actions"},_&&r.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:_}),w&&r.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:w}),E.motions&&r.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:j,onClick:function(){return O()}}),E.iframe&&r.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return J(Math.random())}}),!(null===(d=E.hideActions)||void 0===d?void 0:d.includes("EXTERNAL"))&&r.a.createElement(o["Link"],{target:"_blank",to:v},r.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),r.a.createElement("span",null),r.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":C,onClick:function(){return A(K)}}),"tsx"===M&&B&&r.a.createElement(o["Link"],{target:"_blank",to:z},r.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),r.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(B?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return D(!B)}})),B&&r.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!y&&r.a.createElement(l["b"],{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:I,onChange:V},Object.keys(E.sources).map((function(e){return r.a.createElement(l["a"],{tab:"_"===e?"index.".concat(b(e,E.sources[e])):e,key:e})}))),r.a.createElement("div",{className:"__dumi-default-previewer-source"},r.a.createElement(i["a"],{code:K,lang:M,showCopy:!1}))))};t["default"]=p}}]);