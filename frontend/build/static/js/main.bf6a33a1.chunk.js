(this.webpackJsonppennamechooser=this.webpackJsonppennamechooser||[]).push([[0],{58:function(e,a,t){},59:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(10),s=t.n(r),o=t(14),l=t(2);function i(){return Object(l.jsxs)(o.a,{bg:"info",variant:"dark",children:[Object(l.jsxs)(o.a.Brand,{href:"#",className:"title",children:[Object(l.jsx)("img",{src:"../logo.svg",width:"30",height:"23",className:"d-inline-block align-bottom",alt:"Pen Name Chooser logo"})," Pen Name Chooser"]}),Object(l.jsx)(o.a.Toggle,{"aria-controls":"responsive-navbar-nav"})]})}var u=t(18),d=t.n(u),b=t(28),j=t(7),h=t(8),m=t.n(h),p=t(12),O=t(29);function v(){var e=Object(c.useState)(""),a=Object(j.a)(e,2),t=a[0],n=a[1],r=Object(c.useState)("Go"),s=Object(j.a)(r,2),o=s[0],i=s[1],u=Object(c.useState)("default"),h=Object(j.a)(u,2),v=h[0],f=h[1],x=Object(c.useState)("default"),g=Object(j.a)(x,2),N=g[0],k=g[1],A=Object(c.useState)("default"),E=Object(j.a)(A,2),G=E[0],y=E[1],S=Object(c.useState)("default"),C=Object(j.a)(S,2),w=C[0],T=C[1],P=Object(c.useState)("default"),B=Object(j.a)(P,2),D=B[0],J=B[1],L=Object(c.useState)("default"),M=Object(j.a)(L,2),H=M[0],I=M[1],q=Object(c.useState)("default"),z=Object(j.a)(q,2),F=z[0],K=z[1],Q=Object(c.useState)("default"),R=Object(j.a)(Q,2),U=R[0],V=R[1],W=Object(c.useState)("default"),X=Object(j.a)(W,2),Y=X[0],Z=X[1],$=function(){var e=Object(b.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),i("Processing ..."),f("default"),k("default"),y("default"),T("default"),J("default"),I("default"),K("default"),V("default"),Z("default"),e.next=13,m()({method:"GET",url:"".concat("https://pennamechooser.herokuapp.com/api","/medium?username=").concat(t)}).then((function(e){e.data.error?f("error"):e.data.usernameAvailable?f("available"):f("unavailable")})).catch((function(e){f("error")}));case 13:return e.next=15,m()({method:"GET",url:"".concat("https://pennamechooser.herokuapp.com/api","/atcoder?username=").concat(t)}).then((function(e){e.data.error?k("error"):e.data.usernameAvailable?k("available"):k("unavailable")})).catch((function(e){k("error")}));case 15:return e.next=17,m()({method:"GET",url:"".concat("https://pennamechooser.herokuapp.com/api","/codechef?username=").concat(t)}).then((function(e){e.data.error?y("error"):e.data.usernameAvailable?y("available"):y("unavailable")})).catch((function(e){y("error")}));case 17:return e.next=19,m()({method:"GET",url:"".concat("https://pennamechooser.herokuapp.com/api","/gitlab?username=").concat(t)}).then((function(e){e.data.error?T("error"):e.data.usernameAvailable?T("available"):T("unavailable")})).catch((function(e){T("error")}));case 19:return e.next=21,m()({method:"GET",url:"".concat("https://pennamechooser.herokuapp.com/api","/github?username=").concat(t)}).then((function(e){e.data.error?J("error"):e.data.usernameAvailable?J("available"):J("unavailable")})).catch((function(e){J("error")}));case 21:return e.next=23,m()({method:"GET",url:"".concat("https://pennamechooser.herokuapp.com/api","/codeforces?username=").concat(t)}).then((function(e){e.data.error?I("error"):e.data.usernameAvailable?I("available"):I("unavailable")})).catch((function(e){I("error")}));case 23:return e.next=25,m()({method:"GET",url:"".concat("https://pennamechooser.herokuapp.com/api","/hackerearth?username=").concat(t)}).then((function(e){e.data.error?K("error"):e.data.usernameAvailable?K("available"):K("unavailable")})).catch((function(e){K("error")}));case 25:return e.next=27,m()({method:"GET",url:"".concat("https://pennamechooser.herokuapp.com/api","/a2oj?username=").concat(t)}).then((function(e){e.data.error?V("error"):e.data.usernameAvailable?V("available"):V("unavailable")})).catch((function(e){V("error")}));case 27:return e.next=29,m()({method:"GET",url:"".concat("https://pennamechooser.herokuapp.com/api","/leetcode?username=").concat(t)}).then((function(e){e.data.error?Z("error"):e.data.usernameAvailable?Z("available"):Z("unavailable")})).catch((function(e){Z("error")}));case 29:i("Go");case 30:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(l.jsx)("div",{className:"row m-0",children:Object(l.jsxs)("div",{className:"col-md-6 mx-auto my-2 form-body",children:[Object(l.jsx)("div",{className:"mt-2",children:Object(l.jsxs)(p.a,{children:[Object(l.jsxs)(p.a.Group,{controlId:"formBasicEmail",children:[Object(l.jsx)(p.a.Label,{children:Object(l.jsx)("h4",{className:"title",children:"Pen Name"})}),Object(l.jsx)(p.a.Control,{type:"text",placeholder:"Enter your pen name",onChange:function(e){n(e.target.value)},value:t})]}),Object(l.jsx)(O.a,{variant:"primary",type:"submit",onClick:$,children:o})]})}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)("div",{className:v,children:"Medium"}),Object(l.jsx)("div",{className:N,children:"AtCoder"}),Object(l.jsx)("div",{className:G,children:"CodeChef"}),Object(l.jsx)("div",{className:w,children:"GitLab"}),Object(l.jsx)("div",{className:D,children:"GitHub"}),Object(l.jsx)("div",{className:H,children:"Codeforces"}),Object(l.jsx)("div",{className:F,children:"HackerEarth"}),Object(l.jsx)("div",{className:U,children:"A\xb2 Online Judge"}),Object(l.jsx)("div",{className:Y,children:"LeetCode"})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{className:"legend-default inline",title:"legend-default",type:"button"}),Object(l.jsx)("span",{children:" Default"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{className:"legend-available inline",title:"legend-available",type:"button"}),Object(l.jsx)("span",{children:" Pen name is available to choose "})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{className:"legend-unavailable inline",title:"legend-unavailable",type:"button"}),Object(l.jsx)("span",{children:" Pen name is not available to choose"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{className:"legend-error inline",title:"legend-error",type:"button"}),Object(l.jsx)("span",{children:" Error occured while processing"})]})]})]})})}function f(){return Object(l.jsx)("footer",{children:Object(l.jsxs)("p",{className:"text-center m-auto",children:["Made with ",Object(l.jsx)("span",{id:"heart",children:"\u2665"})," by ",Object(l.jsx)("a",{href:"https://github.com/Aman-Codes",id:"link",children:"Aman Dwivedi"})]})})}t(57),t(58);var x=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(i,{}),Object(l.jsx)(v,{}),Object(l.jsx)(f,{})]})};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.bf6a33a1.chunk.js.map