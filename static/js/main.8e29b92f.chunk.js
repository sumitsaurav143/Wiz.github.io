(this.webpackJsonpfirstapp=this.webpackJsonpfirstapp||[]).push([[0],{11:function(e,t,s){"use strict";s.r(t);var r=s(3),n=s.n(r),a=s(1),c=(s(9),s(4)),i=s(0),u=function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),s=Object(a.useState)(!1),r=Object(c.a)(s,2),n=r[0],u=r[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"Main",children:Object(i.jsxs)("form",{id:"login_form",children:[Object(i.jsx)("div",{children:Object(i.jsx)("input",{ref:e,type:"text",placeholder:"Enter Username",required:!0})}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{children:Object(i.jsx)("input",{ref:t,type:"text",placeholder:"Enter Password",required:!0})}),Object(i.jsx)("br",{}),Object(i.jsx)("button",{onClick:function(){var s=e.current.value,r=[];s.length<8&&r.push("Your username must be at least 8 characters"),s.search(/[a-z]/i)<0&&r.push("Username must contain at least one lower case letter."),s.search(/[A-Z]/)<0&&r.push("Username must contain at least one Upper case Letter."),s.search(/[0-9]/)<0&&r.push("Username must contain at least one digit.");var n=t.current.value,a=[];n.length<8&&a.push("Your password must be at least 8 characters"),n.search(/[a-z]/i)<0&&a.push("Your password must contain at least one letter."),n.search(/[0-9]/)<0&&a.push("Your password must contain at least one digit."),r.length>0&&(document.getElementById("valid_user_msg").innerText=r.join("\n")),a.length>0&&(document.getElementById("valid_pass_msg").innerText=a.join("\n")),0==a.length&&r.length>0&&u(!0)},children:" Submit"})]})}),n?Object(i.jsx)("h1",{id:"success",children:"User Logged In!!"}):Object(i.jsxs)("div",{id:"errors_here",children:[Object(i.jsx)("div",{id:"error",children:"Errors Shown Below:-"}),Object(i.jsx)("div",{id:"valid_user_msg"}),Object(i.jsx)("div",{id:"valid_pass_msg"})]})]})};function o(){return Object(i.jsx)(u,{})}var d=document.getElementById("root");n.a.render(Object(i.jsx)(o,{}),d)},9:function(e,t,s){}},[[11,1,2]]]);
//# sourceMappingURL=main.8e29b92f.chunk.js.map