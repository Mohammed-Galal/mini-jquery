!function(t){var n={};function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(i,r,function(n){return t[n]}.bind(null,r));return i},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=1)}([function(t,n){Object.prototype.forEach=function(t){for(let n in this)"forEach"!==n&&"filter"!==n&&t(n,this[n])},Object.prototype.filter=function(t){const n=this;for(let e in n){if("forEach"===e||"filter"===e)continue;t(e,n[e])||delete n[e]}return n},window.$=function(t,n){const e="string"==typeof t?document.querySelector(t):t;return n&&n(e).forEach((function(t,n){e[t]=n})),e},window.$$=function(t,n){const e=document.querySelectorAll(t);return n&&e.forEach((function(t,e){n(t,e).forEach((function(n,e){t[n]=e}))})),e}},function(t,n,e){"use strict";e.r(n);e(0);var i={$:function(t,n){const e=this.querySelector(t);return n&&n(X).forEach((function(t,n){e[t]=n})),e},$$:function(t,n){const e=this.querySelectorAll(t);return n&&e.forEach((function(t,e){n(t,e).forEach((function(n,e){t[n]=e}))})),e},and:function(t){const n=[this];return document.querySelectorAll(t).forEach((function(t){n[n.length]=t})),n},prevAll:function(t){const n=this.parentElement.firstElementChild;let e=this.previousElementSibling,i=[e];if(t)for(i=[];!e.isSameNode(n);)e.matches(t)&&(i[i.length]=e),e=e.previousElementSibling;else for(;!e.isSameNode(n);)e=e.previousElementSibling,i[i.length]=e;return i},prevUntil:function(t){let n=this.previousElementSibling,e=[n];for(;!n.matches(t);)n=n.previousElementSibling,e[e.length]=n;return e},prev:function(){return this.previousElementSibling},next:function(){return this.nextElementSibling},nextUntil:function(t){let n=this.nextElementSibling,e=[n];for(;!n.matches(t);)n=n.nextElementSibling,e[e.length]=n;return e},nextAll:function(t){let n=this.nextElementSibling,e=n.parentElement.lastElementChild,i=[n];for(;"script"===e.nodeName.toLowerCase();)e=e.previousElementSibling;if(t)for(i=[];!n.isSameNode(e);)n.matches(t)&&(i[i.length]=n),n=n.nextElementSibling;else for(;!n.isSameNode(e);)n=n.nextElementSibling,i[i.length]=n;return i},parent:function(){return this.parentElement},parents:function(t){const n=document.documentElement;let e=this.parentElement,i=[];if(t)for(;!e.isSameNode(n);)e.matches(t)&&(i[i.length]=e),e=e.parentElement;else{for(;!e.isSameNode(n);)i[i.length]=e,e=e.parentElement;i[i.length]=e}return i},parentsUntil:function(t){let n=this.parentElement,e=[n];for(;!n.matches(t);)n=n.parentElement,e[e.length]=n;return e},siblings:function(){const t=this.parentElement.children,n=[],e=this;return t.forEach((function(t){t.isSameNode(e)||(n[n.length]=t)})),n},is:function(t){return this.matches(t)},hasClass:function(t){const n={},e=this.className;return t.split(",").forEach((function(t){const i=t.trim(),r=null!==e.match(i);r&&(n[i]=r)})),n},has:function(t){return this.contains(this.querySelector(t))},offset:function(t){const n=this.getBoundingClientRect();var e={};const i={top:n.top,left:n.left,height:n.height,width:n.width,y:n.top,x:n.left};if(t){return t.split(",").forEach((function(t){const n=t.trim();e[n]=i[n]})),e}return i},scroll:function(t,n){if(t&&!n&&"string"!=typeof t)return this.scrollTop=n.top,this.scrollLeft=n.left,this;if(t&&!n)return this.scrollTop=t,this;if(n&&!t)return this.scrollLeft=n,this;return{top:this.scrollTop,left:this.scrollLeft,height:this.scrollHeight,width:this.scrollWidth}},before:function(t,n){return"html"===t.toLowerCase()?this.insertAdjacentHTML("beforebegin",n):this.insertAdjacentText("beforebegin",n),this},append:function(t,n){return"html"===t.toLowerCase()?this.insertAdjacentHTML("beforeend",n):this.insertAdjacentText("beforeend",n),this},prepend:function(t,n){return"html"===t.toLowerCase()?this.insertAdjacentHTML("afterbegin",n):this.insertAdjacentText("afterbegin",n),this},after:function(t,n){return"html"===t.toLowerCase()?this.insertAdjacentHTML("afterend",n):this.insertAdjacentText("afterend",n),this},wrapInner:function(t,n){this.innerHTML="<"+t+">"+this.innerHTML+"</"+t+">";const e=this.querySelector(t+":only-child");return n&&n(e).forEach((function(t,n){e[t]=n})),e||this},addClass:function(t){const n=this.classList;return t.split(",").forEach((function(t){n.add(t)})),this},removeClass:function(t){const n=this.classList;return t.split(",").forEach((function(t){n.remove(t)})),this},toggleClass:function(t){const n=this.classList;return t.split(",").forEach((function(t){n.toggle(t)})),this},txt:function(t){return t?(this.innerText=t,this):this.innerText},html:function(t){return t?(this.innerHTML=t,this):this.innerHTML},attr:function(t){const n=this;if(t){if("string"==typeof t){const e=t.trim().split(","),i={};return e.forEach((function(t){const e=t.trim();0!=n.hasAttribute(e)&&(i[e]=n.getAttribute(e))})),i}return t.forEach((function(t,e){n.setAttribute(t.trim(),e)})),this}{const t={};return n.getAttributeNames().forEach((function(e){t[e]=n.getAttribute(e)})),t}},addAttr:function(t){const n=this;return t.split(",").forEach((function(t){n.setAttribute(t.replace(/ /g,""),!0)})),this},removeAttr:function(t){const n=this;return t.split(",").forEach((function(t){n.removeAttribute(t.replace(/ /g,""))})),this},toggleAttr:function(t){const n=this;return t.split(",").forEach((function(t){const e=t.replace(/ /g,"");n.hasAttribute(e)?n.removeAttribute(e):n.setAttribute(e,!0)})),this},css:function(t){const n=this;if(t){if("string"==typeof t){const e=t.split(","),i={};return e.forEach((function(t){const e=t.trim();i[e]=getComputedStyle(n).getPropertyValue(e)})),i}return t.forEach((function(t,e){const i=t.trim();n.style.setProperty(i,e)})),this}return getComputedStyle(this)||this.style},on:function(t,n){if(t&&n){const e=this;if("string"==typeof t){t.split(",").forEach((function(t){e["on"+t]=n}))}else t.forEach((function(t,n){e["on"+t]=n}));return this}return this},clone:function(t){return this.cloneNode(t)}},r={$:function(t,n){if(!this[0]instanceof HTMLElement)return;const e=[];return this.forEach((function(i){e[e.length]=i.$(t,n)})),e},$$:function(t,n){if(!this[0]instanceof HTMLElement)return;const e=[];return this.forEach((function(i){e[e.length]=i.$$(t,n)})),e},and:function(t){if(!this[0]instanceof HTMLElement)return;const n=[];return this.forEach((function(t){n[n.length]=t})),$$(t).forEach((function(t){n[n.length]=t})),n},eq:function(t){if(!(!this[0]instanceof HTMLElement))return this[t]},parents:function(){if(!this[0]instanceof HTMLElement)return;let t=[];return this.forEach((function(n){t=t.concat(n.parents())})),t},prevAll:function(){if(!this[0]instanceof HTMLElement)return;let t=[];return this.forEach((function(n){t=t.concat(n.prevAll())})),t},nextAll:function(){if(!this[0]instanceof HTMLElement)return;let t=[];return this.forEach((function(n){t=t.concat(n.nextAll())})),t},parentsUntil:function(t){if(!this[0]instanceof HTMLElement)return;let n=[];return this.forEach((function(e){n=n.concat(e.parentsUntil(t))})),n},prevUntil:function(t){if(!this[0]instanceof HTMLElement)return;let n=[];return this.forEach((function(e){n=n.concat(e.prevUntil(t))})),n},nextUntil:function(t){if(!this[0]instanceof HTMLElement)return;let n=[];return this.forEach((function(e){n=n.concat(e.nextUntil(t))})),n},parent:function(){if(!this[0]instanceof HTMLElement)return;const t=[];return this.forEach((function(n){t[t.length]=n.parent()})),t},prev:function(){if(!this[0]instanceof HTMLElement)return;const t=[];return this.forEach((function(n){t[t.length]=n.prev()})),t},next:function(){if(!this[0]instanceof HTMLElement)return;const t=[];return this.forEach((function(n){t[t.length]=n.next()})),t},siblings:function(t){if(!this[0]instanceof HTMLElement)return;let n=[];return this.forEach((function(e){n=n.concat(e.siblings(t))})),n},is:function(t){if(!this[0]instanceof HTMLElement)return;const n=[];return this.forEach((function(e){n[n.length]=e.is(t)})),n},has:function(t){if(!this[0]instanceof HTMLElement)return;const n=[];return this.forEach((function(e){n[n.length]=e.has(t)})),n},hasClass:function(t){if(!this[0]instanceof HTMLElement)return;const n=[];return this.forEach((function(e){n[n.length]=e.hasClass(t)})),n},offset:function(t){if(!this[0]instanceof HTMLElement)return;const n=[];return this.forEach((function(e){n[n.length]=e.offset(t)})),n},scroll:function(t,n){if(!(!this[0]instanceof HTMLElement))return this.forEach((function(e){e.scroll(t,n)})),this},before:function(t,n){if(!(!this[0]instanceof HTMLElement))return this.forEach((function(e){e.before(t,n)})),this},prepend:function(t,n){if(!(!this[0]instanceof HTMLElement))return this.forEach((function(e){e.prepend(t,n)})),this},append:function(t,n){if(!(!this[0]instanceof HTMLElement))return this.forEach((function(e){e.append(t,n)})),this},after:function(t,n){if(!(!this[0]instanceof HTMLElement))return this.forEach((function(e){e.after(t,n)})),this},wrappInner:function(t,n){if(!(!this[0]instanceof HTMLElement))return this.forEach((function(e){e.wrappInner(t,n)})),this},addClass:function(t){return this.forEach((function(n){n.addClass(t)})),this},removeClass:function(t){return this.forEach((function(n){n.removeClass(t)})),this},toggleClass:function(t){return this.forEach((function(n){n.toggleClass(t)})),this},text:function(t){if(!this[0]instanceof HTMLElement)return;const n=[];return this.forEach((function(e){n[n.length]=e.text(t)})),n},html:function(t){if(!this[0]instanceof HTMLElement)return;const n=[];return this.forEach((function(e){n[n.length]=e.html(t)})),n},attr:function(t,n){if(!this[0]instanceof HTMLElement)return;const e=[];return this.forEach((function(i){e[e.length]=i.attr(t,n)})),e},addAttr:function(t){if(!(!this[0]instanceof HTMLElement))return this.forEach((function(n){n.addAttr(t)})),this},removeAttr:function(t){if(!(!this[0]instanceof HTMLElement))return this.forEach((function(n){n.removeAttr(t)})),this},toggleAttr:function(t){if(!(!this[0]instanceof HTMLElement))return this.forEach((function(n){n.toggleAttr(t)})),this},css:function(t){if(!this[0]instanceof HTMLElement)return;const n=[];return this.forEach((function(e){n[n.length]=e.css(t)})),n},on:function(t,n){if(!(!this[0]instanceof HTMLElement))return this.forEach((function(e){e.on(t,n)})),this},clone:function(t){if(!this[0]instanceof HTMLElement)return;const n=[];return this.forEach((function(e){n[n.length]=e.clone(t)})),n}};function o(){for(var t=[],n=0;n<this.buffered.length;n++)t[n]={from:this.buffered.start(n),to:this.buffered.end(n)};return t}"forEach"in Array.prototype!=!0&&(Array.prototype.forEach=function(t){for(let n=0;n<this.length;n++)t(this[n],n)}),"forEach"in NodeList.prototype!=!0&&(NodeList.prototype.forEach=function(t){for(let n=0;n<this.length;n++)t(this[n],n)}),i.forEach((function(t,n){t in HTMLElement.prototype!=!0&&(HTMLElement.prototype[t]=n)})),HTMLInputElement.prototype.val=function(t){return t?(this.value=t,this):this.value},HTMLVideoElement.prototype.buffers=o,HTMLAudioElement.prototype.buffers=o,r.forEach((function(t,n){[t]in NodeList.prototype!=!0&&(NodeList.prototype[t]=n),[t]in Array.prototype!=!0&&(Array.prototype[t]=n)})),window.log=console.log,window.dir=console.dir,Object.defineProperty(window,"mobileDevice",{get:function(){return null!==window.navigator.userAgent.toLocaleLowerCase().match(/mobile/g)}})}]);