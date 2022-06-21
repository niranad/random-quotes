(this.webpackJsonprandomquotemachine=this.webpackJsonprandomquotemachine||[]).push([[0],{27:function(e,t,o){},44:function(e,t,o){},45:function(e,t,o){"use strict";o.r(t);var r=o(0),n=o.n(r),a=o(5),i=o.n(a),l=o(11),u=o(6),s=o(15),c=o(10),d=["aliceblue","azure","aqua","antiquewhite","aquamarine","bisque","blanchedalmond","blueviolet","burlywood","cadetblue","chartreuse","coral","cornflowerblue","cornsilk","cyan","darkslateblue","darkslategray","darkcyan","darkgoldenrod","darkkhaki","darkorange","darkorchid","darksalmon","darkseagreen","darkturquoise","deeppink","deepskyblue","dodgerblue","firebrick","forestgreen","fuchsia","gainsboro","gold","goldenrod","gray","green","greenyellow","honeydew","hotpink","indianred","ivory","khaki","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightsteelblue","lime","limegreen","linen","magenta","mediumorchid","mediumaquamarine","mediumpurple","mediumseagreen","mediumspringgreen","mediumturquoise","mediumvioletred","mistyrose","moccasin","navajowhite","olive","olivedrab","orchid","orange","orangered","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","sienna","silver","skyblue","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","yellow","yellowgreen"],b="QUOTE_REQUEST_PENDING",h="QUOTE_REQUEST_SUCCESS",p="QUOTE_REQUEST_FAILED",g="GET_PREVIOUS_QUOTE",j={quote:{},quotes:[],prevQuoteIdx:0,textColor:"white",prevTextColors:[],isPending:!1,isDuplicate:!1,error:""},m=(o(27),o(28),o(13)),y=o(14),f=o(17),q=o(16),v=o(1),k=function(){return Object(v.jsxs)("div",{id:"footer",children:["Quotes are fetched from"," ",Object(v.jsx)("a",{className:"link",href:"https://github.com/lukePeavey/quotable",target:"_blank",rel:"noopener noreferrer",title:"lukePeavy/Quotable API",children:"Quotable"})," ","a random quotes API. Quote icon logo created by"," ",Object(v.jsx)("a",{className:"link",href:"https://www.flaticon.com/free-icons/quote",title:"quote icons",target:"_blank",rel:"noopener noreferrer",children:"Freepik - Flaticon"})]})},x=o(7),O={width:15,padding:5},w=function(e){var t=e.quote,o=e.author,r="https://niranad.github.io/random-quotes";return Object(v.jsxs)("div",{children:[Object(v.jsx)(x.Twitter,{id:"tweet-quote",url:r,shareText:t+" -"+o}),Object(v.jsx)(x.Facebook,{url:r}),Object(v.jsx)(x.Tumblr,{style:O,url:r,title:"Quote of the day!",caption:t,content:"A favorite quote by ".concat(o)})]})};w.defaultProps={quote:"With wisdom is understanding.",author:"God"};var Q=function(){return function(e){e({type:b}),fetch("https://api.quotable.io/random").then((function(e){return e.json()})).then((function(t){return e(function(e){return{type:h,payload:e}}(t))})).catch((function(t){return e({type:p,payload:t})}))}},P=(o(44),function(e){Object(f.a)(o,e);var t=Object(q.a)(o);function o(){return Object(m.a)(this,o),t.apply(this,arguments)}return Object(y.a)(o,[{key:"componentDidMount",value:function(){this.props.onQuoteRequest()}},{key:"render",value:function(){var e=this.props,t=e.quote,o=e.isDuplicate,r=e.isPending,n=e.onQuoteRequest,a=e.error,i=e.textColor,l=e.onGetPreviousQuote,u={backgroundColor:i,color:"black"},s="".concat(a.message,": Please check your internet connection and refresh the page.");return document.body.style.backgroundColor=i,o&&document.getElementById("next-quote").click(),Object(v.jsxs)("div",{id:"container",className:"",style:{backgroundColor:i},children:[0===Object.keys(t).length?Object(v.jsx)("div",{id:"icon",className:"loader center"}):Object(v.jsxs)("div",{id:"quote-box",className:"center",children:[Object(v.jsx)("i",{className:"fas fa-quote-left",style:{color:i}}),"    ",Object(v.jsx)("q",{id:"text",style:{color:i},children:""===a?t.content:s}),Object(v.jsxs)("p",{id:"author",style:{color:i},children:["-",""===a?t.author:"Error"]}),""===a&&Object(v.jsxs)("div",{id:"buttons",children:[Object(v.jsx)("button",{id:"new-quote",className:"btn btn-default",style:r?{width:50,height:40}:u,onClick:n,disabled:r,children:r?Object(v.jsx)("div",{className:"loader"}):"Next quote"}),Object(v.jsx)("button",{id:"previous-quote",className:"btn btn-default",style:u,onClick:l,disabled:r,children:"Previous quote"}),Object(v.jsx)(w,{quote:t.content,author:t.author})]})]}),Object(v.jsx)(k,{})]})}}]),o}(r.Component)),C=Object(u.b)((function(e){return{quote:e.quote,quotes:e.quotes,prevQuoteIdx:e.prevQuoteIdx,isPending:e.isPending,isDuplicate:e.isDuplicate,error:e.error,textColor:e.textColor}}),(function(e){return{onQuoteRequest:function(){return e(Q())},onGetPreviousQuote:function(){return e({type:g})}}}))(P),E=Object(l.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case b:return Object.assign({},e,{isPending:!0});case h:if(e.quotes.some((function(e){return e.content===t.payload.content})))return Object.assign({},e,{isPending:!1,isDuplicate:!0,error:""});var o=d[Math.floor(108*Math.random())];return Object.assign({},e,{quotes:[].concat(Object(c.a)(e.quotes),[t.payload]),quote:t.payload,prevQuoteIdx:e.quotes.length,textColor:o,prevTextColors:[].concat(Object(c.a)(e.prevTextColors),[o]),isPending:!1,isDuplicate:!1,error:""});case p:return Object.assign({},e,{error:t.payload,isPending:!1});case g:var r=e.prevQuoteIdx>0?e.prevQuoteIdx-1:0;return Object.assign({},e,{prevQuoteIdx:r,quote:e.quotes[r],textColor:e.prevTextColors[r]});default:return e}}),Object(l.a)(s.a));i.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(u.a,{store:E,children:Object(v.jsx)(C,{})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.035d62c9.chunk.js.map