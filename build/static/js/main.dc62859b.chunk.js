(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{163:function(e,t,a){e.exports=a(362)},168:function(e,t,a){},362:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(7),m=a.n(o),i=(a(168),a(170),a(96)),s=a.n(i),c=a(142),l=a(143),u=a(144),h=a(160),f=a(145),d=a(161),p=a(146),g=a.n(p),y=a(98),v=a.n(y),N=a(365),C=a(95),w=a(364),b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).onChangeName=function(e){a.setState({name:e.target.value})},a.onChangeImageName=function(e){a.setState({imageName:e.target.value})},a.onSubmit=function(e){var t="?";a.state.name&&(t+="name="+a.state.name+"&"),a.state.imageName&&(t+="imageName="+a.state.imageName),fetch("http://107.170.200.206/api/user/getScores"+t).then(function(e){return e.json()}).then(function(e){var t=[];for(var n in e){var r=e[n];r.key=n;var o=new Date(r.startTime);r.startTime=v()(o).format("MMMM Do YYYY, h:mm:ss a"),t.push(r)}a.setState({data:e})})},a.state={data:[],name:"",imageName:""},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(c.a)(s.a.mark(function e(){var t=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:fetch("http://107.170.200.206/api/user/getScores").then(function(e){return e.json()}).then(function(e){var a=[];for(var n in e){var r=e[n];r.key=n;var o=new Date(r.startTime);r.startTime=v()(o).format("MMMM Do YYYY, h:mm:ss a"),a.push(r)}t.setState({data:e})});case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.scoreboard},r.a.createElement("header",{className:"scoreboardHeader"},r.a.createElement("div",{className:e.header},r.a.createElement("h1",null,"Troy High School Cyber Scoreboard"))),r.a.createElement("div",{className:e.parameters},r.a.createElement(N.a,{placeholder:"Enter your name",value:this.state.name,onChange:this.onChangeName,className:e.parameterItem}),r.a.createElement(N.a,{placeholder:"Enter the image name",value:this.state.imageName,onChange:this.onChangeImageName,className:e.parameterItem}),r.a.createElement(C.a,{type:"primary",onClick:this.onSubmit,className:e.parameterItem},"Submit")),r.a.createElement(w.a,{dataSource:this.state.data,columns:[{title:"Name",dataIndex:"name",key:"name",sorter:function(e,t){return e.name.localeCompare(t.name)}},{title:"Image Name",dataIndex:"imageName",key:"imageName",sorter:function(e,t){return e.imageName.localeCompare(t.imageName)}},{title:"Score",dataIndex:"score",key:"score",sorter:function(e,t){return e.score-t.score}},{title:"Total Time",dataIndex:"totalTime",key:"totalTime",sorter:function(e,t){return e.totalTime.localeCompare(t.totalTime)}},{title:"Start Time",dataIndex:"startTime",key:"startTime"}]}),r.a.createElement("div",{className:e.footerContainer},r.a.createElement("p",{className:e.footer},"Scorpio By: Clement Chan, Jimmy Li"),r.a.createElement("p",{className:e.footer},"Ubuntu Scoring By: Christo Bakis"),r.a.createElement("p",{className:e.footer},"Scoreboard By: Jimmy Li")))}}]),t}(n.Component),S=g()({scoreboard:{display:"flex",flexDirection:"column",justifyContent:"center",padding:"1em"},header:{display:"flex",flexDirection:"row",justifyContent:"center"},parameters:{display:"flex",flexDirection:"row",marginBottom:"1em"},parameterItem:{marginLeft:"1em",marginRight:"1em"},footerContainer:{display:"flex",flexDirection:"column"},footer:{display:"flex",flexDirection:"row",justifyContent:"center",marginBottom:0,fontSize:"0.75em"}})(b);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[163,2,1]]]);
//# sourceMappingURL=main.dc62859b.chunk.js.map