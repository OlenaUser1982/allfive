"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[73],{73:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r,a,u,c,i=t(168),s=t(686),o=s.Z.div(r||(r=(0,i.Z)(["\n\n"]))),f=s.Z.ul(a||(a=(0,i.Z)(["\ndisplay: flex;\nflex-wrap: wrap;\nlist-style: none;\njustify-content: space-between;\nalign-items: center;\ngap: 15px;\n"]))),p=s.Z.h3(u||(u=(0,i.Z)(["\ntext-align: center;\nfont-size: 20px;\nfont-weight: 600;\n"]))),l=s.Z.p(c||(c=(0,i.Z)(["\ntext-align: center;\nfont-size: 15px;\nfont-weight: 500;\n\n"]))),v=t(866),h=t(40),d=t(184),x=function(){var e=(0,h.P4)(),n=e.error,t=e.loading,r=e.cast;return(0,d.jsxs)(o,{children:[t&&(0,d.jsx)(v.Z,{}),n&&(0,d.jsxs)("p",{children:["\u274c Something went wrong - ",n]}),r&&(0,d.jsx)(f,{children:r.length>0?r.map((function(e){return(0,d.jsxs)("li",{children:[(0,d.jsx)(p,{children:e.name}),(0,d.jsxs)(l,{children:["Character: ",e.character]}),(0,d.jsx)("img",{src:e.profile_path?["https://image.tmdb.org/t/p/w500".concat(e.profile_path)]:"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:e.name,width:250})]},e.id)})):(0,d.jsx)("li",{children:"We don't have information about cast"})})]})}},866:function(e,n,t){t(791);var r=t(682),a=t(184);n.Z=function(){return(0,a.jsx)("div",{style:{zIndex:"1000",position:"fixed",left:"45%",top:"44%"},children:(0,a.jsx)(r.p2,{height:"160",width:"160",color:"#4fa94d",ariaLabel:"circles-loading",wrapperStyle:{},wrapperClass:"",visible:!0})})}},40:function(e,n,t){t.d(n,{P4:function(){return v},a1:function(){return f},Cl:function(){return h},fN:function(){return l}});t(806);var r=t(861),a=t(439),u=t(687),c=t.n(u),i=t(791),s=t(689),o=t(390),f=function(){var e=(0,s.UO)().movieId,n=(0,i.useState)(null),t=(0,a.Z)(n,2),u=t[0],f=t[1],p=(0,i.useState)(!1),l=(0,a.Z)(p,2),v=l[0],h=l[1],d=(0,i.useState)(null),x=(0,a.Z)(d,2),g=x[0],w=x[1];return(0,i.useEffect)((function(){var n=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,h(!0),n.next=6,(0,o.hG)(e);case 6:t=n.sent,f(t),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),w("something wrong(");case 13:return n.prev=13,h(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[2,10,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),{movies:u,loading:v,error:g}},p=t(87),l=function(){var e=(0,p.lr)(),n=(0,a.Z)(e,2),t=n[0],u=n[1],s=(0,i.useState)(null),f=(0,a.Z)(s,2),l=f[0],v=f[1],h=(0,i.useState)(null),d=(0,a.Z)(h,2),x=d[0],g=d[1],w=(0,i.useState)(!1),Z=(0,a.Z)(w,2),m=Z[0],b=Z[1],k=t.get("query");return(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(k){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,b(!0),e.next=6,(0,o.XK)(k);case 6:n=e.sent,v(n.results),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),g("something wrong(");case 13:return e.prev=13,b(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[k]),{search:l,error:x,loading:m,handleSubmit:function(e){u({query:e})}}},v=function(){var e=(0,i.useState)(null),n=(0,a.Z)(e,2),t=n[0],u=n[1],f=(0,i.useState)(!1),p=(0,a.Z)(f,2),l=p[0],v=p[1],h=(0,i.useState)(null),d=(0,a.Z)(h,2),x=d[0],g=d[1],w=(0,s.UO)().movieId;return(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,v(!0),e.next=6,(0,o.k8)(w);case 6:n=e.sent,g(n.cast),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),u("something wrong(");case 13:return e.prev=13,v(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[w]),{error:t,loading:l,cast:x}},h=function(){var e=(0,i.useState)(null),n=(0,a.Z)(e,2),t=n[0],u=n[1],f=(0,i.useState)(!1),p=(0,a.Z)(f,2),l=p[0],v=p[1],h=(0,i.useState)([]),d=(0,a.Z)(h,2),x=d[0],g=d[1],w=(0,s.UO)().movieId;return(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,v(!0),e.next=6,(0,o.oV)(w);case 6:n=e.sent,g(n.results),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),u("something wrong(");case 13:return e.prev=13,v(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[w]),{error:t,loading:l,reviews:x}}},806:function(e,n,t){t.d(n,{F:function(){return o}});var r=t(861),a=t(439),u=t(687),c=t.n(u),i=t(791),s=t(390),o=function(){var e=(0,i.useState)([]),n=(0,a.Z)(e,2),t=n[0],u=n[1],o=(0,i.useState)(null),f=(0,a.Z)(o,2),p=f[0],l=f[1],v=(0,i.useState)(!1),h=(0,a.Z)(v,2),d=h[0],x=h[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,(0,s.Tg)();case 4:n=e.sent,u(n.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),l("something wrong(");case 11:return e.prev=11,x(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),{movies:t,error:p,loading:d}}},390:function(e,n,t){t.d(n,{Tg:function(){return s},XK:function(){return o},hG:function(){return f},k8:function(){return p},oV:function(){return l}});var r=t(861),a=t(687),u=t.n(a),c=t(294);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="4eede4a470802f6f0ed7ee55539b1602",s=function(){var e=(0,r.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(i,"&query=").concat(n,"&include_adult=false"));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"?api_key=").concat(i));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/credits?api_key=").concat(i));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/reviews?api_key=").concat(i));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=73.de56c2d6.chunk.js.map