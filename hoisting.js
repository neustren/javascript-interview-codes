// What variable and function hoisting is and how it works.

// R: The order of assign functions and variables. You cannot call a function before his declaration
// Function expressions, like: "var a = function(..." never hoists to top;
// Function declarations, like "function (..." goes to the top hoisted, so, you can call the function before the declaration

// // tab 1
// console.log(color); // Undefined
// var color = "blue";
// console.log(color); // ok


// //tab 2
// var color;
// console.log(color); // Undefined
// color = "blue";
// console.log(color); // ok


// tab 3
// console.log(getProduct(2, 3));
// var getProduct = function (num1, num2) {
//     return num1 * num2;
// };
// console.log(getProduct(2, 3));


// tab 4
// console.log(getProduct(2, 3)); // Declarative function here, gonna works
// function getProduct(num1, num2) {
//     return num1 * num2;
// }


// tab 5
var globalVar = 'global';
(function () {
    var name = 'Jen';
    var getAge = function () {
        return '30';
    };

    function getState() {
        return 'Delaware';
    }

})();

