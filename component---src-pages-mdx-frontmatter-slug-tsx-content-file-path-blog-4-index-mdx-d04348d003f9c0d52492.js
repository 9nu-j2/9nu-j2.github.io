"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[348],{434:function(e,t,n){n.r(t),n.d(t,{Head:function(){return m},default:function(){return u}});var a=n(1151),i=n(7294);function o(e){const t=Object.assign({p:"p"},(0,a.ah)(),e.components);return i.createElement(t.p,null,"진짜 개패고 싶음\n...")}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?i.createElement(t,e,i.createElement(o,e)):o(e)},r=n(7073),l=n(110),d=n(6385);const s=e=>{let{data:t,children:n}=e;return i.createElement("div",null,i.createElement(r.Z,{title:t.mdx.frontmatter.title,datePublished:t.mdx.frontmatter.datePublished,data:t}),i.createElement(l.Z,{children:n}),i.createElement(d.Z))},m=e=>{let{data:t}=e;return i.createElement("title",null,t.mdx.frontmatter.title)};function u(e){return i.createElement(s,e,i.createElement(c,e))}},4467:function(e,t,n){var a=n(7294),i=n(5086),o=n(47),c=n(9161);const r=i.default.nav.withConfig({displayName:"Navbar__NavStyle",componentId:"sc-1relnun-0"})(["position:fixed;top:0;left:50%;transform:translate(-50%,0%);width:100vw;height:60px;z-index:3;display:flex;justify-content:center;align-items:center;border:solid ",";border-width:0 0 1px 0;background-color:",";transition:background-color 0.1s ease-out;"],(e=>e.bottom),(e=>e.headercolor)),l=i.default.div.withConfig({displayName:"Navbar__RealNav",componentId:"sc-1relnun-1"})(["width:100%;height:40px;max-width:980px;display:flex;justify-content:space-between;"]);t.Z=function(){const{0:e,1:t}=(0,a.useState)(0),{0:n,1:i}=(0,a.useState)("#ffffff"),{0:d,1:s}=(0,a.useState)(!0),{0:m,1:u}=(0,a.useState)("transparent"),{0:f,1:p}=(0,a.useState)(0),b=()=>{t(window.scrollY||document.documentElement.scrollTop)};return(0,a.useEffect)((()=>(window.addEventListener("scroll",b),()=>{window.removeEventListener("scroll",b)})),[]),(0,a.useEffect)((()=>{p(.01*window.innerHeight)}),[e]),(0,a.useEffect)((()=>{e<=100*f?(i("transparent"),u("none"),s(!0)):(i("#ffffff"),u("#DFDFDF"),s(!1))}),[e]),a.createElement(r,{headercolor:n,bottom:m},a.createElement(l,null,a.createElement(o.Z,{title:d}),a.createElement(c.Z,null)))}},110:function(e,t,n){var a=n(7294),i=n(5086),o=n(1151);const c=i.default.div.withConfig({displayName:"PostBody__Container",componentId:"sc-1t5ko7f-0"})(['background:white;width:100%;display:flex;flex-direction:column;align-items:center;background-attachment:"fixed";']),r=i.default.div.withConfig({displayName:"PostBody__MdxPart",componentId:"sc-1t5ko7f-1"})(["width:700px;padding-top:170px;padding-bottom:100px;"]);t.Z=e=>{let{children:t}=e;return a.createElement(c,null,a.createElement(o.Zo,null,a.createElement(r,null,t)))}},7073:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7294),i=n(5086),o=n(8032),c=n(4467);const r=i.default.div.withConfig({displayName:"AboutPost__Container",componentId:"sc-19mrbkp-0"})(["background:transparent;width:600px;height:800px;display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-start;gap:20px;padding-bottom:150px;"]),l=i.default.div.withConfig({displayName:"AboutPost__PostD",componentId:"sc-19mrbkp-1"})(["display:flex;flex-direction:row;justify-content:space-between;align-items:center;color:white;text-shadow:0 0 0.2rem black;width:125px;"]),d=i.default.h1.withConfig({displayName:"AboutPost__PostH",componentId:"sc-19mrbkp-2"})(["margin:0;font-weight:800;font-size:2.6rem;color:white;text-shadow:0 0 0.2rem black;"]),s=i.default.p.withConfig({displayName:"AboutPost__PostContents",componentId:"sc-19mrbkp-3"})(["color:white;text-shadow:0 0 0.2rem black;"]);var m=e=>{let{title:t,datePublished:i,summary:c}=e;return a.createElement(r,null,a.createElement(l,null,a.createElement("div",null,i),a.createElement(o.S,{src:"../../Statics/Icons/time.png",alt:"onTime",width:21,__imageData:n(1624)})),a.createElement(d,null,t),a.createElement(s,null,c))};const u={position:"absolute",zIndex:"-1",width:"100%",height:"100vh",backgroundAttachment:"scroll",filter:"brightness(0.67)"},f=i.styled.div.withConfig({displayName:"PostHeader__Header",componentId:"sc-167a0rc-0"})(["width:100%;height:100vh;display:flex;gap:12px;flex-direction:column;justify-content:space-between;align-items:center;"]);var p=function(e){let{title:t,datePublished:n,data:i}=e;const r=(0,o.c)(i.mdx.frontmatter.hero_image);return a.createElement(f,null,a.createElement(o.G,{image:r,alt:i.mdx.frontmatter.hero_image_alt,style:u,imgStyle:{overflow:"hidden",objectFit:"cover"}}),a.createElement(c.Z,null),a.createElement(m,{title:t,datePublished:n,summary:i.mdx.frontmatter.summary}))}},1151:function(e,t,n){n.d(t,{Zo:function(){return r},ah:function(){return o}});var a=n(7294);const i=a.createContext({});function o(e){const t=a.useContext(i);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function r({components:e,children:t,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||c:o(e),a.createElement(i.Provider,{value:r},t)}},1624:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/e41720431ae02b1bbdd440e7250c36cb/67682/time.png","srcSet":"/static/e41720431ae02b1bbdd440e7250c36cb/e5f55/time.png 5w,\\n/static/e41720431ae02b1bbdd440e7250c36cb/b9541/time.png 11w,\\n/static/e41720431ae02b1bbdd440e7250c36cb/67682/time.png 21w,\\n/static/e41720431ae02b1bbdd440e7250c36cb/c85a4/time.png 42w","sizes":"(min-width: 21px) 21px, 100vw"},"sources":[{"srcSet":"/static/e41720431ae02b1bbdd440e7250c36cb/14060/time.webp 5w,\\n/static/e41720431ae02b1bbdd440e7250c36cb/43586/time.webp 11w,\\n/static/e41720431ae02b1bbdd440e7250c36cb/123ec/time.webp 21w,\\n/static/e41720431ae02b1bbdd440e7250c36cb/f8f41/time.webp 42w","type":"image/webp","sizes":"(min-width: 21px) 21px, 100vw"}]},"width":21,"height":17}')}}]);
//# sourceMappingURL=component---src-pages-mdx-frontmatter-slug-tsx-content-file-path-blog-4-index-mdx-d04348d003f9c0d52492.js.map