(this.webpackJsonpcoba=this.webpackJsonpcoba||[]).push([[10],{184:function(e,t,a){},223:function(e,t,a){"use strict";a.r(t);var s=a(8),c=a(0),n=a(53),l=a(54),r=a(2),i=a(7),o=a(22),j=a(12),u=a.n(j),b=a(210),h=a(211),m=a(179),d=a(212),p=a(180),O=a(213),x=a(181),f=a(3),g=["label","hideIcon","showIcon","visible","className","htmlFor","placeholder","iconSize","inputClassName"],v=function(e){var t=e.label,a=e.hideIcon,n=e.showIcon,l=e.visible,j=e.className,v=e.htmlFor,N=e.placeholder,S=e.iconSize,w=e.inputClassName,y=Object(o.a)(e,g),C=Object(c.useState)(l),I=Object(s.a)(C,2),k=I[0],z=I[1];return Object(f.jsxs)(c.Fragment,{children:[t?Object(f.jsx)(m.a,{for:v,children:t}):null,Object(f.jsxs)(d.a,{className:u()(Object(i.a)({},j,j)),children:[Object(f.jsx)(p.a,Object(r.a)(Object(r.a)({type:!1===k?"password":"text",placeholder:N||"\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7",className:u()(Object(i.a)({},w,w))},t&&v?{id:v}:{}),y)),Object(f.jsx)(O.a,{addonType:"append",onClick:function(){return z(!k)},children:Object(f.jsx)(x.a,{className:"cursor-pointer",children:function(){var e=S||14;return!1===k?a||Object(f.jsx)(b.a,{size:e}):n||Object(f.jsx)(h.a,{size:e})}()})})]})]})},N=v;v.defaultProps={visible:!1};var S=a(74),w=a(75),y=a(214),C=a(188),I=a(178),k=a(52),z=a(66),M=a.n(z),F=a(182),A=a.n(F),D=a(183),E=a.n(D),U=(a(184),a(17)),Y=Math.ceil(10*Math.random()),B=Math.ceil(10*Math.random()),G=Y+B,J=E()(A.a);t.default=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],i=Object(c.useState)(""),o=Object(s.a)(i,2),j=o[0],u=o[1],b=Object(c.useState)(""),h=Object(s.a)(b,2),d=h[0],O=h[1],x=Object(n.g)(),g=localStorage.getItem("user");return Object(c.useEffect)((function(){null!==g&&null!==j&&x.push("/home")}),[]),Object(f.jsx)("div",{className:"auth-wrapper auth-v1 px-2",children:Object(f.jsx)("div",{className:"auth-inner py-2",children:Object(f.jsx)(S.a,{className:"mb-0",children:Object(f.jsxs)(w.a,{children:[Object(f.jsxs)(l.b,{className:"brand-logo",to:"/",onClick:function(e){return e.preventDefault()},children:[Object(f.jsx)("img",{src:U.default,alt:"example",height:"60"}),Object(f.jsxs)("h2",{className:"brand-text text-primary ml-1",children:["Portal Guru",Object(f.jsx)("br",{}),"SMA Alfa Centauri"]})]}),Object(f.jsxs)(y.a,{className:"auth-login-form mt-2",onSubmit:function(e){e.preventDefault(),M.a.post("https://smaalfacentauri.com/apis/sma.php",{act:"login",token:"euJw4bd65HsXYaOrjM9xBs072usQvngymhb15TS8O1awiS8U3rVFCzv18YrGv5RUAAUjsb7hHX56gYKCDulfsOCs70kVijiWwGcY5VSzam1j8hnIqmE8XxvnRTfUuDhy",user:a,pass:j}).then((function(e){if(!e.data.success||parseInt(d)!==G)return J.fire({icon:"error",title:"Oops...",text:e.data.message,customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1});localStorage.setItem("user",a),localStorage.setItem("pass",j),J.fire({icon:"success",title:"Success",text:"Login Sukses",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1}).then((function(){x.push("/home")}))})).catch((function(e){console.error(e)}))},children:[Object(f.jsxs)(C.a,{children:[Object(f.jsx)(m.a,{className:"form-label",for:"login-email",children:"Email"}),Object(f.jsx)(p.a,{type:"text",value:a,onChange:function(e){return r(e.target.value)},id:"login-email",placeholder:"john@example.com",autoFocus:!0})]}),Object(f.jsxs)(C.a,{children:[Object(f.jsx)("div",{className:"d-flex justify-content-between",children:Object(f.jsx)(m.a,{className:"form-label",for:"login-password",children:"Password"})}),Object(f.jsx)(N,{value:j,onChange:function(e){return u(e.target.value)},className:"input-group-merge",id:"login-password"})]}),Object(f.jsx)("div",{className:"d-flex justify-content-between",children:Object(f.jsx)(m.a,{className:"form-label",for:"login-password",children:"Enter Captcha"})}),Object(f.jsx)(I.a,{sm:"12",children:Object(f.jsxs)(C.a,{row:!0,children:[Object(f.jsxs)(m.a,{sm:"3",size:"lg",for:"input-large-horizontal",children:[Y," + ",B]}),Object(f.jsx)(I.a,{sm:"9",children:Object(f.jsx)(p.a,{type:"text",value:d,onChange:function(e){return O(e.target.value)}})})]})}),Object(f.jsx)(k.a.Ripple,{type:"submit",color:"primary",block:!0,children:"Login"})]})]})})})})}}}]);
//# sourceMappingURL=10.2b037e73.chunk.js.map