function sumOfMaxMin(numbers){
    var maxNumber = numbers[0];
    var minNumber = numbers[0];

    for(i = 0; i < numbers.length; i++){
        if(numbers[i] > maxNumber){
            maxNumber = numbers[i];
        }
        else if(numbers[i] < minNumber){
            minNumber = numbers[i];
        }
    }

    return maxNumber + minNumber;
}

sum = sumOfMaxMin([4, 2, 7, 40, 20, 55, 8]);

//console.log(sum);



function isPrime(n){
    for(i = 2; i <= Math.sqrt(n); i++){
        if(n%i == 0){
            return false;
        }
    }
    return true;
}

//console.log(isPrime(22));


function fizzBuzz(n){
    var output = [];
    for (i = 1; i < n; i++) {
        if(i%3 == 0 && i%5 == 0){
            output[i] = "FizzBuzz";
        }else if (i % 3 == 0) {
            output[i] = "Fizz";
        } else if (i % 5 == 0) {
            output[i] = "Buzz";
        }else{
            output[i] = i;
        }
    }

    return output;
}

console.log(fizzBuzz(20));