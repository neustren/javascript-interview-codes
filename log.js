let num = 50;

function logNumber() {
    console.log(num);
    var num = 100;
}

logNumber();

// print: Undefined; Because inside the function block the var after will redefine to undefined;'
