var str = 'is this This';

var regexIs = new RegExp("is");

console.log(regexIs.test(str));

var regerxIs2 = /is/;

console.log(regerxIs2.exec(str));

var regexIs3 = new RegExp("is" , "g");

console.log(regexIs3.exec(str));

var regexIs4 = new RegExp("is" , "g");

console.log(regexIs4.exec(str));
console.log(regexIs4.exec(str));

var regexIs5 = new RegExp("is" , "g");

console.log(regexIs5.exec(str));
console.log(regexIs5.exec(str));
console.log(regexIs5.exec(str));

var regexIs6 = new RegExp("is" , "g");

console.log(str.match(regexIs6));

var str2 = 'hello is world';

console.log(str2.replace(regexIs6, str2 => ""));

var str3 = 'hello is world';

console.log(str3.search(regexIs6));
