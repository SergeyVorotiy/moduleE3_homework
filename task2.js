function isPrime(number) {
    let result;
    if (number < 1 || number > 1000) {
        return 'Данные не верны';
    }
    if (number == 1){
        return 'простое - 1'
    }
    let dividersCount = 0;
    for (let i = number; i > 1; i--) {
        if (number % i == 0) {
            dividersCount++;
        }
    }
    if (dividersCount > 1){
        result = 'Не простое';
    } else if (dividersCount == 1) {
        result = `простое - ${number}`;
    }else {
        result = ' Это 0 '
    }
    return result;
}
console.log(isPrime(0), isPrime(1), isPrime(2), isPrime(3), isPrime(5), isPrime(6), isPrime(1111))