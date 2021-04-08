// What button5 gonna print?

function createButtons() {
    for (var i = 1; i <= 5; i++) {
        var body = document.getElementsByTagName("BODY")[0];
        var button = document.createElement("BUTTON");
        button.innerHTML = 'Button ' + i;
        button.onclick = function () {
            alert('This is button ' + i);
        }
        body.appendChild(button);
    }
}

createButtons();
// The alert gonna print ("This is Button 6"). How to fix?

// SOLUTION 1: IIFE
function createButtons() {
    for (var i = 1; i <= 5; i++) {
        var body = document.getElementsByTagName("BODY")[0];
        var button = document.createElement("BUTTON");
        button.innerHTML = 'Button ' + i;
    };
    (function (num) {
        button.onclick = function () { }
        alert('This is button ' + i);
    })(i);
    body.appendChild(button);
}

createButtons();

// SOLUTION 2: let

function createButtons() {
    for (let i = 1; i <= 5; i++) {
        var body = document.getElementsByTagName("BODY")[0];
        var button = document.createElement("BUTTON");
        button.innerHTML = 'Button ' + i;
        button.onclick = function () {
            alert('This is button ' + i);
        }
        body.appendChild(button);
    }
}
createButtons();

// SOLUTION 3: isolated function

function createButtons() {
    for (var i = 1; i <= 5; i++) {
        var body = document.getElementsByTagName("BODY")[0];
        var button = document.createElement("BUTTON");
        button.innerHTML = 'Button ' + i;
        addClickFunctionality(button, i);
        body.appendChild(button);
    }
}

function addClickFunctionality(button, num) {
    button.onclick = function () {
        alert('This is button ' + num);
    }
}

createButtons();