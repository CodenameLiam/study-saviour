(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{173:function(e,a,t){e.exports=t(352)},242:function(e,a){},244:function(e,a){},349:function(e,a,t){},352:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(13),c=t.n(o),s=t(15),l=t(16),i=t.n(l),d={apiKey:"AIzaSyATX4WMo1omXsQ8qK6aHemHLpRtq02JtXI",authDomain:"study-saviour.firebaseapp.com",databaseURL:"https://study-saviour.firebaseio.com",projectId:"study-saviour",storageBucket:"study-saviour.appspot.com",messagingSenderId:"530961670142",appId:"1:530961670142:web:0d1e89f3fc7499d3656aaf",measurementId:"G-M409DF4D36"},u=t(21),m=Object(r.createContext)(void 0),p=function(){var e=Object(r.useState)(!1),a=Object(s.a)(e,2),t=a[0],n=a[1];return Object(r.useEffect)((function(){return i.a.auth().onAuthStateChanged((function(e){n(!0)}))}),[]),t},h=t(83);function b(){return n.a.createElement("div",{className:"page-spinner"},n.a.createElement(h.SyncLoader,{size:30}))}var f=t(47),E=t(17),g=t(7),v=t(11),O=t.n(v),w=t(9);function x(){return n.a.createElement("div",{className:"logo-panel"},n.a.createElement("div",{className:"logo"},n.a.createElement(O.a,{path:w.b,size:10}),n.a.createElement("div",{className:"logo-text"},"Study ",n.a.createElement("span",{className:"saviour"},"Saviour"))))}var j=t(394),N=t(393);function S(e){return n.a.createElement("div",{className:"input-panel"},e.children)}var k=t(408),C=t(6),y=t(405),P=t(392),D=t(390),z=t(406),A=Object(C.a)({root:{fontFamily:"'Poppins', sans-serif",marginBottom:"2rem","& .MuiOutlinedInput-root":{borderRadius:100,boxShadow:"2px 2px 5px #dddddd","& fieldset":{transition:"all 0.3s",borderColor:"#dddddd",borderWidth:"3px"},"&:hover fieldset":{borderColor:"#fab795",boxShadow:"2px 2px 10px #dddddd"},"&.Mui-focused fieldset":{borderColor:"#fab795",boxShadow:"2px 2px 10px #dddddd",borderWidth:"3px"}}}})(y.a),I=Object(C.a)({root:{marginBottom:"0.75rem","& .MuiOutlinedInput-root":{fontFamily:"'Poppins', sans-serif",borderRadius:"1rem",boxShadow:"2px 2px 5px #dddddd","& fieldset":{transition:"all 0.3s",borderColor:"#dddddd",borderWidth:"3px"},"&:hover fieldset":{borderColor:"#fab795",boxShadow:"2px 2px 10px #dddddd"},"&.Mui-focused fieldset":{borderColor:"#fab795",boxShadow:"2px 2px 10px #dddddd",borderWidth:"3px"}}}})(y.a),L=Object(C.a)({root:{background:"linear-gradient(90deg, rgba(252, 124, 137, 1) 0%, rgba(255, 164, 146, 1) 50%, rgba(250, 183, 149, 1) 100%)",borderRadius:100,height:"48px",marginTop:"1rem",color:"white",fontSize:"1rem",fontFamily:"'Poppins', sans-serif",boxShadow:"2px 4px 4px -2px #dddddd","&:hover":{boxShadow:"2px 5px 8px -1px #dddddd"}}})(P.a),M=Object(C.a)({root:{background:"linear-gradient(90deg, rgba(252, 124, 137, 1) 0%, rgba(255, 164, 146, 1) 50%, rgba(250, 183, 149, 1) 100%)",borderRadius:"1rem",height:"10rem",width:"15rem",marginRight:"1.5rem",marginBottom:"1.5rem",color:"white",fontSize:"1rem",fontFamily:"'Poppins', sans-serif",boxShadow:"2px 4px 4px -2px #dddddd",transition:"all 0.3s","&:hover":{boxShadow:"2px 5px 8px -1px #dddddd",transform:"scale(1.05)"}}})(P.a),R=Object(C.a)({root:{marginBottom:"1rem",background:"linear-gradient(90deg, rgba(252, 124, 137, 1) 0%, rgba(255, 164, 146, 1) 50%, rgba(250, 183, 149, 1) 100%)",borderRadius:100,width:"50%",height:"48px",marginTop:"1rem",color:"white",fontSize:"1rem",fontFamily:"'Poppins', sans-serif",boxShadow:"2px 4px 4px -2px #fab795","&:hover":{boxShadow:"2px 5px 8px -1px #fab795"}}})(P.a),B=Object(C.a)({root:{background:"linear-gradient(90deg, rgba(252, 124, 137, 1) 0%, rgba(255, 164, 146, 1) 50%, rgba(250, 183, 149, 1) 100%)",borderRadius:100,height:"42px",width:"50%",marginBottom:"0.5rem",marginTop:"1rem",color:"white",fontSize:"1rem",fontFamily:"'Poppins', sans-serif",boxShadow:"2px 2px 5px #fab795","&:hover":{boxShadow:"2px 2px 10px #fc7c89"}}})(P.a),W=Object(C.a)({root:{background:"#c5c5c5",borderRadius:100,height:"42px",width:"50%",marginBottom:"0.5rem",marginTop:"1rem",color:"white",fontSize:"1rem",fontFamily:"'Poppins', sans-serif",boxShadow:"2px 2px 5px #c5c5c5","&:hover":{background:"#c5c5c5",boxShadow:"2px 2px 10px #989898"}}})(P.a),F=Object(C.a)({root:{border:"3px solid rgba(0, 0, 0, 0.12)",boxShadow:"none",fontFamily:"'Poppins', sans-serif",borderRadius:"1rem"}})(D.a),T=Object(C.a)({tag:{fontFamily:"'Poppins', sans-serif !important"}})(z.a);function U(){var e=Object(E.g)(),a=Object(E.h)(),t=Object(r.useState)({username:"",password:"",showPassword:!1,usernameError:!1,passwordError:!1,errorStatus:!1,errorMessage:""}),o=Object(s.a)(t,2),c=o[0],l=o[1],d=function(){var t=new URLSearchParams(a.search),r=t.get("redirect")?t.get("redirect"):"/";e.push(r)},m=function(e){u.b.error(e.message),console.log(e)};return n.a.createElement("div",{className:"login"},n.a.createElement(x,null),n.a.createElement(S,null,n.a.createElement("form",{className:"input-form",onSubmit:function(e){e.preventDefault();var a=!(c.username.length>0),t=!(c.username.length>0);l(Object(g.a)(Object(g.a)({},c),{},{usernameError:a,passwordError:t})),c.username.length>0&&c.password.length>0&&function(e,a,t,r){i.a.auth().setPersistence(i.a.auth.Auth.Persistence.LOCAL).then((function(){i.a.auth().signInWithEmailAndPassword(e,a).then((function(e){return t(e)})).catch((function(e){return r(e)}))})).catch((function(e){return r(e)}))}(c.username,c.password,d,m)}},n.a.createElement("div",{className:"input-header"},"Login"),n.a.createElement(k.a,{in:!0,appear:!0,timeout:1e3,classNames:"grow"},n.a.createElement("div",{className:"input-underline"})),n.a.createElement(A,{variant:"outlined",placeholder:"Email",fullWidth:!0,onChange:function(e){l(Object(g.a)(Object(g.a)({},c),{},{username:e.target.value,usernameError:!1,errorStatus:!1}))},InputProps:{startAdornment:n.a.createElement(j.a,{position:"start"},n.a.createElement(O.a,{path:w.a,size:1,color:"#dddddd"}))},error:c.usernameError,helperText:c.usernameError?"Please enter a valid username":""}),n.a.createElement(A,{variant:"outlined",placeholder:"Password",fullWidth:!0,type:c.showPassword?"text":"password",onChange:function(e){l(Object(g.a)(Object(g.a)({},c),{},{password:e.target.value,passwordError:!1,errorStatus:!1}))},InputProps:{startAdornment:n.a.createElement(j.a,{position:"start"},n.a.createElement(O.a,{path:w.m,size:1,color:"#dddddd"})),endAdornment:n.a.createElement(j.a,{position:"end"},n.a.createElement(N.a,{"aria-label":"toggle password visibility",onClick:function(){return l(Object(g.a)(Object(g.a)({},c),{},{showPassword:!c.showPassword}))},onMouseDown:function(e){return e.preventDefault()}},c.showPassword?n.a.createElement(O.a,{path:w.h,size:1,color:"#dddddd"}):n.a.createElement(O.a,{path:w.i,size:1,color:"#dddddd"})))},error:c.passwordError,helperText:c.passwordError?"Please enter a valid password":""}),n.a.createElement(L,{className:"login-button",type:"submit",variant:"contained",fullWidth:!0},"Submit"),n.a.createElement("div",{className:"form-footer"},n.a.createElement("div",{className:"footer-text",onClick:function(){return e.push("/register")}},"Create an account"),n.a.createElement("div",{className:"footer-text",onClick:function(){return e.push("/register")}},"Forgot password")))))}function Y(){return n.a.createElement("div",null,"Nope")}var H=t(22),V=t.n(H),q=t(156),X=t(105),J=t.n(X),K=t(157),G=t(162),_=t(411),Q=t(39),Z=t.n(Q),$=t(159),ee=t(160);function ae(e){var a=i.a.auth().currentUser,t=Object(r.useContext)(m),o=t.appState,c=(t.setAppState,Object(r.useState)({file:void 0,name:"",author:null===a||void 0===a?void 0:a.email,courseCode:"",description:"",hashtags:[],faculty:"",semester:"",nameError:!1,authorError:!1,courseCodeError:!1,descriptionError:!1,facultyError:!1,hashtagError:!1,semesterError:!1})),l=Object(s.a)(c,2),d=l[0],p=l[1],h=Object(r.useState)([]),b=Object(s.a)(h,2),f=b[0],E=b[1];Object(r.useEffect)((function(){Object(K.a)(J.a.mark((function e(){var a;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.get("/api/hashtags");case 2:a=e.sent,E(a.data);case 4:case"end":return e.stop()}}),e)})))()}),[]);var v=function(){u.b.success("Succesfully uploaded note!"),e.onClose(),o.reFetch()},x=function(){var e=void 0==d.file,a=!(d.name.length>0),t=!(d.author.length>0),r=!(d.courseCode.length>0),n=!(d.description.length>0),o=!(d.faculty.length>0),c=!(d.semester.length>0),s=!(d.hashtags.length>0);return p(Object(g.a)(Object(g.a)({},d),{},{nameError:a,authorError:t,courseCodeError:r,descriptionError:n,facultyError:o,semesterError:c,hashtagError:s})),e&&u.b.error("Please upload a file"),!e&&!a&&!t&&!r&&!n&&!o&&!c&&!s};return n.a.createElement("div",{className:"modal"},n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),x()&&(V.a.post("/api/hashtags",{hashtags:d.hashtags}),V.a.post("/api/note",{name:d.name,author:d.author,courseCode:d.courseCode,description:d.description,hashtags:d.hashtags,faculty:d.faculty,semester:d.semester}).then((function(e){!function(e,a,t,r){i.a.storage().ref().child("notes/".concat(a,"/").concat(t,".pdf")).put(e).then((function(e){return r(e)}))}(d.file,e.data.id,d.name,v)})).catch((function(e){u.b.error(e)})))}},n.a.createElement("div",{className:"upper"},n.a.createElement(G.a,{onDrop:function(e){return p(Object(g.a)(Object(g.a)({},d),{},{file:e[0]}))},accept:"application/pdf",maxFiles:1},(function(e){var a=e.getRootProps,t=e.getInputProps;return n.a.createElement("section",{className:"dropzone"},n.a.createElement("div",Object.assign({className:"area"},a()),n.a.createElement("input",t()),d.file?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"file-icon"},n.a.createElement(O.a,{path:w.j,size:1})),n.a.createElement("div",{className:"file-name"},d.file.name),n.a.createElement("div",{className:"delete-file"},n.a.createElement(N.a,{onClick:function(e){e.stopPropagation(),p(Object(g.a)(Object(g.a)({},d),{},{file:void 0}))}},n.a.createElement(O.a,{path:w.d,size:1})))):n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"button"},n.a.createElement(R,null,"Upload Note")),n.a.createElement("div",{className:"drop"},"Or drop one here"))))})),n.a.createElement("div",{className:"input"},n.a.createElement(I,{className:"input-field",id:"course",placeholder:"Name",variant:"outlined",fullWidth:!0,onChange:function(e){return p(Object(g.a)(Object(g.a)({},d),{},{name:e.target.value,nameError:!1}))},error:d.nameError,helperText:d.nameError?"Please enter a valid note name":""}),n.a.createElement(I,{className:"input-field",id:"course",placeholder:"Course Code",variant:"outlined",fullWidth:!0,onChange:function(e){return p(Object(g.a)(Object(g.a)({},d),{},{courseCode:e.target.value,courseCodeError:!1}))},error:d.courseCodeError,helperText:d.courseCodeError?"Please enter a valid coursecode":""}),n.a.createElement(I,{className:"input-field",id:"faculty",placeholder:"Faculty",variant:"outlined",fullWidth:!0,onChange:function(e){return p(Object(g.a)(Object(g.a)({},d),{},{faculty:e.target.value,facultyError:!1}))},error:d.facultyError,helperText:d.facultyError?"Please enter a valid faculty":""}),n.a.createElement(z.a,{id:"combo-box-demo",options:re(),getOptionLabel:function(e){return e},fullWidth:!0,onChange:function(e,a){p(Object(g.a)(Object(g.a)({},d),{},{semester:a,semesterError:!1}))},PaperComponent:F,renderInput:function(e){return n.a.createElement(I,Object.assign({},e,{placeholder:"Semester",variant:"outlined",error:d.semesterError,helperText:d.semesterError?"Please enter a valid semester":""}))}}))),n.a.createElement("div",{className:"lower"},n.a.createElement(T,{className:"hashtags",multiple:!0,id:"tags-outlined",options:f,getOptionLabel:function(e){return e},filterOptions:function(e,a){var t=te(e,a);return""!==a.inputValue&&t.push(a.inputValue),t},disableCloseOnSelect:!0,filterSelectedOptions:!0,onChange:function(e,a){p(Object(g.a)(Object(g.a)({},d),{},{hashtags:a,hashtagError:!1}))},PaperComponent:F,renderInput:function(e){return n.a.createElement(I,Object.assign({},e,{variant:"outlined",placeholder:"#Hashtags",error:d.hashtagError,helperText:d.hashtagError?"Please select at least one hashtag":""}))}}),n.a.createElement(I,{id:"outlined-basic",placeholder:"Description",variant:"outlined",fullWidth:!0,multiline:!0,rows:3,onChange:function(e){return p(Object(g.a)(Object(g.a)({},d),{},{description:e.target.value,descriptionError:!1}))},error:d.descriptionError,helperText:d.descriptionError?"Please enter a valid description":""})),n.a.createElement("div",{className:"submit"},n.a.createElement(W,{fullWidth:!0,onClick:e.onClose},"Cancel"),n.a.createElement(B,{type:"submit",fullWidth:!0},"Submit"))))}var te=Object(_.a)();function re(){for(var e=Z()().quarter()<=2?1:2,a=Z()().year(),t=[],r=0;r<=5;r++)2==e?(t.push("Semester 2, ".concat(a)),e--):(t.push("Semester 1, ".concat(a)),e++,a--);return t}function ne(){var e=Object(r.useContext)(m),a=e.appState,t=e.setAppState,o=Object(r.useState)(""),c=Object(s.a)(o,2),l=c[0],i=c[1];Object(E.g)(),Object(E.h)();return n.a.createElement("div",{className:"header"},n.a.createElement("div",{className:"left"},n.a.createElement("div",{className:"logo"},n.a.createElement(O.a,{path:w.b,size:1.8}),n.a.createElement("div",{className:"logo-text"},"Study ",n.a.createElement("span",{className:"saviour"},"Saviour")))),n.a.createElement("div",{className:"right"},n.a.createElement(oe,{className:"search",placeholder:"Search...",variant:"outlined",fullWidth:!0,InputProps:{endAdornment:n.a.createElement(j.a,{position:"end"},n.a.createElement(N.a,{"aria-label":"search",onClick:function(e){return function(e){e.preventDefault(),t(Object(g.a)(Object(g.a)({},a),{},{search:l}))}(e)}},n.a.createElement(O.a,{path:w.n,size:1})))},onChange:function(e){return i(e.target.value)},onKeyDown:function(e){return function(e){"Enter"===e.key&&(e.preventDefault(),t(Object(g.a)(Object(g.a)({},a),{},{search:l})))}(e)}}),n.a.createElement(q.a,{contentStyle:{borderRadius:"1rem"},trigger:n.a.createElement(P.a,{style:{background:"transparent"},className:"upload",color:"primary",startIcon:n.a.createElement(O.a,{path:w.f,size:1})},n.a.createElement("span",{className:"upload-text"},"Upload Notes")),modal:!0,closeOnDocumentClick:!1},(function(e){return n.a.createElement(ae,{onClose:function(){return e()}})}))))}var oe=Object(C.a)({root:{"& .MuiOutlinedInput-root":{borderRadius:100,background:"#ffffff","& input":{padding:"12px 14px;"},"& fieldset":{transition:"box-shadow 0.3s",borderColor:"#dddddd",borderWidth:"0px"},"&:hover fieldset":{borderColor:"#dddddd",borderWidth:"0px"},"&.Mui-focused fieldset":{borderColor:"#dddddd",borderWidth:"0px"}}}})(y.a),ce=t(28),se=t(409),le=t(391),ie=t(395),de=t(396),ue=t(397),me=t(398),pe=t(410),he=t(4);function be(){var e,a,t=Object(E.g)(),o=Object(E.h)(),c=Object(r.useContext)(m),l=c.appState,d=c.setAppState,p=Object(r.useState)({navigationOpen:!0,navigationVisible:!0}),h=Object(s.a)(p,2),b=h[0],f=(h[1],function(){return t.push("/login")}),g=function(e){return u.b.error(e.message)},v=fe(),x=[{label:"Dashboard",path:"/",icon:n.a.createElement(O.a,{path:w.l,size:1})},{label:"Courses",path:"/courses",icon:n.a.createElement(O.a,{path:w.s,size:1})},{label:"My Notes",path:"/my-notes",icon:n.a.createElement(O.a,{path:w.p,size:1})},{label:"Liked Notes",path:"/liked-notes",icon:n.a.createElement(O.a,{path:w.k,size:1})}];return n.a.createElement("div",{className:"navigation"},n.a.createElement(se.a,{variant:"permanent",className:Object(he.a)(v.drawer,(e={},Object(ce.a)(e,v.drawerOpen,l.navOpen),Object(ce.a)(e,v.drawerClose,!l.navOpen),Object(ce.a)(e,v.drawerNotVisible,!b.navigationVisible),e)),classes:{paper:Object(he.a)((a={},Object(ce.a)(a,v.drawerOpen,l.navOpen),Object(ce.a)(a,v.drawerClose,!l.navOpen),Object(ce.a)(a,v.drawerNotVisible,!b.navigationVisible),a))}},n.a.createElement(le.a,{classes:{root:v.list}},x.map((function(e,a){var r,c,s,i,d,u=(i=o.pathname,d=e.path,i.split("/")[1]===d.split("/")[1]);return n.a.createElement(ie.a,{key:a,onClick:function(){t.push(e.path)},button:!0,className:Object(he.a)(v.menuButton,(r={},Object(ce.a)(r,v.menuButtonActive,u),Object(ce.a)(r,v.menuButtonInactive,!u),Object(ce.a)(r,v.menuButtonClose,!l.navOpen),r)),classes:{root:Object(he.a)((c={},Object(ce.a)(c,v.menuButtonActive,u),Object(ce.a)(c,v.menuButtonInactive,!u),c))}},n.a.createElement(de.a,{classes:{root:Object(he.a)((s={},Object(ce.a)(s,v.menuIconActive,u),Object(ce.a)(s,v.menuIconInactive,!u),s))}},e.icon),n.a.createElement(ue.a,{primary:e.label}))}))),n.a.createElement(le.a,{classes:{root:v.listBottom}},n.a.createElement(ie.a,{button:!0,onClick:function(){return e=f,a=g,void i.a.auth().signOut().then((function(){e()})).catch((function(e){a(e)}));var e,a},classes:{root:Object(he.a)(v.menuButton,v.menuButtonExpand)}},n.a.createElement(de.a,null,n.a.createElement(O.a,{path:w.g,size:1})),n.a.createElement(ue.a,{primary:"Logout"})),n.a.createElement(ie.a,{button:!0,onClick:function(){d({navOpen:!l.navOpen})},classes:{root:Object(he.a)(v.menuButton,v.menuButtonExpand)}},n.a.createElement(de.a,null,n.a.createElement(O.a,{path:w.o,size:1}))))))}var fe=Object(me.a)((function(e){return Object(pe.a)({root:{display:"flex"},drawer:{width:"15rem",flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",position:"relative"},drawerOpen:{width:"20rem",position:"relative",height:"100%",boxShadow:"0px 4px 50px -2px #dddddd",background:"#f4f4f4",borderRight:"none",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),overflow:"hidden"},drawerClose:{position:"relative",height:"100%",background:"#f4f4f4",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),boxShadow:"0px 4px 50px -2px rgba(200, 230, 255, 0.3), -1px 2px 10px 0px rgba(200,200,200, 0.14), 0px 1px 5px 0px rgba(200,200,200,0.12) !important",borderRight:"none",overflowX:"hidden",width:"80px",overflow:"hidden"},drawerNotVisible:{width:"0rem"},list:{margin:"0.5rem 1rem",height:"100%",overflow:"hidden",paddingTop:"4rem"},listBottom:{margin:"0.5rem 1rem",position:"absolute",bottom:"10px",width:"90%"},menuButton:{borderRadius:"1rem",marginBottom:"0.5rem","& span":{fontFamily:"'Poppins', sans-serif"}},menuButtonClose:{borderRadius:"100rem",paddingLeft:"13px",transition:"border-radius 0.3s"},menuButtonActive:{background:"linear-gradient(90deg, rgba(252, 124, 137, 1) 0%, rgba(255, 164, 146, 1) 50%, rgba(250, 183, 149, 1) 100%)",color:"white"},menuButtonInactive:{transition:"background-color 0.3s","&:hover":{backgroundColor:"rgb(235, 235, 235)"}},menuButtonExpand:{height:"48px"},menuIconActive:{color:"white"},menuIconInactive:{}})}));function Ee(e){return n.a.createElement("div",{className:"page"},n.a.createElement(ne,null),n.a.createElement("div",{className:"content"},n.a.createElement(be,null),n.a.createElement("div",{className:"body"},e.children)))}function ge(e){return n.a.createElement("div",{className:"chart-container"},n.a.createElement("div",{className:"title"},e.title),n.a.createElement("div",{className:"chart"},e.children))}var ve=t(91),Oe=t(161),we=t.n(Oe);function xe(){var e=Object(E.g)(),a=(Object(E.h)(),i.a.auth().currentUser),t=Object(r.useState)({likes:[],totalLikes:0,downloads:[],totalDownloads:0}),o=Object(s.a)(t,2),c=o[0],l=o[1],d=Object(r.useState)({courses:[]}),u=Object(s.a)(d,2),m=u[0],p=u[1];return Object(r.useEffect)((function(){V.a.post("/api/user",{user:null===a||void 0===a?void 0:a.email}).then((function(e){p(e.data)})),V.a.post("/api/dashboard",{user:null===a||void 0===a?void 0:a.email}).then((function(e){var a=e.data,t=a.likes,r=a.totalLikes,n=a.downloads,o=a.totalDownloads;l(Object(g.a)(Object(g.a)({},c),{},{likes:t,totalLikes:r,downloads:n,totalDownloads:o}))}))}),[]),n.a.createElement(Ee,null,n.a.createElement("div",{className:"home"},n.a.createElement("div",{className:"dashboard"},n.a.createElement(ge,{title:"Weekly Points"},n.a.createElement(Se,{likes:c.likes,downloads:c.downloads})),n.a.createElement(ge,{title:"Overall Points"},n.a.createElement(Ne,{totalDownloads:c.totalDownloads,totalLikes:c.totalLikes})),n.a.createElement(ge,{title:"Progress Until Next Level"},n.a.createElement(je,{totalScore:c.totalDownloads+c.totalLikes})),n.a.createElement("div",{className:"courses-container"},n.a.createElement("div",{className:"title"},"My Courses"),n.a.createElement("div",{className:"courses"},function(){if(m)return m.courses.map((function(a){return n.a.createElement(M,{startIcon:n.a.createElement(O.a,{path:w.r,size:1}),onClick:function(){return e.push("/courses/".concat(a))}},a)}));return n.a.createElement(n.a.Fragment,null)}())))))}function je(e){var a=100-e.totalScore,t={labels:["Score","Remaining"],datasets:[{label:"Rainfall",backgroundColor:["#fab795","rgba(250, 183, 149, 0.4)"],data:[e.totalScore,a]}]};return n.a.createElement("div",{className:"progress"},n.a.createElement("div",{className:"stats"},n.a.createElement(we.a,{start:0,end:e.totalScore,delay:0},(function(e){var a=e.countUpRef;return n.a.createElement("div",{className:"counter"},n.a.createElement("span",{ref:a}),"%")})),n.a.createElement("div",{className:"stat-text"},n.a.createElement("p",null,"Next Level:"),n.a.createElement("b",null,"Note Hero")),n.a.createElement(O.a,{path:w.u,size:4})),n.a.createElement("div",{className:"doughtnut"},n.a.createElement(ve.Doughnut,{data:t,options:{maintainAspectRatio:!1}})))}function Ne(e){var a=e.totalLikes,t=e.totalDownloads,r={labels:["Score"],datasets:[{label:"Likes",data:[a],borderColor:"#fab795",borderWidth:3,backgroundColor:"rgba(250, 183, 149, 0.4)"},{label:"Downloads",data:[t],borderColor:"#fc7c89",borderWidth:3,backgroundColor:"rgba(252, 124, 137, 0.4)"}]},o={maintainAspectRatio:!1,scales:{yAxes:[{ticks:{stepSize:1,beginAtZero:!0,suggestedMax:Math.max(a,t)+2}}]}};return n.a.createElement("div",{className:"overall"},n.a.createElement(ve.Bar,{data:r,options:o}))}function Se(e){for(var a=e.likes,t=e.downloads,r=a.reduce((function(e,a){var t=Z()(a).format("YYYY-MM-DD");return e[t]||(e[t]=0),e[t]++,e}),{}),o=t.reduce((function(e,a){var t=Z()(a).format("YYYY-MM-DD");return e[t]||(e[t]=0),e[t]++,e}),{}),c=[],s=[],l=[],i=6;i>=0;i--){var d=Z()().subtract(i,"days").format("YYYY-MM-DD"),u=r[d]?r[d]:0,m=o[d]?o[d]:0;c.push(Z()().subtract(i,"days").format("D/M")),s.push(u),l.push(m)}var p={labels:c,datasets:[{label:"Likes",data:s,borderColor:"#fab795",backgroundColor:"rgba(250, 183, 149, 0.4)"},{label:"Downloads",data:l,borderColor:"#fc7c89",backgroundColor:"rgba(252, 124, 137, 0.4)"}]};return n.a.createElement("div",{className:"weekly"},n.a.createElement(ve.Line,{data:p,options:{maintainAspectRatio:!1}}))}var ke=t(399),Ce=t(400),ye=t(401),Pe=t(402),De=t(403),ze=t(404);function Ae(){return n.a.createElement("div",{className:"table-spinner"},n.a.createElement(h.SyncLoader,{size:15}))}function Ie(e){return e.notes?n.a.createElement(Le,null,n.a.createElement(ke.a,null,n.a.createElement(Ce.a,null,n.a.createElement(ye.a,null,n.a.createElement(Pe.a,null,"Name"),n.a.createElement(Pe.a,{align:"center"},"Course"),n.a.createElement(Pe.a,{align:"center"},"Author"),n.a.createElement(Pe.a,{align:"center"},"Hashtags"),n.a.createElement(Pe.a,{align:"center"},"Uploaded"),n.a.createElement(Pe.a,{align:"center"},"Likes"),n.a.createElement(Pe.a,{align:"center"},"Downloads"))),n.a.createElement(De.a,null,e.notes.map((function(e){return n.a.createElement(Me,{note:e,key:e.id})}))))):n.a.createElement(Ae,null)}var Le=Object(C.a)({root:{border:"1px solid rgba(0, 0, 0, 0.12)",borderRadius:"1rem",boxShadow:"2px 2px 5px #dddddd",transition:"all 0.3s","&:hover":{boxShadow:"2px 2px 15px #dddddd"},"& .MuiTableHead-root":{background:"#ffa492","& .MuiTableCell-head":{color:"#ffffff"}},"& .icon-cell":{display:"flex","& .row-name":{margin:"auto",marginLeft:"1rem",fontSize:"0.875rem"}},"& .download-cell":{"& svg":{marginLeft:"auto"}},"& .MuiIconButton-root":{marginLeft:"auto"},"& .MuiTableCell-root":{fontFamily:"'Poppins', sans-serif",maxWidth:"12rem",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},"& .body-row":{transition:"all 0.3s","&:hover":{cursor:"pointer",background:"#f4f4f4"}}}})(ze.a);function Me(e){var a=i.a.auth().currentUser,t=e.note,o=Object(r.useState)({liked:t.liked,likes:t.likes.length,downloads:t.downloads.length}),c=Object(s.a)(o,2),l=c[0],d=c[1];return n.a.createElement(ye.a,{key:t.name,className:"body-row",onClick:function(){V.a.post("/api/notes/download-note",{note:t.id});var e=l.downloads+1;d(Object(g.a)(Object(g.a)({},l),{},{downloads:e})),i.a.storage().ref().child("notes/".concat(t.id,"/").concat(t.name,".pdf")).getDownloadURL().then((function(e){return window.open(e)}))}},n.a.createElement(Pe.a,null,n.a.createElement("div",{className:"icon-cell"},n.a.createElement(O.a,{path:w.j,size:1,color:"#ffa492"}),n.a.createElement("span",{className:"row-name"},t.name))),n.a.createElement(Pe.a,{align:"center"},t.courseCode),n.a.createElement(Pe.a,{align:"center"},t.author),n.a.createElement(Pe.a,{align:"center",className:"row-hashtag"},t.hashtags.join(", ")),n.a.createElement(Pe.a,{align:"center"},Z()(new i.a.firestore.Timestamp(t.uploadDate._seconds,t.uploadDate._nanoseconds).toDate()).local().format("DD/MM/YYYY, HH:mm")),n.a.createElement(Pe.a,{align:"right"},n.a.createElement("div",{className:"icon-cell like-cell"},n.a.createElement(N.a,{onClick:function(e){e.stopPropagation(),l.liked?V.a.post("/api/notes/unlike-note",{user:null===a||void 0===a?void 0:a.email,note:t.id}):V.a.post("/api/notes/like-note",{user:null===a||void 0===a?void 0:a.email,note:t.id});var r=l.liked?l.likes-1:l.likes+1;d(Object(g.a)(Object(g.a)({},l),{},{liked:!l.liked,likes:r}))}},n.a.createElement(O.a,{path:w.t,size:1,color:l.liked?"#ffa492":"#c5c5c5"})),n.a.createElement("span",{className:"row-name"},l.likes))),n.a.createElement(Pe.a,{align:"right"},n.a.createElement("div",{className:"icon-cell download-cell"},n.a.createElement(N.a,{onClick:function(e){e.stopPropagation(),V.a.post("/api/notes/download-note",{note:t.id});var a,r,n=l.downloads+1;d(Object(g.a)(Object(g.a)({},l),{},{downloads:n})),a=t.id,r=t.name,i.a.storage().ref().child("notes/".concat(a,"/").concat(r,".pdf")).getDownloadURL().then((function(e){var a=new ee.XMLHttpRequest;a.responseType="blob",a.onload=function(e){var t=a.response;Object($.saveAs)(t,"".concat(r,".pdf"))},a.open("GET",e),a.send()})).catch((function(e){return console.log(e)}))}},n.a.createElement(O.a,{path:w.e,size:1,color:"#c5c5c5"})),n.a.createElement("span",{className:"row-name"},l.downloads))))}function Re(){var e=i.a.auth().currentUser,a=Object(r.useContext)(m),t=a.appState,o=a.setAppState,c=Object(E.g)(),l=Object(E.i)(),d=Object(r.useState)(void 0),p=Object(s.a)(d,2),h=p[0],b=p[1],f=Object(r.useState)(!1),v=Object(s.a)(f,2),x=v[0],j=v[1],S=Object(r.useState)(void 0),C=Object(s.a)(S,2),y=C[0],D=C[1];Object(r.useEffect)((function(){o(Object(g.a)(Object(g.a)({},t),{},{reFetch:function(){return z()}})),z()}),[]);var z=function(){V.a.post("/api/notes/course/".concat(l.name),{user:null===e||void 0===e?void 0:e.email}).then((function(e){b(e.data)})).catch((function(e){return u.b.error(e)})),V.a.post("/api/user",{user:null===e||void 0===e?void 0:e.email}).then((function(e){D(e.data.courses),j(e.data.courses.includes(l.name))})).catch((function(e){return u.b.error(e)}))};return n.a.createElement(Ee,null,n.a.createElement("div",{className:"course"},n.a.createElement("div",{className:"course-title"},n.a.createElement(N.a,{className:"back-button",onClick:function(){return c.goBack()}},n.a.createElement(O.a,{path:w.c,size:1.25,color:"#ffa492"})),l.name,y?n.a.createElement(P.a,{onClick:function(){x?V.a.post("/api/courses/finish",{user:null===e||void 0===e?void 0:e.email,course:l.name}).then((function(){j(!1),u.b.success("Finished ".concat(l.name,"!"))})).catch((function(e){return u.b.error(e)})):V.a.post("/api/courses/enrol",{user:null===e||void 0===e?void 0:e.email,course:l.name}).then((function(){j(!0),u.b.success("Enrolled in ".concat(l.name,"!"))})).catch((function(e){return u.b.error(e)}))},className:"enroll-button",startIcon:n.a.createElement(O.a,{path:x?w.q:w.s,size:1.25,color:"#ffa492"})},x?"Finish Course":"Enrol in this course"):n.a.createElement(n.a.Fragment,null)),n.a.createElement(k.a,{in:!0,appear:!0,timeout:1500,classNames:"grow"},n.a.createElement("div",{className:"title-underline"})),n.a.createElement("div",{className:"top-notes"},n.a.createElement("div",{className:"title"},"Top Notes"),n.a.createElement("div",{className:"notes"},n.a.createElement(Ie,{notes:h}))),n.a.createElement("div",{className:"latest-notes"})))}function Be(){var e=Object(E.g)(),a=Object(r.useState)([]),t=Object(s.a)(a,2),o=t[0],c=t[1];return Object(r.useEffect)((function(){V.a.get("/api/courses").then((function(e){c(e.data)}))}),[]),n.a.createElement(Ee,null,n.a.createElement("div",{className:"course-all"},n.a.createElement("div",{className:"course-title"},"All Courses"),n.a.createElement(k.a,{in:!0,appear:!0,timeout:1500,classNames:"grow"},n.a.createElement("div",{className:"title-underline"})),n.a.createElement("div",{className:"course-all-container"},o.map((function(a){return n.a.createElement(M,{key:a,startIcon:n.a.createElement(O.a,{path:w.r,size:1}),onClick:function(){return e.push("/courses/".concat(a))}},a)})))))}function We(e){return n.a.createElement("div",{className:"page-title"},n.a.createElement("div",{className:"title"},e.title),n.a.createElement(k.a,{in:!0,appear:!0,timeout:1500,classNames:"grow"},n.a.createElement("div",{className:"title-underline"})))}function Fe(){var e=i.a.auth().currentUser,a=Object(r.useContext)(m),t=a.appState,o=a.setAppState,c=Object(r.useState)(void 0),l=Object(s.a)(c,2),d=l[0],p=l[1];Object(r.useEffect)((function(){o(Object(g.a)(Object(g.a)({},t),{},{reFetch:function(){return h()}})),h()}),[]);var h=function(){V.a.post("/api/notes/user",{user:null===e||void 0===e?void 0:e.email}).then((function(e){p(e.data)})).catch((function(e){return u.b.error(e)}))};return n.a.createElement(Ee,null,n.a.createElement("div",{className:"my-notes"},n.a.createElement(We,{title:"My Notes"}),n.a.createElement(Ie,{notes:d})))}function Te(){var e=i.a.auth().currentUser,a=Object(r.useContext)(m),t=a.appState,o=a.setAppState,c=Object(r.useState)(void 0),l=Object(s.a)(c,2),d=l[0],p=l[1];Object(r.useEffect)((function(){o(Object(g.a)(Object(g.a)({},t),{},{reFetch:function(){return h()}})),h()}),[]);var h=function(){V.a.post("/api/notes/user/liked",{user:null===e||void 0===e?void 0:e.email}).then((function(e){p(e.data)})).catch((function(e){return u.b.error(e)}))};return n.a.createElement(Ee,null,n.a.createElement("div",{className:"liked-notes"},n.a.createElement(We,{title:"Liked Notes"}),n.a.createElement(Ie,{notes:d})))}function Ue(){var e=Object(E.g)(),a=Object(E.h)(),t=Object(r.useState)({username:"",email:"",password:"",showPassword:!1,usernameError:!1,emailError:!1,passwordError:!1,errorStatus:!1,errorMessage:""}),o=Object(s.a)(t,2),c=o[0],l=o[1],d=function(){var t=new URLSearchParams(a.search),r=t.get("redirect")?t.get("redirect"):"/";e.push(r)},m=function(e){u.b.error(e.message),console.log(e)};return n.a.createElement("div",{className:"register"},n.a.createElement(x,null),n.a.createElement(S,null,n.a.createElement("form",{className:"input-form",onSubmit:function(e){e.preventDefault();var a=!(c.username.length>0),t=!(c.username.length>0);l(Object(g.a)(Object(g.a)({},c),{},{usernameError:a,passwordError:t})),c.username.length>0&&c.password.length>0&&function(e,a,t,r){i.a.auth().createUserWithEmailAndPassword(e,a).then((function(e){return t(e)})).catch((function(e){return r(e)}))}(c.username,c.password,d,m)}},n.a.createElement("div",{className:"input-header"},"Register"),n.a.createElement(k.a,{in:!0,appear:!0,timeout:1e3,classNames:"grow"},n.a.createElement("div",{className:"input-underline"})),n.a.createElement(A,{variant:"outlined",placeholder:"Email",fullWidth:!0,onChange:function(e){l(Object(g.a)(Object(g.a)({},c),{},{username:e.target.value,usernameError:!1,errorStatus:!1}))},inputProps:{form:{autocomplete:"off"}},InputProps:{startAdornment:n.a.createElement(j.a,{position:"start"},n.a.createElement(O.a,{path:w.a,size:1,color:"#dddddd"}))},error:c.usernameError,helperText:c.usernameError?"Please enter a valid username":""}),n.a.createElement(A,{variant:"outlined",placeholder:"Password",fullWidth:!0,type:c.showPassword?"text":"password",onChange:function(e){l(Object(g.a)(Object(g.a)({},c),{},{password:e.target.value,passwordError:!1,errorStatus:!1}))},autoComplete:"off",InputProps:{startAdornment:n.a.createElement(j.a,{position:"start"},n.a.createElement(O.a,{path:w.m,size:1,color:"#dddddd"})),endAdornment:n.a.createElement(j.a,{position:"end"},n.a.createElement(N.a,{"aria-label":"toggle password visibility",onClick:function(){return l(Object(g.a)(Object(g.a)({},c),{},{showPassword:!c.showPassword}))},onMouseDown:function(e){return e.preventDefault()}},c.showPassword?n.a.createElement(O.a,{path:w.h,size:1,color:"#dddddd"}):n.a.createElement(O.a,{path:w.i,size:1,color:"#dddddd"})))},error:c.passwordError,helperText:c.passwordError?"Please enter a valid password":""}),n.a.createElement(L,{className:"login-button",type:"submit",variant:"contained",fullWidth:!0},"Submit"),n.a.createElement("div",{className:"form-footer"},n.a.createElement("div",{className:"footer-text",onClick:function(){return e.push("/login")}},"I already have an account")))))}var Ye=t(163);function He(e){var a=e.component,t=Object(Ye.a)(e,["component"]),r=Object(E.g)(),o=i.a.auth().currentUser;return n.a.createElement(E.b,Object.assign({},t,{render:function(e){return o?n.a.createElement(a,e):n.a.createElement(E.a,{to:"/login?redirect=".concat(r.location.pathname)})}}))}function Ve(){return n.a.createElement(f.a,null,n.a.createElement(E.d,null,n.a.createElement(He,{exact:!0,path:"/",component:xe}),n.a.createElement(He,{exact:!0,path:"/courses",component:Be}),n.a.createElement(He,{exact:!0,path:"/courses/:name",component:Re}),n.a.createElement(He,{exact:!0,path:"/my-notes",component:Fe}),n.a.createElement(He,{exact:!0,path:"/liked-notes",component:Te}),n.a.createElement(E.b,{path:"/login",component:U}),n.a.createElement(E.b,{path:"/register",component:Ue}),n.a.createElement(E.b,{path:"/404",component:Y}),n.a.createElement(E.a,{to:"/404"})))}i.a.initializeApp(d);var qe=function(){var e=Object(r.useState)({navOpen:!0,search:"",reFetch:function(){}}),a=Object(s.a)(e,2),t=a[0],o=a[1];return p()?n.a.createElement(m.Provider,{value:{appState:t,setAppState:o}},n.a.createElement(u.a,null),n.a.createElement(Ve,null)):n.a.createElement(b,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(349),t(350),t(351);c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(qe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[173,1,2]]]);
//# sourceMappingURL=main.acb50eb6.chunk.js.map