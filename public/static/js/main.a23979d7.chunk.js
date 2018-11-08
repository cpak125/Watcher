(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{249:function(e,t,a){e.exports=a(435)},254:function(e,t,a){},435:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(48),i=a.n(c),s=(a(254),a(17)),o=a(18),l=a(20),u=a(19),p=a(21),d=a(450),h=a(452),m=a(454),v=a(443),f=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Landing Page"),r.a.createElement("p",null,"App description"),r.a.createElement(v.a,{to:"/users"},r.a.createElement("button",null,"Enter")))}}]),t}(n.Component),b=a(15),g=a.n(b),O=a(22),w=a(31),E=a(23),j=a.n(E),y=a(32),x=a(58),k=a(446),C=a(447),M=a(449),S=a(445);function _(){var e=Object(w.a)(["\n    &&& {\n        width: 50vw;\n        margin:auto;\n    }\n"]);return _=function(){return e},e}function U(){var e=Object(w.a)(["\n    &&& {\n        width: 30vw; \n        margin: auto;  \n    }\n"]);return U=function(){return e},e}var A=Object(y.a)(k.a)(U()),D=Object(y.a)(C.a)(_()),N=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={newUser:{name:"",age:"",location:""},modalOpen:!1},a.handleOpen=function(){return a.setState({modalOpen:!0})},a.handleChange=function(e){var t=Object(x.a)({},a.state.newUser);t[e.target.name]=e.target.value,a.setState({newUser:t})},a.handleSubmit=function(e){e.preventDefault();var t=Object(x.a)({},a.state.newUser);a.props.addNewUser(t),a.setState({newUser:{name:"",age:"",location:""}}),a.setState({modalOpen:!1})},a.addNewUserModal=function(){return r.a.createElement(D,{trigger:r.a.createElement(M.a,{onClick:a.handleOpen},"(+)"),open:a.state.modalOpen},r.a.createElement(C.a.Content,{form:"true"},r.a.createElement(A,{onSubmit:a.handleSubmit},r.a.createElement(k.a.Field,{inline:!0},r.a.createElement("label",null,"Name:"),r.a.createElement(S.a,{fluid:!0,onChange:a.handleChange,type:"text",name:"name",value:a.state.newUser.name,placeholder:"Name"})),r.a.createElement(k.a.Field,{inline:!0},r.a.createElement("label",null,"Age:  "),r.a.createElement(S.a,{fluid:!0,onChange:a.handleChange,type:"text",name:"age",value:a.state.newUser.age,placeholder:"Age"})),r.a.createElement(k.a.Field,{inline:!0},r.a.createElement("label",null,"Location:"),r.a.createElement(S.a,{fluid:!0,onChange:a.handleChange,type:"text",name:"location",value:a.state.newUser.location,placeholder:"City, State"})),r.a.createElement(M.a,{className:"update",type:"submit",value:"Add Post"},"Submit"))))},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.addNewUserModal()}}]),t}(n.Component);function R(){var e=Object(w.a)(["\nmargin:auto;\n font-size: 20px;\n display:flex;\n flex-direction: column;\n align-content: space-between;\n align-items: center;\n "]);return R=function(){return e},e}function F(){var e=Object(w.a)(["\n display: flex;\n flex-direction: column;\n align-items: center;\n "]);return F=function(){return e},e}var H=y.a.div(F()),B=y.a.div(R()),L=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={users:[]},a.fetchUsers=Object(O.a)(g.a.mark(function e(){var t;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("/api/users");case 2:t=e.sent,a.setState({users:t.data});case 4:case"end":return e.stop()}},e,this)})),a.addNewUser=function(){var e=Object(O.a)(g.a.mark(function e(t){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.post("/api/users",t);case 2:a.fetchUsers();case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(O.a)(g.a.mark(function e(){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchUsers();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.users.map(function(e,t){return r.a.createElement(v.a,{to:"/users/".concat(e.id),key:t},e.name," ")});return r.a.createElement("div",null,r.a.createElement(H,null,r.a.createElement("h1",null,"All Users",r.a.createElement(N,{addNewUser:this.addNewUser}))),r.a.createElement(B,null,e))}}]),t}(n.Component),I=a(451),Q=a(448);function P(){var e=Object(w.a)(["\n    &&& {\n        width: 50vw;\n        margin:auto;\n        padding-bottom: 10px;\n    }\n"]);return P=function(){return e},e}function z(){var e=Object(w.a)(["\n    &&& {\n        width: 30vw; \n        margin: auto;  \n    }\n"]);return z=function(){return e},e}var J=Object(y.a)(k.a)(z()),T=Object(y.a)(C.a)(P()),W=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={user:{},modalOpen:!1},a.componentDidMount=function(){a.getUser()},a.getUser=Object(O.a)(g.a.mark(function e(){var t,n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.userId,e.next=3,j()("/api/users/".concat(t));case 3:n=e.sent,a.setState({user:n.data});case 5:case"end":return e.stop()}},e,this)})),a.handleOpen=function(){return a.setState({modalOpen:!0})},a.handleChange=function(e){var t=Object(x.a)({},a.state.user);t[e.target.name]=e.target.value,a.setState({user:t})},a.handleUpdate=function(){var e=Object(O.a)(g.a.mark(function e(t){var n,r;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.props.userId,r=a.state.user,e.next=4,j.a.put("/api/users/".concat(n),r);case 4:a.setState({modalOpen:!1});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.editUserModal=function(){return r.a.createElement(T,{trigger:r.a.createElement(M.a,{color:"blue",fluid:!0,onClick:a.handleOpen},"Edit"),open:a.state.modalOpen},r.a.createElement(C.a.Content,{form:"true"},r.a.createElement(J,{onSubmit:a.handleUpdate},r.a.createElement(k.a.Field,{inline:!0},r.a.createElement("label",null,"Name:"),r.a.createElement(S.a,{fluid:!0,onChange:a.handleChange,type:"text",name:"name",value:a.state.user.name})),r.a.createElement(k.a.Field,{inline:!0},r.a.createElement("label",null,"Age:  "),r.a.createElement(S.a,{fluid:!0,onChange:a.handleChange,type:"text",name:"age",value:a.state.user.age})),r.a.createElement(k.a.Field,{inline:!0},r.a.createElement("label",null,"Location:"),r.a.createElement(S.a,{fluid:!0,onChange:a.handleChange,type:"text",name:"location",value:a.state.user.location})),r.a.createElement(M.a,{floated:"right",type:"submit",value:"Update"},"Update"))))},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.editUserModal()}}]),t}(n.Component);function q(){var e=Object(w.a)(["\n&&&{\n    display:flex;\n    flex-direction:column;\n    justify-content: space-around;\n    align-items:left;\n    font-size: 18px;\n}\n"]);return q=function(){return e},e}function V(){var e=Object(w.a)(["\n    &&&{\n        width: 30vw;\n        height: 300px;\n    }\n"]);return V=function(){return e},e}function $(){var e=Object(w.a)(["\n    padding-top: 20px;\n    margin: auto;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n"]);return $=function(){return e},e}var G=y.a.div($()),K=Object(y.a)(Q.a)(V()),X=Object(y.a)(Q.a.Content)(q()),Y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:{},redirect:!1},a.fetchData=Object(O.a)(g.a.mark(function e(){var t,n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params.id,e.next=3,j.a.get("/api/users/".concat(t));case 3:n=e.sent,a.setState({user:n.data});case 5:case"end":return e.stop()}},e,this)})),a.deleteUser=Object(O.a)(g.a.mark(function e(){var t;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params.id,e.next=3,j.a.delete("/api/users/".concat(t));case 3:a.setState({redirect:!0});case 4:case"end":return e.stop()}},e,this)})),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(O.a)(g.a.mark(function e(){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.fetchData();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;if(this.state.redirect)return r.a.createElement(I.a,{to:"/users"});var t=this.state.user;return r.a.createElement("div",null,r.a.createElement(G,null,r.a.createElement("h1",null,t.name,"'s Profile"),r.a.createElement(K,null,r.a.createElement(X,null,r.a.createElement(Q.a.Description,null,r.a.createElement("b",null,"Name:")," ",t.name),r.a.createElement(Q.a.Description,null,r.a.createElement("b",null,"Age:")," ",t.age),r.a.createElement(Q.a.Description,null," ",r.a.createElement("b",null,"Location:")," ",t.location),r.a.createElement(Q.a.Content,{extra:!0},r.a.createElement(W,{userId:this.props.match.params.id,push:this.props.history.push,fetchData:this.fetchData()})),r.a.createElement(Q.a.Content,{extra:!0},r.a.createElement(M.a,{fluid:!0,color:"red",onClick:function(){return e.deleteUser()}},"Delete"))))),r.a.createElement(v.a,{to:"/users/".concat(t.id,"/movies")},r.a.createElement(M.a,null,"Movies")),r.a.createElement(v.a,{to:"/user/".concat(t.id,"/tv_shows")},r.a.createElement(M.a,null,"TV Shows")))}}]),t}(n.Component),Z=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={searchQuery:""},a.inputChangeHandler=function(e){a.setState({searchQuery:e.target.value})},a.searchButtonHandler=Object(O.a)(g.a.mark(function e(){var t;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://api.themoviedb.org/3/search/movie?query=".concat(a.state.searchQuery,"&api_key=0832ef538fd529b929aeda8e57b1c0ed"));case 2:t=e.sent,console.log(t.data),a.props.transferResult(t),a.props.toggleSearching();case 6:case"end":return e.stop()}},e,this)})),a.newSearchHandler=function(){a.props.toggleSearching()},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.props.searching?r.a.createElement("input",{type:"text",value:this.state.searchQuery,onChange:this.inputChangeHandler}):null,this.props.searching?r.a.createElement("button",{onClick:this.searchButtonHandler},"Search"):r.a.createElement("button",{onClick:this.newSearchHandler},"New Search"))}}]),t}(n.Component),ee=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).addNewMovie=function(e,t,n,r,c){a.props.addNewMovie(e,t,n,r,c),a.props.toggleAddMovie()},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("img",{src:this.props.poster_path,alt:"movie poster"})),r.a.createElement("div",null,this.props.title),r.a.createElement("div",null,this.props.release_date),r.a.createElement("div",null,this.props.overview),r.a.createElement("div",null,this.props.movie_id),r.a.createElement("div",null,r.a.createElement(M.a,{onClick:function(){return e.addNewMovie(e.props.title,e.props.movie_id,e.props.release_date,e.props.overview,e.props.poster_path)}},"Add to List")))}}]),t}(n.Component),te=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.searchResults.map(function(t,a){var n="https://image.tmdb.org/t/p/w200/".concat(t.poster_path);return r.a.createElement(ee,{key:a,title:t.title,movie_id:t.id,release_date:t.release_date,poster_path:n,overview:t.overview,addNewMovie:e.props.addNewMovie,toggleAddMovie:e.props.toggleAddMovie})});return r.a.createElement("div",null,t)}}]),t}(n.Component),ae=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={searching:!0,searchResults:[]},a.transferResult=function(e){a.setState({searchResults:e.data.results})},a.toggleSearching=function(){a.setState({searching:!a.state.searching})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Add Movie"),r.a.createElement(Z,{transferResult:this.transferResult,searching:this.state.searching,toggleSearching:this.toggleSearching}),this.state.searching?null:r.a.createElement(te,{searchResults:this.state.searchResults,addNewMovie:this.props.addNewMovie,toggleAddMovie:this.props.toggleAddMovie}))}}]),t}(n.Component),ne=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:{},movies:[],addMovie:!1,newMovie:{title:"",movie_id:"",release_date:"",overview:"",poster_path:""}},a.fetchData=Object(O.a)(g.a.mark(function e(){var t,n,r;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params.user_id,e.next=3,j.a.get("/api/users/".concat(t));case 3:return n=e.sent,e.next=6,j.a.get("/api/users/".concat(t,"/movies"));case 6:r=e.sent,a.setState({user:n.data,movies:r.data});case 8:case"end":return e.stop()}},e,this)})),a.toggleAddMovie=function(){a.setState({addMovie:!a.state.addMovie})},a.addNewMovie=function(){var e=Object(O.a)(g.a.mark(function e(t,n,r,c,i){var s;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(s=Object(x.a)({},a.state.newMovie)).title=t,s.movie_id=n,s.release_date=r,s.overview=c,s.poster_path=i,e.next=8,a.setState({newMovie:s});case 8:a.handleSubmitMovie();case 9:case"end":return e.stop()}},e,this)}));return function(t,a,n,r,c){return e.apply(this,arguments)}}(),a.handleSubmitMovie=Object(O.a)(g.a.mark(function e(){var t;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params.user_id,e.next=3,j.a.post("/api/users/".concat(t,"/movies"),a.state.newMovie);case 3:return e.next=5,a.fetchData();case 5:a.setState({newMovie:{title:"",movie_id:"",release_date:"",overview:"",poster_path:""}});case 6:case"end":return e.stop()}},e,this)})),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(O.a)(g.a.mark(function e(){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchData();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.user,t=this.state.movies.map(function(t,a){return r.a.createElement(v.a,{key:a,to:"/users/".concat(e.id,"/movies/").concat(t.id)},r.a.createElement(Q.a,null,r.a.createElement(Q.a.Content,null," Title: ",t.title," "),r.a.createElement(Q.a.Content,null," Release Date: ",t.release_date," "),r.a.createElement(Q.a.Content,null,r.a.createElement("img",{src:t.poster_path,alt:"movie poster"})," ")))});return r.a.createElement("div",null,r.a.createElement("h1",null,e.name,"'s Movies",r.a.createElement(M.a,{onClick:this.toggleAddMovie},"(+)")),this.state.addMovie?r.a.createElement(ae,{toggleAddMovie:this.toggleAddMovie,addNewMovie:this.addNewMovie}):"",r.a.createElement("div",null,t))}}]),t}(n.Component),re=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={movie:{},movieDetails:{}},a.fetchData=Object(O.a)(g.a.mark(function e(){var t,n,r;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params.user_id,n=a.props.match.params.id,e.next=4,j.a.get("/api/users/".concat(t,"/movies/").concat(n));case 4:return r=e.sent,a.setState({movie:r.data}),e.next=8,a.fetchMovieDetails();case 8:case"end":return e.stop()}},e,this)})),a.fetchMovieDetails=Object(O.a)(g.a.mark(function e(){var t,n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.movie.movie_id,e.next=3,j.a.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=0832ef538fd529b929aeda8e57b1c0ed"));case 3:n=e.sent,a.setState({movieDetails:n.data});case 5:case"end":return e.stop()}},e,this)})),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(O.a)(g.a.mark(function e(){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.fetchData();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.movie,t=this.state.movieDetails,a=t.genres;return console.log(a),r.a.createElement("div",null,r.a.createElement("p",null,"movie id:",e.movie_id),r.a.createElement("p",null,"Budget: ",t.budget," "))}}]),t}(n.Component),ce=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(h.a,null,r.a.createElement(m.a,{exact:!0,path:"/",component:f}),r.a.createElement(m.a,{exact:!0,path:"/users",component:L}),r.a.createElement(m.a,{exact:!0,path:"/users/:id",component:Y}),r.a.createElement(m.a,{exact:!0,path:"/users/:user_id/movies",component:ne}),r.a.createElement(m.a,{exact:!0,path:"/users/:user_id/movies/:id",component:re})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[249,2,1]]]);
//# sourceMappingURL=main.a23979d7.chunk.js.map