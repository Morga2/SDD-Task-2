// Function to control timer / flags and horn when start button is pushed
// this function is called from Main.js and input the length of the start sequence (stored in variable startInterval)
// this runs two clocks - the race clock and the flags countdown clock. There are three flag countdown timers for the next flag clock;
// a timer for the first minute, a timer for the interval between the first and last minute (which varies depending upon the legth of start sequence),
// and a timer for the last minute. These hapen in sequence.
// the "ontick" function of the timers runs other functions inside it every second

function startSequence(startInterval) {

    // Set placeholders in the HTML page for timers
    var nextTime = $('#nextTime'),
        totalTime = $('#totalTime')

    // Set interval for the time between the first and last minute for the next Flag timings (note timings in seconds)
    switch (startInterval) {
        // 3 min sequence
        case 180: {
            flagInterval = 60;
            break;
        }
        // 5 min sequence
        case 300: {
            flagInterval = 180;
            break;
        }
        // 10 min sequence
        case 600: {
            flagInterval = 420;
            break;
        }
        default: {
            // error message
            console.log("Flag Interval not found for Start Interval: " + startInterval)
        }
    }

    // Create a countdown clock for the overall sequence
    raceTimer = new CountDownTimer(startInterval)
    // Update the overall race start clock every second
    raceTimer.onTick(setClock(totalTime)).start();

    // Time until Next Flag Clock

    // use a promise to make sure the timer has finished before moving on to the next one
    // REFERENCE: https://medium.com/javascript-in-plain-english/truly-understanding-promises-in-javascript-cb31ee487860
    
    new Promise(function (resolve) {
        
        // Start timer for First Minute of Sequence
        flagTimerFirstMin = new CountDownTimer(60)
        // Every second - update the next flag clock, check if timer finished, check if horn need playing, check if flags need setting    
        flagTimerFirstMin.onTick(setClock(nextTime)).onTick(checkFinish).onTick(playHorn()).onTick(setFlags("firstMin")).start();
        // wait until first minute is fiinshed before going the next timer
        function checkFinish() {
            // check to see if minute is finished before moving on
            if (this.expired()) {
                setTimeout(resolve(), 500);
            }
        }
    }).then(function () {
        // use a promise to make sure the timer has finished before moving on
        return new Promise(function (resolve) {
        
        // Start timer for Minute(s) between First and Last Minute (flag interval) 
        flagTimerInterval = new CountDownTimer(flagInterval)
        // Every second - update the next flag clock, check if timer finished, check if horn need playing    
        flagTimerInterval.onTick(setClock(nextTime)).onTick(checkFinish).onTick(playHorn()).start();
        // wait until first minute is fiinshed before going the next timer
        function checkFinish() {
            if (this.expired()) {
                setTimeout(resolve(), 500);
            }
        }
    });
    }).then(function () {
        // Start timer for the last minute
        flagTimerLastMin = new CountDownTimer(60)
        // Every second - update the next flag clock, check if timer finished, check if horn need playing, check if flags need setting
        flagTimerLastMin.onTick(setClock(nextTime)).onTick(playHorn()).onTick(setFlags("lastMin")).start();
    });


}