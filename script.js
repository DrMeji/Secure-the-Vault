// pseudocode
// make a const DrMejia = "You have received this message because you have been chosen to open an important vault. Here is the secret combination";
// continued to creat 3 more const and added +, -, *
// creat script.js
// creat .html
// creat style.css


// Define vatiables for the combination codes 
const one = 5 + 5;
const two = 50 - 10;
const three = 1 * 39;


// Message for the active user
const DrMejia = "You have received this message because you have been chosen to open an important vault. Here is the secret combination";


// Output the passcode to the console
console.log(DrMejia);
console.log(one);
console.log(two);
console.log(three);


// Display the message on the Web page
document.getElementById("DrMejia").innerHTML = DrMejia;


// Show how much delay was used for the combination alert
setTimeout(function() {alert(one + "-" + two + "-" + three);},1250);