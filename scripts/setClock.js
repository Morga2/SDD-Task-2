// Formats Minutes and Secondas and Display as Clock in either raceTime or flagTime Placholders
// function is called from startsequence.js every second which sends the name of the timer to update
// adds minutes and seconds as text with colon between back into the HTML page

function setClock(clockName) {
    return function (minutes, seconds) {
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        clockName.text(minutes + ':' + seconds);
    };
};