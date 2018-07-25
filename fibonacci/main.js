if (window.Worker)

{
    const worker = new Worker('worker.js');

    worker.onmessage = function (event) {
        document.getElementById('result').textContent = event.data;
        console.log('Got: ' + event.data + '\n');
    };

    worker.onerror = function (error) {
        console.error('Worker error: ' + error.message + '\n');
        throw error;
    };

    worker.postMessage('5');
}