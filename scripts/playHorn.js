// Play sounds

function playHorn() {
    return function (minutes, seconds) {
        var min = minutes;
        var sec = seconds;
        var horn = new Audio('../audio/horn.mp3');
        var fifteensec = new Audio('../audio/15s.m4a');
        var thirtysec = new Audio('../audio/30s.m4a');
        var fivesec = new Audio('../audio/5s.m4a');
        if ((min == 1) && (sec == 0)) {
            horn.play()
        } else if ((min == 0) && (sec == 30)) {
            thirtysec.play()
        } else if ((min == 0) && (sec == 15)) {
            fifteensec.play()
        } else if ((min == 0) && (sec == 5)) {
            fivesec.play();
        } else if ((min == 0) && (sec == 0)) {
            horn.play();
        }
    }
}