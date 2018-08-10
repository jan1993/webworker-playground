// Calculate the Prime numbers
function isPrimeNumber(number) {
    if (number == 1 || number == 2) {
        return true;
    }
    for (var i = 2; i < number; i++) {

        if (number % i == 0) {
            return false;
        }
    }
    return true;
};

// Calculate the Prime numbers
function nextPrime(number) {
    var n;
    if (number % 2 == 0) {
        number++;
    }

    for (n = number; !isPrimeNumber(n); n += 2) {

    }
    return n;
};

// Message from Main Thread received => Start Calculation
onmessage = function (e) {
    const n = e.data;
    var primeNumbers = [];
    for (var i = 0; i < n; ++i) {
        primeNumbers.push(nextPrime(i));
    }
    postMessage(primeNumbers);
}