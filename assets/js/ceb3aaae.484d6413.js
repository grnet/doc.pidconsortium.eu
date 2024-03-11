"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[806],{41:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=i(4848),a=i(8453);const s={id:"api-partial",title:"API - Part Identifiers",kind:"code",sidebar_position:11},r=void 0,o={id:"epic_api/api-partial",title:"API - Part Identifiers",description:"Part identifiers compute an unlimited number of handles on the fly, by registering just one. A single template handle can be created as a base that will allow any number of extensions to that base to be resolved as full handles, according to a pattern, without each such handle being individually registered.  In the handle system the part - fragment identifier is enabled with a template. The template is a syntax that defines a delimiter and an extension (extension is the option to add any kind of string behind the delimiter).",source:"@site/docs/epic_api/api-partial.md",sourceDirName:"epic_api",slug:"/epic_api/api-partial",permalink:"/docs/epic_api/api-partial",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{id:"api-partial",title:"API - Part Identifiers",kind:"code",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"API - Delete a PID",permalink:"/docs/epic_api/delete"},next:{title:"Handle API v9.0",permalink:"/docs/category/handle-api-v90"}},l={},d=[{value:"How to use it?",id:"how-to-use-it",level:2},{value:"Example",id:"example",level:2}];function h(e){const t={a:"a",h2:"h2",p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Part identifiers compute an unlimited number of handles on the fly, by registering just one. A single template handle can be created as a base that will allow any number of extensions to that base to be resolved as full handles, according to a pattern, without each such handle being individually registered.  In the handle system the part - fragment identifier is enabled with a template. The template is a syntax that defines a delimiter and an extension (extension is the option to add any kind of string behind the delimiter)."}),"\n",(0,n.jsx)(t.p,{children:"The template is not actually part of the PID. Syntax of the PIDs as well as the resolution mechanism accept the usage of part - fragment identifiers."}),"\n",(0,n.jsx)(t.p,{children:"The part - fragment identifier is enabled for a specific prefix. So everyone using the prefix must agree on a common pattern based on the community context and specific use cases. The resolution mechanism needs to pass through the fragment specification. The repository service hosting the data has to understand the fragment parameter the resolver just passed through."}),"\n",(0,n.jsxs)(t.p,{children:['As previously mentioned,  the template feature can be configured per handle prefix with a specific delimiter. So for prefix 11239 in  ePIC service the delimiter is set to "@", but ',(0,n.jsx)("strong",{children:"no template is enabled at the moment."})]}),"\n",(0,n.jsx)(t.h2,{id:"how-to-use-it",children:"How to use it?"}),"\n",(0,n.jsx)(t.p,{children:"use a single handle"}),"\n",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"to reference a part of a dictionary"}),(0,n.jsx)("li",{children:"to reference an unlimited number of ranges within a video"}),(0,n.jsx)("li",{children:"to reference a part of a collection of items"})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)("strong",{children:"Please note"}),"  that when your system offers PIDs with part identifiers, it is responsible of maintaining the part identification fragment as well. Remember that users will use it to link to your system resources and that the resulting end point should always be available."]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.p,{children:"In our example we have a main handle 11239/1234576."}),"\n",(0,n.jsxs)(t.p,{children:["So suppose that 11239/1234576 resolves to ",(0,n.jsx)(t.a,{href:"http://grnet.gr",children:"http://grnet.gr"})]}),"\n",(0,n.jsx)(t.p,{children:"suppose that a template  is enabled with the expression"}),"\n",(0,n.jsxs)(t.p,{children:["the part identifier behaviour is enabled with the expression\n",(0,n.jsx)("i",{children:"prefix/suffix@a=x&b=y"}),"\nthen\n11239/1234576@a=c&b=d  will be resolved to ",(0,n.jsx)(t.a,{href:"http://grnet.gr?a=c&b=d",children:"http://grnet.gr?a=c&b=d"})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>o});var n=i(6540);const a={},s=n.createContext(a);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);