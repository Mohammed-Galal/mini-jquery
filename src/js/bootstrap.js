//  OBJECT LOOP
Object.prototype.forEach = function ($fn) {
  for (let i in this) {
    if (i === "forEach" || i === "filter") continue;
    $fn(i, this[i]);
  }
};

//  Object Filter
Object.prototype.filter = function ($fn) {
  const obj = this;
  for (let prop in obj) {
    if (prop === "forEach" || prop === "filter") continue;
    let passed = $fn(prop, obj[prop]);
    if (!passed) delete obj[prop];
  }
  return obj;
};

// Selecting Elements
window.$ = function (ele, $fn) {
  const X = typeof ele === "string" ? document.querySelector(ele) : ele;
  if ($fn) {
    $fn(X).forEach(function (prop, val) {
      X[prop] = val;
    });
  }
  return X;
};

window.$$ = function (ele, $fn) {
  const X = document.querySelectorAll(ele);
  if ($fn) {
    X.forEach(function ($, i) {
      $fn($, i).forEach(function (prop, val) {
        $[prop] = val;
      });
    });
  }
  return X;
};
