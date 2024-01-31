"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[754],{412:function(e,t,n){var a=n(7294),i=n(5086),l=n(1883),r=n(8032);const o=i.styled.section.withConfig({displayName:"Drawer__CardContainer",componentId:"sc-18mva8g-0"})(["height:300px;width:770px;display:flex;flex-direction:row;justify-content:space-between;align-items:center;"]),c=i.styled.div.withConfig({displayName:"Drawer__NameCard",componentId:"sc-18mva8g-1"})(["height:100%;width:400px;background:white;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;color:black;padding-top:40px;padding-bottom:50px;border-radius:15px;",":hover &{}"],o),s=i.styled.div.withConfig({displayName:"Drawer__TimePart",componentId:"sc-18mva8g-2"})(["display:flex;flex-direction:row;justify-content:flex-start;align-items:center;width:100%;gap:8px;",":hover &{}"],o),d=i.styled.h2.withConfig({displayName:"Drawer__TitleStyle",componentId:"sc-18mva8g-3"})(["",":hover &{}"],o),m=i.styled.div.withConfig({displayName:"Drawer__DateStyle",componentId:"sc-18mva8g-4"})(["",":hover &{}"],o);t.Z=e=>{let{title:t,date:i,link:p,thumnail:u,thumnailAlt:f}=e;const g=(0,r.c)(u);return a.createElement(l.Link,{to:"/"+p,style:{textDecoration:"none"}},a.createElement(o,null,a.createElement(r.G,{image:g,alt:f,style:{height:"300px",width:"300px",backgroundColor:"#f2f2f2",borderRadius:"15px"},imgStyle:{overflow:"hidden",objectFit:"cover"}}),a.createElement(c,null,a.createElement(d,null,t),a.createElement(s,null,a.createElement(m,null,i),a.createElement(r.S,{src:"../../Statics/Icons/time.png",alt:"onTime",style:{width:"19px",height:"16px"},imgStyle:{objectFit:"fill"},__imageData:n(5612)})))))}},8297:function(e,t,n){n.r(t),n.d(t,{Head:function(){return I},default:function(){return N}});var a=n(7294),i=n(4480),l=n(5086),r=n(47),o=n(9161);const c=l.default.nav.withConfig({displayName:"TagsNavbar__NavStyle",componentId:"sc-14et8yt-0"})(["position:fixed;top:0;left:50%;transform:translate(-50%,0%);width:100vw;height:60px;z-index:3;display:flex;justify-content:center;align-items:center;border:solid ",";border-width:0 0 1px 0;background-color:",";transition:background-color 0.1s ease-out;"],(e=>e.bottom),(e=>e.headercolor)),s=l.default.div.withConfig({displayName:"TagsNavbar__RealNav",componentId:"sc-14et8yt-1"})(["width:100%;height:40px;max-width:980px;display:flex;justify-content:space-between;"]);var d=function(){const{0:e,1:t}=(0,a.useState)(0),{0:n,1:i}=(0,a.useState)("#ffffff"),{0:l,1:d}=(0,a.useState)(!1),{0:m,1:p}=(0,a.useState)("transparent"),{0:u,1:f}=(0,a.useState)(0),g=()=>{t(window.scrollY||document.documentElement.scrollTop)};return(0,a.useEffect)((()=>(window.addEventListener("scroll",g),()=>{window.removeEventListener("scroll",g)})),[]),(0,a.useEffect)((()=>{f(.01*window.innerHeight)}),[e]),(0,a.useEffect)((()=>{e<=1*u?(i("transparent"),p("none")):(i("#ffffff"),p("#DFDFDF"))}),[e]),a.createElement(c,{headercolor:n,bottom:m},a.createElement(s,null,a.createElement(r.Z,{title:l}),a.createElement(o.Z,null)))};const m=(0,i.cn)({key:"selectedCategory",default:"All"}),p=l.styled.div.withConfig({displayName:"TagsList__Layout",componentId:"sc-x2sqhh-0"})(["height:100%;width:100%;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;"]),u=l.styled.ul.withConfig({displayName:"TagsList__TagListStyle",componentId:"sc-x2sqhh-1"})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(100px,auto));grid-auto-rows:auto;width:800px;gap:10px 10px;grid-auto-flow:dense;text-decoration:none;margin:0;padding-bottom:60px;padding-top:30px;"]),f=l.styled.li.withConfig({displayName:"TagsList__TagList",componentId:"sc-x2sqhh-2"})(["display:flex;width:100%;height:100%;justify-content:center;align-items:center;background:#2c4866;border-radius:5px;&:hover{border-color:#2c4866;background:white;border:1px;color:#2c4866;}"]),g=l.styled.li.withConfig({displayName:"TagsList__TagListReverse",componentId:"sc-x2sqhh-3"})(["display:flex;width:100%;height:100%;justify-content:center;align-items:center;background:white;color:#2c4866;border:1.5px;border-style:solid;border-color:#2c4866;border-radius:5px;"]),h=l.styled.p.withConfig({displayName:"TagsList__Pstyle",componentId:"sc-x2sqhh-4"})(["padding:0px;margin:0px;"]);var b=e=>{let{data:t}=e;const n=t.allMdx.group.sort(((e,t)=>t.totalCount-e.totalCount)),[l,r]=(0,i.FV)(m);return a.createElement(p,null,a.createElement("h1",null,"TAGS"),a.createElement(u,null,n.map((e=>a.createElement("div",{onClick:()=>{return t=e.fieldValue,void r(t);var t},style:{textDecoration:"none",color:"white",cursor:"pointer"}},l===e.fieldValue?a.createElement(g,{key:e.fieldValue},a.createElement(h,null,""+e.fieldValue)):a.createElement(f,{key:e.fieldValue},a.createElement(h,null,""+e.fieldValue)))))))};const w=l.styled.div.withConfig({displayName:"TagsHeader__Header",componentId:"sc-1bgqtkc-0"})(["width:100%;height:50vh;display:flex;gap:12px;flex-direction:column;justify-content:space-between;align-items:center;"]);var y=e=>{let{data:t}=e;return a.createElement(w,null,a.createElement(d,null),a.createElement(b,{data:t}))},x=n(6385);var v=(e,t)=>{const n=(0,a.useRef)(null),{0:i,1:l}=(0,a.useState)(1),r=(0,a.useMemo)((()=>t.filter((t=>{let{frontmatter:{tags:n}}=t;return"All"===e||n.includes(e)}))),[e]);if("undefined"!=typeof window){new IntersectionObserver(((e,t)=>{e[0].isIntersecting&&(l((e=>e+1)),t.disconnect())}))}return(0,a.useEffect)((()=>l(1)),[e]),(0,a.useEffect)((()=>{2*i>=r.length||null===n.current||0===n.current.children.length||observer.observe(n.current.children[n.current.children.length-1])}),[i,e]),{containerRef:n,postList:r.slice(0,2*i)}},E=n(412);const _=l.default.ul.withConfig({displayName:"InfiniteScroll__LatestListContainer",componentId:"sc-pi4a9m-0"})(["width:100vw;list-style-type:none;margin:0;display:flex;flex-direction:column;justify-content:center;align-items:center;padding-bottom:100px;"]),C=l.default.li.withConfig({displayName:"InfiniteScroll__LiContainer",componentId:"sc-pi4a9m-1"})(["padding:60px 0 0 0;margin:0;"]);var k=e=>{let{data:t}=e;const n=t.allMdx.nodes,[l,r]=(0,i.FV)(m),{containerRef:o,postList:c}=v(l,n);return a.createElement(_,{ref:o},c.map((e=>a.createElement(C,{key:e.id},a.createElement(E.Z,{title:e.frontmatter.title,date:e.frontmatter.datePublished,link:e.frontmatter.slug,thumnail:e.frontmatter.hero_image,thumnailAlt:e.frontmatter.hero_image_alt})))))};var N=e=>{let{data:t}=e;return a.createElement("main",null,a.createElement(i.Wh,null,a.createElement(y,{data:t}),a.createElement(k,{data:t}),a.createElement(x.Z,null)))};function I(e){return a.createElement("title",null,"Moderator ",e.data.site.siteMetadata.author,"의 문제해결기록용 블로그")}},5612:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/e41720431ae02b1bbdd440e7250c36cb/e2349/time.png","srcSet":"/static/e41720431ae02b1bbdd440e7250c36cb/1e397/time.png 128w,\\n/static/e41720431ae02b1bbdd440e7250c36cb/6c33c/time.png 256w,\\n/static/e41720431ae02b1bbdd440e7250c36cb/e2349/time.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/e41720431ae02b1bbdd440e7250c36cb/e8b60/time.webp 128w,\\n/static/e41720431ae02b1bbdd440e7250c36cb/bac6d/time.webp 256w,\\n/static/e41720431ae02b1bbdd440e7250c36cb/241b7/time.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":416}')}}]);
//# sourceMappingURL=component---src-pages-posts-tsx-61a540a579694db54162.js.map