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
