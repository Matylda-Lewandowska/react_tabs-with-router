(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{20:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var i=n(8),c=n.n(i),a=n(10),d=n(1),r=n(0),s=(n(18),n(19),n(20),n(9)),o=n.n(s),b=n(2),l=function(t){var e,n=t.tabs,i=t.selectedTabId,c=t.onTabSelected,a=function(t){return o()({"is-active":i===t.id||n[0].id===t.id&&n.every((function(t){return t.id!==i}))})};return Object(b.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(b.jsx)("div",{className:"tabs is-boxed",children:Object(b.jsx)("ul",{children:n.map((function(t){return Object(b.jsx)("li",{className:a(t),"data-cy":"Tab",children:Object(b.jsx)("a",{href:"#".concat(t.id),"data-cy":"TabLink",onClick:function(){return function(t){t.id!==i&&c(t)}(t)},children:t.title})},t.id)}))})}),Object(b.jsx)("div",{className:"block","data-cy":"TabContent",children:null===(e=n.find((function(t){return t.id===i})))||void 0===e?void 0:e.content})]})},u=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],j=function(){var t,e=Object(r.useState)(u[0].id),n=Object(d.a)(e,2),i=n[0],c=n[1];return Object(b.jsxs)("div",{className:"section",children:[Object(b.jsx)("h1",{className:"title",children:"Selected tab is ".concat(null===(t=u.find((function(t){return t.id===i})))||void 0===t?void 0:t.title)}),Object(b.jsx)(l,{tabs:u,selectedTabId:i,onTabSelected:function(t){u.find((function(t){return t.id===i}))?c(t.id):c(u[0].id)}})]})};c.a.render(Object(b.jsx)(a.a,{children:Object(b.jsx)(j,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.28bc88e4.chunk.js.map