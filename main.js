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

function unique(arr) {
    return arr.reduce(function (p, c) {
        if (p.indexOf(c) < 0) {
            p.push(c);
        }
        return p;
    }, []);
};

/*
 * Returns a random color for
 */
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

function test() {
    const testBtn = document.querySelector("#test");
    console.log("STILL RESPONSIVE!");
    testBtn.style.backgroundColor = getRandomColor();
}


(function () {
    
    document.addEventListener("DOMContentLoaded", function () {
        const testBtn = document.querySelector("#test");

        // WITHOUT WORKER
        // Select all the required UI Elements for User Interaction
        const form = document.querySelector("#prime");
        const number = document.querySelector("#number");
        const output = document.querySelector("#output");
        const runningTimeInput = document.querySelector("#runningTime");
        const loader = document.getElementById("loader")
        loader.style.display = "none";

        // WITH WORKER
        // Select all the required UI Elements for User Interaction
        const primeWorker = new Worker("worker.js");
        const formWorker = document.querySelector("#primeWorker");
        const numberWorker = document.querySelector("#numberWorker");
        const outputWorker = document.querySelector("#outputWorker");
        const runningTimeInputWorker = document.querySelector("#runningTimeWorker");
        const loaderWorker = document.getElementById("loaderWorker")
        loaderWorker.style.display = "none";

        // Change the button color to verify if the page is responsive
        testBtn.onclick = test;

        // WITHOUT WORKER
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            loader.style.display = "block";
            output.value = "";
            setTimeout(function () {
                const start = new Date();
                const n = number.value;
                var primeNumbers = [];
                for (var i = 0; i < n; ++i) {
                    primeNumbers.push(nextPrime(i));
                }
                const end = new Date();
                runningTimeInput.value = end.getTime() - start.getTime() + " ms";
                output.value = unique(primeNumbers).join(" ");
                loader.style.display = "none";
            }, 0)

        }, false);


        // WITH WORKER
        var startW;
        formWorker.addEventListener("submit", function (e) {
            e.preventDefault();
            startW = new Date();
            loaderWorker.style.display = "block";
            outputWorker.value = "";
            const n = numberWorker.value;
            primeWorker.postMessage(n);
        }, false);

        primeWorker.onmessage = function (e) {
            console.log(e.data);
            const endW = new Date();
            runningTimeInputWorker.value = endW.getTime() - startW.getTime() + " ms";
            outputWorker.value = unique(e.data).join(" ");
            loaderWorker.style.display = "none";
        }
    });
})()