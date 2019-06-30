// This function controls the sounds within the application
// The function is called from the StartSequence.js every second of the countdown 
// Depedning apon where you are within the minute the function will eitehr sound the horn
// Or tell you how many seconds there are to go until the next flag

function playHorn() {
    return function (minutes, seconds) {

        // Set variables for minutes and seconds within teh countdown
        var min = minutes;
        var sec = seconds;
        
        // loading audio files into variables
        var horn = new Audio('../audio/horn.mp3');
        var fifteensec = new Audio('../audio/15s.m4a');
        var thirtysec = new Audio('../audio/30s.m4a');
        var fivesec = new Audio('../audio/5s.m4a');

        // test to see where you are in the countdown and play the right horn or voice message

        if ((min == 1) && (sec == 0)) { // At start of minute
            // show for one second and then hide horn icon
            $('#hornPic').removeClass('d-none')
            setTimeout(function () { $('#hornPic').addClass('d-none') }, 1000)
            // play horn
            horn.play()
        } else if ((min == 0) && (sec == 30)) { // At thirty seconds
            // show for one second and then hide horn icon
            $('#hornPic').removeClass('d-none')
            setTimeout(function () { $('#hornPic').addClass('d-none') }, 1000)
            // play the 30 sec voice
            thirtysec.play()
        } else if ((min == 0) && (sec == 15)) { // At 15 seconds
            // show for one second and then hide horn icon
            $('#hornPic').removeClass('d-none')
            setTimeout(function () { $('#hornPic').addClass('d-none') }, 1000)
            // play the 15 second voice
            fifteensec.play()
        } else if ((min == 0) && (sec == 5)) { // At 5 seconds
            // show for one second and then hide horn icon
            $('#hornPic').removeClass('d-none')
            setTimeout(function () { $('#hornPic').addClass('d-none') }, 5000)
            // play the 5 second countdown voice
            fivesec.play();
        } else if ((min == 0) && (sec == 0)) { // At 0 seconds
            // show for one second and then hide horn icon
            $('#hornPic').removeClass('d-none')
            setTimeout(function () { $('#hornPic').addClass('d-none') }, 1000)
            // Play the horn
            horn.play();
        }
    }
}