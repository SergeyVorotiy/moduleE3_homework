function printNumbers(start, finish) {
    let current = start;

    let intervalId = setInterval(function() {
        console.log(current);
        if (current == finish) {
            clearInterval(intervalId);
        }
        current++;
    }, 1000);
}

printNumbers(5, 15);