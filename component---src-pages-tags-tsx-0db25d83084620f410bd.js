"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[190],{6385:function(e,t,n){var l=n(7294);const a=n(5086).default.footer.withConfig({displayName:"Footer__FooterStyle",componentId:"sc-92yi6g-0"})(["width:100%;height:240px;display:flex;gap:30px;flex-direction:column;justify-content:center;align-items:center;background:#f2f2f2;"]);t.Z=function(){return l.createElement(a,null,l.createElement("div",null,"Copyright © 2023, JUN9 All rights reserved."),l.createElement("div",null,"Built with ",l.createElement("a",{href:"https://www.gatsbyjs.com/"},"Gatsby")))}},3794:function(e,t,n){n.d(t,{Z:function(){return p}});var l=n(7294),a=n(5086);const i=a.default.div.withConfig({displayName:"Blogtitle__Blogtitle",componentId:"sc-1vu6sr0-0"})(["width:120px;display:flex;justify-content:center;align-items:center;"]);var o=function(e){let{title:t}=e;return l.createElement(i,null,l.createElement("a",{href:"/"},t))};const r=a.default.div.withConfig({displayName:"Menu__MenuItem",componentId:"sc-krgb2k-0"})(["width:70px;height:40px;display:flex;justify-content:center;align-items:center;"]),c=a.default.a.withConfig({displayName:"Menu__FontStyle",componentId:"sc-krgb2k-1"})(["font-weight:700;color:white;opacity:0.8;text-decoration:none;text-shadow:0 0 0.2rem black;&:hover{opacity:1;}"]);var s=e=>{let{context:t,link:n}=e;return l.createElement(r,null,l.createElement(c,{href:""+n},t))};const d=a.default.div.withConfig({displayName:"Categories__CategoriesPart",componentId:"sc-1jutjsu-0"})(["width:172px;height:40px;display:flex;justify-content:space-between;"]);var u=function(){return l.createElement(d,null,l.createElement(s,{context:"Home",link:"/"}),l.createElement(s,{context:"Category",link:"/tags"}))};const f=a.default.nav.withConfig({displayName:"Navbar__NavStyle",componentId:"sc-1relnun-0"})(["position:fixed;top:0;left:50%;transform:translate(-50%,0%);width:100vw;height:60px;z-index:3;display:flex;justify-content:center;align-items:center;border:solid ",";border-width:0 0 1px 0;background-color:",";transition:background-color 0.2s ease-out;"],(e=>e.bottom),(e=>e.headercolor)),m=a.default.div.withConfig({displayName:"Navbar__RealNav",componentId:"sc-1relnun-1"})(["width:100%;height:40px;max-width:980px;display:flex;justify-content:space-between;"]);var p=function(e){let{title:t}=e;const{0:n,1:a}=(0,l.useState)(0),{0:i,1:r}=(0,l.useState)("#ffffff"),{0:c,1:s}=(0,l.useState)("transparent"),d=()=>{a(window.scrollY||document.documentElement.scrollTop)};return(0,l.useEffect)((()=>(window.addEventListener("scroll",d),()=>{window.removeEventListener("scroll",d)})),[]),(0,l.useEffect)((()=>{n<100?(r("transparent"),s("none")):(r("#ffffff"),s("#d8d7d7"))}),[n]),l.createElement(f,{headercolor:i,bottom:c},l.createElement(m,null,l.createElement(o,{title:t}),l.createElement(u,null)))}},2518:function(e,t,n){n.r(t),n.d(t,{Head:function(){return u},default:function(){return d}});var l=n(7294),a=n(5086),i=n(3794);const o=a.styled.div.withConfig({displayName:"TagsHeader__Header",componentId:"sc-1bgqtkc-0"})(["width:100%;height:100vh;display:flex;gap:12px;flex-direction:column;justify-content:space-between;align-items:center;"]),r=a.styled.div.withConfig({displayName:"TagsHeader__ImageStyle",componentId:"sc-1bgqtkc-1"})(["position:absolute;transform:translate(-50%,-50%,0%);width:100%;height:100vh;z-index:-1;"]);var c=function(e){let{title:t}=e;return l.createElement(o,null,l.createElement(r,null),l.createElement(i.Z,{title:t}))},s=n(6385);var d=e=>{let{data:{site:{siteMetadata:{title:t}}}}=e;return l.createElement("main",null,l.createElement(c,{title:t}),l.createElement(s.Z,null))};function u(e){return l.createElement("title",null,e.data.site.siteMetadata.author)}}}]);
//# sourceMappingURL=component---src-pages-tags-tsx-0db25d83084620f410bd.js.map