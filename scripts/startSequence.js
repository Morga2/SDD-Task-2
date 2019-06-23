// Function to control timer / flgs and horn when start button is pushed

function startSequence(startInterval) {


    raceTimer = new CountDownTimer(startInterval)
    raceTimer.onTick(formatDisplay(totalTime)).start();

    // Chain Flag Timers
    new Promise(function (resolve) {
    flagTimer60 = new CountDownTimer(60)
    flagTimer60.onTick(formatDisplay(nextTime)).onTick(checkFinish).onTick(horn).onTick(setFlags("begin", checkClassFlag(), checkPrepFlag())).start();

    function checkFinish() {
        if (this.expired()) {
            setTimeout(resolve(), 1000);
        }
    }
    }).then(function () {
    return new Promise(function (resolve) {
        flagTimerInterval = new CountDownTimer(flagInterval)
        flagTimerInterval.onTick(formatDisplay(nextTime)).onTick(checkFinish).onTick(horn).onTick(setFlags("end", checkClassFlag(), checkPrepFlag())).start();

        function checkFinish() {
            if (this.expired()) {
                setTimeout(resolve(), 1000);
            }
        }
    });
    }).then(function () {
    flagTimer60.onTick(formatDisplay(nextTime)).onTick(horn).onTick(setFlags("end", checkClassFlag(), checkPrepFlag())).start();
    });


}