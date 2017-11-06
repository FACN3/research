### DOM manipulation
- How can you use JavaScript to create an HTML element and then add it to your webpage? How would you replace an existing element with it?
- How would you add a `<li>` element to the start of a `<ul>`?
- What is a JavaScript Event? What does event.preventDefault() do and why might you use it?
- What is a NodeList? How is it different from an Array?
- What are the security concerns around `Element.innerHTML` and what could you use instead?


## JavaScript Event

Things that occur when the user or the browser manipulates a page.
 (clicking a button, pressing any key, resizing a window, etc…)

## event.preventDefault()

 The event.preventDefault() method stops the default action of an element from happening. For example: Prevent a submit button from submitting a form. Prevent a link from following the URL.

e.g.
```
<!DOCTYPE html>
<html>
<body>

<a id="myAnchor" href="https://w3schools.com/">Go to W3Schools.com</a>

<p>The preventDefault() method will prevent the link above from following the URL.</p>

<script>
document.getElementById("myAnchor").addEventListener("click", function(event){
    event.preventDefault();
    window.open("https://www.w3schools.com");
});
</script>

</body>
</html>
```



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
