(this.webpackJsonptryorder=this.webpackJsonptryorder||[]).push([[0],{114:function(e,c,t){},116:function(e,c,t){"use strict";t.r(c);var s=t(0),a=t(14),n=t.n(a),r=t(36),i=t(135),j=t(132),l=t(134),b=t(1);var d=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(i.a,{bg:"primary",variant:"dark",children:Object(b.jsxs)(j.a,{children:[Object(b.jsxs)(i.a.Brand,{href:"#home",children:[" ",Object(b.jsx)("i",{className:"fas fa-utensils",style:{marginRight:"15px"}}),Object(b.jsx)("label",{children:Object(b.jsx)("b",{children:"Food's Resturant"})})]}),Object(b.jsx)(l.a,{className:"me-auto"})]})}),Object(b.jsxs)("div",{style:{marginTop:"25vh",justifyContent:"center",textAlign:"center"},children:[Object(b.jsxs)("b",{children:[Object(b.jsx)("h2",{children:"Welcom to Food's"}),Object(b.jsx)("h2",{children:"Kitchen"})]}),Object(b.jsx)("br",{}),Object(b.jsx)(r.b,{className:"btn btn-outline-light btn-lg",role:"button",to:"/Menu",style:{backgroundColor:"blue",color:"white",font:"bold",textDecoration:"none"},children:"GO TO MENU"})]})]})},o=t(6),O=t(3),h=t(13),x=t(136),m=t(66),u=t.n(m),p=t(67),g=t.n(p),f=[{id:1,name:"Hamburger",price:"200",image:"./assets/burger.jpeg"},{id:2,name:"Fries",price:"100",image:"./assets/fries.jpeg"},{id:3,name:"Coke",price:"50",image:"./assets/coke.jpeg"},{id:4,name:"Pepsi",price:"50",image:"./assets/pepsi.jpeg"}],v=t(133),y=t(10),N=function(){var e=Object(s.useState)({}),c=Object(h.a)(e,2),t=c[0],a=c[1],n=Object(s.useState)(!1),r=Object(h.a)(n,2),l=r[0],d=r[1],m=Object(y.f)(),p=function(){return d(!1)},N=function(e,c){if(t[e]){var s=t[e];s++,a(Object(O.a)(Object(O.a)({},t),{},Object(o.a)({},e,s)))}else a(Object(O.a)(Object(O.a)({},t),{},Object(o.a)({},e,1)))},k=function(e,c){if(t[e]){var s=t[e];s--,a(Object(O.a)(Object(O.a)({},t),{},Object(o.a)({},e,s)))}else 0!==t[e]&&a(Object(O.a)(Object(O.a)({},t),{},Object(o.a)({},e,1)))};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(i.a,{bg:"primary",variant:"dark",children:Object(b.jsxs)(j.a,{children:[Object(b.jsxs)(i.a.Brand,{href:"#home",children:[" ",Object(b.jsx)("i",{className:"fas fa-utensils",style:{marginRight:"15px"}}),Object(b.jsx)("label",{children:Object(b.jsx)("b",{children:"Food's Resturant"})})]}),Object(b.jsxs)("form",{className:"d-flex",children:[Object(b.jsx)("span",{children:Object.keys(t).length>0?Object(b.jsx)("i",{className:"fas fa-shopping-cart",onClick:function(){return d(!0)}}):null}),Object(b.jsx)("span",{className:"badge bg-dark text-white ms-1 rounded-pill",children:Object.keys(t).length>0?Object.keys(t).length:null})]})]})}),Object(b.jsx)("div",{className:"row ",children:f.map((function(e,c){var s=e.name,a=e.price;return Object(b.jsx)("div",{className:"col-lg-3 offset-1 col-md-6 col-sm-12 my-3",children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("img",{src:e.image,alt:"random",className:"card-img"}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h2",{className:"card-title",children:s}),Object(b.jsxs)("p",{className:"card-text",children:["Price: ",a]}),t[s]>0?Object(b.jsxs)("p",{children:["Total : ",t[s]]}):null,t[s]>0?Object(b.jsxs)("p",{children:["Cost (INR):",t[s]?t[s]*a:null," "]}):null,Object(b.jsx)(x.a,{variant:"contained",color:"primary",onClick:function(){N(s)},children:Object(b.jsx)(u.a,{})}),Object(b.jsx)(x.a,{variant:"contained",style:{marginLeft:"10px"},onClick:function(){k(s)},children:Object(b.jsx)(g.a,{})})]})]})},c)}))}),Object(b.jsxs)(v.a,{show:l,onHide:p,children:[Object(b.jsxs)(v.a.Body,{children:[Object(b.jsx)(v.a.Title,{children:"Order Summary "}),Object.keys(t).length>0?Object(b.jsx)("div",{className:"row ",children:f.map((function(e,c){var s=e.name,a=e.price;return Object(b.jsx)("div",{className:"col-12",children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("img",{src:e.image,alt:"random",className:"card-img"}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h2",{className:"card-title",children:s}),Object(b.jsxs)("p",{className:"card-text",children:["Price: ",a]}),t[s]>0?Object(b.jsxs)("p",{children:["Total : ",t[s]]}):null,t[s]>0?Object(b.jsxs)("p",{children:["Cost (INR):",t[s]?t[s]*a:null," "]}):null,Object(b.jsx)(x.a,{variant:"contained",color:"primary",onClick:function(){N(s)},children:Object(b.jsx)(u.a,{})}),Object(b.jsx)(x.a,{variant:"contained",style:{marginLeft:"10px"},onClick:function(){k(s)},children:Object(b.jsx)(g.a,{})})]})]})},c)}))}):null,"        "]}),Object(b.jsxs)(v.a.Footer,{children:[Object(b.jsx)(x.a,{variant:"contained",className:"offset-1",color:"primary",onClick:function(){m.push("/checkout")},children:"Place Order"}),"\xa0\xa0",Object(b.jsx)(x.a,{variant:"contained",className:"offset-1",color:"secondary",onClick:p,children:"Cancel"})]})]})]})};var k=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(i.a,{bg:"primary",variant:"dark",children:Object(b.jsxs)(j.a,{children:[Object(b.jsxs)(i.a.Brand,{href:"#home",children:[" ",Object(b.jsx)("i",{className:"fas fa-utensils",style:{marginRight:"15px"}}),Object(b.jsx)("label",{children:Object(b.jsx)("b",{children:"Food's Resturant"})})]}),Object(b.jsx)(l.a,{className:"me-auto"})]})}),Object(b.jsx)("div",{className:"containar",style:{position:"relative"},children:Object(b.jsx)("div",{className:"row",style:{justifyContent:"center",alignItems:"center",marginTop:"35vh"},children:Object(b.jsxs)("div",{className:"col-10",style:{backgroundColor:"#DFE6E3",height:"100px",textAlign:"center"},children:[Object(b.jsx)("h2",{children:"Checkout"}),Object(b.jsx)("p",{style:{textAlign:"left"},children:"Thank you for order"})]})})})]})},C=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(y.c,{children:[Object(b.jsx)(y.a,{exact:!0,path:"/Reactliveapp",component:d}),Object(b.jsx)(y.a,{exact:!0,path:"/menu",component:N}),Object(b.jsx)(y.a,{exact:!0,path:"/checkout",component:k})]})})};t(73),t(93),t(114);n.a.render(Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(r.a,{children:Object(b.jsx)(C,{})})}),document.getElementById("root"))}},[[116,1,2]]]);
//# sourceMappingURL=main.b955457f.chunk.js.map