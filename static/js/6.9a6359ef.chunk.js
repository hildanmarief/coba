(this.webpackJsonpcoba=this.webpackJsonpcoba||[]).push([[6],{115:function(e,t,n){},174:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){},215:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(8),i=n(0),r=n(60),s=n(10),o=n(110),l=Object(i.createContext)(),u=(Object(o.a)(l.Consumer),n(7)),d=n(12),b=n.n(d),j=n(23),m=function(e){return function(t){return t({type:"HANDLE_CONTENT_WIDTH",value:e})}},h=function(e){return function(t){return t({type:"HANDLE_MENU_COLLAPSED",value:e})}},O=function(e){return function(t){return t({type:"HANDLE_MENU_HIDDEN",value:e})}},f=(n(111),n(3)),v=function(e){var t,n=e.layout,c=e.children,r=e.appLayout,s=e.wrapperClass,o=e.transition,l=e.routeMeta,d=Object(j.b)(),v=Object(j.c)((function(e){return e})),p=v.navbar,x=v.layout.contentWidth,g="HorizontalLayout"!==n||r?i.Fragment:"div";return Object(i.useEffect)((function(){return l&&(l.contentWidth&&d(m(l.contentWidth)),l.menuCollapsed&&d(h(l.menuCollapsed)),l.menuHidden&&d(O(l.menuHidden))),function(){l&&(l.contentWidth&&d(m("full")),l.menuCollapsed&&d(h(!l.menuCollapsed)),l.menuHidden&&d(O(!l.menuHidden)))}}),[]),Object(f.jsxs)("div",{className:b()("app-content content overflow-hidden",(t={},Object(u.a)(t,s,s),Object(u.a)(t,"show-overlay",p.query.length),t)),children:[Object(f.jsx)("div",{className:"content-overlay"}),Object(f.jsx)("div",{className:"header-navbar-shadow"}),Object(f.jsx)("div",{className:b()(Object(u.a)({"content-wrapper":!r,"content-area-wrapper":r,"container p-0":"boxed"===x},"animate__animated animate__".concat(o),"none"!==o&&o.length)),children:Object(f.jsx)(g,Object(a.a)(Object(a.a)({},"HorizontalLayout"!==n||r?{}:{className:b()({"content-body":!r})}),{},{children:c}))})]})},p=n(53),x=n(54),g=[{path:"/home",component:Object(i.lazy)((function(){return n.e(8).then(n.bind(null,222))}))},{path:"/second-page",component:Object(i.lazy)((function(){return n.e(9).then(n.bind(null,209))}))},{path:"/siswa/data_siswa",component:Object(i.lazy)((function(){return n.e(7).then(n.bind(null,216))}))},{path:"/",component:Object(i.lazy)((function(){return Promise.all([n.e(5),n.e(10)]).then(n.bind(null,223))})),layout:"BlankLayout",meta:{authRoute:!0}},{path:"/error",component:Object(i.lazy)((function(){return n.e(0).then(n.bind(null,221))})),layout:"BlankLayout"}],y=n(22),N=n(57),k=function(){var e=Object(i.useState)((function(){try{var e=window.localStorage.getItem("skin");return e?JSON.parse(e):s.a.layout.skin}catch(t){return console.log(t),s.a.layout.skin}})),t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(i.useEffect)((function(){var e,t=window.document.body;(e=t.classList).remove.apply(e,Object(N.a)(t.classList)),"light"!==n&&t.classList.add({dark:"dark-layout",bordered:"bordered-layout","semi-dark":"semi-dark-layout"}[n])}),[n]),[n,function(e){try{var t=e instanceof Function?e(n):e;a(t),window.localStorage.setItem("skin",JSON.stringify(t))}catch(c){console.log(c)}}]},w=["children"],L=function(e){var t=e.children,n=(Object(y.a)(e,w),k()),a=Object(c.a)(n,2),r=(a[0],a[1],Object(i.useState)(!1)),s=Object(c.a)(r,2),o=s[0],l=s[1];return Object(i.useEffect)((function(){return l(!0),function(){return l(!1)}}),[]),o?Object(f.jsx)("div",{className:"blank-page",children:Object(f.jsx)("div",{className:"app-content content",children:Object(f.jsx)("div",{className:"content-wrapper",children:Object(f.jsx)("div",{className:"content-body",children:t})})})}):null},C=n(208),z=n(77),S=n.n(z),I=n(207),H=n(52),A=n(109),T=n(186),M=n(187),E=n(217),P=n(188),D=n(78),W=n.n(D),G=(n(115),function(e){var t=e.skin,n=e.setSkin,a=e.isRtl,s=e.setIsRtl,o=e.layout,l=e.setLayout,u=e.navbarType,d=e.setNavbarType,j=e.footerType,m=e.setFooterType,h=e.navbarColor,O=e.setNavbarColor,v=e.isHidden,p=e.setIsHidden,x=e.contentWidth,g=e.setContentWidth,y=e.menuCollapsed,N=e.setMenuCollapsed,k=e.transition,w=e.setTransition,L=Object(i.useState)(!1),C=Object(c.a)(L,2),z=C[0],S=C[1],I=function(e){e.preventDefault(),S(!z)},H=[{value:"fadeIn",label:"Fade"},{value:"fadeInLeft",label:"Fade In Left"},{value:"zoomIn",label:"Zoom In"},{value:"none",label:"None"}],D=H.find((function(e){return e.value===k}));return Object(f.jsxs)("div",{className:b()("customizer d-none d-md-block",{open:z}),children:[Object(f.jsx)("a",{href:"/",className:"customizer-toggle d-flex align-items-center justify-content-center",onClick:I,children:Object(f.jsx)(T.a,{size:14,className:"spinner"})}),Object(f.jsxs)(W.a,{className:"customizer-content",children:[Object(f.jsxs)("div",{className:"customizer-header px-2 pt-1 pb-0 position-relative",children:[Object(f.jsx)("h4",{className:"mb-0",children:"Theme Customizer"}),Object(f.jsx)("p",{className:"m-0",children:"Customize & Preview in Real Time"}),Object(f.jsx)("a",{href:"/",className:"customizer-close",onClick:I,children:Object(f.jsx)(M.a,{})})]}),Object(f.jsx)("hr",{}),Object(f.jsxs)("div",{className:"px-2",children:[Object(f.jsxs)(P.a,{className:"mb-2",children:[Object(f.jsx)("p",{className:"font-weight-bold",children:"Skin"}),Object(f.jsx)("div",{className:"d-flex",children:function(){var e=[{name:"light",label:"Light",checked:"light"===t},{name:"bordered",label:"Bordered",checked:"bordered"===t},{name:"dark",label:"Dark",checked:"dark"===t},{name:"semi-dark",label:"Semi Dark",checked:"semi-dark"===t}];return e.map((function(t,a){var c=a!==e.length-1;return"HorizontalLayout"===o&&"semi-dark"===t.name?null:Object(f.jsx)(E.a,{type:"radio",id:t.name,label:t.label,checked:t.checked,onChange:function(){return n(t.name)},className:b()({"mr-1":c})},a)}))}()})]}),Object(f.jsxs)(P.a,{className:"mb-2",children:[Object(f.jsx)("p",{className:"font-weight-bold",children:"Content Width"}),Object(f.jsxs)("div",{className:"d-flex",children:[Object(f.jsx)(E.a,{type:"radio",id:"full-width",className:"mr-1",label:"Full Width",checked:"full"===x,onChange:function(){return g("full")}}),Object(f.jsx)(E.a,{type:"radio",id:"boxes",label:"Boxed",checked:"boxed"===x,onChange:function(){return g("boxed")}})]})]}),Object(f.jsx)(P.a,{className:"mb-2",children:Object(f.jsxs)("div",{className:"d-flex",children:[Object(f.jsx)("p",{className:"font-weight-bold mr-auto mb-0",children:"RTL"}),Object(f.jsx)(E.a,{type:"switch",id:"rtl",name:"RTL",checked:a,onChange:function(){return s(!a)}})]})}),Object(f.jsx)(P.a,{className:"mb-2",children:Object(f.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(f.jsx)("p",{className:"font-weight-bold mb-0",children:"Router Transition"}),Object(f.jsx)(A.a,{theme:r.b,className:"react-select",classNamePrefix:"select",defaultValue:H[0],value:D,options:H,isClearable:!1,onChange:function(e){var t=e.value;return w(t)}})]})})]}),Object(f.jsx)("hr",{}),Object(f.jsxs)("div",{className:"px-2",children:[Object(f.jsx)("p",{className:"font-weight-bold",children:"Menu Layout"}),Object(f.jsx)(P.a,{className:"mb-2",children:Object(f.jsxs)("div",{className:"d-flex align-items-center",children:[Object(f.jsx)(E.a,{type:"radio",id:"vertical-layout",label:"Vertical",checked:"VerticalLayout"===o,onChange:function(){return l("vertical")},className:"mr-1"}),Object(f.jsx)(E.a,{type:"radio",id:"horizontal-layout",label:"Horizontal",checked:"HorizontalLayout"===o,onChange:function(){return l("horizontal")}})]})}),"HorizontalLayout"!==o?Object(f.jsx)(P.a,{className:"mb-2",children:Object(f.jsxs)("div",{className:"d-flex align-items-center",children:[Object(f.jsx)("p",{className:"font-weight-bold mr-auto mb-0",children:"Menu Collapsed"}),Object(f.jsx)(E.a,{type:"switch",id:"menu-collapsed",name:"menu-collapsed",checked:y,onChange:function(){return N(!y)}})]})}):null,Object(f.jsx)(P.a,{className:"mb-2",children:Object(f.jsxs)("div",{className:"d-flex align-items-center",children:[Object(f.jsx)("p",{className:"font-weight-bold mr-auto mb-0",children:"Menu Hidden"}),Object(f.jsx)(E.a,{type:"switch",id:"menu-hidden",name:"menu-hidden",checked:v,onChange:function(){return p(!v)}})]})})]}),Object(f.jsx)("hr",{}),Object(f.jsxs)("div",{className:"px-2",children:["HorizontalLayout"!==o?Object(f.jsxs)(P.a,{className:"mb-2",children:[Object(f.jsx)("p",{className:"font-weight-bold",children:"Navbar Color"}),Object(f.jsx)("ul",{className:"list-inline unstyled-list",children:["white","primary","secondary","success","danger","info","warning","dark"].map((function(e){return Object(f.jsx)("li",{className:b()("color-box bg-".concat(e),{selected:h===e,border:"white"===e}),onClick:function(){return O(e)}},e)}))})]}):null,Object(f.jsxs)(P.a,{className:"mb-2",children:[Object(f.jsxs)("p",{className:"font-weight-bold",children:["HorizontalLayout"===o?"Menu":"Navbar"," Type"]}),Object(f.jsx)("div",{className:"d-flex",children:function(){var e=[{name:"floating",label:"Floating",checked:"floating"===u},{name:"sticky",label:"Sticky",checked:"sticky"===u},{name:"static",label:"Static",checked:"static"===u},{name:"hidden",label:"Hidden",checked:"hidden"===u}];return e.map((function(t,n){var a=n!==e.length-1;return"HorizontalLayout"===o&&"hidden"===t.name?null:Object(f.jsx)(E.a,{type:"radio",id:t.name,label:t.label,checked:t.checked,onChange:function(){return d(t.name)},className:b()({"mr-1":a})},n)}))}()})]})]}),Object(f.jsx)("hr",{}),Object(f.jsx)("div",{className:"px-2",children:Object(f.jsxs)(P.a,{className:"mb-2",children:[Object(f.jsx)("p",{className:"font-weight-bold",children:"Footer Type"}),Object(f.jsx)("div",{className:"d-flex",children:function(){var e=[{name:"sticky",label:"Sticky",checked:"sticky"===j},{name:"static",label:"Static",checked:"static"===j},{name:"hidden",label:"Hidden",checked:"hidden"===j}];return e.map((function(t,n){var a=n!==e.length-1;return Object(f.jsx)(E.a,{type:"radio",id:"footer-".concat(t.name),label:t.label,checked:t.checked,onChange:function(){return m(t.name)},className:b()({"mr-1":a})},n)}))}()})]})})]})]})}),R=n(189),F=function(){return Object(f.jsxs)("p",{className:"clearfix mb-0",children:[Object(f.jsxs)("span",{className:"float-md-left d-block d-md-inline-block mt-25",children:["COPYRIGHT \xa9 ",(new Date).getFullYear()," ",Object(f.jsx)("a",{href:"https://1.envato.market/pixinvent_portfolio",target:"_blank",rel:"noopener noreferrer",children:"Pixinvent"}),Object(f.jsx)("span",{className:"d-none d-sm-inline-block",children:", All rights Reserved"})]}),Object(f.jsxs)("span",{className:"float-md-right d-none d-md-block",children:["Hand-crafted & Made with",Object(f.jsx)(R.a,{size:14})]})]})},V=n(66),_=n.n(V),B=n(190),U=["color","className","imgClassName","initials","size","badgeUp","content","icon","badgeColor","badgeText","img","imgHeight","imgWidth","status","tag","contentStyles"],Y=Object(i.forwardRef)((function(e,t){var n,c,i=e.color,r=e.className,s=e.imgClassName,o=e.initials,l=e.size,d=e.badgeUp,j=e.content,m=e.icon,h=e.badgeColor,O=e.badgeText,v=e.img,p=e.imgHeight,x=e.imgWidth,g=e.status,N=e.tag,k=e.contentStyles,w=Object(y.a)(e,U);return Object(f.jsxs)(N,Object(a.a)(Object(a.a)({className:b()("avatar",(n={},Object(u.a)(n,r,r),Object(u.a)(n,"bg-".concat(i),i),Object(u.a)(n,"avatar-".concat(l),l),n)),ref:t},w),{},{children:[!1===v||void 0===v?Object(f.jsxs)("span",{className:b()("avatar-content",{"position-relative":d}),style:k,children:[o?function(e){var t=[];return e.split(" ").forEach((function(e){t.push(e[0])})),t.join("")}(j):j,m||null,d?Object(f.jsx)(B.a,{color:h||"primary",className:"badge-sm badge-up",pill:!0,children:O||"0"}):null]}):Object(f.jsx)("img",{className:b()(Object(u.a)({},s,s)),src:v,alt:"avatarImg",height:p&&!l?p:32,width:x&&!l?x:32}),g?Object(f.jsx)("span",{className:b()((c={},Object(u.a)(c,"avatar-status-".concat(g),g),Object(u.a)(c,"avatar-status-".concat(l),l),c))}):null]}))})),J=Y;Y.defaultProps={tag:"div"};var X=n(191),q=n(218),K=n(219),Q=n(192),Z=n(193),$=n(194),ee=n.p+"static/media/avatar-s-11.1d46cc62.jpg",te=localStorage.getItem("user"),ne=function(){Object(j.b)();var e=Object(p.g)(),t=Object(i.useState)(null),n=Object(c.a)(t,2),a=n[0],s=n[1],o=Object(i.useState)(null),l=Object(c.a)(o,2),u=l[0],d=l[1];Object(i.useEffect)((function(){null!==Object(r.a)()&&s(JSON.parse(localStorage.getItem("userData"))),_.a.post("https://smaalfacentauri.com/apis/sma.php",{act:"getname",token:"euJw4bd65HsXYaOrjM9xBs072usQvngymhb15TS8O1awiS8U3rVFCzv18YrGv5RUAAUjsb7hHX56gYKCDulfsOCs70kVijiWwGcY5VSzam1j8hnIqmE8XxvnRTfUuDhy",nip:te}).then((function(e){e.data.success&&d(e.data.nama)})).catch((function(e){console.log(e)}))}),[]);var b=a&&a.avatar||ee;return Object(f.jsxs)(X.a,{tag:"li",className:"dropdown-user nav-item",children:[Object(f.jsxs)(q.a,{href:"/",tag:"a",className:"nav-link dropdown-user-link",onClick:function(e){return e.preventDefault()},children:[Object(f.jsxs)("div",{className:"user-nav d-sm-flex d-none",children:[Object(f.jsx)("span",{className:"user-name font-weight-bold",children:u}),Object(f.jsx)("span",{className:"user-status",children:a&&a.role||"Admin"})]}),Object(f.jsx)(J,{img:b,imgHeight:"40",imgWidth:"40",status:"online"})]}),Object(f.jsxs)(K.a,{right:!0,children:[Object(f.jsxs)(Q.a,{tag:x.b,to:"#",onClick:function(e){return e.preventDefault()},children:[Object(f.jsx)(Z.a,{size:14,className:"mr-75"}),Object(f.jsx)("span",{className:"align-middle",children:"Profile"})]}),Object(f.jsxs)(Q.a,{tag:x.b,to:"#",onClick:function(e){return e.preventDefault()},children:[Object(f.jsx)(T.a,{size:14,className:"mr-75"}),Object(f.jsx)("span",{className:"align-middle",children:"Settings"})]}),Object(f.jsx)(Q.a,{divider:!0}),Object(f.jsxs)(Q.a,{tag:x.b,onClick:function(){localStorage.removeItem("user"),localStorage.removeItem("pass"),e.push("/")},children:[Object(f.jsx)($.a,{size:14,className:"mr-75"}),Object(f.jsx)("span",{className:"align-middle",children:"Logout"})]})]})]})},ae=n(195),ce=n(196),ie=n(199),re=n(197),se=n(198),oe=function(e){var t=e.skin,n=e.setSkin,a=e.setMenuVisibility,c=function(){return"dark"===t?Object(f.jsx)(ae.a,{className:"ficon",onClick:function(){return n("light")}}):Object(f.jsx)(ce.a,{className:"ficon",onClick:function(){return n("dark")}})};return Object(f.jsxs)(i.Fragment,{children:[Object(f.jsx)("ul",{className:"navbar-nav d-xl-none d-flex align-items-center",children:Object(f.jsx)(re.a,{className:"mobile-menu mr-auto",children:Object(f.jsx)(se.a,{className:"nav-menu-main menu-toggle hidden-xs is-active",onClick:function(){return a(!0)},children:Object(f.jsx)(ie.a,{className:"ficon"})})})}),Object(f.jsx)("div",{className:"bookmark-wrapper d-flex align-items-center",children:Object(f.jsx)(re.a,{className:"d-none d-lg-block",children:Object(f.jsx)(se.a,{className:"nav-link-style",children:Object(f.jsx)(c,{})})})}),Object(f.jsx)("ul",{className:"nav navbar-nav align-items-center ml-auto",children:Object(f.jsx)(ne,{})})]})},le=function(e){var t=e.skin,n=e.setSkin,a=e.setMenuVisibility;return Object(f.jsx)(i.Fragment,{children:Object(f.jsx)(oe,{skin:t,setSkin:n,setMenuVisibility:a})})},ue=n(200),de=n(201),be=n(202),je=n(203),me=[{id:"home",title:"Home",icon:Object(f.jsx)(ue.a,{size:20}),navLink:"/home"},{id:"secondPage",title:"Second Page",icon:Object(f.jsx)(de.a,{size:20}),navLink:"/second-page"},{id:"Siswa",title:"Siswa",icon:Object(f.jsx)(be.a,{size:20}),children:[{id:"data-siswa",title:"Data Siswa",icon:Object(f.jsx)(je.a,{size:12}),navLink:"/siswa/data_siswa"}]}],he=n(204),Oe=function(e){var t=e.menuCollapsed,n=e.setMenuCollapsed,a=e.setMenuVisibility,c=e.setGroupOpen,r=e.menuHover;Object(i.useEffect)((function(){!r&&t&&c([])}),[r,t]);var o=function(){return t?Object(f.jsx)(je.a,{size:20,"data-tour":"toggle-icon",className:"text-primary toggle-icon d-none d-xl-block",onClick:function(){return n(!1)}}):Object(f.jsx)(he.a,{size:20,"data-tour":"toggle-icon",className:"text-primary toggle-icon d-none d-xl-block",onClick:function(){return n(!0)}})};return Object(f.jsx)("div",{className:"navbar-header",children:Object(f.jsxs)("ul",{className:"nav navbar-nav flex-row",children:[Object(f.jsx)("li",{className:"nav-item mr-auto",children:Object(f.jsxs)(x.c,{to:"/",className:"navbar-brand",children:[Object(f.jsx)("span",{className:"brand-logo",children:Object(f.jsx)("img",{src:s.a.app.appLogoImage,alt:"logo"})}),Object(f.jsx)("h2",{className:"brand-text mb-0",children:s.a.app.appName})]})}),Object(f.jsx)("li",{className:"nav-item nav-toggle",children:Object(f.jsxs)("div",{className:"nav-link modern-nav-toggle cursor-pointer",children:[Object(f.jsx)(o,{}),Object(f.jsx)(M.a,{onClick:function(){return a(!1)},className:"toggle-icon icon-x d-block d-xl-none",size:20})]})})]})})},fe=function(e,t,n){return t===e||n&&n.meta&&n.meta.navLink&&n.meta.navLink===e},ve=function e(t,n,a){return t.some((function(t){return t.children?e(t.children,n,a):fe(t.navLink,n,a)}))},pe=function e(t,n,a){var c;return t.some((function(t){var i;return t.children&&(i=e(t.children,n,a))?c={id:t.id,children:i}:fe(t.navLink,n,a)?c={id:t.id}:void 0})),c},xe=function(e,t){var n=[];return function e(a,c){for(var i in a){var r=a[i];void 0!==r&&(r&&"object"===typeof r?e(r,i):i===t&&n.push(r))}}(e),n},ge=function(e){var t=e.item,n=(e.groupActive,e.setGroupActive),c=e.activeItem,r=e.setActiveItem,s=(e.groupOpen,e.setGroupOpen),o=e.toggleActiveGroup,l=e.parentItem,u=e.routerProps,d=e.currentActiveItem,j=t.externalLink?"a":x.c,m=Object(p.h)(),h=m.pathname,O=Object(p.f)(h,{path:"".concat(t.navLink,"/:param"),exact:!0,strict:!1});return Object(i.useEffect)((function(){if(null!==d){r(d);var e=function(e,t){var n=pe(e,t,u);return xe(n,"id")}(me,h);n(Object(N.a)(e))}}),[m]),Object(f.jsx)("li",{className:b()({"nav-item":!t.children,disabled:t.disabled,active:t.navLink===c}),children:Object(f.jsxs)(j,Object(a.a)(Object(a.a)({className:"d-flex align-items-center",target:t.newTab?"_blank":void 0},!0===t.externalLink?{href:t.navLink||"/"}:{to:t.navLink||"/",isActive:function(e,n){if(!e)return!1;e.url&&""!==e.url&&e.url===t.navLink&&(d=t.navLink)}}),{},{onClick:function(e){t.navLink.length||e.preventDefault(),l?function(e){var n=pe(me,e,O);o(t.id,n)}(t.navLink):(n([]),s([]))},children:[t.icon,Object(f.jsx)("span",{className:"menu-item text-truncate",children:t.title}),t.badge&&t.badgeText?Object(f.jsx)(B.a,{className:"ml-auto mr-1",color:t.badge,pill:!0,children:t.badgeText}):null]}))})},ye=n(205),Ne=function(e){var t,n=e.item,a=e.groupActive,c=e.setGroupActive,i=e.activeItem,r=e.setActiveItem,s=e.groupOpen,o=e.setGroupOpen,l=e.parentItem,u=e.menuCollapsed,d=e.menuHover,j=e.routerProps,m=e.currentActiveItem,h=Object(p.h)().pathname,O=function(e,t){var n,i=a;t?(n=xe(t,"id"),i=n):i.includes(e)?i.splice(i.indexOf(e),1):i.push(e);var r=s.filter((function(e){return!i.includes(e)}));o(Object(N.a)(r)),c(Object(N.a)(i))},v=function(e,t){a&&a.includes(t.id)||ve(t.children,h,j)?O(t.id):function(e,t){var n,a=s;t&&(n=xe(t,"id")).pop(),s&&n&&s[0]===n[0]?s.includes(e)?a.splice(a.indexOf(e),1):a.push(e):(a=[],s.includes(e)||a.push(e)),o(Object(N.a)(a))}(t.id,l),e.preventDefault()};return Object(f.jsxs)("li",{className:b()("nav-item has-sub",{open:(t=n.id,u&&d||!1===u?!(!a.includes(t)&&!s.includes(n.id))||void 0:(!a.includes(t)||!u||!1!==d)&&null),"menu-collapsed-open":a.includes(n.id),"sidebar-group-active":a.includes(n.id)||s.includes(n.id)}),children:[Object(f.jsxs)(x.b,{className:"d-flex align-items-center",to:"/",onClick:function(e){return v(e,n)},children:[n.icon,Object(f.jsx)("span",{className:"menu-title text-truncate",children:n.title}),n.badge&&n.badgeText?Object(f.jsx)(B.a,{className:"ml-auto mr-1",color:n.badge,pill:!0,children:n.badgeText}):null]}),Object(f.jsx)("ul",{className:"menu-content",children:Object(f.jsx)(ye.a,{isOpen:a&&a.includes(n.id)||s&&s.includes(n.id),children:Object(f.jsx)(Le,{items:n.children,groupActive:a,setGroupActive:c,groupOpen:s,setGroupOpen:o,toggleActiveGroup:O,parentItem:n,menuCollapsed:u,menuHover:d,routerProps:j,currentActiveItem:m,activeItem:i,setActiveItem:r})})})]})},ke=n(206),we=function(e){var t=e.item;e.index;return Object(f.jsxs)("li",{className:"navigation-header",children:[Object(f.jsx)("span",{children:t.header}),Object(f.jsx)(ke.a,{className:"feather-more-horizontal"})]})},Le=function(e){var t={VerticalNavMenuSectionHeader:we,VerticalNavMenuGroup:Ne,VerticalNavMenuLink:ge};return e.items.map((function(n,c){var i=t[function(e){return e.header?"VerticalNavMenuSectionHeader":e.children?"VerticalNavMenuGroup":"VerticalNavMenuLink"}(n)];return Object(f.jsx)(i,Object(a.a)({item:n},e),n.id||n.header)}))},Ce=function(e){var t=e.menuCollapsed,n=e.routerProps,r=e.menu,s=e.currentActiveItem,o=e.skin,l=Object(i.useState)([]),u=Object(c.a)(l,2),d=u[0],j=u[1],m=Object(i.useState)([]),h=Object(c.a)(m,2),O=h[0],v=h[1],p=Object(i.useState)(null),x=Object(c.a)(p,2),g=x[0],y=x[1],N=Object(i.useState)(!1),k=Object(c.a)(N,2),w=k[0],L=k[1],C=Object(i.useRef)(null);return Object(f.jsx)(i.Fragment,{children:Object(f.jsx)("div",{className:b()("main-menu menu-fixed menu-accordion menu-shadow",{expanded:w||!1===t,"menu-light":"semi-dark"!==o&&"dark"!==o,"menu-dark":"semi-dark"===o||"dark"===o}),onMouseEnter:function(){t&&L(!0)},onMouseLeave:function(){return L(!1)},children:r?r(e):Object(f.jsxs)(i.Fragment,{children:[Object(f.jsx)(Oe,Object(a.a)({setGroupOpen:j,menuHover:w},e)),Object(f.jsx)("div",{className:"shadow-bottom",ref:C}),Object(f.jsx)(W.a,{className:"main-menu-content",options:{wheelPropagation:!1},onScrollY:function(e){return function(e){C&&e.scrollTop>0?C.current.classList.contains("d-block")||C.current.classList.add("d-block"):C.current.classList.contains("d-block")&&C.current.classList.remove("d-block")}(e)},children:Object(f.jsx)("ul",{className:"navigation navigation-main",children:Object(f.jsx)(Le,{items:me,groupActive:O,setGroupActive:v,activeItem:g,setActiveItem:y,groupOpen:d,setGroupOpen:j,routerProps:n,menuCollapsed:t,menuHover:w,currentActiveItem:s})})})]})})})},ze=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.layout.isRTL}));return Object(i.useEffect)((function(){var e=document.getElementsByTagName("html")[0];t?e.setAttribute("dir","rtl"):e.setAttribute("dir","ltr")}),[t]),[t,function(n){try{var a=n instanceof Function?n(t):n;e(function(e){return function(t){return t({type:"HANDLE_RTL",value:e})}}(a))}catch(c){console.log(c)}}]},Se=function(){var e=Object(i.useState)((function(){try{return s.a.layout.navbar.type}catch(e){return console.log(e),s.a.layout.navbar.type}})),t=Object(c.a)(e,2),n=t[0],a=t[1];return[n,function(e){try{var t=e instanceof Function?e(n):e;a(t)}catch(c){console.log(c)}}]},Ie=function(){var e=Object(i.useState)((function(){try{return s.a.layout.footer.type}catch(e){return console.log(e),s.a.layout.footer.type}})),t=Object(c.a)(e,2),n=t[0],a=t[1];return[n,function(e){try{var t=e instanceof Function?e(n):e;a(t)}catch(c){console.log(c)}}]},He=function(){var e=Object(i.useState)((function(){try{return s.a.layout.navbar.backgroundColor}catch(e){return console.log(e),s.a.layout.navbar.backgroundColor}})),t=Object(c.a)(e,2),n=t[0],a=t[1];return[n,function(e){try{var t=e instanceof Function?e(n):e;a(t)}catch(c){console.log(c)}}]},Ae=(n(174),n(175),function(e){var t=e.children,n=e.navbar,r=e.footer,o=e.menu,l=e.routerProps,u=e.currentActiveItem,d=k(),v=Object(c.a)(d,2),x=v[0],g=v[1],y=ze(),N=Object(c.a)(y,2),w=N[0],L=N[1],z=Se(),A=Object(c.a)(z,2),T=A[0],M=A[1],E=Ie(),P=Object(c.a)(E,2),D=P[0],W=P[1],R=He(),V=Object(c.a)(R,2),_=V[0],B=V[1],U=Object(i.useState)(!1),Y=Object(c.a)(U,2),J=Y[0],X=Y[1],q=Object(i.useState)(!1),K=Object(c.a)(q,2),Q=K[0],Z=K[1],$=Object(i.useState)(window.innerWidth),ee=Object(c.a)($,2),te=ee[0],ne=ee[1],ae=Object(j.b)(),ce=Object(j.c)((function(e){return e.layout})),ie=function(){ne(window.innerWidth)},re=Object(p.h)(),se=ce.contentWidth,oe=ce.menuCollapsed,ue=ce.menuHidden,de=function(e){return ae(h(e))};Object(i.useEffect)((function(){Q&&te<1200&&Z(!1)}),[re]),Object(i.useEffect)((function(){void 0!==window&&window.addEventListener("resize",ie)}),[te]),Object(i.useEffect)((function(){return X(!0),function(){return X(!1)}}),[]);var be={static:"footer-static",sticky:"footer-fixed",hidden:"footer-hidden"},je=""!==_&&"light"!==_&&"white"!==_;return J?Object(f.jsxs)("div",Object(a.a)(Object(a.a)({className:b()("wrapper vertical-layout ".concat({floating:"navbar-floating",sticky:"navbar-sticky",static:"navbar-static",hidden:"navbar-hidden"}[T]||"navbar-floating"," ").concat(be[D]||"footer-static"),{"vertical-menu-modern":te>=1200,"menu-collapsed":oe&&te>=1200,"menu-expanded":!oe&&te>1200,"vertical-overlay-menu":te<1200,"menu-hide":!Q&&te<1200,"menu-open":Q&&te<1200})},ue?{"data-col":"1-column"}:{}),{},{children:[ue?null:Object(f.jsx)(Ce,{skin:x,menu:o,menuCollapsed:oe,menuVisibility:Q,setMenuCollapsed:de,setMenuVisibility:Z,routerProps:l,currentActiveItem:u}),Object(f.jsx)(I.a,{expand:"lg",light:"dark"!==x,dark:"dark"===x||je,color:je?_:void 0,className:b()("header-navbar navbar align-items-center ".concat({floating:"floating-nav",sticky:"fixed-top",static:"navbar-static-top",hidden:"d-none"}[T]||"floating-nav"," navbar-shadow")),children:Object(f.jsx)("div",{className:"navbar-container d-flex content",children:n?n({setMenuVisibility:Z,skin:x,setSkin:g}):Object(f.jsx)(le,{setMenuVisibility:Z,skin:x,setSkin:g})})}),t,Object(f.jsx)("div",{className:b()("sidenav-overlay",{show:Q}),onClick:function(){return Z(!1)}}),!0===s.a.layout.customizer?Object(f.jsx)(G,{skin:x,setSkin:g,footerType:D,setFooterType:W,navbarType:T,setNavbarType:M,navbarColor:_,setNavbarColor:B,isRtl:w,setIsRtl:L,layout:e.layout,setLayout:e.setLayout,isHidden:ue,setIsHidden:function(e){return ae(O(e))},contentWidth:se,setContentWidth:function(e){return ae(m(e))},menuCollapsed:oe,setMenuCollapsed:de,transition:e.transition,setTransition:e.setTransition,themeConfig:s.a}):null,Object(f.jsx)("footer",{className:b()("footer footer-light ".concat(be[D]||"footer-static"),{"d-none":"hidden"===D}),children:r?r({footerType:D,footerClasses:be}):Object(f.jsx)(F,{footerType:D,footerClasses:be})}),!0===s.a.layout.scrollTop?Object(f.jsx)("div",{className:"scroll-to-top",children:Object(f.jsx)(S.a,{showUnder:300,style:{bottom:"5%"},children:Object(f.jsx)(H.a,{className:"btn-icon",color:"primary",children:Object(f.jsx)(C.a,{size:14})})})}):null]})):null}),Te=function(e){return Object(f.jsx)(Ae,Object(a.a)(Object(a.a)({},e),{},{children:e.children}))},Me=[{id:"home",title:"Home",icon:Object(f.jsx)(ue.a,{size:20}),navLink:"/home"},{id:"secondPage",title:"Second Page",icon:Object(f.jsx)(de.a,{size:20}),navLink:"/second-page"},{id:"thirdPage",title:"third Page",icon:Object(f.jsx)(de.a,{size:20}),navLink:"/third-page"}],Ee=function(e){var t=e.item,n=e.setOpenDropdown,c=e.setGroupActive,r=e.activeItem,s=e.setActiveItem,o=e.routerProps,l=e.currentActiveItem,u=e.isChild,d=t.externalLink?"a":x.c,j=Object(p.h)(),m=j.pathname;fe(t.navLink,m,o);return Object(i.useEffect)((function(){if(null!==l){s(l);var e=function(e,t){var n=pe(e,t,o),a=xe(n,"id");return a.pop(),a}(Me,m);c(Object(N.a)(e))}}),[j]),Object(f.jsx)("li",{className:b()("nav-item",{active:t.navLink===r,disabled:t.disabled}),onClick:function(){return n([])},children:Object(f.jsxs)(d,Object(a.a)(Object(a.a)({className:b()("d-flex align-items-center",{"dropdown-item":u,"nav-link":!u}),tag:d,target:t.newTab?"_blank":void 0},!0===t.externalLink?{href:t.navLink||"/"}:{to:t.navLink||"/",isActive:function(e,n){if(!e)return!1;e.url&&""!==e.url&&e.url===t.navLink&&(l=t.navLink)}}),{},{children:[t.icon,Object(f.jsx)("span",{children:t.title})]}))})},Pe=n(146),De=function(e){var t=e.item,n=e.submenu,c=e.groupActive,i=e.onMouseEnter,r=e.onMouseLeave,s=e.openDropdown,o=e.setGroupActive,l=e.activeItem,u=e.setActiveItem,d=e.routerProps,j=e.setOpenDropdown,m=e.currentActiveItem,h=Object(p.h)().pathname,O={setMaxHeight:{enabled:!0,fn:function(e){var t,n=window.innerHeight,c=e.instance.reference.getBoundingClientRect().top;n-c-e.popper.height-28<1&&(t={maxHeight:n-c-25,overflowY:"auto"});var i=e.instance.popper.getBoundingClientRect();return i.left+i.width-(window.innerWidth-16)>=0&&e.instance.popper.closest(".dropdown").classList.add("openLeft"),Object(a.a)(Object(a.a)({},e),{},{styles:Object(a.a)({},t)})}}};return Object(f.jsxs)(Pe.a,{tag:"li",className:b()({"nav-item":!1===n,"dropdown-submenu":!0===n,"sidebar-group-active active":ve(t.children,h,d)||c.includes(t.id)}),isOpen:s.includes(t.id),toggle:function(){return i(t.id)},onMouseEnter:function(){return i(t.id)},onMouseLeave:function(){return r(t.id)},children:[Object(f.jsxs)(q.a,{to:"/",tag:x.b,className:b()("dropdown-toggle d-flex align-items-center",{"dropdown-item":!0===n,"nav-link":!1===n}),onClick:function(e){return e.preventDefault()},children:[t.icon,Object(f.jsx)("span",{children:t.title})]}),Object(f.jsx)(K.a,{tag:"ul",modifiers:O,children:Object(f.jsx)(We,{submenu:!0,parentItem:t,items:t.children,activeItem:l,groupActive:c,routerProps:d,openDropdown:s,onMouseEnter:i,onMouseLeave:r,setActiveItem:u,setGroupActive:o,isChild:!0,setOpenDropdown:j,currentActiveItem:m})})]})},We=function(e){var t={HorizontalNavMenuGroup:De,HorizontalNavMenuLink:Ee};return e.items.map((function(n,c){var i=t[function(e){return e.children?"HorizontalNavMenuGroup":"HorizontalNavMenuLink"}(n)];return Object(f.jsx)(i,Object(a.a)({item:n,index:c},e),n.id)}))},Ge=function(e){var t=e.currentActiveItem,n=e.routerProps,a=Object(i.useState)(null),r=Object(c.a)(a,2),s=r[0],o=r[1],l=Object(i.useState)([]),u=Object(c.a)(l,2),d=u[0],b=u[1],j=Object(i.useState)([]),m=Object(c.a)(j,2),h=m[0],O=m[1];return Object(f.jsx)("div",{className:"navbar-container main-menu-content",children:Object(f.jsx)("ul",{className:"nav navbar-nav",id:"main-menu-navigation",children:Object(f.jsx)(We,{submenu:!1,items:Me,activeItem:s,groupActive:d,routerProps:n,onMouseEnter:function(e){var t=h;t.push(e),O(Object(N.a)(t))},onMouseLeave:function(e){var t=h;t.splice(t.indexOf(e),1),O(Object(N.a)(t))},openDropdown:h,setActiveItem:o,setGroupActive:b,setOpenDropdown:O,currentActiveItem:t})})})},Re=(n(176),function(e){var t,n=e.children,r=e.navbar,o=e.footer,l=e.menu,d=e.currentActiveItem,h=e.routerProps,v=k(),p=Object(c.a)(v,2),g=p[0],y=p[1],N=ze(),w=Object(c.a)(N,2),L=w[0],z=w[1],A=Se(),T=Object(c.a)(A,2),M=T[0],E=T[1],P=Ie(),D=Object(c.a)(P,2),W=D[0],R=D[1],V=He(),_=Object(c.a)(V,2),B=_[0],U=_[1],Y=Object(i.useState)(!1),J=Object(c.a)(Y,2),X=J[0],q=J[1],K=Object(i.useState)(!1),Q=Object(c.a)(K,2),Z=Q[0],$=Q[1],ee=Object(j.b)(),te=Object(j.c)((function(e){return e.layout})),ne=te.contentWidth,ae=te.menuHidden;Object(i.useEffect)((function(){return q(!0),window.addEventListener("scroll",(function(){window.pageYOffset>65&&!1===Z&&$(!0),window.pageYOffset<65&&$(!1)})),function(){return q(!1),void $(!1)}}),[]);var ce={static:"footer-static",sticky:"footer-fixed",hidden:"footer-hidden"},ie={floating:"floating-nav",sticky:"fixed-top"},se=""!==B&&"light"!==B&&"white"!==B;return X?Object(f.jsxs)("div",Object(a.a)(Object(a.a)({className:b()("wrapper horizontal-layout horizontal-menu ".concat({floating:"navbar-floating",sticky:"navbar-sticky",static:"navbar-static"}[M]||"navbar-floating"," ").concat(ce[W]||"footer-static"," menu-expanded"))},ae?{"data-col":"1-column"}:{}),{},{children:[Object(f.jsxs)(I.a,{expand:"lg",className:b()("header-navbar navbar-fixed align-items-center navbar-shadow navbar-brand-center",{"navbar-scrolled":Z}),children:[!r&&Object(f.jsx)("div",{className:"navbar-header d-xl-block d-none",children:Object(f.jsx)("ul",{className:"nav navbar-nav",children:Object(f.jsx)(re.a,{children:Object(f.jsxs)(x.b,{to:"/",className:"navbar-brand",children:[Object(f.jsx)("span",{className:"brand-logo",children:Object(f.jsx)("img",{src:s.a.app.appLogoImage,alt:"logo"})}),Object(f.jsx)("h2",{className:"brand-text mb-0",children:s.a.app.appName})]})})})}),Object(f.jsx)("div",{className:"navbar-container d-flex content",children:r?r({skin:g,setSkin:y}):Object(f.jsx)(le,{skin:g,setSkin:y})})]}),ae?null:Object(f.jsx)("div",{className:"horizontal-menu-wrapper",children:Object(f.jsx)(I.a,{tag:"div",expand:"sm",light:"dark"!==g,dark:"dark"===g||se,className:b()("header-navbar navbar-horizontal navbar-shadow menu-border",(t={},Object(u.a)(t,ie[M],"static"!==M),Object(u.a)(t,"floating-nav",!ie[M]&&"static"!==M||"floating"===M),t)),children:l?l({routerProps:h,currentActiveItem:d}):Object(f.jsx)(Ge,{routerProps:h,currentActiveItem:d})})}),n,!0===s.a.layout.customizer?Object(f.jsx)(G,{skin:g,setSkin:y,footerType:W,setFooterType:R,navbarType:M,setNavbarType:E,navbarColor:B,setNavbarColor:U,isRtl:L,setIsRtl:z,layout:e.layout,setLayout:e.setLayout,isHidden:ae,setIsHidden:function(e){return ee(O(e))},contentWidth:ne,setContentWidth:function(e){return ee(m(e))},transition:e.transition,setTransition:e.setTransition,themeConfig:s.a}):null,Object(f.jsx)("footer",{className:b()("footer footer-light ".concat(ce[W]||"footer-static"),{"d-none":"hidden"===W}),children:o?o({footerType:W,footerClasses:ce}):Object(f.jsx)(F,{footerType:W,footerClasses:ce})}),!0===s.a.layout.scrollTop?Object(f.jsx)("div",{className:"scroll-to-top",children:Object(f.jsx)(S.a,{showUnder:300,style:{bottom:"5%"},children:Object(f.jsx)(H.a,{className:"btn-icon",color:"primary",children:Object(f.jsx)(C.a,{size:14})})})}):null]})):null}),Fe=function(e){return Object(f.jsx)(Re,Object(a.a)(Object(a.a)({},e),{},{children:e.children}))},Ve=function(){var e=function(){var e=Object(i.useState)(null),t=Object(c.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)((function(){try{return s.a.layout.type}catch(e){return console.log(e),s.a.layout.type}})),o=Object(c.a)(r,2),l=o[0],u=o[1],d=function(){"horizontal"===l&&window.innerWidth<=1200&&(u("vertical"),a("horizontal")),"horizontal"===n&&window.innerWidth>=1200&&u("horizontal")};return Object(i.useEffect)((function(){d()}),[]),Object(i.useEffect)((function(){window.addEventListener("resize",d)}),[l,n]),[l,function(e){try{var t=e instanceof Function?e(l):e;u(t)}catch(n){console.log(n)}}]}(),t=Object(c.a)(e,2),r=t[0],o=t[1],u=function(){var e=Object(i.useState)((function(){try{return s.a.layout.routerTransition}catch(e){return console.log(e),s.a.layout.routerTransition}})),t=Object(c.a)(e,2),n=t[0],a=t[1];return[n,function(e){try{var t=e instanceof Function?e(n):e;a(t)}catch(c){console.log(c)}}]}(),d=Object(c.a)(u,2),b=d[0],j=d[1],m=(Object(i.useContext)(l),"horizontal"===r?"HorizontalLayout":"VerticalLayout"),h={BlankLayout:L,VerticalLayout:Te,HorizontalLayout:Fe},O=Object(i.lazy)((function(){return n.e(11).then(n.bind(null,220))})),y=Object(i.lazy)((function(){return n.e(0).then(n.bind(null,221))}));return Object(f.jsx)(x.a,{basename:"https://hildanmarief.github.io/coba/",children:Object(f.jsxs)(p.d,{children:[Object(f.jsx)(p.b,{exact:!0,path:"/",render:function(){return Object(f.jsx)(p.a,{to:"/"})}}),Object(f.jsx)(p.b,{exact:!0,path:"/not-authorized",render:function(e){return Object(f.jsx)(h.BlankLayout,{children:Object(f.jsx)(O,{})})}}),Object.keys(h).map((function(e,t){var n=h[e],c=function(e){var t=[],n=[];return g&&g.filter((function(a){(a.layout===e||void 0===a.layout&&m===e)&&(t.push(a),n.push(a.path))})),{LayoutRoutes:t,LayoutPaths:n}}(e),r=c.LayoutRoutes,s=c.LayoutPaths,l={};return Object(f.jsx)(p.b,{path:s,children:Object(f.jsx)(n,{routerProps:l,layout:e,setLayout:o,transition:b,setTransition:j,currentActiveItem:null,children:Object(f.jsx)(p.d,{children:r.map((function(e){return Object(f.jsx)(p.b,{path:e.path,exact:!0===e.exact,render:function(t){return Object.assign(l,Object(a.a)(Object(a.a)({},t),{},{meta:e.meta})),Object(f.jsx)(i.Suspense,{fallback:null,children:Object(f.jsx)(v,Object(a.a)(Object(a.a)(Object(a.a)(Object(a.a)({layout:m,transition:b,setTransition:j},e.appLayout?{appLayout:e.appLayout}:{}),e.meta?{routeMeta:e.meta}:{}),e.className?{wrapperClass:e.className}:{}),{},{children:Object(f.jsx)(e.component,Object(a.a)({},t))}))})}},e.path)}))})})},t)})),Object(f.jsx)(p.b,{path:"*",component:y}),"/"]})})};t.default=function(e){return Object(f.jsx)(Ve,{})}},60:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i}));var a=n(2),c=function(){return localStorage.getItem("userData")},i=function(e){return Object(a.a)(Object(a.a)({},e),{},{colors:Object(a.a)(Object(a.a)({},e.colors),{},{primary25:"#7367f01a",primary:"#7367f0",neutral10:"#7367f0",neutral20:"#ededed",neutral30:"#ededed"})})}}}]);
//# sourceMappingURL=6.9a6359ef.chunk.js.map