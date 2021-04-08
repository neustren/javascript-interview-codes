// Return total of all 3 numbers added together
// tripleAdd(10)(20)(30)


function tripleAdd(a) {
    return function (b) {
        return function (c) {
            d = c + b + a
            console.log(d)
            return d
        }
    }
}

tripleAdd(10)(20)(30)
