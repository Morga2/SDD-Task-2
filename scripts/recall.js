// This function runs when recall buttons (OCS / General) are pushed
// This is called from Main.js which also sends in the name of the button (variable btn)

function recall(btn) {
    // test if button has already been push (active) if it has reset it by removing the recall flag
    if (btn.hasClass("active")) {
        btn.removeClass("active");
        $('#signalFlag img').remove()
    } else {
        btn.addClass("active");
        var horn = new Audio('../audio/horn.mp3');
        // test whether OCS and blow horn once and raise OCS flag
        if (btn.attr('id') == 'OCS') {
            horn.play();
            $('#signalFlag').append('<img src="../images/Signal_Flag_X_small.png" class="img-fluid recall"></img>')
        } else if (btn.attr('id') == 'General') {
            // blow horn twice and raise general flag
            $('#signalFlag').append('<img src="../images/Signal_Flag_Repeat_1_small.png" class="img-fluid recall"></img>')
            new Promise(function (resolve) {
                horn.play();
                // wait 2.3 seconds before playing the next horn
                setTimeout(function () {
                    resolve()
                }, 2300);
            }).then(function () {
                horn.play();
            });
        }
    }
}