function getFirstNumber(number) {
    return function(secondNumber){
        return number + secondNumber
    }
}

let result = getFirstNumber(4);
console.log(result(4));