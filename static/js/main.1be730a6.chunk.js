(this.webpackJsonprandomquotemachine=this.webpackJsonprandomquotemachine||[]).push([[0],{18:function(e,t,o){},36:function(e,t,o){},38:function(e,t,o){"use strict";o.r(t);var r=o(1),n=o.n(r),a=o(9),i=o.n(a),u=(o(18),o(19),o(20),o(21),o(35),o(10)),s=o(11),l=o(13),c=o(12),d=(o(36),["aliceblue","azure","aqua","antiquewhite","aquamarine","bisque","blanchedalmond","blueviolet","burlywood","cadetblue","chartreuse","coral","cornflowerblue","cornsilk","cyan","darkslateblue","darkslategray","darkcyan","darkgoldenrod","darkkhaki","darkorange","darkorchid","darksalmon","darkseagreen","darkturquoise","deeppink","deepskyblue","dodgerblue","firebrick","forestgreen","fuchsia","gainsboro","gold","goldenrod","gray","green","greenyellow","honeydew","hotpink","indianred","ivory","khaki","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightsteelblue","lime","limegreen","linen","magenta","mediumorchid","mediumaquamarine","mediumpurple","mediumseagreen","mediumspringgreen","mediumturquoise","mediumvioletred","mistyrose","moccasin","navajowhite","olive","olivedrab","orchid","orange","orangered","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","sienna","silver","skyblue","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","yellow","yellowgreen"]),h=o(0),b=function(){return Object(h.jsxs)("div",{id:"footer",children:["All quotes are sourced from ",Object(h.jsx)("a",{className:"link",href:"api.quotable.io/random",children:"quotable"}),", an open source random quotes API created by ",Object(h.jsx)("strong",{children:"lukePeavy"}),"."]})},g=o(6),p=o.n(g),m=o(7),j=o.n(m),v=o(8),q=o.n(v),f={width:15,padding:5},k=function(e){var t="https://codepen.io/niranad/full/RwpGEGM",o=e.quote+" -"+e.author,r={title:"A favorite quote",caption:o,content:t};return Object(h.jsxs)("div",{children:[Object(h.jsx)(q.a,{id:"tweet-quote",url:t,shareText:o}),Object(h.jsx)(p.a,{url:t}),Object(h.jsx)(j.a,{style:f,url:t,title:r.title,caption:r.caption,content:r.content})]})};k.defaultProps={quote:"With wisdom is understanding."};var y=0,x=function(e){Object(l.a)(o,e);var t=Object(c.a)(o);function o(e){var r;return Object(u.a)(this,o),(r=t.call(this,e)).getNextQuote=function(){r.componentDidMount(),r.state.previousQuotes.some((function(e){return e.quote===r.state.quote}))||r.setState((function(e){return{previousQuotes:e.previousQuotes.concat({quote:e.quote,author:e.author})}})),y=r.state.previousQuotes.length+1},r.getPreviousQuote=function(){0!==y&&0!==r.state.previousQuotes.length&&(--y,void 0!==r.state.previousQuotes[y]?r.setState((function(e){return{quote:e.previousQuotes[y].quote,author:e.previousQuotes[y].author}})):r.getPreviousQuote())},r.state={quote:"",author:"",bgColor:"",color:"white",previousQuotes:[]},r}return Object(s.a)(o,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.quotable.io/random").then((function(e){return e.json()})).then((function(t){var o=d[Math.floor(108*Math.random())];return document.body.style.backgroundColor=o,e.setState({quote:t.content,author:t.author,bgColor:o,color:o})})).catch((function(t){return e.setState({quote:"Error: please check your internet connection",author:"Unavailable"})}))}},{key:"render",value:function(){var e={backgroundColor:this.state.bgColor,color:"black"};return this.state.quote?Object(h.jsxs)("div",{id:"container",className:"container-fluid",style:{backgroundColor:this.state.bgColor},children:[Object(h.jsxs)("div",{id:"quote-box",children:[Object(h.jsx)("q",{id:"text",style:{color:this.state.bgColor},children:this.state.quote}),Object(h.jsxs)("p",{id:"author",style:{color:this.state.bgColor},children:["-",this.state.author]}),this.state.quote&&!this.state.author.match(/unavailable/i)&&Object(h.jsxs)("div",{id:"buttons",children:[Object(h.jsx)("button",{id:"new-quote",className:"btn btn-default",style:e,onClick:this.getNextQuote,children:"Next quote"}),Object(h.jsx)("button",{id:"previous-quote",className:"btn btn-default",style:e,onClick:this.getPreviousQuote,children:"Previous quotes"}),Object(h.jsx)(k,{quote:this.state.quote,author:this.state.author})]})]}),Object(h.jsx)(b,{})]}):Object(h.jsx)("h1",{id:"icon",children:"Loading..."})}}]),o}(n.a.Component);i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.1be730a6.chunk.js.map