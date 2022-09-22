let array = [1,1,2,1,1,4,'3', null];
function getCountEvenOddZeroItems(array){
    let even = 0;
    let odd = 0;
    let zero = 0;
    for (let i = 0; i < array.length; i++) {
        if (+array[i]) {
            if (array[i] % 2 == 0) {
                even++;
            } else {
                odd++;
            }
        } else if (array[i] == 0) {
            zero++;
        }
    }
    console.log(`even - ${even}; odd - ${odd}; zero - ${zero}`);
};
getCountEvenOddZeroItems(array);