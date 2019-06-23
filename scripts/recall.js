// Runs when recall button are pushed

function recall(btn) {
    if (btn.hasClass("active")) {
        btn.removeClass("active");
        $('#signalFlag img').remove()
    } else {
        btn.addClass("active");
        var horn = new Audio('../audio/horn.mp3');
        if (btn.attr('id') == 'OCS') {
            horn.play();
            $('#signalFlag').append('<img src="../images/Signal_Flag_X_small.png" class="img-fluid recall"></img>')
        } else if (btn.attr('id') == 'General') {
            $('#signalFlag').append('<img src="../images/Signal_Flag_Repeat_1_small.png" class="img-fluid recall"></img>')
            new Promise(function (resolve) {
                horn.play();
                setTimeout(function () {
                    resolve()
                }, 2300);
            }).then(function () {
                horn.play();
            });
        }
    }
}