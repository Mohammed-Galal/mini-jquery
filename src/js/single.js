export default {
  /*** @Selecting_Elements */
  $: function (els, $fn) {
    const element = this.querySelector(els);
    if ($fn) {
      $fn(X).forEach(function (prop, val) {
        element[prop] = val;
      });
    }
    return element;
  },

  $$: function (els, $fn) {
    const element = this.querySelectorAll(els);
    if ($fn) {
      element.forEach(function ($, i) {
        $fn($, i).forEach(function (prop, val) {
          $[prop] = val;
        });
      });
    }
    return element;
  },

  and: function (el) {
    const arr = [this],
      ele = document.querySelectorAll(el);
    ele.forEach(function ($) {
      arr[arr.length] = $;
    });
    return arr;
  },

  prevAll: function (el) {
    const target = this.parentElement.firstElementChild;
    let current = this.previousElementSibling,
      arr = [current];

    if (el) {
      arr = [];
      while (!current.isSameNode(target)) {
        if (current.matches(el)) arr[arr.length] = current;
        current = current.previousElementSibling;
      }
    } else {
      while (!current.isSameNode(target)) {
        current = current.previousElementSibling;
        arr[arr.length] = current;
      }
    }
    return arr;
  },

  prevUntil: function (el) {
    let current = this.previousElementSibling,
      arr = [current];
    while (!current.matches(el)) {
      current = current.previousElementSibling;
      arr[arr.length] = current;
    }
    return arr;
  },

  prev: function () {
    return this.previousElementSibling;
  },

  next: function () {
    return this.nextElementSibling;
  },

  nextUntil: function (el) {
    let current = this.nextElementSibling,
      arr = [current];

    while (!current.matches(el)) {
      current = current.nextElementSibling;
      arr[arr.length] = current;
    }
    return arr;
  },

  nextAll: function (el) {
    let current = this.nextElementSibling,
      // parentElement || parentNode || offsetParent
      target = current.parentElement.lastElementChild,
      arr = [current];

    while (target.nodeName.toLowerCase() === "script") {
      target = target.previousElementSibling;
    }

    if (el) {
      arr = [];
      while (!current.isSameNode(target)) {
        if (current.matches(el)) arr[arr.length] = current;
        current = current.nextElementSibling;
      }
    } else {
      while (!current.isSameNode(target)) {
        current = current.nextElementSibling;
        arr[arr.length] = current;
      }
    }
    return arr;
  },

  parent: function () {
    return this.parentElement;
  },

  parents: function (el) {
    const html = document.documentElement;
    let current = this.parentElement,
      arr = [];
    if (el) {
      while (!current.isSameNode(html)) {
        if (current.matches(el)) arr[arr.length] = current;
        current = current.parentElement;
      }
    } else {
      while (!current.isSameNode(html)) {
        arr[arr.length] = current;
        current = current.parentElement;
      }
      arr[arr.length] = current;
    }
    return arr;
  },

  parentsUntil: function (el) {
    let current = this.parentElement,
      arr = [current];
    while (!current.matches(el)) {
      current = current.parentElement;
      arr[arr.length] = current;
    }
    return arr;
  },

  siblings: function () {
    const children = this.parentElement.children,
      arr = [],
      me = this;

    children.forEach(function (ele) {
      if (!ele.isSameNode(me)) {
        arr[arr.length] = ele;
      }
    });

    return arr;
  },

  /*** @Checking_Elements */
  is: function (el) {
    return this.matches(el);
  },

  hasClass: function (C) {
    const OBJ = {},
      Class = this.className;

    const CNV = C.split(",");

    CNV.forEach(function (str) {
      const CNV_str = str.trim(),
        passed = Class.match(CNV_str) === null ? false : true;
      if (passed) {
        OBJ[CNV_str] = passed;
      }
    });

    return OBJ;
  },

  has: function (el) {
    return this.contains(this.querySelector(el));
  },

  /*** @GETTING_OR_SETTING_DIMENTIONS */
  offset: function (dirs) {
    const boundingRect = this.getBoundingClientRect();
    var OBJ = {};

    const obj = {
      top: boundingRect.top,
      left: boundingRect.left,
      height: boundingRect.height,
      width: boundingRect.width,
      y: boundingRect.top,
      x: boundingRect.left,
    };

    if (dirs) {
      const CNV = dirs.split(",");
      CNV.forEach(function (dir) {
        const CNV_dir = dir.trim();
        OBJ[CNV_dir] = obj[CNV_dir];
      });
      return OBJ;
    } else return obj;
  },

  scroll: function (top, left) {
    if (top && !left && typeof top !== "string") {
      this.scrollTop = left.top;
      this.scrollLeft = left.left;
      return this;
    }
    if (top && !left) {
      this.scrollTop = top;
      return this;
    } else if (left && !top) {
      this.scrollLeft = left;
      return this;
    }
    const obj = {
      top: this.scrollTop,
      left: this.scrollLeft,
      height: this.scrollHeight,
      width: this.scrollWidth,
    };
    return obj;
  },

  /*** @MANIPULAITNG */
  before: function (type, el) {
    if (type.toLowerCase() === "html") {
      this.insertAdjacentHTML("beforebegin", el);
    } else this.insertAdjacentText("beforebegin", el);
    return this;
  },

  append: function (type, el) {
    if (type.toLowerCase() === "html") {
      this.insertAdjacentHTML("beforeend", el);
    } else this.insertAdjacentText("beforeend", el);
    return this;
  },

  prepend: function (type, el) {
    if (type.toLowerCase() === "html") {
      this.insertAdjacentHTML("afterbegin", el);
    } else this.insertAdjacentText("afterbegin", el);
    return this;
  },

  after: function (type, el) {
    if (type.toLowerCase() === "html") {
      this.insertAdjacentHTML("afterend", el);
    } else this.insertAdjacentText("afterend", el);
    return this;
  },

  wrapInner: function (el, $fn) {
    this.innerHTML = "<" + el + ">" + this.innerHTML + "</" + el + ">";
    const X = this.querySelector(el + ":only-child");
    if ($fn) {
      $fn(X).forEach(function (prop, val) {
        X[prop] = val;
      });
    }
    return X || this;
  },

  /*** @CLASSES */
  addClass: function (cls) {
    const me = this.classList,
      CNV = cls.split(",");
    CNV.forEach(function (C) {
      me.add(C);
    });
    return this;
  },

  removeClass: function (cls) {
    const me = this.classList,
      CNV = cls.split(",");
    CNV.forEach(function (C) {
      me.remove(C);
    });
    return this;
  },

  toggleClass: function (cls) {
    const me = this.classList,
      CNV = cls.split(",");
    CNV.forEach(function (C) {
      me.toggle(C);
    });
    return this;
  },

  /*** @GETTERS_AND_SETTERS */
  txt: function (val) {
    if (val) {
      this.innerText = val;
      return this;
    } else return this.innerText;
  },

  html: function (val) {
    if (val) {
      this.innerHTML = val;
      return this;
    } else return this.innerHTML;
  },

  attr: function (obj) {
    const me = this;
    if (obj) {
      if (typeof obj === "string") {
        const ArrayOfAttrs = obj.trim().split(","),
          OBJ = {};
        ArrayOfAttrs.forEach(function (atr) {
          const CNV = atr.trim();
          if (me.hasAttribute(CNV) == false) return;
          OBJ[CNV] = me.getAttribute(CNV);
        });
        return OBJ;
      } else {
        obj.forEach(function (prop, val) {
          me.setAttribute(prop.trim(), val);
        });
        return this;
      }
    } else {
      const OBJ = {};
      me.getAttributeNames().forEach(function (atr) {
        OBJ[atr] = me.getAttribute(atr);
      });
      return OBJ;
    }
  },

  addAttr: function (attrs) {
    const me = this,
      ArrayOfAttrs = attrs.split(",");
    ArrayOfAttrs.forEach(function (atr) {
      me.setAttribute(atr.replace(/ /g, ""), true);
    });
    return this;
  },

  removeAttr: function (attrs) {
    const me = this,
      ArrayOfAttrs = attrs.split(",");
    ArrayOfAttrs.forEach(function (atr) {
      me.removeAttribute(atr.replace(/ /g, ""));
    });
    return this;
  },

  toggleAttr: function (attrs) {
    const me = this,
      ArrayOfAttrs = attrs.split(",");
    ArrayOfAttrs.forEach(function (atr) {
      const CNV = atr.replace(/ /g, "");
      me.hasAttribute(CNV)
        ? me.removeAttribute(CNV)
        : me.setAttribute(CNV, true);
    });
    return this;
  },

  css: function (obj) {
    const me = this;
    if (obj) {
      if (typeof obj === "string") {
        const CNV = obj.split(","),
          OBJ = {};
        CNV.forEach(function (S) {
          const CNV = S.trim();
          OBJ[CNV] = getComputedStyle(me).getPropertyValue(CNV);
        });
        return OBJ;
      } else {
        obj.forEach(function (prop, val) {
          const CNV = prop.trim();
          me.style.setProperty(CNV, val);
        });
        return this;
      }
    } else return getComputedStyle(this) || this.style;
  },

  /*** @EVENTS */
  on: function (ev, $fn) {
    if (ev && $fn) {
      const me = this;
      if (typeof ev === "string") {
        const ArrayOfEvents = ev.split(",");
        ArrayOfEvents.forEach(function (e) {
          me["on" + e] = $fn;
        });
      } else {
        ev.forEach(function (prop, val) {
          me["on" + prop] = val;
        });
      }
      return this;
    } else return this;
  },

  /*** @BINDING_ELEMENTS_ON_ANOTHER_ELEMENT */
  // bind: function (
  //   inputElement,
  //   targetElement_OR_Elements,
  //   HTML_OR_TEXT_OR_VALUE
  // ) {
  //   const input = document.querySelector(inputElement);
  //   switch (HTML_OR_TEXT_OR_VALUE.toLowerCase()) {
  //     case "html":
  //       input.oninput = function () {
  //         document
  //           .querySelectorAll(targetElement_OR_Elements)
  //           .forEach(function ($) {
  //             $.innerHTML = input.value;
  //           });
  //       };
  //       break;
  //     case "text":
  //       input.oninput = function () {
  //         document
  //           .querySelectorAll(targetElement_OR_Elements)
  //           .forEach(function ($) {
  //             $.innerText = input.value;
  //           });
  //       };
  //       break;
  //     default:
  //       input.oninput = function () {
  //         document
  //           .querySelectorAll(targetElement_OR_Elements)
  //           .forEach(function ($) {
  //             $.value = input.value;
  //           });
  //       };
  //       break;
  //   }
  //   return true;
  // },

  /*** @EXTRAS */
  clone: function (cloneChildren) {
    return this.cloneNode(cloneChildren);
  },
};
