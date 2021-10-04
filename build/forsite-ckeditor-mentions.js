/*!
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
window.CKEditor5=window.CKEditor5||{},window.CKEditor5.forsiteCkeditorMentions=function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=12)}([function(e,t,n){e.exports=n(3)("./src/utils.js")},function(e,t,n){e.exports=n(3)("./src/ui.js")},function(e,t,n){e.exports=n(3)("./src/core.js")},function(e,t){e.exports=CKEditor5.dll},function(e,t,n){"use strict";var i,o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function a(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},i=[],o=0;o<e.length;o++){var r=e[o],c=t.base?r[0]+t.base:r[0],d=n[c]||0,u="".concat(c," ").concat(d);n[c]=d+1;var l=a(u),f={css:r[1],media:r[2],sourceMap:r[3]};-1!==l?(s[l].references++,s[l].updater(f)):s.push({identifier:u,updater:p(f,t),references:1}),i.push(u)}return i}function d(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var s=r(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var u,l=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var r=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function m(e,t,n){var i=n.css,o=n.media,r=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var h=null,g=0;function p(e,t){var n,i,o;if(t.singleton){var r=g++;n=h||(h=d(t)),i=f.bind(null,n,r,!1),o=f.bind(null,n,r,!0)}else n=d(t),i=m.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var o=a(n[i]);s[o].references--}for(var r=c(e,t),d=0;d<n.length;d++){var u=a(n[d]);0===s[u].references&&(s[u].updater(),s.splice(u,1))}n=r}}}},function(e,t,n){e.exports=n(3)("./src/typing.js")},function(e,t,n){"use strict";(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.a=n}).call(this,n(9))},function(e,t,n){var i=n(4),o=n(8);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);e.exports=o.locals||{}},function(e,t){e.exports=":root{--ck-mention-list-max-height:300px}.ck.ck-mentions{max-height:var(--ck-mention-list-max-height);overflow-y:auto;overflow-x:hidden;overscroll-behavior:contain}.ck.ck-mentions>.ck-list__item{overflow:hidden;flex-shrink:0}"},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){var i=n(4),o=n(11);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);e.exports=o.locals||{}},function(e,t){e.exports=""},function(e,t,n){"use strict";n.r(t),n.d(t,"Mention",(function(){return te})),n.d(t,"MentionEditing",(function(){return s})),n.d(t,"MentionUI",(function(){return G}));var i=n(2),o=n(0);class r extends i.Command{refresh(){const e=this.editor.model,t=e.document;this.isEnabled=e.schema.checkAttributeInSelection(t.selection,"mention")}execute(e){const t=this.editor.model,n=t.document.selection,i="string"==typeof e.mention?{id:e.mention}:e.mention,r=i.id,s=e.range||n.getFirstRange(),c=e.text||r,d=a({_text:c,id:r},i);if(1!=e.marker.length)throw new o.CKEditorError("mentioncommand-incorrect-marker",this);if(r.charAt(0)!=e.marker)throw new o.CKEditorError("mentioncommand-incorrect-id",this);t.change(e=>{const i=Object(o.toMap)(n.getAttributes()),r=new Map(i.entries());r.set("mention",d),t.insertContent(e.createText(c,r),s),t.insertContent(e.createText(" ",i),s.start.getShiftedBy(c.length))})}}class s extends i.Plugin{static get pluginName(){return"MentionEditing"}init(){const e=this.editor,t=e.model,n=t.document;t.schema.extend("$text",{allowAttributes:"mention"}),e.conversion.for("upcast").elementToAttribute({view:{name:"span",key:"data-mention",classes:"mention"},model:{key:"mention",value:e=>c(e)}}),e.conversion.for("downcast").attributeToElement({model:"mention",view:u}),e.conversion.for("downcast").add(d),n.registerPostFixer(e=>function(e,t,n){const i=t.differ.getChanges();let o=!1;for(const t of i){const i=t.position;if("$text"==t.name){const t=i.textNode&&i.textNode.nextSibling;o=f(i.textNode,e)||o,o=f(t,e)||o,o=f(i.nodeBefore,e)||o,o=f(i.nodeAfter,e)||o}if("$text"!=t.name&&"insert"==t.type){const t=i.nodeAfter;for(const n of e.createRangeIn(t).getItems())o=f(n,e)||o}if("insert"==t.type&&n.isInline(t.name)){const t=i.nodeAfter&&i.nodeAfter.nextSibling;o=f(i.nodeBefore,e)||o,o=f(t,e)||o}}return o}(e,n,t.schema)),n.registerPostFixer(e=>function(e,t){const n=t.differ.getChanges();let i=!1;for(const t of n)if("attribute"===t.type&&"mention"!=t.attributeKey){const n=t.range.start.nodeBefore,o=t.range.end.nodeAfter;for(const r of[n,o])l(r)&&r.getAttribute(t.attributeKey)!=t.attributeNewValue&&(e.setAttribute(t.attributeKey,t.attributeNewValue,r),i=!0)}return i}(e,n)),n.registerPostFixer(e=>function(e,t){const n=t.selection,i=n.focus;if(n.isCollapsed&&n.hasAttribute("mention")&&function(e){const t=e.isAtStart;return e.nodeBefore&&e.nodeBefore.is("$text")||t}(i))return e.removeSelectionAttribute("mention"),!0}(e,n)),e.commands.add("mention",new r(e))}}function a(e,t){return Object.assign({uid:Object(o.uid)()},e,t||{})}function c(e,t){const n=e.getAttribute("data-mention"),i=e.getChild(0);if(!i)return;return a({id:n,_text:i.data},t)}function d(e){e.on("attribute:mention",(e,t,n)=>{const i=t.attributeNewValue;if(!t.item.is("$textProxy")||!i)return;const o=t.range.start;(o.textNode||o.nodeAfter).data!=i._text&&n.consumable.consume(t.item,e.name)},{priority:"highest"})}function u(e,{writer:t}){if(!e)return;const n={class:"mention","data-mention":e.id},i={id:e.uid,priority:20};return t.createAttributeElement("span",n,i)}function l(e){if(!e||!e.is("$text")&&!e.is("$textProxy")||!e.hasAttribute("mention"))return!1;return e.data!=e.getAttribute("mention")._text}function f(e,t){return!!l(e)&&(t.removeAttribute("mention",e),!0)}var m=n(1),h=n(5);var g=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},p=n(6),v="object"==typeof self&&self&&self.Object===Object&&self,b=p.a||v||Function("return this")(),w=function(){return b.Date.now()},x=/\s/;var y=function(e){for(var t=e.length;t--&&x.test(e.charAt(t)););return t},_=/^\s+/;var k=function(e){return e?e.slice(0,y(e)+1).replace(_,""):e},C=b.Symbol,A=Object.prototype,j=A.hasOwnProperty,M=A.toString,T=C?C.toStringTag:void 0;var S=function(e){var t=j.call(e,T),n=e[T];try{e[T]=void 0;var i=!0}catch(e){}var o=M.call(e);return i&&(t?e[T]=n:delete e[T]),o},E=Object.prototype.toString;var I=function(e){return E.call(e)},O=C?C.toStringTag:void 0;var V=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":O&&O in Object(e)?S(e):I(e)};var R=function(e){return null!=e&&"object"==typeof e};var P=function(e){return"symbol"==typeof e||R(e)&&"[object Symbol]"==V(e)},F=/^[-+]0x[0-9a-f]+$/i,N=/^0b[01]+$/i,U=/^0o[0-7]+$/i,B=parseInt;var $=function(e){if("number"==typeof e)return e;if(P(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=k(e);var n=N.test(e);return n||U.test(e)?B(e.slice(2),n?2:8):F.test(e)?NaN:+e},q=Math.max,D=Math.min;var L=function(e,t,n){var i,o,r,s,a,c,d=0,u=!1,l=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=i,r=o;return i=o=void 0,d=t,s=e.apply(r,n)}function h(e){return d=e,a=setTimeout(v,t),u?m(e):s}function p(e){var n=e-c;return void 0===c||n>=t||n<0||l&&e-d>=r}function v(){var e=w();if(p(e))return b(e);a=setTimeout(v,function(e){var n=t-(e-c);return l?D(n,r-(e-d)):n}(e))}function b(e){return a=void 0,f&&i?m(e):(i=o=void 0,s)}function x(){var e=w(),n=p(e);if(i=arguments,o=this,c=e,n){if(void 0===a)return h(c);if(l)return clearTimeout(a),a=setTimeout(v,t),m(c)}return void 0===a&&(a=setTimeout(v,t)),s}return t=$(t)||0,g(n)&&(u=!!n.leading,r=(l="maxWait"in n)?q($(n.maxWait)||0,t):r,f="trailing"in n?!!n.trailing:f),x.cancel=function(){void 0!==a&&clearTimeout(a),d=0,i=c=o=a=void 0},x.flush=function(){return void 0===a?s:b(w())},x};n(7);class K extends m.ListView{constructor(e){super(e),this.extendTemplate({attributes:{class:["ck-mentions"],tabindex:"-1"}})}selectFirst(){this.select(0)}selectNext(){const e=this.selected,t=this.items.getIndex(e);this.select(t+1)}selectPrevious(){const e=this.selected,t=this.items.getIndex(e);this.select(t-1)}select(e){let t=0;e>0&&e<this.items.length?t=e:e<0&&(t=this.items.length-1);const n=this.items.get(t);this.selected!==n&&(this.selected&&this.selected.removeHighlight(),n.highlight(),this.selected=n,this._isItemVisibleInScrolledArea(n)||(this.element.scrollTop=n.element.offsetTop))}executeSelected(){this.selected.fire("execute")}_isItemVisibleInScrolledArea(e){return new o.Rect(this.element).contains(new o.Rect(e.element))}}class W extends m.View{constructor(e,t){super(e),this.template=!1,this.domElement=t,this.domElement.classList.add("ck-button"),this.set("isOn",!1),this.on("change:isOn",(e,t,n)=>{n?(this.domElement.classList.add("ck-on"),this.domElement.classList.remove("ck-off")):(this.domElement.classList.add("ck-off"),this.domElement.classList.remove("ck-on"))}),this.listenTo(this.domElement,"click",()=>{this.fire("execute")})}render(){super.render(),this.element=this.domElement}}class H extends m.ListItemView{highlight(){this.children.first.isOn=!0}removeHighlight(){this.children.first.isOn=!1}}const J=[o.keyCodes.arrowup,o.keyCodes.arrowdown,o.keyCodes.esc],z=[o.keyCodes.enter,o.keyCodes.tab];class G extends i.Plugin{static get pluginName(){return"MentionUI"}static get requires(){return[m.ContextualBalloon]}constructor(e){super(e),this._mentionsView=this._createMentionView(),this._mentionsConfigurations=new Map,this._requestFeedDebounced=L(this._requestFeed,100),e.config.define("mention",{feeds:[]})}init(){const e=this.editor,t=e.config.get("mention.commitKeys")||z,n=J.concat(t);this._balloon=e.plugins.get(m.ContextualBalloon),e.editing.view.document.on("keydown",(e,i)=>{var r;r=i.keyCode,n.includes(r)&&this._isUIVisible&&(i.preventDefault(),e.stop(),i.keyCode==o.keyCodes.arrowdown&&this._mentionsView.selectNext(),i.keyCode==o.keyCodes.arrowup&&this._mentionsView.selectPrevious(),t.includes(i.keyCode)&&this._mentionsView.executeSelected(),i.keyCode==o.keyCodes.esc&&this._hideUIAndRemoveMarker())},{priority:"highest"}),Object(m.clickOutsideHandler)({emitter:this._mentionsView,activator:()=>this._isUIVisible,contextElements:[this._balloon.view.element],callback:()=>this._hideUIAndRemoveMarker()});const i=e.config.get("mention.feeds");for(const e of i){const t=e.feed,n=e.marker;if(!Z(n))throw new o.CKEditorError("mentionconfig-incorrect-marker",null,{marker:n});const i=e.minimumCharacters||0,r="function"==typeof t?t.bind(this.editor):Y(t),s={watcher:this._setupTextWatcherForFeed(n,i),marker:n,feedCallback:r,itemRenderer:e.itemRenderer};this._mentionsConfigurations.set(n,s)}this.on("requestFeed:response",(e,t)=>this._handleFeedResponse(t)),this.on("requestFeed:error",()=>this._hideUIAndRemoveMarker())}destroy(){super.destroy(),this._mentionsView.destroy()}get _isUIVisible(){return this._balloon.visibleView===this._mentionsView}_createMentionView(){const e=this.editor.locale,t=new K(e);return this._items=new o.Collection,t.items.bindTo(this._items).using(n=>{const{item:i,marker:o}=n,r=new H(e),s=this._renderItem(i,o);return s.delegate("execute").to(r),r.children.add(s),r.item=i,r.marker=o,r.on("execute",()=>{t.fire("execute",{item:i,marker:o})}),r}),t.on("execute",(e,t)=>{const n=this.editor,i=n.model,o=t.item,r=t.marker,s=n.model.markers.get("mention"),a=i.createPositionAt(i.document.selection.focus),c=i.createPositionAt(s.getStart()),d=i.createRange(c,a);this._hideUIAndRemoveMarker(),n.execute("mention",{mention:o,text:o.text,marker:r,range:d}),n.editing.view.focus()}),t}_getItemRenderer(e){const{itemRenderer:t}=this._mentionsConfigurations.get(e);return t}_requestFeed(e,t){this._lastRequested=t;const{feedCallback:n}=this._mentionsConfigurations.get(e),i=n(t);i instanceof Promise?i.then(n=>{this._lastRequested==t?this.fire("requestFeed:response",{feed:n,marker:e,feedText:t}):this.fire("requestFeed:discarded",{feed:n,marker:e,feedText:t})}).catch(t=>{this.fire("requestFeed:error",{error:t}),Object(o.logWarning)("mention-feed-callback-error",{marker:e})}):this.fire("requestFeed:response",{feed:i,marker:e,feedText:t})}_setupTextWatcherForFeed(e,t){const n=this.editor,i=new h.TextWatcher(n.model,function(e,t){const n=X(e,t);return e=>n.test(e)}(e,t));i.on("matched",(t,i)=>{const o=n.model.document.selection.focus;if(function(e){const t=e.textNode&&e.textNode.hasAttribute("mention"),n=e.nodeBefore;return t||n&&n.is("$text")&&n.hasAttribute("mention")}(o))return void this._hideUIAndRemoveMarker();const r=function(e,t){const n=X(e,0);return t.match(n)[2]}(e,i.text),s=e.length+r.length,a=o.getShiftedBy(-s),c=o.getShiftedBy(-r.length),d=n.model.createRange(a,c);if(ee(n)){const e=n.model.markers.get("mention");n.model.change(t=>{t.updateMarker(e,{range:d})})}else n.model.change(e=>{e.addMarker("mention",{range:d,usingOperation:!1,affectsData:!1})});this._requestFeedDebounced(e,r)}),i.on("unmatched",()=>{this._hideUIAndRemoveMarker()});const o=n.commands.get("mention");return i.bind("isEnabled").to(o),i}_handleFeedResponse(e){const{feed:t,marker:n}=e;if(!ee(this.editor))return;this._items.clear();for(const e of t){const t="object"!=typeof e?{id:e,text:e}:e;this._items.add({item:t,marker:n})}const i=this.editor.model.markers.get("mention");this._items.length?this._showOrUpdateUI(i):this._hideUIAndRemoveMarker()}_showOrUpdateUI(e){this._isUIVisible?this._balloon.updatePosition(this._getBalloonPanelPositionData(e,this._mentionsView.position)):this._balloon.add({view:this._mentionsView,position:this._getBalloonPanelPositionData(e,this._mentionsView.position),singleViewMode:!0}),this._mentionsView.position=this._balloon.view.position,this._mentionsView.selectFirst()}_hideUIAndRemoveMarker(){this._balloon.hasView(this._mentionsView)&&this._balloon.remove(this._mentionsView),ee(this.editor)&&this.editor.model.change(e=>e.removeMarker("mention")),this._mentionsView.position=void 0}_renderItem(e,t){const n=this.editor;let i,o=e.id;const r=this._getItemRenderer(t);if(r){const t=r(e);"string"!=typeof t?i=new W(n.locale,t):o=t}if(!i){const e=new m.ButtonView(n.locale);e.label=o,e.withText=!0,i=e}return i}_getBalloonPanelPositionData(e,t){const n=this.editor,i=n.editing,r=i.view.domConverter,s=i.mapper;return{target:()=>{let t=e.getRange();"$graveyard"==t.start.root.rootName&&(t=n.model.document.selection.getFirstRange());const i=s.toViewRange(t);return o.Rect.getDomRangeRects(r.viewRangeToDom(i)).pop()},limiter:()=>{const e=this.editor.editing.view,t=e.document.selection.editableElement;return t?e.domConverter.mapViewToDom(t.root):null},positions:Q(t)}}}function Q(e){const t={caret_se:e=>({top:e.bottom+3,left:e.right,name:"caret_se",config:{withArrow:!1}}),caret_ne:(e,t)=>({top:e.top-t.height-3,left:e.right,name:"caret_ne",config:{withArrow:!1}}),caret_sw:(e,t)=>({top:e.bottom+3,left:e.right-t.width,name:"caret_sw",config:{withArrow:!1}}),caret_nw:(e,t)=>({top:e.top-t.height-3,left:e.right-t.width,name:"caret_nw",config:{withArrow:!1}})};return Object.prototype.hasOwnProperty.call(t,e)?[t[e]]:[t.caret_se,t.caret_sw,t.caret_ne,t.caret_nw]}function X(e,t){const n=0==t?"*":`{${t},}`,i=o.env.features.isRegExpUnicodePropertySupported?"\\p{Ps}\\p{Pi}\"'":"\\(\\[{\"'";return new RegExp(`(?:^|[ ${i}])([${e}])([\\S]${n})$`,"u")}function Y(e){return t=>e.filter(e=>("string"==typeof e?e:String(e.id)).toLowerCase().includes(t.toLowerCase())).slice(0,10)}function Z(e){return e&&1==e.length}function ee(e){return e.model.markers.has("mention")}n(10);class te extends i.Plugin{toMentionAttribute(e,t){return c(e,t)}static get pluginName(){return"Mention"}static get requires(){return[s,G]}}}]);