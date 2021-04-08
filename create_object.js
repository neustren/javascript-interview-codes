// 3 ways to make an object


// 1- Object literal syntax
const myBoat = {
    length: 24,
    maxSpeed: 45,
    getLength: function () {
        return this.length
    }
}

// 2- Object constructor
const student = new Object();
student.grade = 12;


// 3- Constructor function
function Car(color, brand, year) {
    this.color = color;
    this.brand = brand;
    this.year = year;
}

Car.prototype.getColor = function () {
    return this.color;
}

const carlys = new Car('Blue', 'ferrari', 2015)
const carlysCar = new Car('blue', 'ferarri', 2015);
const jimsCar = new Car('red', 'tesla', 2014);

console.log(carlysCar.getColor());
console.log(jimsCar.getColor());