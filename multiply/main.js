if (window.Worker) {

    const myWorker = new Worker('worker.js');
    const firstInput = document.getElementById("first");
    const secondInput = document.getElementById("second");
    const resultInput = document.getElementById("result");

    firstInput.onchange = function () {
        console.log(`Main: First input changed to ${first.value}`);
        myWorker.postMessage([first.value, second.value]);
        console.log('Main: Message posted to worker', first.value, second.value);
    }

    secondInput.onchange = function () {
        console.log(`Main: Second input changed to ${second.value}`);
        myWorker.postMessage([first.value, second.value]);
        console.log('Main: Message posted to worker', first.value, second.value);
    }

    myWorker.onmessage = function (e) {    
        console.log('Main: Message received from worker', e.data);
        resultInput.value = e.data;
    }

}