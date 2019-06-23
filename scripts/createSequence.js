// Javascript for the Individual and Rolling Start controls 

$(document).ready(function () {
    
    //Open / Close Settings
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

})
