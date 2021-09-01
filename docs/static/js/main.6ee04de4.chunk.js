(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{62:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),r=n(16),i=n.n(r),a=n(4),o=n(20),l=n(33),j=n.n(l),d=n(34),u=n(13),b=n(15),m="missions/SET_MISSIONS",p="missions/JOIN_MISSSION",O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return[].concat(Object(b.a)(e),Object(b.a)(t.payload));case p:return e.map((function(e){return e.id!==t.id?e:Object(u.a)(Object(u.a)({},e),{},{join:!e.join})}));default:return e}},h=n(11),f=n.n(h),x=n(18),v=n(19),N=n.n(v),k="rockets/LOAD",y="rockets/CHANGE_RESERVATION",g=Object(o.b)({missions:O,rockets:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(b.a)(t.payload);case y:return e.map((function(e){return e.id!==t.payload.id?e:Object(u.a)(Object(u.a)({},e),{},{reserved:!e.reserved})}));default:return e}}}),w=Object(o.c)(g,Object(o.a)(j.a,d.a)),M=(n(62),n(12)),S=n(3),E=n(1),R=function(e){var t=e.imageUrl;return Object(E.jsx)("article",{className:"rocket-img-wrapper",children:Object(E.jsx)("img",{alt:"",src:t,className:"rocket-image"})})},I=function(e){var t=e.id,n=e.reserved,c=Object(a.b)(),s=function(e){c(function(e){return{type:y,payload:{id:e}}}(e))},r=function(e){return{class:e?"cancel-reservation-btn":"reservation-btn",text:e?"Cancel Reservation":"Reserve Rocket"}}(n);return Object(E.jsx)("button",{type:"button",className:r.class,id:t,onClick:function(){return s(t)},children:r.text})},_=function(e){var t=e.id,n=e.name,c=e.description,s=e.reserved,r=function(e){return{class:e?"reserved-rocket":"not-reserved",text:e?"Reserved":""}}(s);return Object(E.jsxs)("article",{className:"rocket-details",children:[Object(E.jsx)("h1",{children:n}),Object(E.jsxs)("p",{className:"rocket-brief-info",children:[Object(E.jsx)("span",{className:r.class,children:r.text}),c]}),Object(E.jsx)(I,{id:t,reserved:s})]})},A=function(e){var t=e.id,n=e.name,c=e.description,s=e.image,r=e.reserved;return Object(E.jsxs)("section",{className:"rocket",children:[Object(E.jsx)(R,{imageUrl:s}),Object(E.jsx)(_,{id:t,name:n,description:c,reserved:r})]})},C=(n(64),function(){var e=Object(a.b)(),t=Object(a.c)((function(e){return e.rockets}));Object(c.useEffect)((function(){t.length||e(function(){var e=Object(x.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://api.spacexdata.com/v3/rockets").then((function(e){return e.data}));case 2:n=e.sent,t((c=n.map((function(e){return{name:e.rocket_name,id:e.id,description:e.description,image:e.flickr_images[0],reserved:!1}})),{type:k,payload:c}));case 4:case"end":return e.stop()}var c}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]);var n=t.map((function(e){return Object(E.jsx)(A,{name:e.name,id:e.id,description:e.description,image:e.image,reserved:e.reserved},e.id)}));return Object(E.jsx)("section",{className:"rockets-wrapper",children:n})}),J=n.p+"static/media/euclidean.9ed6f14b.png",T=(n(65),function(){return Object(E.jsxs)("header",{children:[Object(E.jsxs)("div",{className:"logo-title-wrapper",children:[Object(E.jsx)("img",{src:J,alt:"Logo",className:"logo"}),Object(E.jsx)("h1",{className:"nav-title",children:"Space Travelers's Hub"})]}),Object(E.jsx)("nav",{children:Object(E.jsxs)("ul",{className:"nav-list",children:[Object(E.jsx)("li",{className:"nav-rockets",children:Object(E.jsx)(M.b,{className:"link",to:"/",children:"Rockets"})}),Object(E.jsx)("li",{children:Object(E.jsx)(M.b,{className:"link",to:"/missions",children:"Missions"})}),Object(E.jsx)("li",{className:"nav-my-profile",children:Object(E.jsx)(M.b,{className:"link",to:"/profile",children:"My profile"})})]})})]})}),L=function(e){var t=e.mission,n=t.id,c=t.name,s=t.description,r=t.join,i=Object(a.b)();return Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{children:c}),Object(E.jsx)("td",{className:"description",children:s}),Object(E.jsx)("td",{children:Object(E.jsx)("p",{className:"status-placeholder",style:r?{backgroundColor:"#000",fontSize:"16px",color:"red"}:null,children:r?"Active Member":"NOT A MEMEBER"})}),Object(E.jsx)("td",{children:Object(E.jsx)("button",{type:"button",className:r?"leave-btn":"join-btn",onClick:function(){i(function(e){return{type:p,id:e}}(n))},children:r?"Leave mission":"Join Mission"})})]},n)},B=(n(67),function(){var e=Object(a.c)((function(e){return e.missions})),t=Object(a.b)(),n=function(){var e=Object(x.a)(f.a.mark((function e(){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://api.spacexdata.com/v3/missions?limit=4").then((function(e){return e.data.map((function(e){return{name:e.mission_name,id:e.mission_id,description:e.description,join:!1}}))}));case 2:n=e.sent,t({type:m,payload:n});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){0===e.length&&n()}),[]),Object(E.jsx)("div",{className:"missions-table",children:Object(E.jsx)("table",{children:Object(E.jsxs)("tbody",{children:[Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{children:"Mission"}),Object(E.jsx)("th",{children:"Description"}),Object(E.jsx)("th",{children:"Status"}),Object(E.jsx)("th",{})]}),e.map((function(e){return Object(E.jsx)(L,{mission:e},e.id)}))]})})})}),D=(n(68),function(){var e=Object(a.c)((function(e){return e.missions})),t=Object(a.c)((function(e){return e.rockets})),n=e.filter((function(e){return e.join})),c=t.filter((function(e){return e.reserved}));return Object(E.jsxs)("div",{className:"wrapper",children:[Object(E.jsxs)("div",{className:"my-profile-wrapper",children:[Object(E.jsx)("h2",{className:"title",children:"My Missions"}),Object(E.jsx)("ul",{className:"list",children:n.map((function(e){return Object(E.jsx)("li",{className:"filter-names",children:e.name},e.name)}))})]}),Object(E.jsxs)("div",{className:"my-profile-wrapper",children:[Object(E.jsx)("h2",{className:"title",children:"My Rockets"}),Object(E.jsx)("ul",{className:"list",children:c.map((function(e){return Object(E.jsx)("li",{className:"filter-names",children:e.name},e.name)}))})]})]})}),H=function(){return Object(E.jsx)("div",{children:Object(E.jsxs)(M.a,{children:[Object(E.jsx)(T,{}),Object(E.jsxs)(S.c,{children:[Object(E.jsx)(S.a,{exact:!0,path:"/",component:C}),Object(E.jsx)(S.a,{path:"/missions",component:B}),Object(E.jsx)(S.a,{path:"/profile",component:D})]})]})})};i.a.render(Object(E.jsx)(s.a.StrictMode,{children:Object(E.jsx)(a.a,{store:w,children:Object(E.jsx)(H,{})})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.6ee04de4.chunk.js.map