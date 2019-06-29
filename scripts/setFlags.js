// Raises Flags

function setFlags(sequence) {
    return function (minutes, seconds) {
        if (sequence == "firstMin") {
            if ((minutes == 1) && (seconds == 0)) {
                //  Put Class Flag Up and Signal Flag Up as Next Flag
                $('#classFlag').append('<img src="../images/' + checkClassFlag() + '" class="img-fluid recall"></img>');
                $('#nextFlag').append('<img src="../images/' + checkSignalFlag() + '" class="img-fluid recall"></img>');
                $('#arrow').append('<i class="fa fa-long-arrow-alt-up fa-10x align-middle"></i>');
            } else if ((minutes == 0) && (seconds == 0)) {
                $('#arrow i').remove()
                $('#arrow').append('<i class="fa fa-long-arrow-alt-down fa-10x align-middle"></i>');
                $('#signalFlag').append('<img src="../images/' + checkSignalFlag() + '" class="img-fluid recall"></img>');
            };
        } else if (sequence == "lastMin") {
            if ((minutes == 1) && (seconds == 0)) {
                $('#signalFlag img').remove();
                $('#nextFlag img').remove();
                $('#arrow i').remove()
                $('#nextFlag').append('<img src="../images/' + checkClassFlag() + '" class="img-fluid recall"></img>');
                $('#arrow').append('<i class="fa fa-long-arrow-alt-down fa-10x align-middle"></i>');
            } else if ((minutes == 0) && (seconds == 0)) {
                $('#nextFlag img').remove();
                $('#arrow i').remove()
                $('#classFlag img').remove();
            };
        };
    };
};

function checkClassFlag() {
    // Get the class information
    var raceClass = $('#settingsRaceClass').val();
    var flagNo = raceClass.substring(0, 1);
    return "Signal_Flag_" + flagNo + "_small.png";
}

function checkSignalFlag() {
    // Get the signal flag
    var signalFlag = $('#settingsSignalFlag').val();
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