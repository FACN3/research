
//Question: How would you add a <li> element to the start of a <ul>?

//First, we need to create a new function.
var addElement = function() {
  // Inside, we select our list element from the DOM
  var ul = document.querySelector('.list');
  // Then we create a new list element (li)
  var new_li = document.createElement('li');
  // Once our new li element is created, we can put some text into it.
  var li_text = document.createTextNode("This is a third list element");
  // We can now associate our text with the new li element. To do that
  // we apply the appendChild method on the li element we created.
  new_li.appendChild(li_text);
  // Once our li element is created and populated with text, we can append it to
  // our list
  document.querySelector('.list').appendChild(new_li);
  console.log(ul);
}

/* A bit Simplified version */
var addElement2 = function() {
  var ul = document.querySelector('.list');
  var new_li = document.createElement('li');

  new_li.appendChild(document.createTextNode("This is a third list element"));
  document.querySelector('.list').appendChild(new_li);

  console.log(ul);
}


/* Question: What are the security concerns around Element.innerHTML
          and what could you use instead? */

/* What does Element.innerHTML do:

    - This method returns the complete html markup from the element called for as
      as well as all it's children.
*/

// Example:

var markup = function(){

  return document.querySelector("section").innerHTML;
}

/* HTML5 automatically prevents script tags to be executed. The issue comes
   when other methods are used to include arbitrary javascript to a webpage */

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

// Because text inside the html tags can be executed as code, it is always better
// to use a method like textContent. The textContent method will parse the html to
// extract/replace/add only raw text making it very difficult for someone to insert
// arbitrary code.

function isSafe() {
  return document.querySelector("section").textContent;
}
