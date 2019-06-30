// This function raises and lowers the flags and also the up / down arrow
// The function is called from StartSequence.js every second. If the countdown is at the start or end 
// of the first or last minute it will raise / lower the flag
// The ges told whether it is the first or last minute (sequence variable) and display different flags as a result

function setFlags(sequence) {
    // get which minute and second you are in the countdown
    return function (minutes, seconds) {

        // Test to see if your in the first minute or last minute
        if (sequence == "firstMin") {

            // Test to see which second you are in the first minute
            if ((minutes == 1) && (seconds == 0)) { // At beginning of first minute
                //  Put Class Flag Up and Signal Flag Up as Next Flag as well as up arrow
                $('#classFlag').append('<img src="../images/' + checkClassFlag() + '" class="img-fluid"></img>');
                $('#nextFlag').append('<img src="../images/' + checkSignalFlag() + '" class="img-fluid"></img>');
                $('#arrow').append('<i class="fa fa-long-arrow-alt-up fa-10x align-middle"></i>');
            } else if ((minutes == 0) && (seconds == 0)) { // At the end of the first minute
                // point the arrow down and raise the signal flag
                $('#arrow i').remove()
                $('#arrow').append('<i class="fa fa-long-arrow-alt-down fa-10x align-middle"></i>');
                $('#signalFlag').append('<img src="../images/' + checkSignalFlag() + '" class="img-fluid"></img>');
            };
        } else if (sequence == "lastMin") {
            // Test to see which second you are in the last minute
            if ((minutes == 1) && (seconds == 0)) { // At begining of last minute
                // remove the signal flag and add the class flag as the next flag down
                $('#signalFlag img').remove();
                $('#nextFlag img').remove();
                $('#arrow i').remove()
                $('#nextFlag').append('<img src="../images/' + checkClassFlag() + '" class="img-fluid"></img>');
                $('#arrow').append('<i class="fa fa-long-arrow-alt-down fa-10x align-middle"></i>');
            } else if ((minutes == 0) && (seconds == 0)) { // At end of the last min (start of race)
                // all flags down
                $('#nextFlag img').remove();
                $('#arrow i').remove()
                $('#classFlag img').remove();
            };
        };
    };
};

// function to get the class flag from the setting

function checkClassFlag() {
    // Get the class information
    var raceClass = $('#settingsRaceClass').val();
    // find class number
    var flagNo = raceClass.substring(0, 1);
    // send back image name
    return "Signal_Flag_" + flagNo + "_small.png";
}

// function to get the signal flag from the settings

function checkSignalFlag() {
    var signalFlag = $('#settingsSignalFlag').val();
    // get the right image to match the signal flag chosen
    switch (signalFlag) {
        case "P Flag": {
            return "Signal_Flag_P_small.png";
        }
        case "U Flag": {
            return "Signal_Flag_U_small.png";
        }
        case "Black Flag": {
            return "Signal_Flag_Black_small.png";
        }
    }
}