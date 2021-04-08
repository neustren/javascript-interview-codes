
(function () {
    var x = y = 200;
})();

console.log('y: ', y); // ok, because its a global variable
console.log('x: ', x); // the "var" makes local variable, unreachable


