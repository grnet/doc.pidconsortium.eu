"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[91],{8491:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=i(4848),t=i(8453);const r={id:"glossary",title:"Glossary |  Handle API",sidebar_postition:1},a="Glossary",l={id:"glossary/glossary",title:"Glossary |  Handle API",description:"Basic terms",source:"@site/docs/glossary/glossary.md",sourceDirName:"glossary",slug:"/glossary/",permalink:"/docs/glossary/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"glossary",title:"Glossary |  Handle API",sidebar_postition:1},sidebar:"tutorialSidebar",previous:{title:"Glossary",permalink:"/docs/category/glossary"}},o={},d=[{value:"Basic terms",id:"basic-terms",level:3},{value:"The data model",id:"the-data-model",level:3},{value:"Handle value",id:"handle-value",level:4}];function h(e){const n={code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"glossary",children:"Glossary"}),"\n",(0,s.jsx)(n.h3,{id:"basic-terms",children:"Basic terms"}),"\n",(0,s.jsx)(n.p,{children:"Some terms in this document have a very specific meaning:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"PID"}),": Persistent identifier. It is the Identifier pointing to a resource with no knowledge of the resource. It is the the combination of the prefix/suffix . The prefix is the  API Prefix 11239. As a suffix we use a dynamically created UUID as shown in the following examples."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"handle"}),": The handle is the PID along with a set of values that accompany the PID"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"the API"}),": the Application Programming Interface laid out in this document"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"server"}),", ",(0,s.jsx)(n.strong,{children:"implementation"}),": an implementation of the API"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"(service) provider"}),": an organisation or person that operates a server as a service"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"client"}),": a piece of software that interacts with a server using the API"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"user"}),": an organisation or person that operates a client"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"UUID"}),": UUID stands for Universally Unique IDentifier, GUID for Globally Unique IDentifier. A universally unique identifier (UUID) is an identifier standard used in software construction, standardized by the Open Software Foundation (OSF) as part of the Distributed Computing Environment (DCE). The intent of UUIDs is to enable distributed systems to uniquely identify information without significant central coordination."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"the-data-model",children:"The data model"}),"\n",(0,s.jsx)(n.h4,{id:"handle-value",children:"Handle value"}),"\n",(0,s.jsx)(n.p,{children:"A handle value is a collection of the data describing it and the administrative data. Each handle has one or more administrators. Any administrative operation (e.g., add, delete or modify handle values) can only be performed by the handle owner with adequate privilege. The handle owner and any other person with administrative rights on the specific handle, are defined in terms of HS_ADMIN values."}),"\n",(0,s.jsx)(n.p,{children:"So a handle value is a collection with at least the following:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"idx"})," : a positive number that specifies the unique index of this Handle Value within its Value Set."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"type"})," : Specifies the data type of member data."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"parsed_data"})," : The data you entered for the defined type in human readable format."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"data"})," : a blob."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"timestamp"})," : a number that records the last time this Handle Value was updated at the server. The field contains elapsed time since 00:00:00 UTC, January 1970 in milliseconds."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ttl_type"})," : the TTL type indicates whether the TTL value is absolute or relative.  The absolute TTL value defines the time to live in terms of seconds since 00:00:00 UTC, January 1st 1970.  A relative TTL specifies the time to live in terms of the number of seconds elapsed since the value was obtained by the client from any handle server."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ttl"})," : a number that specifies the Time-To- Live of the value record. A positive value defines the time to live in terms of seconds since 00:00:00 UTC, January 1st 1970. A negative value specifies the time to live in terms of the number of seconds elapsed since the value was obtained."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"refs"})," : a list of references to other Handle Values."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"privs"})," : The permissions of the handle"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Administrative"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"idx"})," : the unique id of the administrator"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"type"})," : the admin type"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"parsed_data"})," : the admin data with a set of possible permissions"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var s=i(6540);const t={},r=s.createContext(t);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);