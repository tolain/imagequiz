(this.webpackJsonpimagequiz=this.webpackJsonpimagequiz||[]).push([[0],{58:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(21),s=t.n(c),o=(t(58),t(8)),i=t(31),l=[{name:"Acacia",picture:"https://habahram.blob.core.windows.net/flowers/acacia.jpg"},{name:"Alyssum",picture:"https://habahram.blob.core.windows.net/flowers/alyssum.jpg"},{name:"Amaryllis",picture:"https://habahram.blob.core.windows.net/flowers/amaryllis.jpg"},{name:"Aster",picture:"https://habahram.blob.core.windows.net/flowers/aster.jpg"},{name:"Azalea",picture:"https://habahram.blob.core.windows.net/flowers/azalea.jpg"},{name:"Begonia",picture:"https://habahram.blob.core.windows.net/flowers/begonia.jpg"},{name:"Buttercup",picture:"https://habahram.blob.core.windows.net/flowers/buttercup.jpg"},{name:"Calluna",picture:"https://habahram.blob.core.windows.net/flowers/calluna.jpg"},{name:"Camellia",picture:"https://habahram.blob.core.windows.net/flowers/camellia.jpg"},{name:"Cardinal",picture:"https://habahram.blob.core.windows.net/flowers/cardinal.jpg"},{name:"Carnation",picture:"https://habahram.blob.core.windows.net/flowers/carnation.jpg"},{name:"Clover",picture:"https://habahram.blob.core.windows.net/flowers/clover.jpg"},{name:"Crown Imperial",picture:"https://habahram.blob.core.windows.net/flowers/crownimperial.jpg"},{name:"Daffodil",picture:"https://habahram.blob.core.windows.net/flowers/daffodil.jpg"},{name:"Dahlia",picture:"https://habahram.blob.core.windows.net/flowers/dahlia.jpg"},{name:"Daisy",picture:"https://habahram.blob.core.windows.net/flowers/daisy.jpg"},{name:"Gladiolus",picture:"https://habahram.blob.core.windows.net/flowers/gladiolus.jpg"},{name:"Lantana",picture:"https://habahram.blob.core.windows.net/flowers/lantana.jpg"},{name:"Lily",picture:"https://habahram.blob.core.windows.net/flowers/lily.jpg"},{name:"Lotus",picture:"https://habahram.blob.core.windows.net/flowers/lotus.jpg"},{name:"Marigold",picture:"https://habahram.blob.core.windows.net/flowers/Marigold.jpg"},{name:"Orchid",picture:"https://habahram.blob.core.windows.net/flowers/orchid.jpg"},{name:"Primrose",picture:"https://habahram.blob.core.windows.net/flowers/primrose.jpg"},{name:"Sunflower",picture:"https://habahram.blob.core.windows.net/flowers/sunflower.jpg"},{name:"Tickseed",picture:"https://habahram.blob.core.windows.net/flowers/tickseed.jpg"},{name:"Tulip",picture:"https://habahram.blob.core.windows.net/flowers/tulip.jpg"},{name:"Zinnia",picture:"https://habahram.blob.core.windows.net/flowers/zinnia.jpg"}],h=t(24),b=t(28),j=t(13),p=t(1),u=function(e){var a=Object(o.f)();return Object(p.jsx)(h.a,{children:Object(p.jsx)(b.a,{xs:1,md:2,className:"g-4",children:l.map((function(e){return Object(p.jsx)(j.a,{children:Object(p.jsxs)(i.a,{onClick:function(){return t=e.name,void a.push({pathname:"/quiz",state:{flowerName:t}});var t},children:[Object(p.jsx)(i.a.Img,{variant:"top",src:e.picture}),Object(p.jsx)(i.a.Body,{children:Object(p.jsx)(i.a.Text,{children:e.name})})]})},e.name)}))})})},d=t(7),m=t(12),w=t(33),O=[],f=function(){var e=Object(n.useState)(""),a=Object(d.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(""),s=Object(d.a)(c,2),o=s[0],i=s[1];return Object(p.jsxs)(m.a,{onSubmit:function(e){e.preventDefault(),O.push({username:t,password:o})},children:[Object(p.jsxs)(m.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(p.jsx)(m.a.Label,{children:"Choose a username(your email address):"}),Object(p.jsx)(m.a.Control,{type:"email",placeholder:"Enter email",value:t,onChange:function(e){r(e.target.value)}})]}),Object(p.jsxs)(m.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(p.jsx)(m.a.Label,{children:"Choose a password"}),Object(p.jsx)(m.a.Control,{type:"password",placeholder:"Password",value:o,onChange:function(e){i(e.target.value)}})]}),Object(p.jsx)(w.a,{variant:"primary",type:"submit",children:"Sign Up"})]})},g=function(){var e=Object(n.useState)(""),a=Object(d.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(""),s=Object(d.a)(c,2),i=s[0],l=s[1],h=Object(o.f)();return Object(p.jsxs)(m.a,{onSubmit:function(e){e.preventDefault();var a=O.find((function(e){return e.username===t&e.password===i}));a&&(console.log(a),h.push({pathname:"/",state:{username:t}}))},children:[Object(p.jsxs)(m.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(p.jsx)(m.a.Label,{children:"Username:"}),Object(p.jsx)(m.a.Control,{type:"email",placeholder:"Enter email",value:t,onChange:function(e){r(e.target.value)}})]}),Object(p.jsxs)(m.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(p.jsx)(m.a.Label,{children:"Password"}),Object(p.jsx)(m.a.Control,{type:"password",placeholder:"Password",value:i,onChange:function(e){l(e.target.value)}})]}),Object(p.jsx)(w.a,{variant:"primary",type:"submit",children:"Log In"})]})},x=t(30),v=t(43),C=function(){var e=Object(o.g)();return Object(p.jsx)(x.a,{children:Object(p.jsxs)(h.a,{children:[Object(p.jsx)(x.a.Brand,{href:"#home",children:"Hello World App"}),Object(p.jsx)(x.a.Toggle,{}),Object(p.jsxs)(x.a.Collapse,{className:"justify-content-end",children:[Object(p.jsx)(v.a.Link,{href:"#login",children:"Sign In"}),Object(p.jsx)(v.a.Link,{href:"#signup",children:"Sign Up"}),e.state&&e.state.username?Object(p.jsxs)(x.a.Text,{children:["Signed in as: ",Object(p.jsx)("a",{href:"#login",children:e.state.username})]}):""]})]})})},y=t(22),S=(t(66),function(){for(var e=[],a=0,t=function(){for(var e=[],a=0,t=0;t<l.length;t++){(a=t)>l.length-4&&(a=t-2);var n={picture:l[t].picture,choices:[l[a].name,l[a+1].name,l[a+2].name],answer:l[t].name};e.push(n)}return e}(),n=0;n<t.length;n++){(a=n)>t.length-7&&(a=n-5);var r=[t[a],t[a+1],t[a+2],t[a+3],t[a+4],t[a+5]];e.push(r)}return e}()),L=t(44),I=t(70),B=function(){var e=Object(n.useState)(0),a=Object(d.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(0),s=Object(d.a)(c,2),i=s[0],l=s[1],u=Object(n.useState)(!1),m=Object(d.a)(u,2),O=m[0],f=m[1],g=Object(o.g)(),x=S.find((function(e){return e.find((function(e){return e.answer===g.state.flowerName}))}));return Object(p.jsxs)(h.a,{children:[O?"":Object(p.jsxs)(b.a,{children:[Object(p.jsx)(j.a,{children:Object(p.jsx)(I.a,{src:x[t].picture})}),Object(p.jsx)(j.a,{children:Object(p.jsx)(L.a,{children:function(e){var a=e.map((function(e,a){return a}));return e.map((function(e,t,n){var r=Math.floor(Math.random()*a.length),c=a[r];return a.splice(r,1),n[c]}))}(x[t].choices).map((function(e){return Object(p.jsx)(L.a.Item,{onClick:function(){return a=e,t<x.length-1?r(t+1):f(!0),void(x[t].answer===a&&l(i+1));var a},action:!0,variant:"light",children:e},e)}))})})]}),Object(p.jsx)(b.a,{children:Object(p.jsxs)(j.a,{children:["score: ",i]})}),O?Object(p.jsxs)(b.a,{children:[Object(p.jsx)(j.a,{children:Object(p.jsx)(w.a,{onClick:function(){console.log(t),r(0),f(!1),l(0)},children:"Restart"})}),Object(p.jsx)(j.a,{children:Object(p.jsx)(y.b,{to:"/",children:Object(p.jsx)(w.a,{children:"Go Home"})})})]}):""]})};var k=function(){return Object(p.jsx)(y.a,{children:Object(p.jsxs)(h.a,{children:[Object(p.jsx)(b.a,{children:Object(p.jsx)(j.a,{children:"This is the header!"})}),Object(p.jsx)(b.a,{children:Object(p.jsx)(j.a,{children:Object(p.jsx)(C,{})})}),Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{exact:!0,path:"/",children:Object(p.jsx)(u,{})}),Object(p.jsx)(o.a,{path:"/signup",children:Object(p.jsx)(f,{})}),Object(p.jsx)(o.a,{path:"/quiz",children:Object(p.jsx)(B,{})}),Object(p.jsx)(o.a,{path:"/login",children:Object(p.jsx)(g,{})})]}),Object(p.jsx)(b.a,{children:Object(p.jsx)(j.a,{children:"This is the footer!"})})]})})},T=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,71)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,c=a.getLCP,s=a.getTTFB;t(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(k,{})}),document.getElementById("root")),T()}},[[67,1,2]]]);
//# sourceMappingURL=main.190955a3.chunk.js.map