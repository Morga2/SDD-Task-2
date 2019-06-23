// Raises Flags

function setFlags(sequence, classFlagName, signalFlagName) {
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
    return "Signal_Flag_1_small.png"
}

function checkSignalFlag() {
    return "Signal_Flag_P_small.png"
}