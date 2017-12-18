# Promises

## A Promise in short:

"Imagine you are a kid. Your mom promises you that she'll get you a new phone next week."

You don't know if you will get that phone until next week. Your mom can either ***really*** buy you a brand new phone, or ***stand you up*** and withhold the phone if she is not happy :(.

### That is a promise.
#### A promise has 3 states. They are:

1. Promise is pending: You don't know if you will get that phone until next week. :hourglass:

2. Promise is resolved: Your mom really buy you a brand new phone. :white_check_mark:

3. Promise is rejected: You don't get a new phone because your mom is not happy. :x:

[An example file ( promises.js ) same as the code below](promises.js)

#### in the example above

1. We have a boolean isMomHappy, to define if mom is happy.

2. We have a promise willIGetNewPhone. The promise can be either resolved (if mom get you a new phone) or rejected(mom is not happy, she doesn't buy you one).

3. There is a standard syntax to define a new Promise, refer to MDN documentation, a promise syntax look like this.

```
// Example using ES5

var isMomHappy = false; // is mom happy?
// Promise
var WillIGetNewPhone = new Promise(function(res, rej) { // Resolve and reject

      function(resolve, reject) { // Getting a phone eventually? or not?

        if (isMomHappy) { // if mom is happy, run everything

          var phone = { // keys, what is the phone we are gettings
            brand: 'iPhone',
            color: 'Silver'
          };

          resolve(phone); // Yaaay new iPhone

        } else {

          var reason = new Error('mom is not happy youre a bad boy');

          reject(reason); // Not getting the phone ===> REJECT CASE
        }
      }
    );

    // call our promise
    var askMom = function() {
      willIGetNewPhone
        .then(function(fulfilled) { // The then() method returns a Promise for the success and failure cases
          // yay, you got a new phone
          console.log(fulfilled);
        })
        .catch(function(error) { // The catch() method returns a Promise and deals with REJECTED CASE only.
          // ops, mom don't buy it
          console.log(error.message);
        });
    }
    askMom();

    // ============================================================== //
    // ============================================================== //

    // 1. We have a boolean isMomHappy, to define if mom is happy.

    // 2. We have a promise willIGetNewPhone. The promise can be either resolved
    // (if mom get you a new phone) or rejected(mom is not happy, she doesn't buy you one).

    // 3. There is a standard syntax to define a new Promise, refer to MDN documentation,
    // a promise syntax look like this.

```
### ***[demo](https://jsbin.com/nifocu/1/edit?js,console)***

in the demo above, change 'isMomHappy' between false and true and run the code.
