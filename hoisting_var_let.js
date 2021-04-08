function getTotal() {
    let total;

    total = 0;

    for (var i = 0; i < 10; i++) {
        let valueToAdd;
        var multiplier
        valueToAdd = i;
        multiplier = 2;
        total += valueToAdd * multiplier;
    }

    return total;
}

getTotal();

// Variable ans function are hoisted to the top of the scope that they are declared in.
// Let and Const are block hoisted.
// If you define a var inside a block, its gonna be hoisted in the top of the current function