// Javascript for the Sequence Countdown Controls 

$(document).ready(function () {
    
    // Open / Close Settings Button
    $('#settingsOpen').on('click', function () {
        $('#settings').removeClass('d-none');
    })

    $('#settingsClose').on('click', function () {
        $('#settings').addClass('d-none');
    });
        
    
    // Create Sequence Button
    $('#createSequence').on('click', function () {
        var raceNo = $('#settingsRaceNo').val();
        var raceClass = $('#settingsRaceClass :selected').text();
        var raceTime = $('#settingsRaceTime :selected').text();

        console.log("RaceNo: " + raceNo + " RaceClass: " + raceClass + " RaceTime: " + raceTime)
        
        $('#RaceNo').val(raceNo)
        $('#ClassNo').val(raceClass)
        $('#SeqTime').val(raceTime)

        console.log("RaceNo: " + raceNo + " RaceClass: " + raceClass + " RaceTime: " + raceTime)

        $('#settings').addClass('d-none');

    })

    // Recall Buttons
    $('#OCS').on('click', function () {
        recall($(this))
    });

    $('#General').on('click', function () {
        recall($(this))
    });

    // Start Button
    $('#Start').on('click', function () {
        // Pass length of start sequence in seconds i.e. 180 = 3 min start
        startSequence(180)
    });

    // Stop Button
    $('#Stop').on('click', function () {
        // Do Something
    });
    
    // Reset Button
    $('#Reset').on('click', function () {
        // Do Something
    });
})
