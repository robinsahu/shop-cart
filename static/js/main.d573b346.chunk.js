(this["webpackJsonpshop-cart"]=this["webpackJsonpshop-cart"]||[]).push([[0],{64:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var r=n(7),a=n.n(r),c=n(43),i=n.n(c),s=n(0),l=n.n(s),o=n(14),u=n(2),d=n(1),p=n(3),b=n(11),m=n(12),h=(n(64),n(20)),j=n(19),g=n(18),O=(n(69),n(34)),f=(n(70),Object(g.a)([function(e){return e.directory}],(function(e){return e.sections}))),v=(n(71),n(6)),x=Object(h.g)((function(e){var t=e.title,n=e.imageUrl,r=e.size,a=e.history,c=e.linkUrl,i=e.match;return Object(v.jsxs)("div",{className:"".concat(r," menu-item"),onClick:function(){return a.push("".concat(i.url).concat(c))},children:[Object(v.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(v.jsxs)("div",{className:"content",children:[Object(v.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(v.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})})),y=["id"],w=Object(g.b)({sections:f}),k=Object(j.b)(w)((function(e){var t=e.sections;return Object(v.jsx)("div",{className:"directory-menu",children:t.map((function(e){var t=e.id,n=Object(O.a)(e,y);return Object(v.jsx)(x,Object(o.a)({},n),t)}))})})),N=function(){return Object(v.jsx)("div",{className:"homepage",children:Object(v.jsx)(k,{})})},E=(n(74),{TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART"}),C=function(){return{type:E.TOGGLE_CART_HIDDEN}},I=function(e){return{type:E.ADD_ITEM,payload:e}},U=(n(75),n(76),["children","isGoogleSignIn","inverted"]),S=function(e){var t=e.children,n=e.isGoogleSignIn,r=e.inverted,a=Object(O.a)(e,U);return Object(v.jsx)("button",Object(o.a)(Object(o.a)({className:"".concat(r?"inverted":""," ").concat(n?"google-sign-in":""," custom-button")},a),{},{children:t}))},T=Object(j.b)(null,(function(e){return{addItem:function(t){return e(I(t))}}}))((function(e){var t=e.item,n=e.addItem,r=t.name,a=t.price,c=t.imageUrl;return Object(v.jsxs)("div",{className:"collection-item",children:[Object(v.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(c,")")}}),Object(v.jsxs)("div",{className:"collection-footer",children:[Object(v.jsx)("span",{className:"name",children:r}),Object(v.jsxs)("span",{className:"price",children:["\u20b9",a]})]}),Object(v.jsx)(S,{onClick:function(){return n(t)},inverted:!0,children:"Add to cart"})]})})),A=function(e){var t=e.title,n=e.items;return Object(v.jsxs)("div",{className:"collection-preview",children:[Object(v.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(v.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(v.jsx)(T,{item:e},e.id)}))})]})},M=Object(g.a)([function(e){return e.shop}],(function(e){return e.collections})),P=Object(g.a)([M],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),R=(n(77),["id"]),B=Object(g.b)({collections:P}),_=Object(j.b)(B)((function(e){var t=e.collections;return Object(v.jsx)("div",{className:"collections-overview",children:t.map((function(e){var t=e.id,n=Object(O.a)(e,R);return Object(v.jsx)(A,Object(o.a)({},n),t)}))})})),D=(n(78),Object(j.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(g.a)([M],(function(e){return e[n]})))(e)};var n}))((function(e){var t=e.collection,n=t.title,r=t.items;return Object(v.jsxs)("div",{className:"collection-page",children:[Object(v.jsx)("h2",{className:"title",children:n}),Object(v.jsx)("div",{className:"items",children:r.map((function(e){return Object(v.jsx)(T,{item:e},e.id)}))})]})}))),G=function(e){var t=e.match;return Object(v.jsxs)("div",{className:"shop-page",children:[Object(v.jsx)(h.b,{exact:!0,path:"".concat(t.path),component:_}),Object(v.jsx)(h.b,{path:"".concat(t.path,"/:collectionId"),component:D})]})},q=n(30),W=n(39);n(97),n(80);W.a.initializeApp({apiKey:"AIzaSyBu44VoXajX4YgACy5KhKXHi9aLAtE6MkI",authDomain:"shop-cart-db-83b88.firebaseapp.com",projectId:"shop-cart-db-83b88",storageBucket:"shop-cart-db-83b88.appspot.com",messagingSenderId:"834681666845",appId:"1:834681666845:web:1d49b7652ef437479775f4",measurementId:"G-QW3CQZY7C8"});var L=function(){var e=Object(u.a)(l.a.mark((function e(t,n){var r,a,c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=H.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return a=t.displayName,c=t.email,i=new Date,e.prev=9,e.next=12,r.set(Object(o.a)({displayName:a,email:c,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}(),V=W.a.auth(),H=W.a.firestore(),J=new W.a.auth.GoogleAuthProvider;J.setCustomParameters({prompt:"select_account"});var z,F,K=function(){V.signInWithPopup(J).then((function(e){console.log(e.user)})).catch((function(e){console.log(e.message)}))},Q=(W.a,["title","titleId"]);function X(){return X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},X.apply(this,arguments)}function Y(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Z(e,t){var n=e.title,a=e.titleId,c=Y(e,Q);return r.createElement("svg",X({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":a},c),void 0===n?r.createElement("title",{id:a},"Group"):n?r.createElement("title",{id:a},n):null,z||(z=r.createElement("desc",null,"Created with Sketch.")),F||(F=r.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))))))}var $,ee,te,ne,re,ae,ce,ie,se,le,oe,ue,de,pe,be,me=r.forwardRef(Z),he=(n.p,["title","titleId"]);function je(){return je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},je.apply(this,arguments)}function ge(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Oe(e,t){var n=e.title,a=e.titleId,c=ge(e,he);return r.createElement("svg",je({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,r.createElement("g",null,r.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),$||($=r.createElement("g",null)),ee||(ee=r.createElement("g",null)),te||(te=r.createElement("g",null)),ne||(ne=r.createElement("g",null)),re||(re=r.createElement("g",null)),ae||(ae=r.createElement("g",null)),ce||(ce=r.createElement("g",null)),ie||(ie=r.createElement("g",null)),se||(se=r.createElement("g",null)),le||(le=r.createElement("g",null)),oe||(oe=r.createElement("g",null)),ue||(ue=r.createElement("g",null)),de||(de=r.createElement("g",null)),pe||(pe=r.createElement("g",null)),be||(be=r.createElement("g",null)))}var fe=r.forwardRef(Oe),ve=(n.p,function(e){return e.cart}),xe=Object(g.a)([ve],(function(e){return e.cartItems})),ye=Object(g.a)([ve],(function(e){return e.hidden})),we=Object(g.a)([xe],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),ke=Object(g.a)([xe],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),Ne=(n(82),Object(j.b)((function(e){return{itemCount:we(e)}}),(function(e){return{toggleCartHidden:function(){return e(C())}}}))((function(e){return Object(v.jsxs)("div",{className:"cart-icon",onClick:e.toggleCartHidden,children:[Object(v.jsx)(fe,{className:"shopping-icon"}),Object(v.jsx)("span",{className:"item-count",children:e.itemCount})]})}))),Ee=(n(83),n(84),function(e){var t=e.item,n=t.imageUrl,r=t.price,a=t.name,c=t.quantity;return Object(v.jsxs)("div",{className:"cart-item",children:[Object(v.jsx)("img",{src:n,alt:"item"}),Object(v.jsxs)("div",{className:"item-details",children:[Object(v.jsx)("span",{className:"name",children:a}),Object(v.jsxs)("span",{className:"price",children:[c," x \u20b9",r]})]})]})}),Ce=Object(h.g)(Object(j.b)((function(e){return{cartItems:xe(e)}}))((function(e){var t=e.cartItems,n=e.history,r=e.dispatch;return Object(v.jsxs)("div",{className:"cart-dropdown",children:[Object(v.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(v.jsx)(Ee,{item:e},e.id)})):Object(v.jsx)("span",{className:"empty-message",children:"Your cart is empty"})}),Object(v.jsx)(S,{onClick:function(){n.push("/checkout"),r(C())},children:"GO TO CHECKOUT"})]})}))),Ie=Object(g.a)([function(e){return e.user}],(function(e){return e.currentUser})),Ue=(n(85),Object(g.b)({currentUser:Ie,hidden:ye})),Se=Object(j.b)(Ue)((function(e){return Object(v.jsxs)("div",{className:"header",children:[Object(v.jsx)(q.b,{className:"logo-container",to:"/",children:Object(v.jsx)(me,{className:"logo"})}),Object(v.jsxs)("div",{className:"options",children:[Object(v.jsx)(q.b,{className:"option",to:"/shop",children:"SHOP"}),Object(v.jsx)(q.b,{className:"option",to:"/shop",children:"CONTACT"}),e.currentUser?Object(v.jsx)("div",{className:"option",onClick:function(){return V.signOut()},children:"SIGN OUT"}):Object(v.jsx)(q.b,{className:"option",to:"/signin",children:"SIGN IN"}),Object(v.jsx)(Ne,{})]}),e.hidden?null:Object(v.jsx)(Ce,{})]})})),Te=(n(86),Object(j.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:E.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(I(t))},removeItem:function(t){return e(function(e){return{type:E.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,r=e.addItem,a=e.removeItem,c=t.name,i=t.imageUrl,s=t.price,l=t.quantity;return Object(v.jsxs)("div",{className:"checkout-item",children:[Object(v.jsx)("div",{className:"image-container",children:Object(v.jsx)("img",{src:i,alt:"item"})}),Object(v.jsx)("span",{className:"name",children:c}),Object(v.jsxs)("span",{className:"quantity",children:[Object(v.jsx)("div",{className:"arrow",onClick:function(){return a(t)},children:"\u276e"}),Object(v.jsx)("span",{className:"value",children:l}),Object(v.jsx)("div",{className:"arrow",onClick:function(){return r(t)},children:"\u276f"})]}),Object(v.jsx)("span",{className:"price",children:s}),Object(v.jsx)("div",{className:"remove-button",onClick:function(){return n(t)},children:"\u2715"})]})}))),Ae=n(56),Me=n.n(Ae),Pe=function(e){var t=e.price,n=10*t;return Object(v.jsx)(Me.a,{label:"Pay Now",name:"Shop-Cart Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is \u20b9".concat(t),amount:n,panelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Succesful!")},stripeKey:"pk_test_51K2JXQSCCuuPxn6dA2tM0SllgMwPcD4zthWm1uMxpiCAbIqLNjdp0M2Gu6GJTVp3rhwf0PyxoxKQyqeqoVERA1mz00jN6q78Qq"})},Re=(n(87),Object(g.b)({cartItems:xe,total:ke})),Be=Object(j.b)(Re)((function(e){var t=e.cartItems,n=e.total;return Object(v.jsxs)("div",{className:"checkout-page",children:[Object(v.jsxs)("div",{className:"checkout-header",children:[Object(v.jsx)("div",{className:"header-block",children:Object(v.jsx)("span",{children:"Product"})}),Object(v.jsx)("div",{className:"header-block",children:Object(v.jsx)("span",{children:"Description"})}),Object(v.jsx)("div",{className:"header-block",children:Object(v.jsx)("span",{children:"Quantity"})}),Object(v.jsx)("div",{className:"header-block",children:Object(v.jsx)("span",{children:"Price"})}),Object(v.jsx)("div",{className:"header-block",children:Object(v.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object(v.jsx)(Te,{cartItem:e},e.id)})),Object(v.jsxs)("div",{className:"total",children:["TOTAL: \u20b9",n]}),Object(v.jsxs)("div",{className:"test-warning",children:["*Please use the following test credit card for payments*",Object(v.jsx)("br",{}),"4242 4242 4242 4242 - Exp: 01/24 - CVV: 123"]}),Object(v.jsx)(Pe,{price:n})]})})),_e=n(4),De=(n(88),n(89),["handleChange","label"]),Ge=function(e){var t=e.handleChange,n=e.label,r=Object(O.a)(e,De);return Object(v.jsxs)("div",{className:"group",children:[Object(v.jsx)("input",Object(o.a)({className:"form-input",onChange:t},r)),n?Object(v.jsx)("label",{className:"".concat(r.value.length?"shrink":""," form-input-label"),children:n}):null]})},qe=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).handleSubmit=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=r.state,a=n.email,c=n.password,e.prev=2,e.next=5,V.signInWithEmailAndPassword(a,c);case 5:r.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),r.handleChange=function(e){var t=e.target,n=t.value,a=t.name;r.setState(Object(_e.a)({},a,n))},r.state={email:"",password:""},r}return Object(p.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("div",{className:"sign-in",children:[Object(v.jsx)("h2",{className:"title",children:"I already have an account"}),Object(v.jsx)("span",{children:"Sign in with your email and password"}),Object(v.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(v.jsx)(Ge,{name:"email",type:"email",handleChange:this.handleChange,value:this.state.email,label:"email",required:!0}),Object(v.jsx)(Ge,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),Object(v.jsxs)("div",{className:"buttons",children:[Object(v.jsx)(S,{type:"submit",children:"Sign In"}),Object(v.jsx)(S,{onClick:K,isGoogleSignIn:!0,children:"Sign In With Google"})]})]})]})}}]),n}(a.a.Component),We=qe,Le=(n(90),function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(u.a)(l.a.mark((function t(n){var r,a,c,i,s,o,u;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,a=r.displayName,c=r.email,i=r.password,s=r.confirmPassword,i===s){t.next=5;break}return alert("passwords don't match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,V.createUserWithEmailAndPassword(c,i);case 8:return o=t.sent,u=o.user,t.next=12,L(u,{displayName:a});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,r=n.name,a=n.value;e.setState(Object(_e.a)({},r,a))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,r=e.password,a=e.confirmPassword;return Object(v.jsxs)("div",{className:"sign-up",children:[Object(v.jsx)("h2",{className:"title",children:"I do not have a account"}),Object(v.jsx)("span",{children:"Sign up with your email and password"}),Object(v.jsxs)("form",{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object(v.jsx)(Ge,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),Object(v.jsx)(Ge,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),Object(v.jsx)(Ge,{type:"password",name:"password",value:r,onChange:this.handleChange,label:"Password",required:!0}),Object(v.jsx)(Ge,{type:"password",name:"confirmPassword",value:a,onChange:this.handleChange,label:"Confirm Password",required:!0}),Object(v.jsx)(S,{type:"submit",children:"SIGN UP"})]})]})}}]),n}(a.a.Component)),Ve=Le,He=(n(91),function(){return Object(v.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object(v.jsx)(We,{}),Object(v.jsx)(Ve,{})]})}),Je="SET_CURRENT_USER",ze=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).unSubscribeFromOauth=null,e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=V.onAuthStateChanged(function(){var t=Object(u.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=5;break}return t.next=3,L(n);case 3:t.sent.onSnapshot((function(t){e(Object(o.a)({id:t.id},t.data()))}));case 5:e(n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unSubscribeFromOauth()}},{key:"render",value:function(){var e=this;return Object(v.jsxs)("div",{children:[Object(v.jsx)(Se,{}),Object(v.jsxs)(h.d,{children:[Object(v.jsx)(h.b,{exact:!0,path:"/",component:N}),Object(v.jsx)(h.b,{path:"/shop",component:G}),Object(v.jsx)(h.b,{exact:!0,path:"/checkout",component:Be}),Object(v.jsx)(h.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?Object(v.jsx)(h.a,{to:"/"}):Object(v.jsx)(He,{})}})]})]})}}]),n}(a.a.Component),Fe=Object(g.b)({currentUser:Ie}),Ke=Object(j.b)(Fe,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:Je,payload:e}}(t))}}}))(ze),Qe=n(57),Xe=n(32),Ye=n(48),Ze=(n(92),n(58)),$e=n.n(Ze),et={currentUser:null},tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,t=arguments.length>1?arguments[1]:void 0;return t.type===Je?Object(o.a)(Object(o.a)({},e),{},{currentUser:t.payload}):e},nt=n(23),rt=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(o.a)(Object(o.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(nt.a)(e),[Object(o.a)(Object(o.a)({},t),{},{quantity:1})])},at=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(o.a)(Object(o.a)({},e),{},{quantity:e.quantity-1}):e}))},ct={hidden:!0,cartItems:[]},it=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.TOGGLE_CART_HIDDEN:return Object(o.a)(Object(o.a)({},e),{},{hidden:!e.hidden});case E.ADD_ITEM:return Object(o.a)(Object(o.a)({},e),{},{cartItems:rt(e.cartItems,t.payload)});case E.REMOVE_ITEM:return Object(o.a)(Object(o.a)({},e),{},{cartItems:at(e.cartItems,t.payload)});case E.CLEAR_ITEM_FROM_CART:return Object(o.a)(Object(o.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});default:return e}},st={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},lt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st,t=arguments.length>1?arguments[1]:void 0;return t.type,e},ot={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,t=arguments.length>1?arguments[1]:void 0;return t.type,e},dt={key:"root",storage:$e.a,whitelist:["cart"]},pt=Object(Xe.b)({user:tt,cart:it,directory:lt,shop:ut}),bt=Object(Ye.a)(dt,pt);var mt=Object(Xe.c)(bt,Xe.a.apply(void 0,[])),ht=Object(Ye.b)(mt);n(95);i.a.render(Object(v.jsx)(j.a,{store:mt,children:Object(v.jsx)(q.a,{children:Object(v.jsx)(Qe.a,{persistor:ht,children:Object(v.jsx)(Ke,{})})})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.d573b346.chunk.js.map