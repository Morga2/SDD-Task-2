// Function to control timer / flgs and horn when start button is pushed

function startSequence(startInterval) {

    // Set placeholders for timers
    var nextTime = $('#nextTime'),
        totalTime = $('#totalTime')

    // Set Time to Flag timings (note timings in seconds)
    switch (startInterval) {
        case 180: {
            flagInterval = 60;
            break;
        }
        case 300: {
            flagInterval = 180;
            break;
        }
        case 600: {
            flagInterval = 420;
            break;
        }
        default: {
            console.log("Flag Interval not found for Start Interval: " + startInterval)
        }
    }

    raceTimer = new CountDownTimer(startInterval)
    // Update the overall race start clock every second
    raceTimer.onTick(setClock(totalTime)).start();

    // Time until Next Flag Clock
    new Promise(function (resolve) {
        
        // Start timer for First Minute of Sequence
        flagTimerFirstMin = new CountDownTimer(60)
        // Every second - update the next flag clock, check if timer finished, check if horn need playing, check if flags need setting    
        flagTimerFirstMin.onTick(setClock(nextTime)).onTick(checkFinish).onTick(playHorn()).onTick(setFlags("firstMin", checkClassFlag(), checkSignalFlag())).start();

        function checkFinish() {
            if (this.expired()) {
                setTimeout(resolve(), 1000);
            }
        }
    }).then(function () {
        return new Promise(function (resolve) {
        
        // Start timer for Minute(s) between First and Last Minute (flag interval) 
        flagTimerInterval = new CountDownTimer(flagInterval)
        // Every second - update the next flag clock, check if timer finished, check if horn need playing    
        flagTimerInterval.onTick(setClock(nextTime)).onTick(checkFinish).onTick(playHorn()).start();

        function checkFinish() {
            if (this.expired()) {
                setTimeout(resolve(), 1000);
            }
        }
    });
    }).then(function () {
        // Start timer for the last minute
        flagTimerLastMin = new CountDownTimer(60)
        // Every second - update the next flag clock, check if timer finished, check if horn need playing, check if flags need setting
        flagTimerLastMin.onTick(setClock(nextTime)).onTick(playHorn()).onTick(setFlags("lastMin", checkClassFlag(), checkSignalFlag())).start();
    });


}