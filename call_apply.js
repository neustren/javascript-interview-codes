// Describe call() and apply() methods
// Call helps to change the context (this) of some method, passing in the first argument
// The apply method is like the same but you pass the args, except the first one, as array

const car1 = {
    brand: 'Porsche',
    getCarDescription: function (cost, year, color) {
        console.log(`This car is a ${this.brand}. The price is $${cost}. The year is ${year}. The color is ${color}.\n`);
    }
};

const car2 = {
    brand: 'Lamborghini'
};

const car3 = {
    brand: 'Ford'
};

car1.getCarDescription(80000, 2010, 'blue');
car1.getCarDescription.call(car2, 200000, 2013, 'yellow');
car1.getCarDescription.apply(car3, [35000, 2012, 'black']);