learn all about promises!

### What is a Promise?
Web Developers agree that async is generally better for performance and flexibility. but also the more nested callbacks you have, the worse your code looks. Here comes promises. Promises in JavaScript are there to write cleaner asynchronous code.

A promise represents the future result of an asynchronous operation.
If you write them the way they are meant to be used, you can write asynchronous code in a way that resembles synchronous code and is much more easy to follow:

```
api().then(function(result){
    return api2();
}).then(function(result2){
    return api3();
}).then(function(result3){
     // do work
});
```
Obviously it's not less code with promises but more readable.

To check for any errors in any of the steps..it would be hard to do that with callbacks..but its super easy to check them with promises:

```
api().then(function(result){
    return api2();
}).then(function(result2){
    return api3();
}).then(function(result3){
     // do work
}).catch(function(error) {
     //handle any error that may occur before this point
});
```
 
 
 ### FETCH


It's no secret that the XMLHttpRequest API is complex and difficult to remember. Thankfully, the new fetch API will make AJAX requests a breeze! And guess what? It uses promises to handle results!

Fetch API, is a new API which allows you to make requests similar to XHR's, it uses also JavaScript Promises to handle results/callbacks.

```
fetch('some/api/getData.json')  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.log('Status Code: ' + response.status);  
        return;  
      }  
      response.json().then(function(data) {  
        console.log(data);  
      });  
    }  
  )  
  .catch(function(err) {  
    console.log(err);  
  });
```


--> Downside of Fetch:
1. no way to set a timeout yet
2. can't override the content-type header of the response






