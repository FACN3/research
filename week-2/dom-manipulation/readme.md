### DOM manipulation
- How can you use JavaScript to create an HTML element and then add it to your webpage? How would you replace an existing element with it?
- How would you add a `<li>` element to the start of a `<ul>`?
- What is a JavaScript Event? What does event.preventDefault() do and why might you use it?
- What is a NodeList? How is it different from an Array?
- What are the security concerns around `Element.innerHTML` and what could you use instead?


### How would you add a `<li>` element to the start of a `<ul>`?

We create a function in which we select our list element from the DOM. Then we create a new list element using the createElement() method. Once our new li element is created, we can add text to it or set its attributes (id, class...). 
Using the appendChild() method we associate our text with the newly created element. Once our li element is created and populated with text and its attributes set, we can append it to the ul element.

(see example.html and functions.js)

```
var addElement2 = function() {
  var ul = document.querySelector('.list');
  var new_li = document.createElement('li');

  new_li.appendChild(document.createTextNode("This is a third list element"));
  document.querySelector('.list').appendChild(new_li);

  console.log(ul);
}

```

### What is a JavaScript Event? What does event.preventDefault() do and why might you use it?

## JavaScript Event
- Things that occur when the user or the browser manipulates a page.

  (For example: clicking a button, pressing any key, resizing a window, etc…)

## What does event.preventDefault() do and why might you use it?
- The event.preventDefault() method stops the default action of an element from happening. 

 (For example: Prevent a submit button from submitting a form. Prevent a link from following the URL.)

e.g.
```
<!DOCTYPE html>
<html>
<body>

<a id="myAnchor" href="https://w3schools.com/">Go to W3Schools.com</a>

<p>The preventDefault() method will prevent the link above from following the URL.</p>

<script>
document.getElementById("myAnchor").addEventListener("click", function(event){
    event.preventDefault(); //prevent the website from opening on the same window
    window.open("https://www.w3schools.com"); //open the website in the new window
});
</script>

</body>
</html>
```


### What is a NodeList? How is it different from an Array?


## NodeLists



Whenever accessing and saving DOM elements into variables, it looks like an array.

**BUT IS IT?**

no. it's not. It's a NodeList/HTMLCollection, and it's very similar to an array, but it differs.

Some (older) browsers return a NodeList object instead of an HTMLCollection for methods like getElementsByClassName().

NodeLists save live versions of Nodes, this is good to see collections of web elements

e.g.
```
HTML
<div></div>
<div></div>
<div></div>


var nodes = document.getElementsByTagName('div');

// outputs 3
console.log(nodes);

// create a new element
var newDiv = document.createElement('div');
document.body.appendChild(newDiv);

// outputs 4
console.log(nodes);
```


also, Arrays come with a bunch of awesomely inherited prototypal methods, things like splice(), push(), join(), indexOf() and many more. When our collections are NodeLists, we miss out on all this goodness.

HOW TO CONVERT NODELISTS TO ARRAYS

<IE8
```var myNodeList = document.querySelectorAll('div');
var myArray = []; // empty Array
for (var i = 0; i < myNodeList.length; i++) {
    var self = myNodeList[i];
    myArray.push(self);
}
```
ALL THE OTHERS
// 'divs' is now an Array
```
var divs = Array.prototype.slice.call(document.querySelectorAll('div'));
```

### What are the security concerns around `Element.innerHTML` and what could you use instead?

The innerHTML method returns the full markup of the element that was called by it as well as it's child elements. Because text inside html tags can be interpreted as code, problems can arise when it become possible to insert arbitrary javascript code through client-side methods (Cross-Site scripting vulnerabilities).

To prevent those risks, it is better to use a method like textContent that can add/replace/remove the content of DOM elements by parsing the html and returning only raw text. This makes it very difficult for someone to insert arbitrary code into the webpage.

```
function useless() {
  //This example doesn't work...
  var popUp = "<script>alert('I am an annoying alert!')</script>";
  var title = document.getElementById("title");
  title.innerHTML = popUp;

}

function notSafe() {
  // This alert will show...
  var popUp = "<img src='x' onerror='alert(\"I am an annoying alert!\")'>";
  var title = document.getElementById("title");
  title.innerHTML = popUp;
}
```

