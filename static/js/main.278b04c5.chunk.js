(this.webpackJsonpknowledge=this.webpackJsonpknowledge||[]).push([[0],{276:function(t,n,e){},277:function(t,n,e){},473:function(t,n,e){"use strict";e.r(n);var r=e(5),a=e(0),i=e.n(a),c=e(24),o=e.n(c),s=(e(276),e(277),e(278),e(279),e(280),e(11)),u=e(26),l=e(19);function d(t){var n=[];return t.reverse().forEach((function(t){n.includes(t)||n.push(t)})),n.reverse()}var f=e(31),h=e(32);function v(t,n,e,r){for(var a=0,i=Object.keys(r);a<i.length;a++){var c=i[a],o=[].concat(Object(u.a)(e),[c]);if(n(c,t))return o;var s=v(t,n,o,r[c]);if(s)return s}return null}function b(t,n){return Object.entries(n).map((function(n){var e=Object(l.a)(n,2),r=e[0],a=e[1],i=b(t,a);return t(r,i)}))}var p=function(){function t(){Object(f.a)(this,t),this.m={}}return Object(h.a)(t,[{key:"add",value:function(t){var n=this.m;return t.forEach((function(t){null==n[t]&&(n[t]={}),n=n[t]})),n}},{key:"dfs",value:function(t,n){return v(t,n,[],this.m)}},{key:"walk",value:function(t){return b(t,this.m)}}]),t}();var j=/^\s*/;function m(t){var n=new p,e=[];return t.split("\n").forEach((function(t){var r=t.trim();if(r.length>0){var a=function(t){return t.match(j)[0].length/2}(t);e=e.slice(0,a);var i=[].concat(Object(u.a)(e),[r]);n.add(i),e[a]=r}})),n}function y(t){return t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function O(t,n){return y(t).includes(n)}var g="links",x="",k="no matches";function w(t){return t.replaceAll("\\/","\u02de").split("/").map((function(t){return t.replaceAll("\u02de","/")}))}function C(t){return function(n){if(n==x)return function(){var n=new p;return Object.keys(t).forEach((function(t){n.add(w(t))})),n}();var e,r=y(n).trim(),a=function(n){return Object.keys(t).filter((function(t){if(O(t,n)){var e=w(t);if(y(e[e.length-1].trim())==n)return!0}return!1}))[0]}(r),i=a?m(t[a]):new p,c=[].concat(Object(u.a)((e=r,Object.keys(t).filter((function(t){return O(t,e)})).map(w))),Object(u.a)(function(n){var e=[];return Object.entries(t).forEach((function(t){var r=Object(l.a)(t,2),a=r[0],i=r[1];if(O(i,n)){var c=w(a),o=m(i).dfs(n,O)||[];e.push([].concat(Object(u.a)(c),Object(u.a)(o)))}})),e}(r))),o=Object.keys(i.m)[0];return c.filter((function(t){return!a||function(t,n){var e,r,a=n.slice(0,t.length);return r=t,!((e=a).length===r.length&&e.every((function(t,n){return t===r[n]})))}(w(a),t)})).forEach((function(t){return i.add(a?[o,g].concat(Object(u.a)(t)):t)})),i}}var z=Object(a.createContext)({query:null,setQuery:null,setQueryBack:null,setQueryForward:null,maps:null,history:null,setMaps:null,historyPos:0}),S={query:x,history:[x],historyPos:0};var E=function(){return Object(a.useContext)(z)};function I(t){var n={},e="";t.length>0&&t.split("\n").forEach((function(t){">"===t[0]?(e=t.substring(2),n[e]=[]):e.length>0&&n[e].push(t)}));var r={};return Object.entries(n).forEach((function(t){var n=Object(l.a)(t,2),e=n[0],a=n[1];r[e]=a.join("\n")})),r}var M=e(56),R=e(55),N=e(30),q=e(129),D=e(21),A=(e(27),e(23));e(124);function P(t,n,e){var r=document.createElement(t);return n&&Object.entries(n).forEach((function(t){var n=Object(l.a)(t,2),e=n[0],a=n[1];r[e]=a})),e&&Object.entries(e).forEach((function(t){var n=Object(l.a)(t,2),e=n[0],a=n[1];r.setAttribute(e,a)})),r}!function(t){var n={}}((function(t){document.head.append(P("link",{rel:"preload",as:"script",href:t}))}));function L(t){var n=t.data;return Math.max(6-2*n.d,1.5)}var F=[];var H=function(){function t(n,e){var r=this;Object(f.a)(this,t),this.options=void 0,this.state=void 0,this.svg=void 0,this.styleNode=void 0,this.g=void 0,this.zoom=void 0,this.viewHooks=void 0,["handleZoom","handleClick","handleClickCircle"].forEach((function(t){r[t]=r[t].bind(r)})),this.viewHooks={transformHtml:new D.a},this.svg=n.datum?n:N.d(n),this.styleNode=this.svg.append("style"),this.zoom=N.e().on("zoom",this.handleZoom),this.options=Object(s.a)({duration:500,nodeFont:"300 16px/20px sans-serif",nodeMinHeight:16,spacingVertical:5,spacingHorizontal:80,autoFit:!0,fitRatio:.95,color:function(t){return t.l||"blue"},paddingX:8,onClick:function(t){}},e),this.state={id:this.options.id||Object(D.e)()},this.g=this.svg.append("g").attr("class","".concat(this.state.id,"-g")),this.updateStyle(),this.svg.call(this.zoom)}return Object(h.a)(t,[{key:"getStyleContent",value:function(){var t=this.options,n=t.style,e=t.nodeFont,r=this.state.id,a="function"===typeof n?n(r):"";return".".concat(r," { color: #fffafa; }\n.").concat(r," a { color: #0097e6; }\n.").concat(r," a:hover { color: #00a8ff; }\n.").concat(r,"-g > path { fill: none; }\n.").concat(r,"-fo > div { display: inline-block; font: ").concat(e,"; white-space: nowrap; }\n.").concat(r,"-fo code { padding: .2em .4em; font-size: calc(1em - 2px); color: #555; background-color: #f0f0f0; border-radius: 2px; }\n.").concat(r,"-fo del { text-decoration: line-through; }\n.").concat(r,"-fo em { font-style: italic; }\n.").concat(r,"-fo strong { font-weight: bolder; }\n.").concat(r,"-fo pre { margin: 0; }\n.").concat(r,"-fo pre[class*=language-] { padding: 0; }\n.").concat(r,"-g > g { cursor: pointer; }\n").concat(a,"\n")}},{key:"updateStyle",value:function(){this.svg.attr("class",Object(D.b)(this.svg.attr("class"),this.state.id)),this.styleNode.text(this.getStyleContent())}},{key:"handleZoom",value:function(t){var n=t.transform;this.g.attr("transform",n)}},{key:"handleClick",value:function(t,n){var e=Date.now();if(!(null!=this.state.lastClickMs&&e-this.state.lastClickMs<=500)){var r=n.data;this.options.onClick(r)}}},{key:"handleClickCircle",value:function(t,n){var e;this.state.lastClickMs=Date.now();var r=n.data;r.p=Object(s.a)(Object(s.a)({},r.p),{},{f:!(null===(e=r.p)||void 0===e?void 0:e.f)}),this.renderData(n.data)}},{key:"initializeData",value:function(t){var n=0,e=this.options,r=e.nodeFont,a=e.color,i=e.nodeMinHeight,c=this.state.id,o=document.createElement("div"),u="".concat(c,"-container");o.className=Object(D.b)(o.className,"".concat(c,"-fo"),u);var l=document.createElement("style");l.textContent="\n".concat(this.getStyleContent(),"\n.").concat(u," {\n  position: absolute;\n  width: 0;\n  height: 0;\n  top: -100px;\n  left: -100px;\n  overflow: hidden;\n  font: ").concat(r,";\n}\n.").concat(u," > div {\n  display: inline-block;\n}\n"),document.body.append(l,o),Object(D.g)(t,(function(t,e){var r;t.c=null===(r=t.c)||void 0===r?void 0:r.map((function(t){return Object(s.a)({},t)})),n+=1;var i=document.createElement("div");i.innerHTML=t.v,o.append(i),t.p=Object(s.a)(Object(s.a)({},t.p),{},{i:n,el:i}),a(t),e()}));var d=Object(D.c)(o.childNodes);this.viewHooks.transformHtml.call(this,d),Object(D.g)(t,(function(t,n,e){var r,a=t.p.el.getBoundingClientRect();t.v=t.p.el.innerHTML,t.p.s=[Math.ceil(a.width),Math.max(Math.ceil(a.height),i)],t.p.k="".concat((null===e||void 0===e||null===(r=e.p)||void 0===r?void 0:r.i)||"",".").concat(t.p.i,":").concat(t.v),n()})),o.remove(),l.remove()}},{key:"setOptions",value:function(t){Object.assign(this.options,t)}},{key:"setData",value:function(t,n){t||(t=Object(s.a)({},this.state.data)),this.state.data=t,this.initializeData(t),n&&this.setOptions(n),this.renderData()}},{key:"renderData",value:function(t){var n,e,r=this;if(this.state.data){var a=this.options,i=a.spacingHorizontal,c=a.paddingX,o=a.spacingVertical,s=a.autoFit,u=a.color,d=this.state.id,f=Object(q.a)().children((function(t){var n;return!(null===(n=t.p)||void 0===n?void 0:n.f)&&t.c})).nodeSize((function(t){var n=Object(l.a)(t.data.p.s,2),e=n[0];return[n[1],e+(e?2*c:0)+i]})).spacing((function(t,n){return t.parent===n.parent?o:2*o})),h=f.hierarchy(this.state.data);f(h),function(t,n){Object(D.g)(t,(function(t,e){t.ySizeInner=t.ySize-n,t.y+=n,e()}),"children")}(h,i);var v=h.descendants().reverse(),b=h.links(),p=N.a(),j=N.c(v,(function(t){return t.x-t.xSize/2})),m=N.b(v,(function(t){return t.x+t.xSize/2})),y=N.c(v,(function(t){return t.y})),O=N.b(v,(function(t){return t.y+t.ySizeInner}));Object.assign(this.state,{minX:j,maxX:m,minY:y,maxY:O}),s&&this.fit();var g=t&&v.find((function(n){return n.data===t}))||h,x=null!==(n=g.data.p.x0)&&void 0!==n?n:g.x,k=null!==(e=g.data.p.y0)&&void 0!==e?e:g.y,w=this.g.selectAll(Object(D.d)("g")).data(v,(function(t){return t.data.p.k})),C=w.enter().append("g").attr("transform",(function(t){return"translate(".concat(k+g.ySizeInner-t.ySizeInner,",").concat(x+g.xSize/2-t.xSize,")")})).on("click",this.handleClick),z=this.transition(w.exit());z.select("rect").attr("width",0).attr("x",(function(t){return t.ySizeInner})),z.select("foreignObject").style("opacity",0),z.attr("transform",(function(t){return"translate(".concat(g.y+g.ySizeInner-t.ySizeInner,",").concat(g.x+g.xSize/2-t.xSize,")")})).remove();var S=w.merge(C);this.transition(S).attr("transform",(function(t){return"translate(".concat(t.y,",").concat(t.x-t.xSize/2,")")}));var E=S.selectAll(Object(D.d)("rect")).data((function(t){return[t]}),(function(t){return t.data.p.k})).join((function(t){return t.append("rect").attr("x",(function(t){return t.ySizeInner})).attr("y",(function(t){return t.xSize-L(t)/2})).attr("width",0).attr("height",L)}),(function(t){return t}),(function(t){return t.remove()}));this.transition(E).attr("x",-1).attr("width",(function(t){return t.ySizeInner+2})).attr("fill",(function(t){return u(t.data)}));var I=S.selectAll(Object(D.d)("circle")).data((function(t){return t.data.c?[t]:[]}),(function(t){return t.data.p.k})).join((function(t){return t.append("circle").attr("stroke-width","1.5").attr("cx",(function(t){return t.ySizeInner})).attr("cy",(function(t){return t.xSize})).attr("r",0).on("click",r.handleClickCircle)}),(function(t){return t}),(function(t){return t.remove()}));this.transition(I).attr("r",6).attr("stroke",(function(t){return u(t.data)})).attr("fill",(function(t){var n;return(null===(n=t.data.p)||void 0===n?void 0:n.f)&&t.data.c?u(t.data):"#fff"}));var M=S.selectAll(Object(D.d)("foreignObject")).data((function(t){return[t]}),(function(t){return t.data.p.k})).join((function(t){var n=t.append("foreignObject").attr("class","".concat(d,"-fo")).attr("x",c).attr("y",0).style("opacity",0).attr("height",(function(t){return t.xSize}));return n.append("xhtml:div").select((function(t){var n=t.data.p.el.cloneNode(!0);return this.replaceWith(n),n})).attr("xmlns","http://www.w3.org/1999/xhtml"),n}),(function(t){return t}),(function(t){return t.remove()})).attr("width",(function(t){return Math.max(0,t.ySizeInner-2*c)}));this.transition(M).style("opacity",1);var R=this.g.selectAll(Object(D.d)("path")).data(b,(function(t){return t.target.data.p.k})).join((function(t){var n=[k+g.ySizeInner,x+g.xSize/2];return t.insert("path","g").attr("d",p({source:n,target:n}))}),(function(t){return t}),(function(t){var n=[g.y+g.ySizeInner,g.x+g.xSize/2];return r.transition(t).attr("d",p({source:n,target:n})).remove()}));this.transition(R).attr("stroke",(function(t){return u(t.target.data)})).attr("stroke-width",(function(t){return L(t.target)})).attr("d",(function(t){var n=[t.source.y+t.source.ySizeInner,t.source.x+t.source.xSize/2],e=[t.target.y,t.target.x+t.target.xSize/2];return p({source:n,target:e})})),v.forEach((function(t){t.data.p.x0=t.x,t.data.p.y0=t.y}))}}},{key:"transition",value:function(t){var n=this.options.duration;return t.transition().duration(n)}},{key:"fit",value:function(){var t=this.svg.node().getBoundingClientRect(),n=t.width,e=t.height,r=this.options.fitRatio,a=this.state,i=a.minX,c=a.maxX,o=a.minY,s=a.maxY-o,u=c-i,l=Math.min(n/s*r,e/u*r,2),d=N.f.translate((n-s*l)/2-o*l,(e-u*l)/2-i*l).scale(l);return this.transition(this.svg).call(this.zoom.transform,d).end().catch(D.f)}},{key:"rescale",value:function(t){var n=this.svg.node(),e=n.getBoundingClientRect(),r=e.width/2,a=e.height/2,i=N.g(n),c=i.translate((r-i.x)*(1-t)/i.k,(a-i.y)*(1-t)/i.k).scale(t);return this.transition(this.svg).call(this.zoom.transform,c).end().catch(D.f)}}],[{key:"create",value:function(n,e,r){var a=new t(n,e);return r&&(a.setData(r),a.fit()),function(t,n){var e,r=function(){e||(e=Promise.resolve().then((function(){e=void 0,n()})).catch(D.f))};t.forEach((function(n){n.then(r,D.f).then((function(){var e=t.indexOf(n);e>=0&&t.splice(e,1)}))}))}(F,(function(){a.setData()})),a}}]),t}(),B=function(t){Object(M.a)(e,t);var n=Object(R.a)(e);function e(t){var r;return Object(f.a)(this,e),(r=n.call(this,t)).myRef=void 0,r.markmap=void 0,r.myRef=i.a.createRef(),r}return Object(h.a)(e,[{key:"componentDidMount",value:function(){var t=this.myRef.current,n=this.props.data;this.markmap=H.create(t,{onClick:this.props.onClick},n)}},{key:"componentDidUpdate",value:function(){var t=this.props.data;this.markmap.setData(t)}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return Object(r.jsx)("svg",{style:{height:"100%",width:"100%"},ref:this.myRef})}}]),e}(i.a.Component),Q=e(91),T=["BLUE","GREEN","ORANGE","RED","COBALT","FOREST","GOLD","INDIGO","LIME","ROSE","SEPIA","TURQUOISE","VERMILION","VIOLET"],U=Q.a.BLACK;function G(t,n){var e=T[t%T.length],r=n<4?5-n:1;return e="".concat(e).concat(r),Q.a[e]||U}function X(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments.length>2?arguments[2]:void 0,r=t.v,a=t.c,i=n>0?G(e,n-1):U,c="."==r?"":r,o=Object(s.a)(Object(s.a)({},t),{},{c:null,v:c,d:n,l:i});return(c==g||n>1)&&(o.p=Object(s.a)(Object(s.a)({},o.p),{},{f:!0})),a&&a.length>0&&(o.c=a.map((function(t,r){return X(t,n+1,null==e?r:e)}))),o}function V(t,n){return{v:t,c:n}}function W(t,n){var e=t.walk(V);e.length;switch(e.length){case 0:e={v:n,c:[{v:k}]};break;case 1:e=e[0];break;default:e=Object(s.a)(Object(s.a)({},e[0]),{},{v:n,c:e})}return X(e)}var Y=function(){var t=E(),n=t.query,e=t.setQuery,i=t.maps,c=Object(a.useMemo)((function(){return null==i?null:C(i)}),[i]),o=Object(a.useMemo)((function(){return null==c?null:W(c(n),n)}),[c,n]),s=Object(a.useCallback)((function(t){var n,r=t.v;(n=r)!=g&&n!=x&&n!=k&&e("".concat(r))}),[e]);return Object(r.jsx)(B,{data:o,onClick:s})},J=e(125),K=e.n(J),Z={fpsLimit:60,interactivity:{detectsOn:"canvas",events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{bubble:{distance:400,duration:2,opacity:.8,size:40},push:{quantity:4},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:150,enable:!0,opacity:.3,width:1},collisions:{enable:!1},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:3,straight:!1},number:{density:{enable:!0,value_area:1200},value:80},opacity:{value:.5},shape:{type:"circle"},size:{random:!0,value:3}},detectRetina:!0},_=function(){return Object(r.jsx)(K.a,{className:"tsparticles background",options:Z})},$=function(){return Object(r.jsxs)("div",{id:"main-view",children:[Object(r.jsx)("div",{className:"content",children:Object(r.jsx)(Y,{})}),Object(r.jsx)(_,{})]})},tt=e(65),nt=e(477);var et=function(t){var n=t.text,e=Object(tt.a)(t,["text"]);return Object(r.jsx)(nt.a,Object(s.a)(Object(s.a)({className:"breadcrumb"},e),{},{children:Object(r.jsx)("small",{children:n})}))};function rt(){var t=E(),n=t.history,e=t.historyPos,a=t.setQuery;if(n.length<=1)return null;var i=function(t,n){return t.map((function(t){return{onClick:function(){n(t)},text:t==x?"Home":t}}))}(n.slice(0,n.length+e),a);return Object(r.jsx)(nt.b,{minVisibleItems:2,breadcrumbRenderer:et,items:i})}var at=e(16),it=e(4),ct=function(t){var n=t.label,e=Object(tt.a)(t,["label"]);return e.disabled?Object(r.jsx)(nt.c,Object(s.a)({},e)):Object(r.jsx)(nt.l,{content:n,position:at.a.RIGHT,children:Object(r.jsx)(nt.c,Object(s.a)({},e))})},ot=Object(r.jsx)(nt.c,{icon:"search",minimal:!0}),st=function(){var t=E(),n=t.query,e=t.setQuery;return Object(r.jsx)(nt.g,{rightElement:ot,className:it.a.MINIMAL,type:"text",value:n,onChange:function(t){return e(t.target.value)}})},ut=function(t){return function(){window.open("https://duckduckgo.com/?q=!+wikipedia+pt+en+".concat(t))}},lt=function(t){return function(){window.open("https://www.google.com.br/search?tbm=isch&hl=en&source=hp&biw=1024&bih=673&q=".concat(t,"&btnG=Search+Images&gbv=2&oq=&aq=&aqi=&aql=&gs_l=&gws_rd=ssl"))}},dt=function(t){return function(){window.open("https://duckduckgo.com/?q=!+thefreedictionary+".concat(t))}},ft=function(t){return function(){window.open("https://duckduckgo.com/?q=!wolf+".concat(t))}},ht=function(){window.open("https://github.com/denisidoro/move-reminder")},vt=function(){return Object(r.jsx)(nt.h,{fixedToTop:!0,style:{background:Q.a.BLACK},children:Object(r.jsxs)(nt.j,{className:"bp3-dark",style:{width:"100%"},children:[Object(r.jsx)(nt.k,{children:Object(r.jsx)(nt.f,{icon:"graph"})}),Object(r.jsx)(nt.i,{}),Object(r.jsx)("div",{style:{width:"20%"},children:Object(r.jsx)(st,{})}),Object(r.jsx)(nt.i,{}),Object(r.jsx)("div",{style:{width:"40%"},children:Object(r.jsx)(rt,{})})]})})},bt=function(){var t=E(),n=t.query,e=t.setQuery,i=t.setQueryBack,c=t.setQueryForward,o=t.history,s=t.historyPos,u=n==x,l=o.length+s<=1,d=o.length<=1||s>=0,f=Object(a.useCallback)((function(){return e(x)}),[e]);return Object(r.jsxs)(nt.d,{style:{position:"absolute",background:Q.a.BLACK,paddingTop:"4em",paddingBottom:"0.5em",left:0,top:0,borderRadius:"0 0 2em 0",zIndex:4,width:"3em"},minimal:!0,vertical:!0,children:[Object(r.jsxs)("span",{className:"button-group",children:[Object(r.jsx)(ct,{label:"Home",icon:"home",onClick:f}),Object(r.jsx)(ct,{label:"Undo",icon:"undo",disabled:l,onClick:i}),Object(r.jsx)(ct,{label:"Redo",icon:"redo",disabled:d,onClick:c})]}),Object(r.jsx)(nt.e,{}),Object(r.jsxs)("span",{className:"button-group",children:[Object(r.jsx)(ct,{label:"Wikipedia",icon:"globe",disabled:u,onClick:ut(n)}),Object(r.jsx)(ct,{label:"Farlex Dictionary",icon:"book",disabled:u,onClick:dt(n)}),Object(r.jsx)(ct,{label:"Google Images",icon:"camera",disabled:u,onClick:lt(n)}),Object(r.jsx)(ct,{label:"Wolfram Alpha",icon:"function",disabled:u,onClick:ft(n)})]}),Object(r.jsx)(nt.e,{}),Object(r.jsx)(ct,{label:"Help",icon:"help",onClick:ht}),Object(r.jsx)(nt.e,{})]})};var pt=function(t){var n=function(t){var n,e=new URLSearchParams(t),r={},a=Object(A.a)(e.entries());try{for(a.s();!(n=a.n()).done;){var i=Object(l.a)(n.value,2),c=i[0],o=i[1];r[c]=o}}catch(s){a.e(s)}finally{a.f()}return r}(window.location.search).url||"mindmaps.txt",e=function(e){t(I(function(t,n){var e=t.replaceAll("/","\\/");return"> Unable to get/".concat(e,"\n   Failed to download mindmap\n> Exception/").concat(n,"\n   Javascript exception")}(n,e)))};fetch(n).then((function(t){return t.text()})).catch(e).then((function(n){return t(I(n))})).catch(e)};var jt=function(){var t=function(){var t=Object(a.useState)(S),n=Object(l.a)(t,2),e=n[0],r=n[1],i=Object(a.useState)(null),c=Object(l.a)(i,2),o=c[0],f=c[1],h=Object(a.useCallback)((function(t){r((function(n){if(t==x)return S;var e=n.history.slice(0,n.history.length+n.historyPos);return{query:t,history:d([].concat(Object(u.a)(e),[t])),historyPos:0}}))}),[r,e]),v=Object(a.useCallback)((function(){r((function(t){var n=t.historyPos-1,e=t.history[t.history.length-1+n];return null==e?S:Object(s.a)(Object(s.a)({},t),{},{query:e,historyPos:n})}))}),[r,e]),b=Object(a.useCallback)((function(){r((function(t){var n=t.historyPos+1,e=t.history[t.history.length-1+n];return null==e?t:Object(s.a)(Object(s.a)({},t),{},{query:e,historyPos:n})}))}),[r,e]);return{query:e.query,setQuery:h,setQueryBack:v,setQueryForward:b,history:e.history,maps:o,setMaps:f,historyPos:e.historyPos}}();return Object(a.useEffect)((function(){return pt(t.setMaps)}),[]),Object(r.jsx)(z.Provider,{value:t,children:Object(r.jsxs)("div",{className:"App full-height",children:[Object(r.jsx)(vt,{}),Object(r.jsx)(bt,{}),Object(r.jsx)($,{})]})})},mt=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,478)).then((function(n){var e=n.getCLS,r=n.getFID,a=n.getFCP,i=n.getLCP,c=n.getTTFB;e(t),r(t),a(t),i(t),c(t)}))};console.clear(),o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(jt,{})}),document.getElementById("root")),mt()}},[[473,1,2]]]);
//# sourceMappingURL=main.278b04c5.chunk.js.map