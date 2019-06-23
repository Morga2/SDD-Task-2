// Raises Flags

function setFlags(sequence, classFlagName, signalFlagName) {
    return function (minutes, seconds) {
        if (sequence == "begin") {
            if ((minutes == 1) && (seconds == 0)) {
                //  Put Class Flag Up and Signal Flag Up as Next Flag
                $('#classFlag').append('<img src="../images/' + checkClassFlag() + 'class="img-fluid recall"></img>');
                $('#nextFlag').append('<img src="../images/' + checkSignalFlag() + 'class="img-fluid recall"></img>');
                $('#arrow').append('<i class="fa fa-long-arrow-alt-up fa-10x"></i>');
            } else if ((minutes == 0) && (seconds == 0)) {
                $('#arrow i').remove()
                $('#arrow').append('<i class="fa fa-long-arrow-alt-down fa-10x"></i>');
                $('#signalFlag').append('<img src="../images/' + checkSignalFlag() + 'class="img-fluid recall"></img>');
            };
        } else if (sequence == "end") {
            if ((minutes == 1) && (seconds == 0)) {
                $('#signalFlag img').remove();
                $('#nextFlag img').remove();
                $('#classFlag').append('<img src="../images/' + checkClassFlag() + 'class="img-fluid recall"></img>');
            } else if ((minutes == 0) && (seconds == 0)) {
                $('#nextFlag img').remove();
                $('#classFlag img').remove();
            };
        };
    };
};

function checkClassFlag() {
    return "Signal_Flag_1_large.png"
}

function checkPrepFlag() {
    return "Signal_Flag_P_large.png"
}