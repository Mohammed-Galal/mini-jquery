# mini-jquery

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

> $("h1").innerText == $("h1").txt() == document.querySelector("h1").innerText == document.querySelector("h1").txt(). and so on...

## select parents element(s)

```javascript
$("h1").parent(); // this will return the direct parent

$("h1").parentsUntil("#second-parent"); // this will return an array of selected element parents and ends with the element which you specified

$("h1").parents(); // this will return an array of the selected element parents

$("h1").parents(".parent"); // this will return an array of all parent elements which has class parent
```

## select next element(s)

```javascript
$("h1").nextAll(); // this will return an array of the selected element next elements

$("h1").nextAll(".test"); // this will return an array of all the following elements that has cals "test"

$("h1").nextUntil("#some-next-element"); // this will return an array of selected element next siblings and ends with the element which you specified

$("h1").next(); // this will return the right following element
```

## select prev element(s)

```javascript
$("h1").prevAll(); // this will return an array of the selected element prev elements

$("h1").prevAll(".test"); // this will return an array of all the prev elements that has cals "test"

$("h1").prevUntil("#some-prev-element"); // this will return an array of selected element prev siblings and ends with the element which you specified

$("h1").prev(); // this will return the right previous element
```

## select siblings

```javascript
$("element").siblings(); // this will return all the element siblings
```

> Note: all of the methods mentioned above are also available in the **select all function (\$\$)**.

## finding child(ren)

```javascript
$("element").children; // returns an array of all the direct children
```

> this method not available in the select All fucntion

```javascript
$("element").$("childElement"); // that will return the targeted child element if found

$("element").$$("childElements"); // that will return the targeted children elements

$("element1").has("childElement"); // that will check  if element1 has a child matches the to-be-found element and will return **boolean value**
```

## CSS

```javascript
$("element").css(); // returns an object of the selected element styles

$("element").css("color, height, width"); // returns an object of the selected element's specified styles

$("element").css({
  "background-color": "#ff0",
  color: "#fff",
  padding: "10px",
});
// setting styles on an element
```

> the css method works also with the **select All fucntion (\$\$)**.

## attributes

```javascript
$("element").attr(); // returns an object of all the attributes and its value that the element has

$("element").attr("attr_1, attr_2, ...."); // returns an object of all the attributes **specified** and its value

$("element").attr({
  class: "test",
  attr_2 : "some value",
  ....
}); // this will reset the attributes you specified to the value you defined

$("element").addAttr("attr-1 , attr-2, ....") // to add attributes

$("element").removeAttr("attr-1 , attr-2, ....") // to remove attributes

$("element").toggleAttr("attr-1 , attr-2, ....") // to toggle attributes
```

## events

```javascript

$("element").on("click, mouseleave, ...", function(){
  // do some thing
  // you can access the target element using "this" keyword not $(this).
}); // this will set a punch of events to execute a specific function

$("element").on({
  click: function(){
    // handle click event
  },

  mouseenter: function(){
    // handle mouse enter event
  },
  ....
});
```

## classes

```javascript
$("element").addClass("class-1, class-2, ....");

$("element").removeClass("class-1, class-2, ....");

$("element").toggleClass("class-1, class-2, ....");
```

## some extra methods

```javascript
$("element").clone(); // to clone an element

$$("elements")[number] > // to select the element with its index
  OR;
$$("elements").eq(number); // to select the element with its index
```

## offset

```javascript
$("element").offset(); // this will return an object of the element's dimentions

$("element").offset("top, left"); // this will return an object of the element's specified dimentions
```

> the offset method is also available with the **select All function (\$\$)**

## checking

```javascript
$("element").is("element"); // checks if the selected is equal to the specified element or not

$("element").has("childElement"); // checks if the selected element has a specific child

$("element").hasClass("some-class, another-class,...."); // checks is the selected element has a specific class
```

> the checking methods is also available with the **select All function (\$\$)**

# for media audio and video elements

## to get the buffers

```javascript
videoElement.$buffers; // that will return an object of all the bufferd sections in the audio/video element
```

## to get the duration

```javascript
videoElement.$duration; // that will return an object of the audio/video duration in hours, minutes and seconds
```

## to get the current Time

```javascript
videoElement.$currentTime; // that will return an object of the audio/video current time in hours, minutes and seconds
```

## to get the time left to finish

```javascript
videoElement.$timeLeft; // that will return an object of the audio/video time left in hours, minutes and seconds
```
