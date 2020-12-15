(this["webpackJsonpget-scripts"]=this["webpackJsonpget-scripts"]||[]).push([[0],{29:function(e,t,n){},59:function(e,t,n){},77:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n.n(r),i=n(25),s=n.n(i),o=(n(58),n(9)),l=n(4),d=n(5),h=n(8),j=n(7),u=(n(59),n(6)),b=n(26),m=n(27);function p(){var e=Object(b.a)(["\n  table{\n  border-collapse: collapse;\n  margin: 25px 0;\n  font-size: 1.rem;\n  width: 600px;\n  border-radius: 5px 5px 0 0;\n  overflow: hidden;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15); \n}\n  thead tr{\n  background-color: #C9082A;\n  color: white;\n  font-weight: bold;\n  }\n  td {\n      padding: 12px 15px;\n  }\n  tbody tr{\n    border-bottom: 1.75px solid #C9082A;\n  }\n  tbody tr:nth-of-type(even) {\n      background-color: white;\n  }\n  body {\n    background-color: #F2F2F2;\n  }\n  \n  "]);return p=function(){return e},e}var O=Object(m.a)(p()),x=n(20),f=n(10),g=n.n(f),v=new(function(){function e(){Object(l.a)(this,e),this.auth=g.a.create({baseURL:"https://basketball-training-tracker.herokuapp.com",withCredentials:!0})}return Object(d.a)(e,[{key:"signup",value:function(e,t,n,a){return this.auth.post("/auth/signup",{username:e,team:t,email:n,password:a}).then((function(e){return e.data}))}},{key:"login",value:function(e,t){return this.auth.post("/auth/login",{username:e,password:t}).then((function(e){return e.data}))}},{key:"logout",value:function(){return this.auth.get("/auth/logout").then((function(e){return e.data}))}},{key:"me",value:function(){return this.auth.get("/auth/me").then((function(e){return e.data}))}}]),e}()),y=c.a.createContext(),C=y.Consumer,P=y.Provider,w=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isLoggedIn:!1,isLoading:!0,user:null},e.signup=function(t,n,a,r){v.signup(t,n,a,r).then((function(t){return e.setState({isLoggedIn:!0,user:t})})).catch((function(t){e.setState({isLoggedIn:!1,user:null})}))},e.login=function(t,n){v.login(t,n).then((function(t){return e.setState({isLoggedIn:!0,user:t})})).catch((function(t){e.setState({isLoggedIn:!1,user:null})}))},e.logout=function(){v.logout().then((function(){return e.setState({isLoggedIn:!1,user:null})})).catch((function(e){return console.log(e)}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;v.me().then((function(t){return e.setState({isLoggedIn:!0,user:t,isLoading:!1})})).catch((function(t){return e.setState({isLoggedIn:!1,user:null,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoggedIn,n=e.isLoading,r=e.user,c=this.signup,i=this.login,s=this.logout;return n?Object(a.jsx)("p",{children:"Loading"}):Object(a.jsx)(P,{value:{isLoggedIn:t,isLoading:n,user:r,signup:c,login:i,logout:s},children:this.props.children})}}]),n}(c.a.Component),k=function(e){return function(t){Object(h.a)(r,t);var n=Object(j.a)(r);function r(){return Object(l.a)(this,r),n.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){var t=this;return Object(a.jsx)(C,{children:function(n){var r=n.isLoggedIn,c=n.isLoading,i=n.user,s=n.signup,o=n.login,l=n.logout;return Object(a.jsx)(e,Object(x.a)(Object(x.a)({},t.props),{},{isLoggedIn:r,isLoading:c,user:i,signup:s,login:o,logout:l}))}})}}]),r}(c.a.Component)},A=n(47),S=n.n(A),N=n(48),D=n.n(N),T=n(50),L=n.n(T),E=n(49),F=n.n(E),I=(n(77),k(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:this.props.user?Object(a.jsxs)("div",{className:"navbar",children:[Object(a.jsxs)(o.b,{to:"/team",id:"team-btn",children:[Object(a.jsx)("p",{className:"navbar-p",children:this.props.user.team}),Object(a.jsx)(S.a,{})]}),Object(a.jsxs)(o.b,{to:"/calendar",id:"calendar-btn",children:[Object(a.jsx)("p",{className:"navbar-p",children:"Calendar"}),Object(a.jsx)(D.a,{})]}),Object(a.jsxs)(o.b,{to:"/team/stats",id:"stats-btn",children:[Object(a.jsx)("p",{className:"navbar-p",children:"Stats"}),Object(a.jsx)(F.a,{})]}),Object(a.jsxs)(o.b,{id:"logout-btn",to:"/",onClick:this.props.logout,children:[Object(a.jsx)("p",{className:"navbar-p",children:"Exit"}),Object(a.jsx)(L.a,{})]})]}):null})}}]),n}(r.Component)));n(83);var M=k((function(){return Object(a.jsxs)("div",{className:"home",children:[Object(a.jsx)("h1",{children:"Home Page"}),Object(a.jsx)(o.b,{to:"/login",children:Object(a.jsx)("button",{className:"navbar-button",children:"Login"})}),Object(a.jsx)("br",{}),Object(a.jsx)(o.b,{to:"/signup",children:Object(a.jsx)("button",{className:"navbar-button",children:"Sign Up"})})]})})),_=n(11),U=k(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={username:"",team:"",email:"",password:""},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(_.a)({},a,r))},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,a=n.username,r=n.team,c=n.email,i=n.password;e.props.signup(a,r,c,i)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.team,r=e.email,c=e.password;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Sign Up"}),Object(a.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(a.jsx)("label",{children:"Username:"}),Object(a.jsx)("input",{type:"text",name:"username",value:t,onChange:this.handleChange}),Object(a.jsx)("label",{children:"Team:"}),Object(a.jsx)("input",{type:"text",name:"team",value:n,onChange:this.handleChange}),Object(a.jsx)("label",{children:"email:"}),Object(a.jsx)("input",{type:"text",name:"email",value:r,onChange:this.handleChange}),Object(a.jsx)("label",{children:"Password:"}),Object(a.jsx)("input",{type:"password",name:"password",value:c,onChange:this.handleChange}),Object(a.jsx)("input",{type:"submit",value:"Signup"})]}),Object(a.jsx)("p",{children:"Already have account?"}),Object(a.jsx)(o.b,{to:"/login",children:" Login"})]})}}]),n}(r.Component)),z=k(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,a=n.username,r=n.password;e.props.login(a,r)},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(_.a)({},a,r))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Login"}),Object(a.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(a.jsx)("label",{children:"Username:"}),Object(a.jsx)("input",{type:"text",name:"username",value:t,onChange:this.handleChange}),Object(a.jsx)("label",{children:"Password:"}),Object(a.jsx)("input",{type:"password",name:"password",value:n,onChange:this.handleChange}),Object(a.jsx)("input",{type:"submit",value:"Login"})]})]})}}]),n}(r.Component)),J=(n(29),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.name,r=t.number,c=t.email;g.a.post("https://basketball-training-tracker.herokuapp.com/api/players",{name:n,number:r,email:c},{withCredentials:!0}).then((function(){a.props.getPlayers(),a.setState({name:"",number:"",email:""})})).catch((function(e){return console.log(e)}))},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(_.a)({},n,r))},a.state={name:"",number:"",email:""},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{className:"add-player-form",children:Object(a.jsxs)("form",{className:"form-inline",onSubmit:this.handleFormSubmit,children:[Object(a.jsx)("label",{children:"Name:"}),Object(a.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:function(t){return e.handleChange(t)}}),Object(a.jsx)("label",{children:"Number:"}),Object(a.jsx)("input",{className:"number",type:"text",name:"number",value:this.state.number,onChange:function(t){return e.handleChange(t)}}),Object(a.jsx)("label",{children:"Email:"}),Object(a.jsx)("input",{type:"text",name:"email",value:this.state.email,onChange:function(t){return e.handleChange(t)}}),Object(a.jsx)("button",{type:"submit",children:"Add"})]})})}}]),n}(r.Component)),W=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleFormSubmit=function(e){e.preventDefault();var t=a.props.playerToEdit._id,n=a.state,r=n.name,c=n.number,i=n.email;g.a.put("https://basketball-training-tracker.herokuapp.com"+"/api/players/".concat(t),{name:r,number:c,email:i},{withCredentials:!0}).then((function(){a.props.getPlayers(),a.setState({name:"",number:"",email:""})})).catch((function(e){return console.log(e)}))},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(_.a)({},n,r))},a.state={name:"",number:"",email:""},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.playerToEdit,t=e.name,n=e.number,a=e.email;this.setState({name:t,number:n,email:a})}},{key:"render",value:function(){var e=this,t=this.state,n=t.name,r=t.number,c=t.email;return Object(a.jsx)("div",{className:"add-player-form",children:Object(a.jsxs)("form",{className:"form-inline",onSubmit:this.handleFormSubmit,children:[Object(a.jsx)("label",{children:"Name:"}),Object(a.jsx)("input",{type:"text",name:"name",value:n,onChange:function(t){return e.handleChange(t)}}),Object(a.jsx)("label",{children:"Number:"}),Object(a.jsx)("input",{className:"number",type:"text",name:"number",value:r,onChange:function(t){return e.handleChange(t)}}),Object(a.jsx)("label",{children:"Email:"}),Object(a.jsx)("input",{type:"text",name:"email",value:c,onChange:function(t){return e.handleChange(t)}}),Object(a.jsx)("button",{type:"submit",children:"Edit"})]})})}}]),n}(r.Component),q=Object(u.g)(W),B=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleFormSubmit=function(e){e.preventDefault();var t=a.props.playerToDelete._id;g.a.delete("https://basketball-training-tracker.herokuapp.com"+"/api/players/".concat(t),{withCredentials:!0}).then((function(){a.props.getPlayers(),a.setState({name:"",number:"",email:""})})).catch((function(e){return console.log(e)}))},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(_.a)({},n,r))},a.state={name:"",number:"",email:""},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.playerToDelete,t=e.name,n=e.number,a=e.email;this.setState({name:t,number:n,email:a})}},{key:"render",value:function(){var e=this,t=this.state,n=t.name,r=t.number,c=t.email;return Object(a.jsx)("div",{className:"add-player-form",children:Object(a.jsxs)("form",{className:"form-inline",onSubmit:this.handleFormSubmit,children:[Object(a.jsx)("label",{children:"Name:"}),Object(a.jsx)("input",{type:"text",name:"name",value:n,onChange:function(t){return e.handleChange(t)}}),Object(a.jsx)("label",{children:"Number:"}),Object(a.jsx)("input",{className:"number",type:"text",name:"number",value:r,onChange:function(t){return e.handleChange(t)}}),Object(a.jsx)("label",{children:"Email:"}),Object(a.jsx)("input",{type:"text",name:"email",value:c,onChange:function(t){return e.handleChange(t)}}),Object(a.jsx)("button",{className:"delete-button",type:"submit",children:"Delete"})]})})}}]),n}(r.Component),H=Object(u.g)(B),R=(n(84),k(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={players:[],displayEdit:!1,displayAdd:!1,displayDelete:!1,playerToEdit:{},playerToDelete:{},team:""},e.getPlayers=function(){g.a.get("https://basketball-training-tracker.herokuapp.com/api/team",{withCredentials:!0}).then((function(t){console.log(t),e.setState({players:t.data.players,team:t.data.team,displayEdit:!1,displayAdd:!1,displayDelete:!1})}))},e.showAdd=function(){e.setState({displayAdd:!e.state.displayAdd})},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getPlayers()}},{key:"showEdit",value:function(e){this.setState({displayEdit:!this.state.displayEdit,playerToEdit:e})}},{key:"showDelete",value:function(e){this.setState({displayDelete:!this.state.displayDelete,playerToDelete:e})}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[this.state.displayAdd?Object(a.jsx)(J,{getPlayers:this.getPlayers}):null,this.state.displayEdit?Object(a.jsx)(q,{getPlayers:this.getPlayers,playerToEdit:this.state.playerToEdit}):null,this.state.displayDelete?Object(a.jsx)(H,{getPlayers:this.getPlayers,playerToDelete:this.state.playerToDelete}):null,Object(a.jsxs)("div",{className:"team-list",children:[Object(a.jsx)("h1",{children:"Squad"}),Object(a.jsx)("main",{className:"main",children:Object(a.jsx)("div",{children:Object(a.jsxs)("table",{children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{className:"head",children:[Object(a.jsx)("th",{children:"Player"}),Object(a.jsx)("th",{children:"number"}),Object(a.jsx)("th",{children:"email"}),Object(a.jsx)("th",{}),Object(a.jsx)("th",{})]})}),Object(a.jsx)("tbody",{children:this.state.players.map((function(t){return Object(a.jsxs)("tr",{className:"text",children:[Object(a.jsx)("td",{children:t.name}),Object(a.jsx)("td",{children:t.number}),Object(a.jsx)("td",{children:t.email}),Object(a.jsx)("td",{children:Object(a.jsx)("button",{className:"button",onClick:function(n){return e.showEdit(t)},children:"Edit Player"})}),Object(a.jsx)("td",{children:Object(a.jsx)("button",{className:"button-delete",onClick:function(n){return e.showDelete(t)},children:"Delete Player"})})]},t._id)}))})]})})}),Object(a.jsx)("button",{className:"button-add",onClick:this.showAdd,children:"Add a new player"})]})]})}}]),n}(r.Component))),Y=n(51);n(85);function G(){var e=Object(b.a)(["\n  width: 130px;\n  height: 30px;\n  border-radius: 6px;\n  background-color: #C9082A;\n  align-item: center;\n  color: white;\n  font-size: 0.9rem;\n  font-weight: bold;\n  \n  \n  "]);return G=function(){return e},e}var K=m.b.button(G()),Q=(n(86),k(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={date:(new Date).toLocaleDateString(),trainings:[]},e.onChange=function(t){e.setState({date:t.toLocaleDateString()})},e.getTrainings=function(){g.a.get("https://basketball-training-tracker.herokuapp.com/api/training",{withCredentials:!0}).then((function(t){e.setState({trainings:t.data}),console.log(e.state)}))},e.addTraining=function(t){t.preventDefault(),g.a.post("https://basketball-training-tracker.herokuapp.com/api/training",{date:e.state.date},{withCredentials:!0}).then((function(t){e.getTrainings()})).catch((function(e){return console.log(e)}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getTrainings()}},{key:"render",value:function(){var e,t=this,n=this.state.trainings.filter((function(e){return e.date===t.state.date})).map((function(e){return e.date})).toString(),r=this.state.trainings.filter((function(e){return e.date===t.state.date})).map((function(e){return e._id})).toString();return e=n.includes(this.state.date)?Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{className:"calendar-message",children:"You have a training scheduled for this date"}),Object(a.jsx)(o.b,{to:"/training/".concat(r),children:Object(a.jsx)(K,{children:"Edit training"})})]}):Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{className:"calendar-message",children:"Schedule a training for this date"}),Object(a.jsx)(K,{onClick:this.addTraining,children:"Add training"})]}),Object(a.jsx)("main",{className:"main",children:Object(a.jsx)("div",{className:"main-div",children:Object(a.jsxs)("div",{children:[Object(a.jsx)(Y.a,{className:"calendar",onChange:this.onChange}),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{children:n}),e]})]})})})}}]),n}(r.Component))),V=(n(87),n(28)),X=(n(88),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleFormSubmit=function(e){e.preventDefault();var t=a.props.performanceToEdit._id,n=a.state,r=n.attendance,c=n.coachComments,i=n.ftAttempted,s=n.ftConverted,o=n.twoPAttempted,l=n.twoPConverted,d=n.threePAttempted,h=n.threePConverted;g.a.put("https://basketball-training-tracker.herokuapp.com"+"/api/performance/".concat(t),{attendance:r,coachComments:c,ftAttempted:i,ftConverted:s,twoPAttempted:o,twoPConverted:l,threePAttempted:d,threePConverted:h},{withCredentials:!0}).then((function(){a.props.getPerformances(),a.setState({attendance:!0,coachComments:"",ftAttempted:"",ftConverted:"",twoPAttempted:"",twoPConverted:"",threePAttempted:"",threePConverted:""})})).catch((function(e){return console.log(e)}))},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(_.a)({},n,r))},a.state={attendance:!0,coachComments:"",ftAttempted:"",ftConverted:"",twoPAttempted:"",twoPConverted:"",threePAttempted:"",threePConverted:""},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.performanceToEdit,t=e.attendance,n=e.coachComments,a=e.ftAttempted,r=e.ftConverted,c=e.twoPAttempted,i=e.twoPConverted,s=e.threePAttempted,o=e.threePConverted;this.setState({attendance:t,coachComments:n,ftAttempted:a,ftConverted:r,twoPAttempted:c,twoPConverted:i,threePAttempted:s,threePConverted:o})}},{key:"render",value:function(){var e=this,t=this.state,n=(t.attendance,t.coachComments),r=t.ftAttempted,c=t.ftConverted,i=t.twoPAttempted,s=t.twoPConverted,o=t.threePAttempted,l=t.threePConverted;return Object(a.jsx)("div",{className:"main-div",children:Object(a.jsx)("form",{onSubmit:this.handleFormSubmit,children:Object(a.jsxs)("table",{children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Comments"}),Object(a.jsx)("th",{children:"FT"}),Object(a.jsx)("th",{children:"FTA"}),Object(a.jsx)("th",{children:"2P"}),Object(a.jsx)("th",{children:"2PA"}),Object(a.jsx)("th",{children:"3P"}),Object(a.jsx)("th",{children:"3PA"}),Object(a.jsx)("th",{})]})}),Object(a.jsx)("tbody",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsx)("textarea",{type:"text",name:"coachComments",value:n,onChange:function(t){return e.handleChange(t)}})}),Object(a.jsx)("td",{children:Object(a.jsx)("input",{type:"number",name:"ftConverted",value:c,onChange:function(t){return e.handleChange(t)}})}),Object(a.jsx)("td",{children:Object(a.jsx)("input",{type:"number",name:"ftAttempted",value:r,onChange:function(t){return e.handleChange(t)}})}),Object(a.jsx)("td",{children:Object(a.jsx)("input",{type:"number",name:"twoPConverted",value:s,onChange:function(t){return e.handleChange(t)}})}),Object(a.jsx)("td",{children:Object(a.jsx)("input",{type:"number",name:"twoPAttempted",value:i,onChange:function(t){return e.handleChange(t)}})}),Object(a.jsx)("td",{children:Object(a.jsx)("input",{type:"number",name:"threePConverted",value:l,onChange:function(t){return e.handleChange(t)}})}),Object(a.jsx)("td",{children:Object(a.jsx)("input",{type:"number",name:"threePAttempted",value:o,onChange:function(t){return e.handleChange(t)}})}),Object(a.jsx)("td",{children:Object(a.jsx)("button",{type:"submit",children:"Submit"})})]})})]})})})}}]),n}(r.Component)),Z=Object(u.g)(X),$=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).getPerformances=function(){var e=a.props.match.params.id;g.a.get("https://basketball-training-tracker.herokuapp.com"+"/api/training/".concat(e),{withCredentials:!0}).then((function(e){var t=e.data.stats;e.data;a.setState({stats:Object(V.a)(t),isDisplayed:!1})})).catch((function(e){return console.log(e)}))},a.showStats=function(e){a.setState({isDisplayed:!a.state.isDisplayed,performanceToEdit:e})},a.deleteTraining=function(){var e=a.props.match.params.id;g.a.delete("https://basketball-training-tracker.herokuapp.com"+"/api/training/".concat(e),{withCredentials:!0}).then((function(){return a.props.history.push("/calendar")})).catch((function(e){return console.log(e)}))},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(_.a)({},n,r))},a.state={isDisplayed:!1,performanceToEdit:{},stats:[]},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getPerformances()}},{key:"render",value:function(){var e=this;return console.log(this.state.trainingToEdit),Object(a.jsx)("main",{className:"main",children:Object(a.jsxs)("div",{children:[Object(a.jsxs)("table",{children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Player"}),Object(a.jsx)("th",{children:"Feedback"}),Object(a.jsx)("th",{children:"FT"}),Object(a.jsx)("th",{children:"FTA"}),Object(a.jsx)("th",{children:"FT%"}),Object(a.jsx)("th",{children:"2P"}),Object(a.jsx)("th",{children:"2PA"}),Object(a.jsx)("th",{children:"2P%"}),Object(a.jsx)("th",{children:"3P"}),Object(a.jsx)("th",{children:"3PA"}),Object(a.jsx)("th",{children:"3P%"}),Object(a.jsx)("th",{})]})}),Object(a.jsx)("tbody",{children:this.state.stats.map((function(t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)(o.b,{to:"/team/".concat(t.player._id),id:"stats-btn",children:Object(a.jsx)("td",{style:{fontWeight:"bold",color:"black"},children:t.player.name})}),Object(a.jsx)("td",{children:t.coachComments}),Object(a.jsx)("td",{children:t.ftConverted}),Object(a.jsx)("td",{children:t.ftAttempted}),Object(a.jsx)("td",{children:(t.ftConverted/t.ftAttempted*100).toPrecision(3)+"%"}),Object(a.jsx)("td",{children:t.twoPConverted}),Object(a.jsx)("td",{children:t.twoPAttempted}),Object(a.jsx)("td",{children:(t.twoPConverted/t.twoPAttempted*100).toPrecision(3)+"%"}),Object(a.jsx)("td",{children:t.threePConverted}),Object(a.jsx)("td",{children:t.threePAttempted}),Object(a.jsx)("td",{children:(t.threePConverted/t.threePAttempted*100).toPrecision(3)+"%"}),Object(a.jsx)("td",{children:Object(a.jsx)("button",{onClick:function(n){return e.showStats(t)},children:"Edit"})})]},t._id)}))})]}),this.state.isDisplayed?Object(a.jsx)(Z,{getPerformances:this.getPerformances,performanceToEdit:this.state.performanceToEdit}):null,Object(a.jsx)(K,{onClick:this.deleteTraining,children:"Delete Training"})]})})}}]),n}(r.Component),ee=Object(u.g)($),te=k(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={date:"",exercises:"",notes:""},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)("main",{className:"main",children:Object(a.jsx)("div",{children:Object(a.jsx)(ee,{})})})}}]),n}(r.Component)),ne=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={data:[]},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://basketball-training-tracker.herokuapp.com/api/team/stats",{withCredentials:!0}).then((function(t){e.setState({data:Object(V.a)(t.data)})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state.data.reduce((function(e,t){var n=e.filter((function(e){return e.name===t.player.name})).pop()||{name:t.player.name,ftAttempted:0,ftConverted:0,twoPAttempted:0,twoPConverted:0,threePAttempted:0,threePConverted:0};return n.ftAttempted+=t.ftAttempted,n.ftConverted+=t.ftConverted,n.twoPAttempted+=t.twoPAttempted,n.twoPConverted+=t.twoPConverted,n.threePAttempted+=t.threePAttempted,n.threePConverted+=t.threePConverted,e.push(n),e}),[]).filter((function(e,t,n){return n.findIndex((function(t){return t.name===e.name&&t.name===e.name}))===t}));return console.log(e),Object(a.jsxs)("main",{className:"main",children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{children:Object(a.jsxs)("table",{children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Player"}),Object(a.jsx)("th",{children:"FT"}),Object(a.jsx)("th",{children:"FTA"}),Object(a.jsx)("th",{children:"FT%"}),Object(a.jsx)("th",{children:"2P"}),Object(a.jsx)("th",{children:"2PA"}),Object(a.jsx)("th",{children:"2P%"}),Object(a.jsx)("th",{children:"3P"}),Object(a.jsx)("th",{children:"3PA"}),Object(a.jsx)("th",{children:"3P%"})]})}),Object(a.jsx)("tbody",{children:e.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{style:{fontWeight:"bold"},children:e.name}),Object(a.jsx)("td",{children:e.ftConverted}),Object(a.jsx)("td",{children:e.ftAttempted}),Object(a.jsx)("td",{children:(e.ftConverted/e.ftAttempted*100).toPrecision(3)+"%"}),Object(a.jsx)("td",{children:e.twoPConverted}),Object(a.jsx)("td",{children:e.twoPAttempted}),Object(a.jsx)("td",{children:(e.twoPConverted/e.twoPAttempted*100).toPrecision(3)+"%"}),Object(a.jsx)("td",{children:e.threePConverted}),Object(a.jsx)("td",{children:e.threePAttempted}),Object(a.jsx)("td",{children:(e.threePConverted/e.threePAttempted*100).toPrecision(3)+"%"})]},e.name)}))})]})})]})}}]),n}(r.Component),ae=Object(u.g)(ne),re=(n(89),k(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("main",{className:"center",children:[Object(a.jsx)("h1",{children:"Overall Performance"}),Object(a.jsx)("div",{children:Object(a.jsx)(ae,{})})]})}}]),n}(r.Component)));var ce=k((function(e){var t=e.isLoggedIn,n=e.isLoading,r=e.component,c=e.exact,i=e.path;return n?"Loading":Object(a.jsx)(u.b,{exact:c,path:i,render:function(e){return t?Object(a.jsx)(u.a,{to:"/team"}):t?void 0:Object(a.jsx)(r,Object(x.a)({},e))}})}));var ie=k((function(e){var t=e.isLoggedIn,n=e.isLoading,r=e.component,c=e.exact,i=e.path;return n?"Loading":Object(a.jsx)(u.b,{exact:c,path:i,render:function(e){return t?t?Object(a.jsx)(r,Object(x.a)({},e)):void 0:Object(a.jsx)(u.a,{to:"/login"})}})})),se=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(I,{}),Object(a.jsx)(O,{}),Object(a.jsxs)(u.d,{children:[Object(a.jsx)(ce,{exact:!0,path:"/",component:M}),Object(a.jsx)(ce,{exact:!0,path:"/signup",component:U}),Object(a.jsx)(ce,{exact:!0,path:"/login",component:z}),Object(a.jsx)(ie,{exact:!0,path:"/calendar",component:Q}),Object(a.jsx)(ie,{exact:!0,path:"/training/:id",component:te}),Object(a.jsx)(ie,{exact:!0,path:"/team",component:R}),Object(a.jsx)(ie,{exact:!0,path:"/team/stats",component:re})]})]})}}]),n}(r.Component);s.a.render(Object(a.jsx)(o.a,{children:Object(a.jsx)(w,{children:Object(a.jsx)(se,{})})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.5514fa71.chunk.js.map