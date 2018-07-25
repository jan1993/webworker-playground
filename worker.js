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

function nextPrime(number) {
    var n;
    if (number % 2 == 0) {
        number++;
    }

    for (n = number; !isPrimeNumber(n); n += 2) {

    }
    return n;
};

onmessage = function (e) {
    const n = e.data;
    var primeNumbers = [];
    for (var i = 0; i < n; ++i) {
        primeNumbers.push(nextPrime(i));
    }
    postMessage(primeNumbers);
}