(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(n,e,t){},12:function(n,e,t){"use strict";t.r(e);var c=t(5),r=t.n(c),a=t(2),u=t(1),i=t.n(u),s=t(3),j=t(0),o=function(n){var e=n.language,t=Object(u.useContext)(h);return Object(j.jsx)("h3",{onClick:function(){return t(!1)},children:e})},l=i.a.memo((function(n){var e=n.languages;return Object(j.jsx)("ul",{children:e.map((function(n){return Object(j.jsx)("li",{children:Object(j.jsx)(o,{language:n.name})},n.name)}))})})),b=function(n){var e=n.name,t=n.languages,c=Object(u.useState)(!1),r=Object(a.a)(c,2),i=r[0],s=r[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{onClick:function(){return s(!i)},children:e}),i&&Object(j.jsx)(l,{languages:t})]})},O=i.a.memo((function(n){var e=n.countries;return Object(j.jsx)("ul",{children:e.map((function(n){return Object(j.jsx)("li",{children:Object(j.jsx)(b,Object(s.a)({},n))},n.name)}))})})),h=i.a.createContext(null),m=function(n){var e=n.name,t=n.countries,c=Object(u.useState)(!1),r=Object(a.a)(c,2),i=r[0],s=r[1];return Object(j.jsxs)(h.Provider,{value:s,children:[Object(j.jsx)("h1",{onClick:function(){return s(!i)},children:e}),i&&Object(j.jsx)(O,{countries:t})]})},d=function(n){var e=n.continents;return Object(j.jsx)("ul",{children:e.map((function(n){return Object(j.jsx)("li",{children:Object(j.jsx)(m,Object(s.a)({},n))},n.name)}))})};t(11);var f=function(){var n=Object(u.useState)(null),e=Object(a.a)(n,2),t=e[0],c=e[1];return Object(u.useEffect)((function(){fetch("https://countries.trevorblades.com/",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:"{ continents { name countries { name languages { name } } } }"})}).then((function(n){return n.json()})).then((function(n){return n.data.continents})).then(c)}),[]),Object(j.jsx)("div",{children:t&&Object(j.jsx)(d,{continents:t})})};r.a.render(Object(j.jsx)(f,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.fa920856.chunk.js.map