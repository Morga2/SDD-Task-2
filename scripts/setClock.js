// Formats Minutes and Secondas and Display as Clock in either raceTime or flagTime Placholders

function setClock(clockName) {
    return function (minutes, seconds) {
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        clockName.text(minutes + ':' + seconds);
    };
};