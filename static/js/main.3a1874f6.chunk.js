(this.webpackJsonpmywebsite=this.webpackJsonpmywebsite||[]).push([[0],{170:function(e,t,a){},171:function(e,t,a){},173:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(8),l=a.n(i),r=(a(85),a(26)),o=a(27),s=a(30),u=a(29),m=(a(86),a(16));a(87),a(88);var h=function(){return c.a.createElement("div",{className:"Intro"},c.a.createElement("h1",null,"Hello,"),c.a.createElement("h1",null,"I am Sushmita Joshi"),c.a.createElement("h3",null,"i am a Philomath and i Love to learn new technologies"))},d=a(58),f=a.n(d);a(89);var E=function(){return c.a.createElement("div",{className:"Photo"},c.a.createElement("img",{src:f.a,className:"responsive",alt:"mypic"}))},p=a(23),b=(a(94),c.a.createContext({flip:!1,setFlip:function(){}})),v=function(){var e=Object(n.useContext)(b);e.flip,e.setFlip;return c.a.createElement("div",{className:"Social"},c.a.createElement("a",{href:"https://www.facebook.com/sushmita.joshi.963871"},c.a.createElement(p.a,{id:"fb",icon:["fab","facebook"],size:"3x"})),c.a.createElement("a",{href:"https://twitter.com/SUSHMITAJOSHI9"},c.a.createElement(p.a,{id:"twi",icon:["fab","twitter"],size:"3x"})),c.a.createElement("a",{href:"https://www.linkedin.com/in/sushmita-joshi-71b299194/"},c.a.createElement(p.a,{id:"in",icon:["fab","linkedin"],size:"3x"})),c.a.createElement("a",{href:"https://github.com/Sushi22"},c.a.createElement(p.a,{id:"git",icon:["fab","github"],size:"3x"})))},g=a(15),w=a(176),j=a(177),S=a(178),C=a(179),k=a(180),x=(a(95),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={Message:"",sender:"",formSubmitted:!1},e.handleCancel=e.handleCancel.bind(Object(g.a)(e)),e.handleChange=e.handleChange.bind(Object(g.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(g.a)(e)),e.handleChangeEmail=e.handleChangeEmail.bind(Object(g.a)(e)),e.showMessage=e.showMessage.bind(Object(g.a)(e)),e}return Object(o.a)(a,[{key:"showMessage",value:function(){alert("Message sent successfully")}},{key:"handleCancel",value:function(){this.setState({Message:"",sender:""})}},{key:"handleChange",value:function(e){this.setState({Message:e.target.value})}},{key:"handleChangeEmail",value:function(e){this.setState({sender:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.props.env,a=t.REACT_APP_EMAILJS_TEMPLATEID,n=t.REACT_APP_EMAILJS_USERID;this.sendFeedback(a,this.state.sender,this.state.Message,n),this.setState({formSubmitted:!0})}},{key:"sendFeedback",value:function(e,t,a,n){var c=this;window.emailjs.send("default_service",e,{user_email:t,Message:a},n).then((function(e){c.setState({formEmailSent:!0})})).catch((function(e){return console.error("Failed to send feedback. Error: ",e)}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"Contact",id:"contactme"},c.a.createElement("h1",{class:"con"},"Let's Talk"),c.a.createElement(w.a,{onSubmit:this.handleSubmit,id:"form"},c.a.createElement(j.a,null,c.a.createElement(S.a,{for:"exampleEmail"},"Your Email"),c.a.createElement(C.a,{type:"email",name:"email",id:"exampleEmail",onChange:this.handleChangeEmail})),c.a.createElement(j.a,null,c.a.createElement(S.a,{for:"exampleText"},"Message"),c.a.createElement(C.a,{type:"textarea","aria-label":"maximum height",name:"text",id:"exampleText",onChange:this.handleChange})),c.a.createElement(k.a,{type:"submit",value:"Submit",color:"primary",id:"mybutton",onClick:this.showMessage},"Send"),c.a.createElement(k.a,{color:"secondary",id:"cancel",onClick:this.handleCancel},"Cancel")))}}]),a}(n.Component)),O=function(){var e=Object(n.useContext)(b),t=(e.flip,e.setFlip);return c.a.createElement("div",{className:"back",onClick:function(){return t(!1)}},"Back")},y=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),i=a[0],l={flip:i,setFlip:a[1]};return!1===i?c.a.createElement("div",{className:"FrontPage"},c.a.createElement(h,null),c.a.createElement(E,null),c.a.createElement(b.Provider,{value:l},c.a.createElement(v,null))):c.a.createElement("div",{className:"Frontpage"},c.a.createElement(x,{env:e.env}),c.a.createElement(b.Provider,{value:l},c.a.createElement(O,null)))},A=(a(96),a(97),function(){var e=["DREAM","Work Hard at it","Achieve it","And Move on.."],t=e.length,a=Object(n.useState)(0),i=Object(m.a)(a,2),l=i[0],r=i[1];return Object(n.useEffect)((function(){var e=setInterval((function(){r((function(e){return(e+1)%t}))}),1800);return function(){return clearInterval(e)}}),[l]),c.a.createElement("div",{className:["one","two","three","four"][l]},c.a.createElement("h1",null,e[l]))});var M=function(){return c.a.createElement("div",{className:"Content"},c.a.createElement(A,null))},I=a(22),P=a(59),_=a(60),N={REACT_APP_EMAILJS_TEMPLATEID:"contact_page",REACT_APP_EMAILJS_USERID:"user_FTESIwpoEt7569uinowEl"};a(98);var T=function(){return c.a.createElement("div",{className:"Nav"},c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{href:"#gallery"},"PictureBook")),c.a.createElement("li",null,c.a.createElement("a",{href:"#contactme"},"Contact")),c.a.createElement("li",null,c.a.createElement("a",{href:"#about"},"About")),c.a.createElement("li",null,c.a.createElement("a",{href:"#app"},"Home")))))};I.b.add(P.a,_.a);var F=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App",id:"app"},c.a.createElement(y,{env:N}),c.a.createElement(M,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(99);var J=a(43),L=a(61),R=a(32),D=a(65),H=a.n(D),z=a(66),B=a.n(z),U=a(67),W=a.n(U),Y=a(68),$=a.n(Y),q=a(69),G=a.n(q),K=a(70),Q=a.n(K),V=a(71),X=a.n(V),Z=a(72),ee=a.n(Z),te=a(73),ae=a.n(te),ne=[{src:H.a,width:1,height:1},{src:B.a,width:4,height:3},{src:W.a,width:3,height:4},{src:$.a,width:3,height:4},{src:G.a,width:3,height:4},{src:Q.a,width:4,height:3},{src:X.a,width:3,height:4},{src:ee.a,width:4,height:3},{src:ae.a,width:3,height:4}];a(170);var ce=function(){var e=Object(n.useState)(0),t=Object(m.a)(e,2),a=t[0],i=t[1],l=Object(n.useState)(!1),r=Object(m.a)(l,2),o=r[0],s=r[1],u=Object(n.useCallback)((function(e,t){t.photo;var a=t.index;i(a),s(!0)}),[]);return c.a.createElement("div",{id:"gallery",className:"mygallery"},c.a.createElement(L.a,{photos:ne,onClick:u}),c.a.createElement(R.b,null,o?c.a.createElement(R.a,{onClose:function(){i(0),s(!1)}},c.a.createElement(R.c,{currentIndex:a,views:ne.map((function(e){return Object(J.a)(Object(J.a)({},e),{},{srcset:e.srcSet,caption:e.title})}))})):null))};a(171);var ie=function(){return c.a.createElement("div",{className:"About",id:"about"},"About")};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(T,null),c.a.createElement(F,null),c.a.createElement(ie,null),c.a.createElement(x,null),c.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},58:function(e,t,a){e.exports=a.p+"static/media/deskfront2.f7ad3237.png"},65:function(e,t,a){e.exports=a.p+"static/media/one.802d16b2.jpg"},66:function(e,t,a){e.exports=a.p+"static/media/two.cda6ad6a.jpg"},67:function(e,t,a){e.exports=a.p+"static/media/three.669080fe.jpg"},68:function(e,t,a){e.exports=a.p+"static/media/four.23832c97.jpg"},69:function(e,t,a){e.exports=a.p+"static/media/five.f74195d3.jpg"},70:function(e,t,a){e.exports=a.p+"static/media/six.6d28c554.jpg"},71:function(e,t,a){e.exports=a.p+"static/media/seven.2ea3e230.jpg"},72:function(e,t,a){e.exports=a.p+"static/media/eight.3e57cde6.jpg"},73:function(e,t,a){e.exports=a.p+"static/media/nine.4a137b8c.jpg"},80:function(e,t,a){e.exports=a(173)},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.3a1874f6.chunk.js.map