# inhanced-jquery

## Selecting Elements

```javascript
1. select one element.
  $("element")

2. select all h1 element e.g.
  $$("h1")

2. select all h1 element and some other element(s).
  $$("h1").and("elements")
```

## Select and manipulate element(s)

1. select **one** element an manipulate it.

```javascript
$("h1[class='hello world']", (el) => {
  return {
    style: "background: blue; color: #fff",
    innerText: el.className, // this line in this function will set the h1 element's innerText to be the value of it's class (for example)
    onclick: function () {
      console.log(el, this);
    },
  };
});
```

2. select **all** h1 elements \_with \_class "hello world" and manipulate it.

```javascript
$$("h1[class='hello world']", (el) => {
  return {
    style: "background: blue; color: #fff",
    innerText: el.className,
    onclick: function () {
      console.log(el, this);
    },
  };
});
```

> the second argument in the **select function (\$)** has to be a function which passes one parameter represents the element chosen... so you can access all the element's native properties through out the argument you wrote.

> also note that the **single select function (\$)** makes you able to you access all the selected element's native properties, while this is not possible in the **select all function ($\$)** until you loop through it using the **forEach** method.

### $("h1").innerText == $("h1").txt() == document.querySelector("h1").innerText == document.querySelector("h1").txt().

### and so on...

## select parents element(s)

```javascript
$("h1").parents(); // this will return an array of the selected element parents

$("h1").parentsUntil("#second-parent"); // this will return an array of selected element parents and ends with the element which you specified

$("h1").parent(); // this will return the direct parent
```

## select next element(s)

```javascript
$("h1").next(); // this will return an array of the selected element next elements

$("h1").nextUntil("#third-sibling"); // this will return an array of selected element next siblings and ends with the element which you specified

$("h1").next(); // this will return the right following element
```

## select prev element(s)

```javascript
$("h1").prev(); // this will return an array of the selected element prev elements

$("h1").prevUntil("#third-sibling"); // this will return an array of selected element prev siblings and ends with the element which you specified

$("h1").prev(); // this will return the right previous element
```

> Note: all of the methods mentioned above are also available in the **select all function (\$\$)**.

## finding child(ren)

```javascript
$("element").children; // returns an array of all the direct child(ren).. this method not available in the select All fucntion

$("element").$("childElement"); // that will return the child element if found

$("element1").has("childElement"); // that will check  if element1 has a child matches the to-be-found element and will return **boolean value**
```
