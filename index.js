import "./src/js/bootstrap";
import "./src/js/media.js";
import forSingleElements from "./src/js/single.js";
import forNode from "./src/js/NodeList.js";

// Setting forEach Method To Loop Through The Array || NodeList
if ("forEach" in Array.prototype !== true) {
  Array.prototype.forEach = function ($fn) {
    for (let i = 0; i < this.length; i++) $fn(this[i], i);
  };
}
if ("forEach" in NodeList.prototype !== true) {
  NodeList.prototype.forEach = function ($fn) {
    for (let i = 0; i < this.length; i++) $fn(this[i], i);
  };
}

// Applying Single Elements Methods On
forSingleElements.forEach(function (prop, val) {
  if (prop in HTMLElement.prototype !== true) HTMLElement.prototype[prop] = val;
});

// getting or setting the inputs value
HTMLInputElement.prototype.val = function ($) {
  if ($) {
    this.value = $;
    return this;
  } else return this.value;
};

// Applying Node Lists Methods On
forNode.forEach(function (prop, val) {
  if ([prop] in NodeList.prototype !== true) NodeList.prototype[prop] = val;
  if ([prop] in Array.prototype !== true) Array.prototype[prop] = val;
});

// Some extra features
window.log = console.log;
window.dir = console.dir;

Object.defineProperty(window, "mobileDevice", {
  get: function () {
    return window.navigator.userAgent.toLocaleLowerCase().match(/mobile/g) ===
      null
      ? false
      : true;
  },
});
