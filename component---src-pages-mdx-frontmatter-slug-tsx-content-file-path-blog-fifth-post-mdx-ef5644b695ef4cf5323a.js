"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[338],{2803:function(e,t,n){n.r(t),n.d(t,{Head:function(){return u},default:function(){return f}});var l=n(1151),o=n(7294);function i(e){const t=Object.assign({p:"p"},(0,l.ah)(),e.components);return o.createElement(t.p,null,"일단 해보기만 하면 되지 않을까?\n...")}var a=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?o.createElement(t,e,o.createElement(i,e)):i(e)},r=n(7073),c=n(110),d=n(6385);const s=e=>{let{data:t,children:n}=e;return o.createElement("div",null,o.createElement(r.Z,{title:t.mdx.frontmatter.title,datePublished:t.mdx.frontmatter.datePublished}),o.createElement(c.Z,{children:n}),o.createElement(d.Z))},u=e=>{let{data:t}=e;return o.createElement("title",null,t.mdx.frontmatter.title)};function f(e){return o.createElement(s,e,o.createElement(a,e))}},6385:function(e,t,n){var l=n(7294);const o=n(5086).default.footer.withConfig({displayName:"Footer__FooterStyle",componentId:"sc-92yi6g-0"})(["width:100%;height:240px;display:flex;gap:30px;flex-direction:column;justify-content:center;align-items:center;background:#f2f2f2;"]);t.Z=function(){return l.createElement(o,null,l.createElement("div",null,"Copyright © 2023, JUN9 All rights reserved."),l.createElement("div",null,"Built with ",l.createElement("a",{href:"https://www.gatsbyjs.com/"},"Gatsby")))}},3794:function(e,t,n){n.d(t,{Z:function(){return p}});var l=n(7294),o=n(5086);const i=o.default.div.withConfig({displayName:"Blogtitle__Blogtitle",componentId:"sc-1vu6sr0-0"})(["width:120px;display:flex;justify-content:center;align-items:center;"]);var a=function(e){let{title:t}=e;return l.createElement(i,null,l.createElement("a",{href:"/"},t))};const r=o.default.div.withConfig({displayName:"Menu__MenuItem",componentId:"sc-krgb2k-0"})(["width:70px;height:40px;display:flex;justify-content:center;align-items:center;"]),c=o.default.a.withConfig({displayName:"Menu__FontStyle",componentId:"sc-krgb2k-1"})(["font-weight:700;color:white;opacity:0.8;text-decoration:none;text-shadow:0 0 0.2rem black;&:hover{opacity:1;}"]);var d=e=>{let{context:t,link:n}=e;return l.createElement(r,null,l.createElement(c,{href:""+n},t))};const s=o.default.div.withConfig({displayName:"Categories__CategoriesPart",componentId:"sc-1jutjsu-0"})(["width:172px;height:40px;display:flex;justify-content:space-between;"]);var u=function(){return l.createElement(s,null,l.createElement(d,{context:"Home",link:"/"}),l.createElement(d,{context:"Category",link:"/tags"}))};const f=o.default.nav.withConfig({displayName:"Navbar__NavStyle",componentId:"sc-1relnun-0"})(["position:fixed;top:0;left:50%;transform:translate(-50%,0%);width:100vw;height:60px;z-index:3;display:flex;justify-content:center;align-items:center;border:solid ",";border-width:0 0 1px 0;background-color:",";transition:background-color 0.2s ease-out;"],(e=>e.bottom),(e=>e.headercolor)),m=o.default.div.withConfig({displayName:"Navbar__RealNav",componentId:"sc-1relnun-1"})(["width:100%;height:40px;max-width:980px;display:flex;justify-content:space-between;"]);var p=function(e){let{title:t}=e;const n=()=>{"undefined"!=typeof window&&window.location.pathname},{0:o,1:i}=(0,l.useState)(0),{0:r,1:c}=(0,l.useState)("#ffffff"),{0:d,1:s}=(0,l.useState)("transparent"),p=()=>{i(window.scrollY||document.documentElement.scrollTop)};return(0,l.useEffect)((()=>(window.addEventListener("scroll",p),()=>{window.removeEventListener("scroll",p)})),[]),(0,l.useEffect)((()=>{"/"===n&&o<100?(c("transparent"),s("none")):(c("#ffffff"),s("#d8d7d7"))}),[o,n]),l.createElement(f,{headercolor:r,bottom:d},l.createElement(m,null,l.createElement(a,{title:t}),l.createElement(u,null)))}},110:function(e,t,n){var l=n(7294),o=n(5086),i=n(1151);const a=o.default.div.withConfig({displayName:"PostBody__Container",componentId:"sc-1t5ko7f-0"})(["background:white;width:100%;display:flex;flex-direction:column;align-items:center;"]),r=o.default.div.withConfig({displayName:"PostBody__MdxPart",componentId:"sc-1t5ko7f-1"})(["width:652px;padding-top:170px;padding-bottom:100px;"]);t.Z=e=>{let{children:t}=e;return l.createElement(i.Zo,null,l.createElement(a,null,l.createElement(r,null,t)))}},7073:function(e,t,n){n.d(t,{Z:function(){return u}});var l=n(7294),o=n(5086),i=n(3794);const a=o.default.div.withConfig({displayName:"AboutPost__Container",componentId:"sc-19mrbkp-0"})(["background:transparent;width:600px;display:flex;flex-direction:column;align-items:center;padding-top:500px;"]),r=o.default.h1.withConfig({displayName:"AboutPost__PostH",componentId:"sc-19mrbkp-1"})(["margin:0;font-weight:800;font-size:2.6rem;"]);var c=e=>{let{title:t,datePublished:n}=e;return l.createElement(a,null,l.createElement("p",null,n," 발행됨"),l.createElement(r,null,t),l.createElement("p",null,"내용 요약입니다"))};const d=o.styled.div.withConfig({displayName:"PostHeader__Header",componentId:"sc-167a0rc-0"})(["width:100%;height:100vh;display:flex;gap:12px;flex-direction:column;justify-content:space-between;align-items:center;"]),s=o.styled.div.withConfig({displayName:"PostHeader__ImageStyle",componentId:"sc-167a0rc-1"})(["position:absolute;transform:translate(-50%,-50%,0%);width:100%;height:100vh;z-index:-1;"]);var u=function(e){let{title:t,datePublished:n}=e;return l.createElement(d,null,l.createElement(s,null),l.createElement(i.Z,{title:"아직미정"}),l.createElement(c,{title:t,datePublished:n}))}},1151:function(e,t,n){n.d(t,{Zo:function(){return r},ah:function(){return i}});var l=n(7294);const o=l.createContext({});function i(e){const t=l.useContext(o);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function r({components:e,children:t,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||a:i(e),l.createElement(o.Provider,{value:r},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-frontmatter-slug-tsx-content-file-path-blog-fifth-post-mdx-ef5644b695ef4cf5323a.js.map