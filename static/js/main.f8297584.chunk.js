(this["webpackJsonpfirebase-axa"]=this["webpackJsonpfirebase-axa"]||[]).push([[0],{26:function(e,t,a){},48:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a.n(c),n=a(28),r=a.n(n),j=(a(48),a(49),a(19)),i=(a(26),a(34)),l=a(11),b=a(16),o=a(70),d=a(74),u=a(38),O=a(23),x=a(71),h=a(72),f=a(3);function p(){var e=Object(c.useState)(),t=Object(b.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)([]),r=Object(b.a)(n,2),i=r[0],l=r[1],p=Object(c.useState)({name:"",start:"",ende:""}),m=Object(b.a)(p,2),g=m[0],v=m[1],D=Object(c.useState)(""),N=Object(b.a)(D,2),w=N[0],S=N[1],y=Object(c.useState)(""),C=Object(b.a)(y,2),k=C[0],L=C[1],I=Object(c.useState)(!1),M=Object(b.a)(I,2),R=M[0],U=M[1];return Object(f.jsxs)("div",{children:[Object(f.jsx)("h4",{children:"Login"}),Object(f.jsx)("div",{className:"d-flex",id:"inputDiv",children:Object(f.jsx)(o.a,{className:"form-group w-25",children:Object(f.jsx)(d.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",value:a,onChange:function(e){return s(e.target.value)}})})}),Object(f.jsx)("br",{}),R&&Object(f.jsx)(x.a,{size:"sm",animation:"border",variant:"light"}),Object(f.jsx)("br",{}),Object(f.jsx)(u.a,{onClick:function(){l([]),U(!0),j.a.database().ref("users/"+a+"/toDo").on("value",(function(e){e.val()?(console.log("snap.val()",e.val()),l(e.val()),S("User erfolgreich angemeldet"),L("")):(S("-User erfolgreich angemeldet"),L("-User hat noch keine Eintr\xe4ge")),U(!1)}))},children:"Login"}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsxs)("h5",{children:[w,Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),k]}),"-----------------------------------------------------------------------------------------------------",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("h2",{children:"To Do's"}),Object(f.jsx)("h5",{children:"Neues To Do:"}),Object(f.jsx)("div",{className:"d-flex",id:"inputDiv",children:Object(f.jsx)(o.a,{className:"form-group w-25",children:Object(f.jsx)(d.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",value:g.name,onChange:function(e){return v((function(t){return Object(O.a)(Object(O.a)({},t),{},{name:e.target.value})}))}})})}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("h5",{children:"F\xe4llig am:"}),Object(f.jsx)("input",{id:"toDoDate",type:"date",value:g.ende,onChange:function(e){return v((function(t){return Object(O.a)(Object(O.a)({},t),{},{ende:e.target.value})}))}}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)(u.a,{onClick:function(){g.start=(new Date).toISOString().substring(0,10),i.push(g),function(e){null!=e&&j.a.database().ref("users/"+e+"/toDo").set(i)}(a)},children:"Speichern"}),Object(f.jsx)("br",{}),Object(f.jsx)(z,{}),Object(f.jsx)("br",{}),Object(f.jsx)(u.a,{onClick:function(){var e=[];l(e),null!=a&&j.a.database().ref("users/"+a+"/toDo").set(e)},children:"Alle l\xf6schen"})]});function z(){return Object(f.jsxs)("table",{className:"table",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{scope:"col",children:"#"}),Object(f.jsx)("th",{scope:"col",children:"Name"}),Object(f.jsx)("th",{scope:"col",children:"Hinzugef\xfcgt am"}),Object(f.jsx)("th",{scope:"col",children:"F\xe4llig am"}),Object(f.jsx)("th",{scope:"col",children:"Fertig?"})]})}),Object(f.jsx)("tbody",{children:0===i.length?Object(f.jsx)("div",{}):i.map((function(e,t){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{scope:"row",children:t}),Object(f.jsx)("td",{children:e.name}),Object(f.jsx)("td",{children:e.start}),Object(f.jsx)("td",{children:e.ende}),Object(f.jsx)("td",{children:Object(f.jsx)("div",{onClick:function(){return function(e){!function(e){var t=i.filter((function(t,a){return a!==e}));l(t),null!=a&&j.a.database().ref("users/"+a+"/toDo").set(t)}(e)}(t)},children:Object(f.jsx)(A,{})})})]},t)}))})]})}function A(){return Object(f.jsx)(h.a,{})}}function m(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),r=Object(b.a)(n,2),i=r[0],l=r[1],O=Object(c.useState)(""),x=Object(b.a)(O,2),h=(x[0],x[1]);function p(){j.a.database().ref("usernames/"+a+"/security").on("value",(function(e){e.val()?(console.log("snap.val()",e.val()),h(e.val())):console.log("User existiert nicht")}))}return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"ToDo List"}),Object(f.jsx)("br",{}),Object(f.jsx)("h2",{children:"Login"}),Object(f.jsx)("div",{className:"d-flex",id:"inputDiv",children:Object(f.jsx)(o.a,{className:"form-group w-25",children:Object(f.jsx)(d.a,{"aria-label":"Default",placeholder:"Username",value:a,onChange:function(e){return s(e.target.value)}})})}),Object(f.jsx)("br",{}),Object(f.jsx)("div",{className:"d-flex",id:"inputDiv",children:Object(f.jsx)(o.a,{className:"form-group w-25",children:Object(f.jsx)(d.a,{"aria-label":"Default",type:"password",placeholder:"Password",value:i,onChange:function(e){return l(e.target.value)}})})}),Object(f.jsx)("br",{}),Object(f.jsxs)(u.a,{onClick:function(){return p},children:[" ",Object(f.jsx)("a",{className:"buttonLink",href:"/firebase-axa/#/todolist",children:"Login"})]}),Object(f.jsx)("br",{}),Object(f.jsxs)("h6",{children:["Don't have an account yet? ",Object(f.jsx)("a",{className:"normalLink",href:"/firebase-axa/#/registration",children:"Register"})]})]})}var g=a(73);function v(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),r=Object(b.a)(n,2),i=r[0],l=r[1],O=Object(c.useState)(""),x=Object(b.a)(O,2),h=x[0],p=x[1];function m(){a.length>2&&h===i?(j.a.database().ref("usernames/"+a+"/security/password").set(i),console.log(a),1):0}return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"ToDo List"}),Object(f.jsx)("br",{}),Object(f.jsx)("h2",{children:"Registration"}),Object(f.jsx)("br",{}),Object(f.jsxs)(g.a,{children:[Object(f.jsx)(g.a.Toggle,{variant:"primary",id:"dropdown-basic",children:"Form of Address"}),Object(f.jsxs)(g.a.Menu,{children:[Object(f.jsx)(g.a.Item,{href:"#/action-1",children:"Mr."}),Object(f.jsx)(g.a.Item,{href:"#/action-2",children:"Ms."}),Object(f.jsx)(g.a.Item,{href:"#/action-3",children:"Mrs."})]})]}),Object(f.jsx)("br",{}),Object(f.jsx)("div",{className:"d-flex",id:"inputDiv",children:Object(f.jsx)(o.a,{className:"form-group w-25",children:Object(f.jsx)(d.a,{"aria-label":"Default",placeholder:"Username",value:a,onChange:function(e){return s(e.target.value)}})})}),Object(f.jsx)("br",{}),Object(f.jsx)("div",{className:"d-flex",id:"inputDiv",children:Object(f.jsx)(o.a,{className:"form-group w-25",children:Object(f.jsx)(d.a,{"aria-label":"Default",type:"password",placeholder:"Password",value:h,onChange:function(e){return p(e.target.value)}})})}),Object(f.jsx)("br",{}),Object(f.jsx)("div",{className:"d-flex",id:"inputDiv",children:Object(f.jsx)(o.a,{className:"form-group w-25",children:Object(f.jsx)(d.a,{"aria-label":"Default",type:"password",placeholder:"Confirm Password",value:i,onChange:function(e){return l(e.target.value)}})})}),Object(f.jsx)("br",{}),Object(f.jsx)(u.a,{onClick:function(){return m()},children:Object(f.jsx)("a",{className:"buttonLink",href:"/firebase-axa/#/todolist",children:"Register"})}),Object(f.jsxs)("h6",{children:["Already have an account? ",Object(f.jsx)("a",{className:"normalLink",href:"/firebase-axa/#/login",children:"Sign in"})]})]})}function D(){return Object(f.jsx)("div",{children:Object(f.jsx)(i.a,{children:Object(f.jsxs)(l.d,{children:[Object(f.jsx)(l.b,{path:"/login",component:m,basename:"/firebase-axa"}),Object(f.jsx)(l.b,{path:"/registration",component:v,basename:"/firebase-axa"}),Object(f.jsx)(l.b,{path:"/todolist",component:p,basename:"/firebase-axa"}),Object(f.jsx)(l.b,{path:"/",basename:"/firebase-axa",children:Object(f.jsx)(l.a,{to:"/login"})})]})})})}j.a.initializeApp({apiKey:"AIzaSyAKPxlXlJRVD7DwGaZ5htNGWSmlPRoR2Ls",authDomain:"todoliste-5382e.firebaseapp.com",databaseURL:"https://todoliste-5382e-default-rtdb.firebaseio.com",projectId:"todoliste-5382e",storageBucket:"todoliste-5382e.appspot.com",messagingSenderId:"971203866724",appId:"1:971203866724:web:f8d72416786622d473ef71",measurementId:"G-VGLJMJM2H0"}),r.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(D,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.f8297584.chunk.js.map