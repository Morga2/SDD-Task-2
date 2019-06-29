function abandon() {
    
    // switch off timers
    raceTimer.abandon = true;
    // check to see if timer running
    if (typeof flagTimerFirstMin != "undefined") {
        flagTimerFirstMin.abandon = true;
    }
    if (typeof flagTimerInterval != "undefined") {
        flagTimerInterval.abandon = true;
    }
    if (typeof flagTimerLastMin != "undefined") {
        flagTimerLastMin.abandon = true;
    }

    // Lower flags

    $('#signalFlag img').remove();
    $('#nextFlag img').remove();
    $('#arrow i').remove();

    // Play Horn 2x
    var horn = new Audio('../audio/horn.mp3');
    horn.play();
    setTimeout(function () { horn.play(); },2300)

    // Raise AP

    $('#signalFlag').append('<img src="../images/Signal_Flag_Answering_large.png" class="img-fluid recall"></img>');

}