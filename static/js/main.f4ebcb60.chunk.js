(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(7),s=n.n(i),r=(n(14),n(8)),c=n(1),l=n(2),u=n(4),d=n(3),f=n(5),h=(n(15),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={text:""},n.onInputChange=function(e){n.setState({text:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),0!==n.state.text.length?(n.props.addTask(n.state.text),n.setState({text:""})):alert("Enter task first!")},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"row"},o.a.createElement("form",{onSubmit:this.handleSubmit,className:"valign-wrapper col s12"},o.a.createElement("div",{className:"input-field col s8"},o.a.createElement("input",{onChange:this.onInputChange,placeholder:"Input task",id:"taskInput",type:"text",value:this.state.text,className:"validate"})),o.a.createElement("div",{className:" col s4"},o.a.createElement("button",{className:"btn waves-effect waves-light",type:"submit",name:"action"},"Submit",o.a.createElement("i",{className:"material-icons right"},"send")))))}}]),t}(a.Component)),m=function(e){var t=e.ourTasks,n=e.deleteTask,a=t.length?t.map((function(e){return o.a.createElement("div",{className:"collection-item row valign-wrapper",key:e.id},o.a.createElement("p",{className:"col s10 left-align"},e.description),o.a.createElement("button",{onClick:function(){n(e.id)},type:"button",className:"btn-floating btn-large waves-effect waves-light red cos s2"},o.a.createElement("i",{className:"material-icons"},"delete")))})):o.a.createElement("p",{className:"center"},"No tasks at this moment");return o.a.createElement("div",{className:"collection"},a)},p=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={tasks:[{id:1,description:"Wash dishes"},{id:2,description:"Do laundry"}]},n.onAdd=function(e){var t={id:Math.random(),description:e},a=[].concat(Object(r.a)(n.state.tasks),[t]);n.setState({tasks:a})},n.onDelete=function(e){var t=n.state.tasks.filter((function(t){return t.id!==e}));n.setState({tasks:t})},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container center-align"},o.a.createElement("h1",null,"Todo List"),o.a.createElement(h,{addTask:this.onAdd}),o.a.createElement(m,{ourTasks:this.state.tasks,deleteTask:this.onDelete}))}}]),t}(a.Component),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(o.a.createElement(p,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/TodoList",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/TodoList","/service-worker.js");v?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):g(t,e)}))}}()},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.f4ebcb60.chunk.js.map