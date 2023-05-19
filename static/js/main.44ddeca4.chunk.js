(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var n=c(11),r=c(5),a=(c(21),c(22),c(23),c(2)),s=c(8),j=c(9),i=c(12),l=c(4),o=c(1);function b(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}c(24);var h=c(0),d=function(){return Object(h.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(h.jsx)("div",{className:"Loader__content"})})},O=c(6),x=c.n(O),u=function(e){var t=e.person,c=t.name,n=t.slug,a=t.sex;return Object(h.jsx)(r.b,{to:"/people/".concat(n),className:x()({"has-text-danger":"f"===a}),children:c})},p=function(e){var t=e.person,c=e.selectedPerson,n=t.sex,r=t.born,a=t.died,s=t.fatherName,j=t.motherName,i=t.mother,l=t.father,o=t.slug;return Object(h.jsxs)("tr",{"data-cy":"person",className:x()({"has-background-warning":o===c}),children:[Object(h.jsx)("td",{children:Object(h.jsx)(u,{person:t})}),Object(h.jsx)("td",{children:n}),Object(h.jsx)("td",{children:r}),Object(h.jsx)("td",{children:a}),Object(h.jsx)("td",{children:i?Object(h.jsx)(u,{person:i}):j||"-"}),Object(h.jsx)("td",{className:"",children:l?Object(h.jsx)(u,{person:l}):s||"-"})]})},m=function(e){var t=e.people,c=Object(a.h)().selectedPerson;return Object(h.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Name"}),Object(h.jsx)("th",{children:"Sex"}),Object(h.jsx)("th",{children:"Born"}),Object(h.jsx)("th",{children:"Died"}),Object(h.jsx)("th",{children:"Mother"}),Object(h.jsx)("th",{children:"Father"})]})}),Object(h.jsx)("tbody",{children:t.map((function(e){return Object(h.jsx)(p,{person:e,selectedPerson:c},e.slug)}))})]})},f=function(e,t){return e.find((function(e){return e.name===t}))},v=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1],r=Object(o.useState)(!1),a=Object(l.a)(r,2),O=a[0],x=a[1],u=Object(o.useState)(!1),p=Object(l.a)(u,2),v=p[0],g=p[1],N=0===c.length,y=function(){var e=Object(i.a)(Object(s.a)().mark((function e(){var t,c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b();case 3:t=e.sent,c=t.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{mother:f(t,e.motherName),father:f(t,e.fatherName)})})),n(c),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),g(!0);case 11:return e.prev=11,x(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){x(!0),y()}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{className:"title",children:"People Page"}),Object(h.jsx)("div",{className:"block",children:Object(h.jsx)("div",{className:"box table-container",children:O?Object(h.jsx)(d,{}):Object(h.jsxs)(h.Fragment,{children:[v&&Object(h.jsx)("p",{"data-cy":"peopleLoadingError",children:"Something went wrong"}),N&&!v?Object(h.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}):Object(h.jsx)(m,{people:c})]})})})]})},g=function(){return Object(h.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"navbar-brand",children:[Object(h.jsx)(r.c,{to:"/",className:function(e){var t=e.isActive;return x()("navbar-item",{"has-background-grey-lighter":t})},children:"Home"}),Object(h.jsx)(r.c,{to:"/people",className:function(e){var t=e.isActive;return x()("navbar-item",{"has-background-grey-lighter":t})},children:"People"})]})})})},N=function(){return Object(h.jsxs)("div",{"data-cy":"app",children:[Object(h.jsx)(g,{}),Object(h.jsx)("main",{className:"section",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)(a.d,{children:[Object(h.jsx)(a.b,{path:"/",element:Object(h.jsx)("h1",{className:"title",children:"Home Page"})}),Object(h.jsxs)(a.b,{path:"/people",element:Object(h.jsx)(v,{}),children:[Object(h.jsx)(a.b,{path:":selectedPerson",element:Object(h.jsx)(v,{})}),Object(h.jsx)(a.b,{index:!0,element:Object(h.jsx)(v,{})})]}),Object(h.jsx)(a.b,{path:"/home",element:Object(h.jsx)(a.a,{to:"/",replace:!0})}),Object(h.jsx)(a.b,{path:"*",element:Object(h.jsx)("h1",{className:"title",children:"Page not found"})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(h.jsx)(r.a,{children:Object(h.jsx)(N,{})}))}},[[26,1,2]]]);
//# sourceMappingURL=main.44ddeca4.chunk.js.map