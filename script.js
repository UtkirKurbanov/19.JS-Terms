var str1 = "Hello world";
var str2 = "Goodbye world 2";

// console.log(str1);
// console.log(str2);

var personName = "Salahiddin";

var message = 'The name of man is "' + personName + '"';
var message2 = "The name of man is '" + personName + "'";
var message3 = "The name of man is \\ '" + personName + "'";

console.log(message2);

var newMessage = "Hello world!!!";

console.log(newMessage.length);
console.log(newMessage.toUpperCase());
console.log(newMessage.toLowerCase());
console.log(newMessage.charAt(1));
console.log(newMessage.indexOf("world"));
console.log(newMessage.indexOf("cat"));
console.log(newMessage.substr(1, 4));
console.log(newMessage.substr(newMessage.indexOf("world"), 5));
console.log(newMessage.substring(0, 5));
