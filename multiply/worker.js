onmessage = function(e) {
    console.log('Worker: Message received from main script', e.data);
    var workerResult = e.data[0] * e.data[1];
    console.log('Worker: Posting message back to main script', workerResult);
    postMessage(workerResult);
  }