(function(e){function t(t){for(var n,i,s=t[0],l=t[1],u=t[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);c&&c(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var l=r[s];0!==a[l]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"85ec":function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{app:"","hide-on-scroll":""}},[r("v-toolbar-title",[r("span",{staticClass:"display-1"},[e._v("Google Docs ANI Chart Analyzer")])]),r("v-spacer"),r("span",{staticClass:"title"},[e._v(" Chart Format Available "),r("a",{attrs:{href:"https://docs.google.com/document/d/1I8RF0tlCcFS58eMYk43Tbvs224opg221N7jTPqoHl3g/edit?usp=sharing",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here")])])],1),r("v-content",[r("v-container",[r("v-row",{attrs:{justify:"center"}},[r("div",[r("div",{ref:"ANI",attrs:{id:"ANI",contenteditable:"true"}}),r("v-container",[r("v-row",[e.summary?r("div",{attrs:{id:"summary"},domProps:{innerHTML:e._s(e.summary)}}):e._e()])],1),r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("v-btn",{attrs:{block:"",color:"green",disabled:!e.aniPasted},on:{click:function(t){e.aniOrdered?e.unorder():e.reorder()}}},[e._v(e._s(e.aniOrdered?"unorder":"reorder"))])],1),r("v-col",{attrs:{cols:"6"}},[r("v-btn",{attrs:{block:"",color:"red"},on:{click:e.clear}},[e._v("clear")])],1)],1)],1)],1)])],1)],1)],1)},o=[],i=(r("a15b"),r("2909")),s=r("d4ec"),l=r("bee2"),u=(r("99af"),r("4de4"),r("4160"),r("caad"),r("c975"),r("d81d"),r("13d5"),r("fb6a"),r("d3b7"),r("ac1f"),r("6062"),r("3ca3"),r("5319"),r("498a"),r("159b"),r("ddb0"),function(){function e(t,r){var n,a=this;Object(s["a"])(this,e),this.table=t,this.offset=r,(n=console).log.apply(n,Object(i["a"])(t.children[1].children)),this.rows=Object(i["a"])(t.children[1].children).slice(1).map((function(e){return{number:+a.textOf(e.children[0]),symbol:a.textOf(e.children[r]).replace("M",""),isMain:/M/g.test(a.textOf(e.children[r])),text:a.textOf(e.children[r+1])}})),console.log(this.rows),this.sortedRows=Object(i["a"])(this.rows).sort((function(e,t){return a.symbols.indexOf(e.symbol)-a.symbols.indexOf(t.symbol)}));var o=[];this.topics=this.rows.filter((function(e){return o.includes(e.symbol)?(o.push(e.symbol),e.isMain):(o.push(e.symbol),!0)}))}return Object(l["a"])(e,[{key:"countOfSymbol",value:function(e){return this.rows.reduce((function(t,r){return r.symbol===e?t+1:t}),0)}},{key:"sortedColumn",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.table.cloneNode(!0);return Object(i["a"])(t.children[1].children).slice(1).forEach((function(t,r){console.log(t);var n=Object(i["a"])(t.children).map((function(e){return e.querySelector("span")}));n[0]&&console.log(n);var a=n[0],o=n[e.offset],s=n[e.offset+1];a&&o&&s&&(o.innerText=e.sortedRows[r].symbol,s.innerText=e.sortedRows[r].text)})),t}},{key:"textOf",value:function(e){return e.innerText.trim()}},{key:"symbols",get:function(){return Object(i["a"])(new Set(this.rows.map((function(e){return e.symbol}))))}},{key:"summary",get:function(){var e=this;return this.topics.map((function(t){return"<li>".concat(t.text," (").concat(t.symbol,"): ").concat(e.countOfSymbol(t.symbol),"</li>")}))}}]),e}()),c=u,d=function(){function e(t){Object(s["a"])(this,e),this.AColumn=new c(t,1),this.NColumn=new c(t,3),this.IColumn=new c(t,5)}return Object(l["a"])(e,[{key:"reorderedTable",value:function(){var e=this.AColumn.sortedColumn();return this.NColumn.sortedColumn(e),e}}]),e}(),f=d,p=n["default"].extend({name:"App",data:function(){return{aniOrdered:!1,aniPasted:!1,aniData:{},displayedTable:{},undisplayedTable:{},summary:""}},mounted:function(){var e=this;this.$refs.ANI.addEventListener("paste",(function(t){var r;if(!e.aniPasted){t.preventDefault();var n=null===(r=t.clipboardData)||void 0===r?void 0:r.getData("text/html");n&&(e.$refs.ANI.innerHTML=n,e.handlePastedHtml(n))}}))},methods:{handlePastedHtml:function(e){var t=(new DOMParser).parseFromString(e,"text/html"),r=t.querySelector("table");r&&(this.displayedTable=r,this.aniData=new f(r),this.createSummary(),this.aniPasted=!0)},reorder:function(){this.undisplayedTable=this.displayedTable,this.displayedTable=this.aniData.reorderedTable(),this.aniOrdered=!0},unorder:function(){var e=this.undisplayedTable;this.undisplayedTable=this.aniData.reorderedTable(),this.displayedTable=e,this.aniOrdered=!1},createSummary:function(){var e=[];e.push("Affirmative Summary:<br>"),e.push("<ul>"),e.push.apply(e,Object(i["a"])(this.aniData.AColumn.summary)),e.push("</ul><br>"),e.push("Negative Summary:<br>"),e.push("<ul>"),e.push.apply(e,Object(i["a"])(this.aniData.NColumn.summary)),e.push("</ul>"),this.summary=e.join("")},clear:function(){this.displayedTable={},this.undisplayedTable={};var e=this.$refs.ANI;e.innerHTML="",this.aniPasted=!1,this.aniOrdered=!1,this.summary="",this.aniData={}}},watch:{displayedTable:function(){var e=this.$refs.ANI.querySelector("table");if(e){var t=e.parentElement;t&&(e.remove(),t.appendChild(this.displayedTable))}}}}),h=p,b=(r("034f"),r("2877")),m=r("6544"),v=r.n(m),y=r("7496"),O=r("40dc"),w=r("8336"),g=r("62ad"),T=r("a523"),j=r("a75b"),x=r("0fd9"),C=r("2fa4"),S=r("2a7f"),P=Object(b["a"])(h,a,o,!1,null,null,null),_=P.exports;v()(P,{VApp:y["a"],VAppBar:O["a"],VBtn:w["a"],VCol:g["a"],VContainer:T["a"],VContent:j["a"],VRow:x["a"],VSpacer:C["a"],VToolbarTitle:S["a"]});var A=r("ce5b"),k=r.n(A);n["default"].use(k.a);var M=new k.a({});n["default"].config.productionTip=!1,new n["default"]({vuetify:M,render:function(e){return e(_)}}).$mount("#app")}});
//# sourceMappingURL=app.9f10c4d2.js.map