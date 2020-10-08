// Node Lists Methods
export default {
  $: function (el, $fn) {
    if (!this[0] instanceof HTMLElement) return;
    const arr = [];
    this.forEach(function (ele) {
      arr[arr.length] = ele.$(el, $fn);
    });
    return arr;
  },

  $$: function (el, $fn) {
    if (!this[0] instanceof HTMLElement) return;
    const arr = [];
    this.forEach(function (ele) {
      arr[arr.length] = ele.$$(el, $fn);
    });
    return arr;
  },

  and: function (el) {
    if (!this[0] instanceof HTMLElement) return;
    const arr = [];
    this.forEach(function ($) {
      arr[arr.length] = $;
    });
    $$(el).forEach(function (ele) {
      arr[arr.length] = ele;
    });
    return arr;
  },

  eq: function (num) {
    if (!this[0] instanceof HTMLElement) return;
    return this[num];
  },

  parents: function () {
    if (!this[0] instanceof HTMLElement) return;
    let arr = [];
    this.forEach(function (ele) {
      arr = arr.concat(ele.parents());
    });
    return arr;
  },

  prevAll: function () {
    if (!this[0] instanceof HTMLElement) return;
    let arr = [];
    this.forEach(function (ele) {
      arr = arr.concat(ele.prevAll());
    });
    return arr;
  },

  nextAll: function () {
    if (!this[0] instanceof HTMLElement) return;
    let arr = [];
    this.forEach(function (ele) {
      arr = arr.concat(ele.nextAll());
    });
    return arr;
  },

  parentsUntil: function (el) {
    if (!this[0] instanceof HTMLElement) return;
    let arr = [];
    this.forEach(function (ele) {
      arr = arr.concat(ele.parentsUntil(el));
    });
    return arr;
  },

  prevUntil: function (el) {
    if (!this[0] instanceof HTMLElement) return;
    let arr = [];
    this.forEach(function (ele) {
      arr = arr.concat(ele.prevUntil(el));
    });
    return arr;
  },

  nextUntil: function (el) {
    if (!this[0] instanceof HTMLElement) return;
    let arr = [];
    this.forEach(function (ele) {
      arr = arr.concat(ele.nextUntil(el));
    });
    return arr;
  },

  parent: function () {
    if (!this[0] instanceof HTMLElement) return;
    const arr = [];
    this.forEach(function (ele) {
      arr[arr.length] = ele.parent();
    });
    return arr;
  },

  prev: function () {
    if (!this[0] instanceof HTMLElement) return;
    const arr = [];
    this.forEach(function (ele) {
      arr[arr.length] = ele.prev();
    });
    return arr;
  },

  next: function () {
    if (!this[0] instanceof HTMLElement) return;
    const arr = [];
    this.forEach(function (ele) {
      arr[arr.length] = ele.next();
    });
    return arr;
  },

  siblings: function (el) {
    if (!this[0] instanceof HTMLElement) return;
    let arr = [];
    this.forEach(function (ele) {
      arr = arr.concat(ele.siblings(el));
    });
    return arr;
  },

  /*** @Checking_Elements */
  is: function (el) {
    if (!this[0] instanceof HTMLElement) return;
    const arr = [];
    this.forEach(function (ele) {
      arr[arr.length] = ele.is(el);
    });
    return arr;
  },

  has: function (el) {
    if (!this[0] instanceof HTMLElement) return;
    const arr = [];
    this.forEach(function (ele) {
      arr[arr.length] = ele.has(el);
    });
    return arr;
  },

  hasClass: function (C) {
    if (!this[0] instanceof HTMLElement) return;
    const arr = [];
    this.forEach(function (ele) {
      arr[arr.length] = ele.hasClass(C);
    });
    return arr;
  },

  /*** @GETTING_OR_SETTING_DIMENTIONS */
  offset: function (dirs) {
    if (!this[0] instanceof HTMLElement) return;
    const arr = [];
    this.forEach(function (ele) {
      arr[arr.length] = ele.offset(dirs);
    });
    return arr;
  },

  scroll: function (top, left) {
    if (!this[0] instanceof HTMLElement) return;
    // const arr = [];
    this.forEach(function (ele) {
      // arr[arr.length] = ele.scroll(top, left);
      ele.scroll(top, left);
    });
    // return arr;
    return this;
  },

  /*** @MANIPULAITNG */
  before: function (type, el) {
    if (!this[0] instanceof HTMLElement) return;
    // const arr = [];
    this.forEach(function (ele) {
      // arr[arr.length] = ele.before(type, el);
      ele.before(type, el);
    });
    // return arr;
    return this;
  },

  prepend: function (type, el) {
    if (!this[0] instanceof HTMLElement) return;
    // const arr = [];
    this.forEach(function (ele) {
      // arr[arr.length] = ele.prepend(type, el);
      ele.prepend(type, el);
    });
    // return arr;
    return this;
  },

  append: function (type, el) {
    if (!this[0] instanceof HTMLElement) return;
    // const arr = [];
    this.forEach(function (ele) {
      // arr[arr.length] = ele.append(type, el);
      ele.append(type, el);
    });
    // return arr;
    return this;
  },

  after: function (type, el) {
    if (!this[0] instanceof HTMLElement) return;
    // const arr = [];
    this.forEach(function (ele) {
      // arr[arr.length] = ele.after(type, el);
      ele.after(type, el);
    });
    // return arr;
    return this;
  },

  wrappInner: function (el, $fn) {
    if (!this[0] instanceof HTMLElement) return;
    // const arr = [];
    this.forEach(function (ele) {
      // arr[arr.length] = ele.wrappInner(el, $fn);
      ele.wrappInner(el, $fn);
    });
    // return arr;
    return this;
  },

  /*** @CLASSES */
  addClass: function (cls) {
    this.forEach(function (ele) {
      ele.addClass(cls);
    });
    return this;
  },

  removeClass: function (cls) {
    this.forEach(function (ele) {
      ele.removeClass(cls);
    });
    return this;
  },

  toggleClass: function (cls) {
    this.forEach(function (ele) {
      ele.toggleClass(cls);
    });
    return this;
  },

  /*** @GETTERS_AND_SETTERS */
  text: function (val) {
    if (!this[0] instanceof HTMLElement) return;
    const arr = [];
    this.forEach(function (ele) {
      arr[arr.length] = ele.text(val);
    });
    return arr;
  },

  html: function (val) {
    if (!this[0] instanceof HTMLElement) return;
    const arr = [];
    this.forEach(function (ele) {
      arr[arr.length] = ele.html(val);
    });
    return arr;
  },

  attr: function (obj, opt) {
    if (!this[0] instanceof HTMLElement) return;
    const arr = [];
    this.forEach(function (ele) {
      arr[arr.length] = ele.attr(obj, opt);
    });
    return arr;
  },

  addAttr: function (attrs) {
    if (!this[0] instanceof HTMLElement) return;
    this.forEach(function (ele) {
      ele.addAttr(attrs);
    });
    return this;
  },

  removeAttr: function (attrs) {
    if (!this[0] instanceof HTMLElement) return;
    this.forEach(function (ele) {
      ele.removeAttr(attrs);
    });
    return this;
  },

  toggleAttr: function (attrs) {
    if (!this[0] instanceof HTMLElement) return;
    this.forEach(function (ele) {
      ele.toggleAttr(attrs);
    });
    return this;
  },

  css: function (obj) {
    if (!this[0] instanceof HTMLElement) return;
    const arr = [];
    this.forEach(function (ele) {
      arr[arr.length] = ele.css(obj);
    });
    return arr;
  },

  /*** @EVENTS */
  on: function (ev, $fn) {
    if (!this[0] instanceof HTMLElement) return;
    // const arr = [];
    this.forEach(function (ele) {
      // arr[arr.length] = ele.on(ev, $fn);
      ele.on(ev, $fn);
    });
    // return arr;
    return this;
  },

  /*** @BINDING_ELEMENTS_ON_ANOTHER_ELEMENT */

  /*** @EXTRAS */
  clone: function (cloneChildren) {
    if (!this[0] instanceof HTMLElement) return;
    const arr = [];
    this.forEach(function (ele) {
      arr[arr.length] = ele.clone(cloneChildren);
    });
    return arr;
  },
};
